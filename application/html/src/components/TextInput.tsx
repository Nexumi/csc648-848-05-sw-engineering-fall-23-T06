import { Input } from "../common/components/input";

export default function TextInput(props: {
  header: string,
  name: string,
  type: string,
  class: string
}) {
  return (
    <>
    <div class="w-full space-y-2">
      <div class="">
        <p>{props.header}</p>
      </div>
      <Input
        name={props.name}
        type={props.type}
        class={props.class}
      />
    </div>
    </>
  );
}