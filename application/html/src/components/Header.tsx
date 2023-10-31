import { createSignal } from "solid-js";
import { useMatch, useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { Show } from "solid-js";
import { uriAbout, uriForget, uriHome, uriLogin, uriRegistration } from "../utils/uri";
import toast from "solid-toast";
import Cookies from "js-cookie";
import { Button } from "../common/components/button";


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
            <div
              class="cursor-pointer"
              onClick={handleNotificationClick}
            >
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
            </div>
            <div
              class="cursor-pointer"
              onClick={handleSystemClick}
            >
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
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
            </div>
          </Flex>
        </header>
      </Show>
    </>
  );
}