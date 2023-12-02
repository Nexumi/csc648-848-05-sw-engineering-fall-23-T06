import { createForm } from "@felte/solid";
import { useNavigate, useSearchParams } from "@solidjs/router";
import Cookies from "js-cookie";
import { createResource, createSignal } from "solid-js";
import SearchIcon from "../assets/icons/SearchIcon.png";
import { Button } from "../common/components/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../common/components/dialog";
import { Flex } from "../common/layout/flex";
import Calendar from "../components/Calendar";
import TrackingList from "../components/TrackingList";
import { getAllTracking } from "../utils/requests";
import { uriDashboard, uriRegistration, uriTracking } from "../utils/uri";
import { sortBy } from "../utils/util";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [packages] = createResource(getAllTracking);

  const { form } = createForm({
    onSubmit(values) {
      navigate(values.search ? `${uriTracking()}?searchText=${values.search}` : uriTracking());
    },
  });

  const [firstTime, setFirstTime] = createSignal(Boolean(searchParams.guest));

  return (
    <>
      <Dialog open={!Cookies.get("token") && firstTime()}>
        <DialogContent class="bg-orange-50 border-2 border-black" hideCloseButton>
          <DialogHeader class="space-y-4">
            <DialogTitle class="text-center text-3xl">
              Welcome!
            </DialogTitle>
            <DialogDescription class="text-center">
              Feel free to try out our service, but consider creating an account
              to track your packages across devices. Some of the feature are only 
              avilable to registered user like hidden list!
            </DialogDescription>
            <Flex class="gap-x-4">
              <Button
                class="text-white bg-black hover:bg-gray-600 grow"
                onClick={() => {
                  navigate(uriDashboard());
                  setFirstTime(false);
                }}
              >
                Continue as Guest
              </Button>
              <Button
                class="text-white bg-black hover:bg-gray-600 grow"
                onClick={() => {
                  navigate(uriRegistration());
                }}
              >
                Register an account
              </Button>
            </Flex>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div class="space-y-4">
        <div class="text-center text-6xl">
          <p>Dashboard</p>
        </div>
        <Flex justifyContent="center">
          <form use:form>
            <span class="text-xl mr-2">Search:</span>
            <input
              name="search"
              class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600"
              type="text"
              placeholder="tracking #, carrier, status..."
            />
            <button type="submit" class="ml-2 focus:outline-none">
              <img src={SearchIcon} alt="Search" class="w-6 h-6" />
            </button>
          </form>
        </Flex>
        <Calendar
          packages={packages()}
        />
        <div>
          <div class="text-3xl">
            <p>Arriving Soon:</p>
          </div>
          <TrackingList
            display={sortBy(packages(), "eta")}
            limit={2}
          />
        </div>
      </div>
    </>
  );
}