import { useNavigate } from "@solidjs/router";
import temp_logo from "../assets/temp_logo.png";
import { Flex } from "../common/layout/flex";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="center" class="pb-8">
        <img
          src={temp_logo}
          class="w-40"
          onClick={() => {
            navigate("/");
          }}
        />
      </Flex>
    </>
  );
}