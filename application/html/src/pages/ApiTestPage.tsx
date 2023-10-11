import { For, createEffect, createResource } from "solid-js";
import { getAllTest } from "../utils/requests";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";

export default function ApiTestPage() {
  const [data] = createResource(getAllTest);

  createEffect(() => {
    console.log(data());
  });

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              ID
            </TableHead>
            <TableHead>
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
      <TableRow>
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