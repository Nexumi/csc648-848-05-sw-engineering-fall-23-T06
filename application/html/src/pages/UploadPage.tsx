import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import SearchIcon from "../assets/logos/SearchIcon.png";
import { createForm } from "@felte/solid";
import { postTracking } from "../utils/requests";
import toast from "solid-toast";

export default function UploadPage() {
  const navigate = useNavigate();

  const { form, reset } = createForm({
    onSubmit(values) {
      const params = {
        trackingNumber: values.trackingNumber,
      }

      postTracking(params)
        .then((data) => {
          toast.success("Successfully processed your request!");
          reset();
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong while trying to process your request.");
        })
    }
  });

  return (
    <>
      <form use:form class="h-full">
        <Flex flexDirection="col" class="h-full">
          <div class="text-center text-6xl mb-8">
            <p>Upload</p>
          </div>
          <Flex justifyContent="center">
            <div>
              <p class="text-xl mr-2">Tracking Number:</p>
              <input
                name="trackingNumber"
                class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                type="text"
                />
              <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </Flex>
          <Flex class="grow">
            <Flex justifyContent="center" class="gap-x-16">
              <div>
                <p class="text-xl mr-2">Retailer:</p>
                <input
                  name="retailor"
                  class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                  type="text"
                  readonly
                />
              </div>
              <div>
                <p class="text-xl mr-2">Carrier Info</p>
                <input
                  name="carrier"
                  class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                  type="text"
                  readonly
                  />
              </div>
            </Flex>
          </Flex>
          <Flex class="grow">
          </Flex>
        </Flex>
      </form>
      {/* <Flex flexDirection="col" alignItems="center" class="h-full w-full">
        <div class="capitalize text-6xl text-center mb-1">
        <p>New Tracking Info</p>
        </div>
        
        <Flex justifyContent="center" class="w-full mb-1">
        <Button class="text-white bg-black hover:bg-gray-600">
        Upload
        </Button>
        </Flex>
        
        <hr class="border-black border-t-4 w-full mb-2" />

        <Flex justifyContent="center" class="w-full mb-0.5">
          <form use:form class="w-3/4 flex space-x-0.5">
            <div class="flex-grow">
              <span class="text-xl mr-0.5">Tracking #:</span>
              <input name="firstTrackingNumber" class="w-full px-3 py-1 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text"/>
            </div>
            <button type="submit" class="ml-0.5 focus:outline-none">
              <img src={SearchIcon} alt="Search" class="w-5 h-5" />
            </button>
          </form>
        </Flex>

        <Flex justifyContent="center" class="w-full mt-0.5">
          <form use:form class="w-3/4 flex space-x-0.5">
            <div class="w-1/4">
              <span class="text-xl mr-0.5">Carrier Info:</span>
              <input name="carrierInfo" class="w-full px-3 py-1 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text"/>
            </div>
            <div class="flex-grow">
              <span class="text-xl mr-0.5">Tracking #:</span>
              <input name="secondTrackingNumber" class="w-full px-3 py-1 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text"/>
            </div>
            <button type="submit" class="ml-0.5 focus:outline-none">
              <img src={SearchIcon} alt="Search" class="w-5 h-5" />
            </button>
          </form>
        </Flex>
      </Flex> */}
    </>
  );
}