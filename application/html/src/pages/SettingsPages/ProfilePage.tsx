import { useNavigate } from "@solidjs/router";
import Cookies from "js-cookie";
import { createSignal, Show } from "solid-js";
import toast from "solid-toast";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, Dialog } from "../../common/components/dialog";
import { Flex } from "../../common/layout/flex";
import { me } from "../../utils/me";
import { deleteUserById } from "../../utils/requests";
import { uriHome } from "../../utils/uri";
import { Input } from "../../common/components/input";
import { Button } from "../../common/components/button";

export default function ProfilePage() {
  const navigate = useNavigate();

  const NO_FOCUS = "focus-visible:ring-0 focus-visible:ring-offset-0";

  const [deleting, setDeleting] = createSignal(false);
  
  return (
    <>
      <div class="w-full space-y-4">
        <Flex justifyContent="center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-48 h-48"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Flex>
        <div>
          <p>First Name</p>
          <Input type="text" readonly class={NO_FOCUS} placeholder={me().first_name} />
        </div>
        <div>
          <p>Last Name</p>
          <Input type="text" readonly class={NO_FOCUS} placeholder={me().last_name} />
        </div>
        <div>
          <p>Email</p>
          <Input type="text" readonly class={NO_FOCUS} placeholder={me().email} />
        </div>
        <Show when={Cookies.get("token")}>
          <Flex justifyContent="center">
            <Button
              class="text-white bg-red-600 hover:bg-red-400"
              onClick={() => {
                setDeleting(true);
              }}
            >
              Delete Account
            </Button>
          </Flex>
        </Show>
      </div>
      <Dialog open={deleting()}>
        <DialogContent class="bg-orange-50 border-2 border-black" hideCloseButton>
          <DialogHeader class="space-y-4">
            <DialogTitle>
              Are you sure?
            </DialogTitle>
            <DialogDescription>
              This action is irreversible.
            </DialogDescription>
            <Flex class="gap-x-4">
              <Button
                class="text-white bg-red-600 hover:bg-red-400 grow"
                onClick={() => {
                  setDeleting(false);
                }}
              >
                Cancel
              </Button>
              <Button
                class="text-white bg-black hover:bg-gray-600 grow"
                onClick={() => {
                  deleteUserById({ id: me().id })
                    .then((res) => {
                      toast.success("Successfully deleted your account!\nWe hope to see you again.");
                      Cookies.remove("token");
                      navigate(uriHome());
                    })
                    .catch((error) => {
                      toast.error("Something went wrong while trying to process your request.");
                    })
                }}
              >
                Confirm
              </Button>
            </Flex>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}