import { A } from "@solidjs/router";
import { Flex } from "../common/layout/flex";

export default function PageNotFound() {
  return (
    <>
      <Flex justifyContent="center" class="h-full text-center">
        <div>
          <p>404 Page Not Found</p>
          <div class="underline">
            <A
              href="/"
            >
              Return to Home Page
            </A>
          </div>
        </div>
      </Flex>
    </>
  );
}