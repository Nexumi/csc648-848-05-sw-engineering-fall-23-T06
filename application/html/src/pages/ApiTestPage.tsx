import { For, createEffect, createResource } from "solid-js";
import { getAllTest, postTest } from "../utils/requests";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";
import { Input } from "../common/components/input";
import { createForm } from "@felte/solid";
import toast from "solid-toast";

export default function ApiTestPage() {
  const [data, { refetch }] = createResource(getAllTest);

  createEffect(() => {
    console.log(data());
  });

  const { form, reset } = createForm({
    onSubmit(values) {
      if (values.word) {
        postTest(values)
          .then((data) => {
            if (data.status === 201) {
              toast.success("Successfully posted word!");
              reset();
              refetch();
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong while trying to post your word.");
          })
      }
    }
  });

  return (
    <>
      <form use:form>
        <Input name="word" type="text" class="mt-4 text-center" placeholder="Add new word" />
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="text-center">
              ID
            </TableHead>
            <TableHead class="text-center">
              Word
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={data()}>
            {(test) => 
              <TestRow
                id={test.id}
                word={test.word}
              />
            }
          </For>
        </TableBody>
      </Table>
    </>
  );
}

function TestRow(props: {
  id: string | number,
  word: string
}) {
  return (
    <>
      <TableRow class="text-center">
        <TableCell>
          {props.id}
        </TableCell>
        <TableCell>
          {props.word}
        </TableCell>
      </TableRow>
    </>
  );
}