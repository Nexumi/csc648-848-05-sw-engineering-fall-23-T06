import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div class="pt-10">
        <Flex justifyContent="center">
          <div class="w-full max-w-xs bg-gray-400 py-5 text-center rounded-xl shadow-2xl border-2 border-black">
            <p>Hello World (Demo)</p>
          </div>
        </Flex>
        <Flex justifyContent="center">
          <Button
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