import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";

export default function ForgetPage() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="center" class="h-full text-center">
        <div>
          <p>(WIP) Page not yet constructed</p>
          <div class="underline">
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Return to Home Page
            </p>
          </div>
        </div>
      </Flex>
    </>
  );
}