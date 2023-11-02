import { Show, splitProps } from "solid-js";
import { Input } from "../common/components/input";

export default function TextInput(props: {
  header?: string,
  name: string,
  type: string,
  class?: string,
  onFocusOut?: any
}) {
  const [, rest] = splitProps(props, ["header", "name", "type"])

  return (
    <>
    <div class="w-full space-y-2">
      <Show when={props.header}>
        <div class="">
          <p>{props.header}</p>
        </div>
      </Show>
      <Input
        name={props.name}
        type={props.type}
        {...rest}
      />
    </div>
    </>
  );
}