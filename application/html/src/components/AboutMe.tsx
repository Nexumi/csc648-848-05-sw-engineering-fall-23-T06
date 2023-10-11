import { Show } from "solid-js";
import { Card } from "../common/components/card";
import { Flex } from "../common/layout/flex";

export default function AboutMe(props: {
  img?: string,
  name?: string,
  description?: string
}) {
  return (
    <>
      <Flex justifyContent="center">
        <Card class="p-5 w-full max-w-sm text-center border-black space-y-2">
          <Show when={props.img}>
            <Flex justifyContent="center">
              <img
                src={props.img}
                class="w-full max-w-xs h-full max-h-80 rounded-full object-cover aspect-square"
              />
            </Flex>
          </Show>
          <Show when={props.name}>
            <div class="font-bold">
              <p>{props.name}</p>
            </div>
          </Show>
          <Show when={props.description}>
            <p>{props.description}</p>
          </Show>
        </Card>
      </Flex>
    </>
  );
}