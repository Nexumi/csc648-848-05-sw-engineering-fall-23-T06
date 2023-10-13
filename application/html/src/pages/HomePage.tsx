import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import logo from "../assets/logos/logo.png";
import SearchIcon from "../assets/logos/SearchIcon.png";
import { createForm } from "@felte/solid";
import toast from "solid-toast";
import { uriAbout, uriForget, uriHome, uriLogin, uriRegistration, uriSearch, uriTracking } from "../utils/uri";
import TrackingList from "../components/TrackingList";
import { Show, createResource, createSignal } from "solid-js";
import { getAllTracking } from "../utils/requests";
import Cookies from "js-cookie";

export default function HomePage() {
  const navigate = useNavigate();
  
  const [packages] = createResource(getAllTracking);

  const [isIn, setIsIn] = createSignal(Cookies.get("user") != undefined);

  const { form } = createForm({
    onSubmit(values) {
      navigate(values.search ? `${uriTracking()}?searchText=${values.search}` : uriTracking());
    }
  });

  return (
    <Flex flexDirection="col" class="h-full">
      <Flex justifyContent="between" alignItems="center" class="mb-6 px-4 py-2">
        <img
          src={logo}
          class="w-40 cursor-pointer" 
          onClick={() => {
            navigate(uriHome());
          }}
        />

        <div>
          <Flex justifyContent="center" class="space-x-4 mb-4">
            <Button
              class="text-white bg-black hover:bg-gray-600"
              onclick={() => {
                navigate(uriAbout());
              }}
            >
              About Me Pages
            </Button>

            <Button
              class="text-white bg-black hover:bg-gray-600"
              onclick={() => {
                navigate(uriForget());
              }}
            >
              Support
            </Button>
            <div>
              <form use:form>
                <span class="text-xl mr-2">Search:</span>
                <input name="search" class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="tracking #, carrier, status..."/>
                <button type="submit" class="ml-2 focus:outline-none">
                  <img src={SearchIcon} alt="Search" class="w-6 h-6" />
                </button>
              </form>
            </div>
          </Flex>
        </div>
        <div class="flex space-x-4">
          <Show when={!isIn()}>
            <Button
              class="text-white bg-black hover:bg-gray-600"
              onclick={() => {
                navigate(uriLogin());
              }}
            >
              Login
            </Button>
            <Button
              class="text-white bg-black hover:bg-gray-600"
              onclick={() => {
                navigate(uriRegistration());
              }}
            >
              Registration
            </Button>
          </Show>
          <Show when={isIn()}>
            <Flex class="gap-x-4">
              <div>
                <p>Welcome, {Cookies.get("user")}!</p>
              </div>
              <Button
                class="text-white bg-black hover:bg-gray-600"
                onclick={() => {
                  toast.success(`See you next time ${Cookies.get("user")}!`);
                  Cookies.remove("user");
                  setIsIn(false);
                }}
              >
                Logout
              </Button>
            </Flex>
          </Show>
        </div>
      </Flex>
      
      <hr class=" border-black border-t-2 w-full"/>

      <div class="text-center my-8">
         <div class="text-9xl font-thin">
           OrderOwl
        </div>
        <div class="text-4xl mt-4">
        Track everything everywhere
        </div>
      </div>

      <Flex justifyContent="center" class="text-6xl border-y-2 border-black divide-x w-3/4">
        <Flex justifyContent="center" class="max-w-sm h-96 border-black my-8">
          <p>Feature 1</p>
        </Flex>
        <Flex justifyContent="center" class="max-w-sm h-96 border-black my-8">
          <p>Feature 2</p>
        </Flex>
        <Flex justifyContent="center" class="max-w-sm h-96 border-black my-8">
          <p>Feature 3</p>
        </Flex>
      </Flex>

      <div class="w-3/4 mt-4">
        <div class="text-3xl">
          <p>Recent:</p>
        </div>
        <TrackingList
          display={packages()?.sort((a: any, b: any) => (a.id < b.id) ? 1 : -1)}
          limit={5}
        />
      </div>

      {/* <div class="mx-auto w-3/4 border-black border-t-2 my-10"></div>

      <div class="relative flex items-center flex-grow mx-12">
        <div class="absolute text-6xl left-0" style={{ left: "calc(50% - 10em)", top: "35%" }}>
          Feature 1
        </div>

        <div class="border-l border-black absolute" style={{ left: "calc(50% - 16em)", height: "400px", top: "35px" }}></div>

        <div class="absolute text-6xl" style={{ left: "50%", transform: "translateX(-50%)", top: "35%" }}>
          Feature 2
        </div>

        <div class="border-l border-black absolute" style={{ right: "calc(50% - 16em)", height: "400px", top: "35px" }}></div>

        <div class="absolute text-6xl right-0" style={{ right: "calc(50% - 10em)", top: "35%" }}>
          Feature 3
        </div>
      </div>


      <div class="mx-auto border-black border-t-2 my-4 w-3/4 mt-auto mb-8"></div> */}
    </Flex>
  );
}