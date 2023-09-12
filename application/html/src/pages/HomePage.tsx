import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div class="space-y-5">
        <Flex justifyContent="center">
          <Button
            class="bg-cyan-500 hover:bg-cyan-600"
            onclick={() => {
              navigate("about");
            }}
          >
            About Me Pages
          </Button>
        </Flex>
      </div>
    </>
  );
}