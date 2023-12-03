import { useSearchParams } from "@solidjs/router";
import { createResource, createSignal } from "solid-js";
import SearchIcon from "../assets/icons/SearchIcon.png";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import TrackingList from "../components/TrackingList";
import { getTrackingBySearch, getTrackingCount } from "../utils/requests";
import { me } from "../utils/me";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../common/components/dialog";

export default function TrackingPage() {
  const IS_TYPE = "w-1/2 border-2 border-black whitespace-nowrap bg-gray-300";
  const IS_NOT_TYPE = "w-1/2 border-2 border-black whitespace-nowrap"

  const [searchParams, setSearchParams] = useSearchParams();

  const [listType, setListType] = createSignal("visible");

  const [undeliveredCount] = createResource(getTrackingCount);
  const [packages] = createResource(
    () => ({
      searchText: searchParams.searchText,
      email: me().email || "",
      type: listType(),
      pin: ""
    }),
    getTrackingBySearch
  );

  return (
    <>
      <div class="space-y-4">
        <span class="text-xl ml-4">Number of Undelivered Orders Left: {undeliveredCount()}</span>
        <div class="text-center text-6xl">
          <p>Visible Track Info List</p>
        </div>
        <Flex justifyContent="center">
          <span class="text-xl mr-2">Search:</span>
          <input name="search" class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="tracking #, carrier, status..." value={searchParams.searchText || ""} />
          <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full">
            <img src={SearchIcon} alt="Search" class="w-6 h-6" />
          </button>
          <div>
            <Flex class="gap-x-2">
              <Button
                type="button"
                class={listType() === "visible" ? IS_TYPE : IS_NOT_TYPE}
                onClick={() => {
                  setListType("visible");
                }}
              >
                View Visible List
              </Button>
              <Button
                type="button"
                class={listType() === "hidden" ? IS_TYPE : IS_NOT_TYPE}
                onClick={() => {
                  setListType("hidden");
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
      <Dialog open={listType() === "hidden"} onOpenChange={() => {setListType("visible")}}>
        <DialogContent class="bg-orange-50 border-2 border-black" >
          <DialogHeader class="space-y-4">
            <DialogTitle class="text-center text-3xl">
              Welcome!
            </DialogTitle>
            <DialogDescription class="text-center">
              Enter your pin to access the hidden list.
            </DialogDescription>
            <div class="flex flex-col items-center space-y-4">
              <input
                type="password"
                placeholder="Pin"
                class="w-full p-2 border-2 border-gray-300 rounded"
                required
              />
              <Button
                type="submit"
                class="text-white bg-black hover:bg-gray-600 w-full"
              >
                Submit
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
