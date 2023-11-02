import { createSignal } from "solid-js";
import { useMatch, useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { Show } from "solid-js";
import { uriAbout, uriForget, uriHome, uriLogin, uriRegistration } from "../utils/uri";
import toast from "solid-toast";
import Cookies from "js-cookie";
import { Button } from "../common/components/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../common/components/dropdown-menu";


export default function Logo() {
  const [dropdownVisible, setDropdownVisible] = createSignal(false);
  const [isIn, setIsIn] = createSignal(Cookies.get("user") != undefined);
  const navigate = useNavigate();
  const isHome = useMatch(uriHome);
  const isLogin = useMatch(uriLogin);
  const isRegistration = useMatch(uriRegistration);
  const isForget = useMatch(uriForget);
  const isAbout = useMatch(uriAbout);

  const handleSystemClick = () => {
    setDropdownVisible(!dropdownVisible());
  };
  const handleNotificationClick = () => {
    toast.error("Not yet implemented");
  };

  return (
    <>
      <Show when={!isHome() && !isLogin() && !isRegistration() && !isForget() && !isAbout()}>
        <header>
          <Flex justifyContent="end" class="gap-x-2">
          <DropdownMenu>
              <DropdownMenuTrigger>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="min-h-[200px] bg-white">
                
                {/* Blank */}
              </DropdownMenuContent>
              
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onSelect={() => {
                    toast.error("Not yet implemented");
                  }}
                  class="cursor-pointer hover:bg-gray-200"
                >
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    toast.success(`See you next time ${Cookies.get("user")}!`);
                    Cookies.remove("user");
                  }}
                  class="cursor-pointer hover:bg-gray-200"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <div
              class="cursor-pointer"
              onClick={handleSystemClick}
            >
              <Show when={dropdownVisible()}>
                <div class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <div class="py-1">
                    <Button
                      class="block w-full text-left px-4 py-2 text-white bg-black hover:bg-gray-600"
                      onclick={() => {
                        toast.success(`See you next time ${Cookies.get("user")}!`);
                        Cookies.remove("user");
                        setIsIn(false);
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </Show>
            </div> */}
          </Flex>
        </header>
      </Show>
    </>
  );
}