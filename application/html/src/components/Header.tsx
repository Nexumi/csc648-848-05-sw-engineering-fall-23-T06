import { useNavigate } from "@solidjs/router";
import temp_logo from "../assets/logos/temp_logo.png";
import { Flex } from "../common/layout/flex";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <>
      <header class="text-center pb-6">
        <Flex justifyContent="center" class="pb-2">
          <img
            src={temp_logo}
            class="w-40"
            onClick={() => {
              navigate("/");
            }}
          />
        </Flex>
        <h1> Software Engineering class SFSU </h1>
        <h1> Fall 2023 </h1>
        <h1> Section 05 </h1>
        <h1> Team 06 </h1>
      </header>
    </>
  );
}