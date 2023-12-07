import { createForm } from "@felte/solid";
import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import { postTracking } from "../utils/requests";
import { me } from "../utils/me";
import { createSignal } from "solid-js";

export default function UploadPage() {
  const IS_TYPE = "w-1/2 border-2 border-black whitespace-nowrap bg-gray-300";
  const IS_NOT_TYPE = "w-1/2 border-2 border-black whitespace-nowrap"

  const [posting, setPosting] = createSignal(false);

  const { form, data, setData, reset } = createForm({
    onSubmit(values) {
      const params = {
        userId: me().id,
        trackingNumber: values.trackingNumber,
        title: values.orderTitle,
        hidden: values.listType === "hidden" || "false"
      }

      setPosting(true);
      postTracking(params)
        .then((res) => {
          toast.success("Successfully processed your request!");
          reset();
          setData("retailer", res.data?.retailer);
          setData("carrier", res.data?.carrier);
          setData("id", res.data?.id);
          setPosting(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong while trying to process your request.");
          setPosting(false);
        })

    }
  });

  return (
    <>
      <form use:form class="h-full">
        <Flex flexDirection="col" class="h-full">
          <div class="text-center md:text-5xl text-3xl mb-8">
            <p>Upload</p>
          </div>
          <Flex justifyContent="center" alignItems="end" class="gap-x-16">
            <div>
              <p class="md:text-xl text-1x mr-2">Tracking Number:</p>
              <input
                name="trackingNumber"
                class="md:w-64 w-11/12 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-400 md:focus:border-gray-600"
                type="text"
                placeholder="123456789"
              />
            </div>
            <div class="mr-0 md:mr-8">
              <p class="md:text-xl text-1x mr-1">Order Title:</p>
              <input
                name="orderTitle"
                class="md:w-64 w-11/12 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-400 md:focus:border-gray-600"
                type="text"
                placeholder="Blue Hat/Birthday Gift"
              />
            </div>
          </Flex>
          <Flex flexDirection="col" justifyContent="center" class="grow">
            <Flex justifyContent="center" alignItems="end" class="gap-x-">
              <div>
                <p class="md:text-xl text-1x mr-2">Please choose whether you would like your order to be in your visible or hidden list.</p>
                <br></br>
                <Flex class="gap-x-2">
                  <Button
                    type="button"
                    disabled={posting()}
                    class={data().listType === "visible" || data().listType === undefined ? IS_TYPE : IS_NOT_TYPE}
                    onClick={() => {
                      setData("listType", "visible");
                    }}
                  >
                    Visible
                  </Button>
                  <Button
                    type="button"
                    disabled={posting()}
                    class={data().listType === "hidden" ? IS_TYPE : IS_NOT_TYPE}
                    onClick={() => {
                      setData("listType", "hidden");
                    }}
                  >
                    Hidden
                  </Button>
                </Flex>
              </div>
              <Button
                type="submit"
                disabled={posting()}
                class="ml-2 px-2 py-2 focus:outline-none rounded-full border-2 border-black"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </Flex>
          </Flex>
          <Flex class="grow">
          </Flex>
        </Flex>
      </form>
    </>
  );

}
