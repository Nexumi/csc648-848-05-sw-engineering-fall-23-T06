import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div class="text-center">
        <header>
          <h1> Software Engineering class SFSU </h1>
          <h1> Fall 2023 </h1>
          <h1> Section 05 </h1>
          <h1> Team 06 </h1>
        </header>
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
      </div>
    </>
  );
}