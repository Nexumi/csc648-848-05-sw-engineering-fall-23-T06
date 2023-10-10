import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import logo from "../assets/logos/logo.png";
import { uriAbout, uriHome, uriLogin, uriSearch, uriTracking } from "../utils/uri";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Flex flexDirection="col" class="h-full">
      <Flex justifyContent="between" alignItems="center" class="mb-6 px-4 py-2">
        <img
          src={logo}
          class="w-40 cursor-pointer" 
          onClick={() => {
            navigate(uriHome());
          }}
        />

        <Flex justifyContent="center" alignItems="center" class="space-x-4">
          <Button
            class="text-white bg-black hover:bg-gray-600"
            onclick={() => {
              navigate(uriHome());
            }}
          >
            Home
          </Button>

            <Button
                class="text-white bg-black hover:bg-gray-600"
                onclick={() => {
                    navigate(uriSearch());
                }}
            >
                Search Page
            </Button>

          <Button
            class="text-white bg-black hover:bg-gray-600"
            onclick={() => {
              navigate(uriAbout());
            }}
          >
            About Me Pages
          </Button>

          <Button
            class="text-white bg-black hover:bg-gray-600"
            onclick={() => {
              navigate(uriTracking());
            }}
          >
            Support
          </Button>
        </Flex>
        <Button
          class="text-white bg-black hover:bg-gray-600"
          onclick={() => {
            navigate(uriLogin());
          }}
        >
          Login
        </Button>
      </Flex>
      
      <hr class=" border-black border-t-2 w-full"/>

      <div class="text-center my-8">
         <div class="text-9xl font-thin">
           OrderOwl
        </div>
      </div>

      <Flex justifyContent="center" class="text-6xl border-y-2 border-black divide-x w-3/4">
        <Flex justifyContent="center" class="max-w-sm h-96 border-black my-8">
          <p>Feature 1</p>
        </Flex>
        <Flex justifyContent="center" class="max-w-sm h-96 border-black my-8">
          <p>Feature 2</p>
        </Flex>
        <Flex justifyContent="center" class="max-w-sm h-96 border-black my-8">
          <p>Feature 3</p>
        </Flex>
      </Flex>

      {/* <div class="mx-auto w-3/4 border-black border-t-2 my-10"></div>

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


      <div class="mx-auto border-black border-t-2 my-4 w-3/4 mt-auto mb-8"></div> */}
    </Flex>
  );
}