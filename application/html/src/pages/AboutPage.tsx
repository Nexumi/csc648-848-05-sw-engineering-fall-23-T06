import { Outlet, useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { For, createSignal } from "solid-js";
import { Flex } from "../common/layout/flex";
import { uriAbout, uriHome } from "../utils/uri";
import logo from "../assets/logos/logo.png";

export default function AboutPage() {
  const navigate = useNavigate();
  const [teammates, setTeammates] = createSignal(["belu", "david", "jimmy", "komal", "luis", "mankit", "tin"]);

  return (
    <>
      <Flex
        justifyContent="center"
        onClick={() => {
          navigate(uriHome());
        }}
      >
        <img
          src={logo}
          class="w-40 cursor-pointer"
        />
        <div class="text-6xl cursor-pointer">
          <p>OrderOwl</p>
        </div>
      </Flex>
      <br />
      <div class="text-center space-y-2" >
          <div class="text-xl font-bold">
            <p>Get to know the wonderful team *hoo* created OrderOwl!</p>
          </div>
      </div>
            <div class="text-center space-y-2" >
              <p>Please click on each member to learn a little more about us :) </p>
            <br />
            </div>
      <Flex justifyContent="center" class="flex-wrap gap-10 mb-10">
        <For each={teammates()}>
          {(teammate) =>
            <Button
              class="capitalize text-white bg-black hover:bg-gray-600"
              onClick={() => {
                navigate(uriAbout(teammate));
              }}
            >
              {teammate}
            </Button>
          }
        </For>
      </Flex>
      <Outlet />
    </>
  );
}