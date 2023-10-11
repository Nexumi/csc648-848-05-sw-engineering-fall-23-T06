import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { For, createSignal } from "solid-js";
import { Flex } from "../common/layout/flex";
import { uriAbout } from "../utils/uri";

export default function AboutPage() {
  const navigate = useNavigate();
  const [teammates, setTeammates] = createSignal(["belu", "david", "jimmy", "komal", "luis", "mankit", "tin"]);

  return (
    <>
      <Flex justifyContent="center" class="flex-wrap gap-5">
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
    </>
  );
}