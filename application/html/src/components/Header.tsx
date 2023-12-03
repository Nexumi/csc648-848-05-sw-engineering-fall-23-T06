import { useMatch, useNavigate } from "@solidjs/router";
import Cookies from "js-cookie";
import { Show, createSignal } from "solid-js";
import toast from "solid-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../common/components/dropdown-menu";
import { Flex } from "../common/layout/flex";
import { me } from "../utils/me";
import { uriAbout, uriForget, uriHome, uriLogin, uriRegistration, uriSettings, uriSupport } from "../utils/uri";


export default function Logo() {
  const navigate = useNavigate();
  const isHome = useMatch(uriHome);
  const isLogin = useMatch(uriLogin);
  const isRegistration = useMatch(uriRegistration);
  const isForget = useMatch(uriForget);
  const isAbout = useMatch(() => uriAbout() + "/*");

  const [dropdownVisible, setDropdownVisible] = createSignal(false);

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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="bg-white">
                <Show when={Cookies.get("token") !== undefined}>
                  <DropdownMenuItem>
                    <p>Hi, <span class="font-semibold">{me().firstname} {me().lastname}</span></p>
                  </DropdownMenuItem>
                </Show>
                <DropdownMenuItem
                  onSelect={() => {
                    navigate(uriSettings());
                  }}
                  class="cursor-pointer hover:bg-gray-200"
                >
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => {
                    navigate(uriSupport());
                  }}
                  class="cursor-pointer hover:bg-gray-200"
                >
                  Support
                </DropdownMenuItem>
                <Show when={Cookies.get("token") !== undefined}>
                  <DropdownMenuItem
                    onSelect={() => {
                      toast.success(`See you next time ${me().firstname} ${me().lastname}!`);
                      Cookies.remove("token");
                      Cookies.remove("user");
                      navigate(uriHome());
                    }}
                    class="cursor-pointer hover:bg-gray-200"
                  >
                    Logout
                  </DropdownMenuItem>
                </Show>
                <Show when={Cookies.get("token") === undefined}>
                  <DropdownMenuItem
                    onSelect={() => {
                      navigate(uriLogin());
                    }}
                    class="cursor-pointer hover:bg-gray-200"
                  >
                    Login
                  </DropdownMenuItem>
                </Show>
              </DropdownMenuContent>
            </DropdownMenu>
          </Flex>
        </header>
      </Show>
    </>
  );
}