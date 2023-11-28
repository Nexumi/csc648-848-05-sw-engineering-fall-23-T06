import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import TextInput from "../components/TextInput";
import { createForm } from "@felte/solid";
import { Button } from "../common/components/button";
import { uriDashboard, uriForget, uriHome, uriRegistration } from "../utils/uri";
import toast from "solid-toast";
import { getLogin } from "../utils/requests";
import { me, setMe } from "../utils/me";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../common/components/dialog";
import { For, createSignal } from "solid-js";
import loginImage from "../assets/appImages/loginImage.jpeg";

export default function LoginPage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = createSignal(false);

  const NO_RING = "border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0";

  const { form } = createForm({
    onSubmit(values) {
      const params = {
        email: values.email,
        password: values.password,
        // type: values.accountType
      }
      getLogin(params)
        .then((res) => {
          setMe(res.data[0]);
          toast.success(`Welcome back, ${me().first_name} ${me().last_name}!`);
          navigate(uriDashboard());
        })
        .catch((err) => {
          toast.error("Invalid credentials.");
        })
    }
  });

  return (
    <>
      <Flex class="h-full">
        <div class="h-full w-1/2 p-16">
          <Flex
            justifyContent="center"
            class="text-8xl font-thin cursor-pointer"
            onClick={() => {
              navigate(uriHome());
            }
          }
          >
            <p>OrderOwl</p>
          </Flex>
          <Flex class="h-full w-full">
            <div class="w-full">
              <div class="text-xl font-bold">
                <p>Welcome Back!</p>
              </div>
              <form use:form>
                <div class="w-full space-y-5 p-16">
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="email"
                      type="text"
                      header="Email/Username"
                      placeholder="youremail@mail.com"
                      class={NO_RING}
                    />
                  </div>
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="password"
                      type="password"
                      header="Password"
                      placeholder="Password"
                      class={NO_RING}
                    />
                  </div>
                </div>
                <Flex>
                  <div>
                    <p>
                      Need an account? 
                      <span
                        class="underline cursor-pointer"
                        onClick={() => {
                            navigate(uriRegistration());
                          }
                        }
                      >
                        Register
                      </span>
                    </p>
                    <p
                      class="underline cursor-pointer"
                      onClick={() => {
                          navigate(uriForget());
                        }
                      }
                    >
                      Forget Password
                    </p>
                  </div>
                  
                  <Button
                    type="submit"
                    class="relative overflow-visible"
                  >
                    <div
                      class="border-2 border-black rounded-full p-1"
                    >
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
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                    </div>
                    <span class="ml-1 text-2x1">
                      Submit
                    </span>
                  </Button>
                </Flex>
              </form>
            </div>
          </Flex>



        </div>
        <Flex>
            <img src={loginImage} />
        </Flex>



      </Flex>
      <Dialog open={isOpen()}>
        <DialogContent class="bg-orange-50 border-2 border-black" hideCloseButton>
          <DialogHeader class="space-y-4">
            <DialogTitle class="text-center text-3xl">
              Select Account
            </DialogTitle>
            <For each={[...Array(2)]}>
              {() => (
                <Flex
                  class="p-2 rounded border-2 border-black cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => {
                    toast.error("Not Yet Implemented!")
                  }}
                >
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div class="text-center">
                    <div class="underline">
                      <p>Account Name</p>
                    </div>
                    <p>User User</p>
                  </div>
                  <div class="text-center">
                    <div class="underline">
                      <p>Account Type</p>
                    </div>
                    <p>Personal</p>
                  </div>
                </Flex>
              )}
            </For>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}