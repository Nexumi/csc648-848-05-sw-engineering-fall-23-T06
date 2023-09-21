import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="center">
        <Button
          class="text-white bg-black hover:bg-gray-600"
          onclick={() => {
            navigate("about");
          }}
        >
          About Me Pages
        </Button>
      </Flex>
    </>
  );
}