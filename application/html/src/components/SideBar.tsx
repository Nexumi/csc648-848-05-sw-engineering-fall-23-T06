import { useMatch, useNavigate } from "@solidjs/router";
import logo from "../assets/logos/logo.png";
import { Flex } from "../common/layout/flex";
import { For, Show, createSignal } from "solid-js";
import { Button } from "../common/components/button";
import { uriAbout, uriDashboard, uriForget, uriHome, uriLogin, uriTracking, uriUpload } from "../utils/uri";

export default function SideBar() {
  const navigate = useNavigate();
  const isHome = useMatch(uriHome);
  const isLogin = useMatch(uriLogin);
  const isForget = useMatch(uriForget);
  const isAbout = useMatch(uriAbout);

  const isDashboard = useMatch(uriDashboard);
  const isUpload = useMatch(uriUpload);
  const isTracking = useMatch(uriTracking);

  const BOX = "w-24 h-24 border-black border-b-2";
  const FULL = "w-full h-full p-0";

  const [destinations, setDestinations] = createSignal([
    {label: "Dashboard", uri: uriDashboard, isPage: isDashboard},
    {label: "Upload", uri: uriUpload, isPage: isUpload},
    {label: "Track Info", uri: uriTracking, isPage: isTracking},
  ]);

  return (
    <>
      <Show when={!isLogin() && !isForget() && !isHome() && !isAbout()}>
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
            <For each={destinations()}>{(destination) =>
              <NavButton
                label={destination.label}
                uri={destination.uri}
                isPage={destination.isPage}
              />
            }</For>
          </div>
        </div>
      </Show>
    </>
  );
}

function NavButton(props: {
  label: string,
  uri: Function,
  isPage: Function
}) {
  const navigate = useNavigate();

  const BOX = "w-24 h-24 border-black border-b-2";
  const BOX_ACTIVE = "w-24 h-24 border-black border-b-2 bg-[#C68B59]";
  const FULL = "w-full h-full p-0";
  
  return (
    <>
      <Flex justifyContent="center" class={props.isPage() ? BOX_ACTIVE : BOX}>
        <Button
          class={FULL}
          onClick={() => {
            navigate(props.uri());
          }}
        >
          {props.label}
        </Button>
      </Flex>
    </>
  );
}