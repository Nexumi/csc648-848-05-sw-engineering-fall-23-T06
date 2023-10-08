import { Input } from "../common/components/input";

export default function TextInput(props: any) {
  return (
    <>
    <div class="w-full space-y-2">
      <div class="">
        <p>{props.header}</p>
      </div>
      <Input
        type={props.type}
      />
    </div>
    </>
  );
}