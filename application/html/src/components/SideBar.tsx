import { useMatch, useNavigate } from "@solidjs/router";
import logo from "../assets/logos/logo.png";
import { Flex } from "../common/layout/flex";
import { Show } from "solid-js";
import { Button } from "../common/components/button";

export default function SideBar() {
  const navigate = useNavigate();
  const isHome = useMatch(() => "/");
  const isLogin = useMatch(() => "/login");
  const isForget = useMatch(() => "/forget");
  const isDashboard = useMatch(() => "/dashboard");

  const BOX = "w-24 h-24 border-black border-b-2";
  const FULL = "w-full h-full p-0";

  return (
    <>
      <Show when={!isLogin() && !isForget() && !isHome()}>
        <div class="flex inset-y-0">
          <div class="flex flex-grow flex-col overflow-y-auto border-r-2 border-black">
            <Flex justifyContent="center" class={BOX}>
              <Button
                class={FULL}
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  src={logo}
                />
              </Button>
            </Flex>
            <Flex justifyContent="center" class={BOX} classList={{ "bg-[#C68B59]" : !!isDashboard() }}>
              <Button
                class={FULL}
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </Button>
            </Flex>
          </div>
        </div>
      </Show>
    </>
  );
}