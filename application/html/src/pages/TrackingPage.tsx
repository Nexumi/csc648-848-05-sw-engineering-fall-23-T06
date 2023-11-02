import { createSignal } from "solid-js";
import { useNavigate, useSearchParams } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import logo from "../assets/logos/logo.png";
import SearchIcon from "../assets/logos/SearchIcon.png";
import GearIcon from "../assets/logos/GearIcon.png";
import BellIcon from "../assets/logos/BellIcon.png";
import toast from "solid-toast";
import { createForm } from "@felte/solid";
import TrackingList from "../components/TrackingList";
import { createResource } from "solid-js";
import { getTrackingBySearch } from "../utils/requests";

export default function TrackingPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Placeholder value for undelivered orders counter
  const [undeliveredCount] = createSignal<number>(5); 

  const [packages] = createResource(
    () => ({
      searchText: searchParams.searchText
    }),
    getTrackingBySearch
  );
  
  const { form } = createForm({
    onSubmit(values) {
      setSearchParams({searchText: values.search});
    }
  });
 
  return (
    <div class="space-y-4">
      <span class="text-xl ml-4">Number of Undelivered Orders Left: {undeliveredCount()}</span>
      <div class="text-center text-6xl">
        <p>Track Info</p>
      </div>
      <Flex justifyContent="center">
        <form use:form>
          <span class="text-xl mr-2">Search:</span>
          <input name="search" class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="tracking #, carrier, status..." value={searchParams.searchText || ""}/>
          <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full">
            <img src={SearchIcon} alt="Search" class="w-6 h-6" />
          </button>
        </form>
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
