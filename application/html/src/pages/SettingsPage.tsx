import { Outlet, useMatch, useNavigate, useSearchParams } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Match, Show, Switch, createEffect, createSignal } from "solid-js";
import { Flex } from "../common/layout/flex";
import { Input } from "../common/components/input";
import { me } from "../utils/me";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../common/components/dialog";
import toast from "solid-toast";
import { deleteTrackingById, deleteUserById } from "../utils/requests";
import { uriHome, uriSettings, uriTracking } from "../utils/uri";
import Cookies from "js-cookie";

export default function SettingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Flex justifyContent="center" alignItems="start" class="gap-x-8">
        <SettingsSideBar />
        <Outlet />
      </Flex>
    </>
  );
}

function SettingsSideBar() {
  const navigate = useNavigate();
  const isProfile = useMatch(() => uriSettings("profile"));
  const isEtc = useMatch(() => uriSettings("etc"));

  const INACTIVE = "w-full border-2 border-black";
  const ACTIVE = "w-full border-2 border-black bg-gray-200";

  return (
    <>
      <div class="max-w-[200px] space-y-5">
        <Button
          class={isProfile() ? ACTIVE : INACTIVE}
          onClick={() => {
            navigate(uriSettings("profile"));
          }}
        >
          Profile
        </Button>
        <Button
          class={isEtc() ? ACTIVE : INACTIVE}
          onClick={() => {
            navigate(uriSettings("etc"));
          }}
        >
          Etc.
        </Button>
      </div>
    </>
  );
}