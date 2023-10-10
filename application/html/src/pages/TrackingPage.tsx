import { useNavigate } from "@solidjs/router";
import { Button } from "../common/components/button";
import { Flex } from "../common/layout/flex";
import logo from "../assets/logos/logo.png";
import SearchIcon from "../assets/logos/SearchIcon.png";
import GearIcon from "../assets/logos/GearIcon.png";
import BellIcon from "../assets/logos/BellIcon.png";


export default function TrackingPage() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    window.alert("Not yet implemented");
  };
  const handleSystemClick = () => {
    window.alert("Not yet implemented");
  };
  const handleNotificationClick = () => {
    window.alert("Not yet implemented");
  };
  return (
    <div class="h-full p-0 relative">


      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 flex items-center">
        <span class="text-xl mr-2">Search:</span>
        <input class="w-64 px-4 py-2 rounded-full text-gray-600 focus:outline-none border focus:border-gray-600" type="text" placeholder="Search..."/>
        <button class="ml-2 px-2 py-2 focus:outline-none rounded-full" onClick={handleSearchClick}>
          <img src={SearchIcon} alt="Search" class="w-6 h-6" />
        </button>
      </div>

      <div class="absolute top-2 right-12 z-10">
        <button onClick={handleNotificationClick}>
          <img src={BellIcon} alt="Notifications" class="w-12 h-12" />
        </button>
      </div>

      <div class="absolute top-4 right-4 z-10">
        <button onClick={handleSystemClick}>
          <img src={GearIcon} alt="Settings" class="w-8 h-8" />
        </button>
      </div>

      {/*<div class="h-0.5 w-64 bg-black absolute left-0 top-30"></div>
      <div class="h-0.5 w-64 bg-black absolute left-0 top-64"></div>
      <div class="h-0.5 w-64 bg-black absolute left-[-46px] top-[410px]"></div>
      <div class="h-0.5 w-64 bg-black absolute left-[-46px] top-[560px]"></div>
      <div class="h-0.5 w-64 bg-black absolute left-[-46px] top-[710px]"></div>


      <div class="w-0.5 h-full bg-black absolute inset-y-0 left-52"></div>*/}

      <Flex flexDirection="col" alignItems="start" class="relative">
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

      </Flex>
    </div>
  );
}