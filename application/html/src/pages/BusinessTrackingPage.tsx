import { createForm } from "@felte/solid";
import { useSearchParams, useNavigate } from "@solidjs/router";
import { createResource } from "solid-js";
import SearchIcon from "../assets/icons/SearchIcon.png";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import TrackingList from "../components/TrackingList";
import { getTrackingBySearch, getTrackingCount } from "../utils/requests";
import { uriShipmentsTracking, uriBusinessTracking } from "../utils/uri";

export default function TrackingPage() {

  const navigate = useNavigate();

  const IS_TYPE = "w-1/2 border-2 border-black whitespace-nowrap bg-gray-300";
  const IS_NOT_TYPE = "w-1/2 border-2 border-black whitespace-nowrap"

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
    <div class="space-y-4">
      <span class="text-xl ml-4">Number of Undelivered Orders Left: {undeliveredCount()}</span>
      <div class="text-center text-6xl">
        <p>Incoming Orders List</p>
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
              class={data().listType === "visible" || data().listType === undefined ? IS_TYPE : IS_NOT_TYPE}
              onClick={() => {
                setData("listType", "visible");
                navigate(uriBusinessTracking());
              }}
            >
              View Incoming
            </Button>
            <Button
              type="button"
              class={data().listType === "hidden" ? IS_TYPE : IS_NOT_TYPE}
              onClick={() => {
                setData("listType", "hidden");
                navigate(uriShipmentsTracking());
              }}
            >
              View Outgoing
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
  );
}
