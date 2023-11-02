import { useNavigate, useSearchParams } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Match, Switch, createEffect } from "solid-js";
import { Flex } from "../common/layout/flex";
import { Input } from "../common/components/input";
import { me } from "../utils/me";

export default function SettingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="center" alignItems="start" class="gap-x-8">
        <SettingsSideBar />
        <Switch>
          <Match when={searchParams.page === "user"}>
            <User />
          </Match>
          <Match when={searchParams.page === "etc"}>
            <div class="w-full" />
          </Match>
        </Switch>
      </Flex>
    </>
  );
}

function SettingsSideBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const INACTIVE = "w-full border-2 border-black";
  const ACTIVE = "w-full border-2 border-black bg-gray-200";

  createEffect(() => {
    if (!searchParams.page) {
      setSearchParams({ page: "user" });
    }
  });

  return (
    <>
      <div class="max-w-[200px] space-y-5">
        <Button
          class={searchParams.page === "user" ? ACTIVE : INACTIVE}
          onClick={() => {
            setSearchParams({ page: "user" });
          }}
        >
          User Information
        </Button>
        <Button
          class={searchParams.page === "etc" ? ACTIVE : INACTIVE}
          onClick={() => {
            setSearchParams({ page: "etc" });
          }}
        >
          Etc.
        </Button>
      </div>
    </>
  );
}

function User() {
  const NO_FOCUS = "focus-visible:ring-0 focus-visible:ring-offset-0";

  return (
    <>
      <div class="w-full space-y-4">
        <Flex justifyContent="center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-48 h-48"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Flex>
        <div>
          <p>First Name</p>
          <Input type="text" readonly class={NO_FOCUS} placeholder={me().first_name} />
        </div>
        <div>
          <p>Last Name</p>
          <Input type="text" readonly class={NO_FOCUS} placeholder={me().last_name} />
        </div>
        <div>
          <p>Email</p>
          <Input type="text" readonly class={NO_FOCUS} placeholder={me().email} />
        </div>
      </div>
    </>
  );
}