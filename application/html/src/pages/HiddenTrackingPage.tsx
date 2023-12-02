import { createForm } from "@felte/solid";
import { useSearchParams, useNavigate } from "@solidjs/router";
import { createResource } from "solid-js";
import SearchIcon from "../assets/icons/SearchIcon.png";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import TrackingList from "../components/TrackingList";
import { getTrackingBySearch, getTrackingCount } from "../utils/requests";
import { uriHiddenTracking, uriTracking } from "../utils/uri";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../common/components/dialog";


export default function TrackingPage() {

  const navigate = useNavigate();

  const IS_TYPE = "w-1/2 border-2 border-black bg-gray-300";
  const IS_NOT_TYPE = "w-1/2 border-2 border-black";

  const [searchParams, setSearchParams] = useSearchParams();

  const [undeliveredCount] = createResource(getTrackingCount);
  const [packages] = createResource(
    () => ({
      searchText: searchParams.searchText
    }),
    getTrackingBySearch
  );

  const { form, data, setData } = createForm({
    onSubmit(values) {
      setSearchParams({ searchText: values.search });
      const params = {
        type: values.listType,
      }
    }
  });

  return (
    <>
        <Dialog open>
          <DialogContent class="bg-orange-50 border-2 border-black" >
              <DialogHeader class="space-y-4">
                  <DialogTitle class="text-center text-3xl">
                      Welcome!
                  </DialogTitle>
                  <DialogDescription class="text-center">
                      Enter your password to access the hidden list!.
                  </DialogDescription>
                  <form class="flex flex-col items-center space-y-4">
                      <input
                          type="password"
                          placeholder="Password"
                          class="w-full p-2 border-2 border-gray-300 rounded"
                          required
                      />
                      <Button
                          type="submit"
                          class="text-white bg-black hover:bg-gray-600 w-full"
                      >
                          Submit
                      </Button>
                  </form>
              </DialogHeader>
          </DialogContent>
        </Dialog>
      <div class="space-y-4">
        <span class="text-xl ml-4">Number of Undelivered Orders Left: {undeliveredCount()}</span>
        <div class="text-center text-6xl">
          <p>Hidden Track Info List</p>
        </div>
        <Flex justifyContent="center">
          <form use:form>
            <span class="text-xl mr-2">Search:</span>
            <input name="search" class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="tracking #, carrier, status..." value={searchParams.searchText || ""} />
            <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full">
              <img src={SearchIcon} alt="Search" class="w-6 h-6" />
            </button>
          </form>
          <div>
            <Flex class="gap-x-2">
              <Button
                type="button"
                class="text-xl mr-2"
                class={data().listType === "visible" || data().listType === undefined ? IS_TYPE : IS_NOT_TYPE}
                onClick={() => {
                  setData("listType", "visible");
                  navigate(uriTracking());
                }}
              >
                View Visible List
              </Button>
              <Button
                type="button"
                class="text-xl mr-2"
                class={data().listType === "hidden" || data().listType === undefined ? IS_TYPE : IS_NOT_TYPE}
                onClick={() => {
                  setData("listType", "hidden");
                  navigate(uriHiddenTracking());
                }}
              >
                View Hidden List
              </Button>
            </Flex>
          </div>
        </Flex>
        <Flex justifyContent="center">
          <div class="w-3/4">
            <TrackingList
              display={packages()}
              sort
            />
          </div>
        </Flex>
      </div>
    </>
  );
}