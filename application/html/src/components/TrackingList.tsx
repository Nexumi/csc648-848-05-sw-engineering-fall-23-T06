import { For } from "solid-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";

export default function TrackingList(props: {
  display: any
}) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Website
            </TableHead>
            <TableHead>
              Carrier
            </TableHead>
            <TableHead>
              ETA
            </TableHead>
            <TableHead>
              Status
            </TableHead>
            <TableHead>
              Location
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={props.display}>
            {(pack) => 
              <TrackingRow
                website={pack.website}
                carrier={pack.carrier}
                eta={pack.eta}
                status={pack.status}
                location={pack.location}
              />
            }
          </For>
        </TableBody>
      </Table>
    </>
  );
}

function TrackingRow(props: {
  website: string,
  carrier: string,
  eta: string,
  status: string,
  location: string
}) {
  return (
    <>
      <TableRow>
        <TableCell>
          {props.website}
        </TableCell>
        <TableCell>
          {props.carrier}
        </TableCell>
        <TableCell>
          {props.eta}
        </TableCell>
        <TableCell>
          {props.status}
        </TableCell>
        <TableCell>
          {props.location}
        </TableCell>
      </TableRow>
    </>
  );
}