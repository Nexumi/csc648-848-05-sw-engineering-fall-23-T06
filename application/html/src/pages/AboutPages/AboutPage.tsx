import { useNavigate } from "@solidjs/router";
import { Button } from "../../common/components/button";
import { For, createSignal } from "solid-js";

export default function AboutPage() {
  const navigate = useNavigate();
  const [teammates, setTeammates] = createSignal(["belu", "david", "jimmy", "komal", "luis", "mankit", "tin"]);

  return (
    <>
    <For each={teammates()}>{(teammate) =>
      <Button
        class="capitalize"
        onClick={() => {
          navigate(teammate);
        }}
      >
        {teammate}
      </Button>
    }</For>
    </>
  );
}