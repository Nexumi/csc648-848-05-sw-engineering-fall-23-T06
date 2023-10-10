import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import logo from "../assets/logos/logo.png";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div class="h-full flex flex-col">
      <Flex justifyContent="between" alignItems="center" class="mb-6 px-4 py-2">
                <img
          src={logo}
          class="w-40 cursor-pointer" 
          onClick={() => {
            navigate("/");
          }}
        />

        <Flex justifyContent="center" alignItems="center" class="space-x-4">
          <Button
            class="text-white bg-black hover:bg-gray-600"
            onclick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>

            <Button
                class="text-white bg-black hover:bg-gray-600"
                onclick={() => {
                    navigate("search");
                }}
            >
                Search Page
            </Button>

          <Button
            class="text-white bg-black hover:bg-gray-600"
            onclick={() => {
              navigate("about");
            }}
          >
            About Me Pages
          </Button>

          <Button
            class="text-white bg-black hover:bg-gray-600"
            onclick={() => {
              navigate("/tracking");
            }}
          >
            Support
          </Button>
        </Flex>
        <Button
          class="text-white bg-black hover:bg-gray-600"
          onclick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </Flex>
            <hr class="mb-6 border-black border-t-2 w-full"/>

      <div class="text-center mt-2">
         <div class="text-9xl font-thin">
           OrderOwl
        </div>
      </div>
      <div class="mx-auto w-3/4 border-black border-t-2 my-10"></div>

      <div class="relative flex items-center flex-grow mx-12">
        <div class="absolute text-6xl left-0" style={{ left: "calc(50% - 10em)", top: "35%" }}>
          Feature 1
        </div>

        <div class="border-l border-black absolute" style={{ left: "calc(50% - 16em)", height: "400px", top: "35px" }}></div>

        <div class="absolute text-6xl" style={{ left: "50%", transform: "translateX(-50%)", top: "35%" }}>
          Feature 2
        </div>

        <div class="border-l border-black absolute" style={{ right: "calc(50% - 16em)", height: "400px", top: "35px" }}></div>

        <div class="absolute text-6xl right-0" style={{ right: "calc(50% - 10em)", top: "35%" }}>
          Feature 3
        </div>
      </div>


      <div class="mx-auto border-black border-t-2 my-4 w-3/4 mt-auto mb-8"></div>
    </div>
  );
}