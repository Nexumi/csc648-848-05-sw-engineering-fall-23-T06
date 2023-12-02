import { createForm } from "@felte/solid";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import { postTracking } from "../utils/requests";

export default function UploadPage() {

  const navigate = useNavigate();

  const IS_TYPE = "w-1/2 border-2 border-black bg-gray-300";
  const IS_NOT_TYPE = "w-1/2 border-2 border-black";

  const { form, data, setData, reset } = createForm({
    onSubmit(values) {
      const params = {
        trackingNumber: values.trackingNumber,
        orderTitle: values.orderTitle,
        type: values.listType,
      }

      postTracking(params)
        .then((res) => {
          toast.success("Successfully processed your request!");
          reset();
          setData("retailer", res.data?.retailer);
          setData("carrier", res.data?.carrier);
          setData("id", res.data?.id);
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
          <Flex justifyContent="center" alignItems="end" class="gap-x-16">
            <div>
              <p class="text-xl mr-2">Tracking Number:</p>
              <input
                name="trackingNumber"
                class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                type="text"
                placeholder="123456789"
              />
            </div>
            <div class="mr-12">
              <p class="text-xl mr-2">Order Title:</p>
              <input
                name="orderTitle"
                class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
                type="text"
                placeholder="Blue Hat/Birthday Gift"
              />
            </div>
          </Flex>
          <Flex flexDirection="col" justifyContent="center" class="grow">
            <Flex justifyContent="center" alignItems="end" class="gap-x-">
              <div>
                <p class="text-xl mr-2">Please choose whether you would like your order to be in your incoming or outgoing orders list.</p>
                <br></br>
                <Flex class="gap-x-2">
                  <Button
                    type="button"
                    class="text-xl mr-2"
                    class={data().listType === "visible" || data().listType === undefined ? IS_TYPE : IS_NOT_TYPE}
                    onClick={() => {
                      setData("listType", "visible");
                    }}
                  >
                    Incoming
                  </Button>
                  <Button
                    type="button"
                    class="text-xl mr-2"
                    class={data().listType === "hidden" || data().listType === undefined ? IS_TYPE : IS_NOT_TYPE}
                    onClick={() => {
                      setData("listType", "hidden");
                    }}
                  >
                    Outgoing
                  </Button>
                </Flex>
              </div>
              <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full border-2 border-black">
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
            </Flex>
          </Flex>
          <Flex class="grow">
          </Flex>
        </Flex>
      </form>

    </>
  );
}