import { Card } from "../common/components/card";
import { Flex } from "../common/layout/flex";

export default function AboutMe(props: any) {
  return (
    <>
      <Flex justifyContent="center">
        <Card class="p-5 w-full max-w-sm text-center border-black space-y-2">
          <Flex justifyContent="center">
            <img
              src={props.img}
              class="w-full max-w-xs h-full max-h-80 rounded-full object-cover"
            />
          </Flex>
          <div class="font-bold">
            <p>{props.name}</p>
          </div>
          <p>{props.description}</p>
        </Card>
      </Flex>
    </>
  );
}