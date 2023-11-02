import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { uriHome } from "../utils/uri";

export default function ForgetPage() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="center" alignItems="center" class="h-full text-center">
        <div>
          <h2>Forgot Your Password?</h2>
          <p>Don't worry! We can help you reset it.</p>
          <p>Please contact support to get your password reset.</p>
          
          {/* Assuming you want to add a support email or a link to a support page */}
          <p>
            Send us an email at <a href="orderowl@jpkit.us" class="underline">orderowl@jpkit.us </a>
            or call us at <strong>1-800-123-4567</strong>.
          </p>

          <div
            class="underline cursor-pointer mt-4"
            onClick={() => {
              navigate(uriHome());
            }}
          >
            Return to Home Page
          </div>
        </div>
      </Flex>
    </>
  );
}
