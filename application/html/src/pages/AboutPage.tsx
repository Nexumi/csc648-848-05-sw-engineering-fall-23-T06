import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { For, createSignal } from "solid-js";
import { Flex } from "../common/layout/flex";

export default function AboutPage() {
  const navigate = useNavigate();
  const [teammates, setTeammates] = createSignal(["belu", "david", "jimmy", "komal", "luis", "mankit", "tin"]);

  return (
    <>
    <div class="space-y-5">
        <header>
          <h1> Software Engineering class SFSU </h1>
          <h1> Fall 2023 </h1>
          <h1> Section 05 </h1>
          <h1> Team 06 </h1>
        </header>
    <Flex justifyContent="center" class="gap-x-5">
      <For each={teammates()}>{(teammate) =>
        <Button
          class="capitalize text-white bg-black hover:bg-gray-600"
          onClick={() => {
            navigate(teammate);
          }}
        >
          {teammate}
        </Button>
      }</For>
    </Flex>
    </div>
    </>
  );
}