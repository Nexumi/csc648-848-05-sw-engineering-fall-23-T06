import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import SearchIcon from "../assets/logos/SearchIcon.png";
import { createForm } from "@felte/solid";

export default function UploadPage() {
  const navigate = useNavigate();

  const { form } = createForm({
    onSubmit(values) {
      console.log(values);
    }
  });

  return (
    <Flex flexDirection="col" alignItems="center" class="h-full w-full">
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
    </Flex>
  );
}