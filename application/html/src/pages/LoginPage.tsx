import { A } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import TextInput from "../components/TextInput";

export default function LoginPage() {
  const NO_RING = "border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0";

  return (
    <>
      <Flex class="h-full">
        <div class="h-full w-1/2 p-16">
          <Flex justifyContent="center" class="text-8xl font-thin">
            <A
              href="/"
            >
              OrderOwl
            </A>
          </Flex>
          <Flex class="h-full w-full">
            <div class="w-full">
              <div class="text-xl font-bold">
                <p>Welcome Back!</p>
              </div>
              <div class="w-full space-y-5 p-16">
                <div class="border-b-2 border-black p-0">
                  <TextInput
                    type="email"
                    header="Email"
                    class={NO_RING}
                  />
                </div>
                <div class="border-b-2 border-black p-0">
                  <TextInput
                    type="password"
                    header="Password"
                    class={NO_RING}
                  />
                </div>
              </div>
              <Flex>
                <div class="underline">
                  <A
                    href="/forget"
                  >
                    Forget Password
                  </A>
                </div>
                <div
                  class="border-2 border-black rounded-full p-1"
                  onClick={
                    function() {
                      alert("(WIP) Not yet implemented");
                    }
                  }
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
        <div class="h-full w-1/2 p-16">
          <Flex justifyContent="center" class="h-full w-full border-4 border-black">
            <div class="text-9xl -rotate-45">
              <p>IMAGE</p>
            </div>
          </Flex>
        </div>
      </Flex>
    </>
  );
}