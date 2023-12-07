import { createForm } from "@felte/solid";
import { useNavigate } from "@solidjs/router";
import Cookies from "js-cookie";
import { Show, createResource, createSignal } from "solid-js";
import toast from "solid-toast";
import PCK from "../assets/appImages/PCK.jpg";
import picture3 from "../assets/appImages/picture3.jpg";
import picture4 from "../assets/appImages/picture4.jpg";
import SearchIcon from "../assets/icons/SearchIcon.png";
import logo from "../assets/logos/logo.png";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import TrackingList from "../components/TrackingList";
import { me } from "../utils/me";
import { getAllTracking } from "../utils/requests";
import { uriAbout, uriDashboard, uriHome, uriLogin, uriRegistration, uriSupport, uriTracking } from "../utils/uri";
import { sortBy } from "../utils/util";


export default function HomePage() {
  const [packages] = createResource(getAllTracking);

  return (
    <Flex flexDirection="col" class=" h-full">
      <Header />
      <div class="text-center my-8">
        <div class="text-8xl md:text-9xl font-thin">
          OrderOwl

        </div>
        <div class="text-3xl md:text-4xl xl:text-5xl mt-4">
          Track Your Order Anywhere Anytime
        </div>
      </div>

      <hr class="border-black border-t-2 w-3/4" />

      <Flex justifyContent="center" alignItems="stretch" class="flex-col md:flex-row text-6xl w-3/4 my-8 gap-2">
        <Flex class="h-full w-full" alignItems="stretch">
          <img src={picture3} alt="Feature 1" class="h-full w-auto" />
        </Flex>
        <Flex class="h-full w-full" alignItems="stretch">
          <img src={PCK} alt="Feature 2" class="h-full w-auto" />
        </Flex>
        <Flex class="h-full w-full" alignItems="stretch">
          <img src={picture4} alt="Feature 3" class="h-full w-auto" />
        </Flex>
      </Flex>

      <hr class="border-black border-t-2 w-3/4" />
      <div class="w-3/4 mt-4">
        <div class="text-3xl">
          <p>Recent:</p>
        </div>
        <TrackingList
          display={sortBy(packages(), "id", 1)}
          limit={5}
        />
      </div>
    </Flex>
  );
}
function Header() {
  const navigate = useNavigate();

  const [isIn, setIsIn] = createSignal(Cookies.get("token") != undefined);

  const { form } = createForm({
    onSubmit(values) {
      navigate(values.search ? `${uriTracking()}?searchText=${values.search}` : uriTracking());
    }
  });

  return (
    <>
      <Flex alignItems="center" class="flex-col xl:flex-row mb-6 px-4 py-2">
        <img
          src={logo}
          class="w-32 cursor-pointer"
          onClick={() => {
            navigate(uriHome());
          }}
        />

        <Flex class="flex-col lg:flex-row justify-center lg:justify-between gap-y-4 mb-4">
          <Flex class="flex-col sm:flex-row w-full max-w-xs sm:w-auto justify-center lg:justify-start gap-x-4 gap-y-2">
            <Button
              class="w-full max-w-xs sm:w-auto text-white bg-black hover:bg-gray-600"
              onclick={() => {
                navigate(uriAbout());
              }}
            >
              About Us
            </Button>

            <Button
              class="w-full max-w-xs sm:w-auto text-white bg-black hover:bg-gray-600"
              onclick={() => {
                navigate(uriSupport());
              }}
            >
              Support
            </Button>
          </Flex>
          <div class="shrink-0">
            <form use:form>
              <span class="text-xl mr-2">Search:</span>
              <div class="sm:inline">
                <input name="search" class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="tracking #, carrier, status..." />
                <button type="submit" class="ml-2 focus:outline-none">
                  <img src={SearchIcon} alt="Search" class="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
          <Flex justifyContent="center" class="flex-col sm:flex-row w-full max-w-xs sm:w-auto gap-x-4 gap-y-2">
            <Show when={!isIn()}>
              <Button
                class="w-full max-w-xs sm:w-auto shrink-0 text-white bg-black hover:bg-gray-600"
                onclick={() => {
                  navigate(uriDashboard(true));
                }}
              >
                Continue as Guest
              </Button>
              <Button
                class="w-full max-w-xs sm:w-auto text-white bg-black hover:bg-gray-600"
                onclick={() => {
                  navigate(uriRegistration());
                }}
              >
                Register
              </Button>
              <Button
                class="w-full max-w-xs sm:w-auto text-white bg-black hover:bg-gray-600"
                onclick={() => {
                  navigate(uriLogin());
                }}
              >
                Login
              </Button>
            </Show>
            <Show when={isIn()}>
              <div>
                <p>Welcome, {me().firstname} {me().lastname}!</p>
              </div>
              <Button
                class="w-full max-w-xs sm:w-auto text-white bg-black hover:bg-gray-600"
                onclick={() => {
                  navigate(uriDashboard());
                }}
              >
                Dashboard
              </Button>
              <Button
                class="w-full max-w-xs sm:w-auto text-white bg-black hover:bg-gray-600"
                onclick={() => {
                  toast.success(`See you next time ${me().firstname} ${me().lastname}!`);
                  Cookies.remove("token");
                  Cookies.remove("user");
                  setIsIn(false);
                }}
              >
                Logout
              </Button>
            </Show>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}