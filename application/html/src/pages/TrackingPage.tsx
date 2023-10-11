import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import logo from "../assets/logos/logo.png";
import SearchIcon from "../assets/logos/SearchIcon.png";
import GearIcon from "../assets/logos/GearIcon.png";
import BellIcon from "../assets/logos/BellIcon.png";
import toast from "solid-toast";
import { createForm } from "@felte/solid";


export default function TrackingPage() {
  const navigate = useNavigate();
  
  const { form } = createForm({
    onSubmit(values) {
      console.log(values);
      toast.error("Not yet implemented");
    }
  });
  
  return (
    <div class="h-full p-0 relative">
      <Flex justifyContent="center">
        <form use:form>
          <span class="text-xl mr-2">Search:</span>
          <input name="search" class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="tracking #, carrier, status..."/>
          <button type="submit" class="ml-2 px-2 py-2 focus:outline-none rounded-full">
            <img src={SearchIcon} alt="Search" class="w-6 h-6" />
          </button>
        </form>
      </Flex>

      {/* <div class="absolute top-4 right-14 z-10">
        <button onClick={handleNotificationClick}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        </button>
      </div>

      <div class="absolute top-4 right-4 z-10">
        <button onClick={handleSystemClick}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        </button>
      </div> */}

      {/*<div class="h-0.5 w-64 bg-black absolute left-0 top-30"></div>
      <div class="h-0.5 w-64 bg-black absolute left-0 top-64"></div>
      <div class="h-0.5 w-64 bg-black absolute left-[-46px] top-[410px]"></div>
      <div class="h-0.5 w-64 bg-black absolute left-[-46px] top-[560px]"></div>
      <div class="h-0.5 w-64 bg-black absolute left-[-46px] top-[710px]"></div>


      <div class="w-0.5 h-full bg-black absolute inset-y-0 left-52"></div>*/}

      {/* <Flex flexDirection="col" alignItems="start" class="relative">
        <img
          src={logo}
          class="w-40 cursor-pointer mb-12" 
          onClick={() => {
            navigate("/");
          }}
        />


        <Button
          class="text-white bg-black hover:bg-gray-600 ml-0 mb-28 w-40 text-2xl"
          onclick={() => {
            navigate("/forget");
          }}
        >
          Home
        </Button>

        <Button
          class="text-white bg-black hover:bg-gray-600 mb-28 w-40 text-xl"
          onclick={() => {
            navigate("/forget");
          }}
        >
          Upload
        </Button>

        <Button
          class="text-white bg-black hover:bg-gray-600 mb-28 w-40 text-xl"
          onclick={() => {
            navigate("/tracking");
          }}
        >
          Track Info
        </Button>

        <Button
          class="text-white bg-black hover:bg-gray-600 mb-28 w-40 text-xl"
          onclick={() => {
            navigate("/forget");
          }}
        >
          ??
        </Button>

        <Button
          class="text-white bg-black hover:bg-gray-600 mb-16 w-40 text-xl"
          onclick={() => {
            navigate("/forget");
          }}
        >
          ??
        </Button>

      </Flex> */}
    </div>
  );
}