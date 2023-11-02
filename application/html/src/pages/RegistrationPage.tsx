import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import TextInput from "../components/TextInput";
import { createForm } from "@felte/solid";
import { Button } from "../common/components/button";
import { uriHome, uriLogin } from "../utils/uri";
import toast from "solid-toast";
import { postRegistration } from "../utils/requests";
import { Show, createSignal } from "solid-js";
import { z } from "zod";
import { validator } from "@felte/validator-zod";
import { ValidationMessage, reporter } from "@felte/reporter-solid";


export default function RegistrationPage() {
  const navigate = useNavigate();

  const NO_RING = "border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0";

  const RegistrationSchema = z.object({
    firstName: z.string().min(1, { message: "Please enter your first name" }),
    lastName: z.string().min(1, { message: "Please enter your last name" }),
    email: z.string().email({ message: "Please enter an email address" }),
    password: z.string().min(1, { message: "Please enter a password" }),
  })

  const [confirmSame, setConfirmSame] = createSignal(true);

  const { form, data } = createForm({
    onSubmit(values) {
      const params = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password
      }
      if (values.password === values.confirmPassword) {
        postRegistration(params)
          .then((res) => {
            toast.success("Registration successful!");
            navigate(uriLogin());
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    schema: RegistrationSchema,
    validateOn: "onBlur",
    extend: [validator({ schema: RegistrationSchema }), reporter]
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
                <p>Welcome!</p>
              </div>
              <form use:form>
                <div class="w-full space-y-5 p-16">
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="firstName"
                      type="text"
                      header="First Name"
                      class={NO_RING}
                    />
                  </div>
                  <ValidationMessage for="firstName">
                    {(messages) =>
                      messages?.map((message) => (
                        <div class="!mt-0 text-red-500">{message}</div>
                      ))
                    }
                  </ValidationMessage>
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="lastName"
                      type="text"
                      header="Last Name"
                      class={NO_RING}
                    />
                  </div>
                  <ValidationMessage for="lastName">
                    {(messages) =>
                      messages?.map((message) => (
                        <div class="!mt-0 text-red-500">{message}</div>
                      ))
                    }
                  </ValidationMessage>
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="email"
                      type="text"
                      header="Email"
                      class={NO_RING}
                    />
                  </div>
                  <ValidationMessage for="email">
                    {(messages) =>
                      messages?.map((message) => (
                        <div class="!mt-0 text-red-500">{message}</div>
                      ))
                    }
                  </ValidationMessage>
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="password"
                      type="password"
                      header="Password"
                      class={NO_RING}
                    />
                  </div>
                  <ValidationMessage for="password">
                    {(messages) =>
                      messages?.map((message) => (
                        <div class="!mt-0 text-red-500">{message}</div>
                      ))
                    }
                  </ValidationMessage>
                  <div class="border-b-2 border-black p-0">
                    <TextInput
                      name="confirmPassword"
                      type="password"
                      header="Confirm Password"
                      class={NO_RING}
                      onFocusOut={() => {
                        setConfirmSame(data().password === data().confirmPassword);
                      }}
                    />
                  </div>
                  <Show when={!confirmSame()}>
                    <div class="!mt-0 text-red-500">Passwords must match</div>
                  </Show>
                </div>
                <Flex>
                  <div>
                    <p>
                      Already have an account? 
                      <span
                        class="underline cursor-pointer"
                        onClick={() => {
                            navigate(uriLogin());
                          }
                        }
                      >
                        Login
                      </span>
                    </p>
                  </div>
                  <Button
                    type="submit"
                    class="relative overflow-visible"
                    onClick={() => {
                      setConfirmSame(data().password === data().confirmPassword);
                    }}
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