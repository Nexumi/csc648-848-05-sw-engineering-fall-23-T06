import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { uriHome } from "../utils/uri";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="center" class="h-full text-center">
        <div>
          <p>404 Page Not Found</p>
          <div
            class="underline cursor-pointer"
            onClick={() => {
              navigate(uriHome());
            }}
          >
            <p>
              Return to Home Page
            </p>
          </div>
        </div>
      </Flex>
    </>
  );
}