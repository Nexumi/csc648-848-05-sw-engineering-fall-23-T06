import { For } from "solid-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";
import { useNavigate } from "@solidjs/router";
import { uriTracking } from "../utils/uri";

export default function TrackingList(props: {
  display: any
  limit?: number
}) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Retailer
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
          <For each={props.limit ? props.display?.slice(0, props.limit) : props.display}>
            {(pack) => 
              <TrackingRow
                packageId={pack.id}
                retailer={pack.retailer}
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
  packageId?: string | number,
  retailer: string,
  carrier: string,
  eta: string,
  status: string,
  location: string
}) {
  const navigate = useNavigate();

  const HOVER = props.packageId !== undefined ? "hover:bg-gray-100" : "";

  return (
    <>
      <TableRow
        class={HOVER}
        onClick={() => {
          if (props.packageId !== undefined) {
            navigate(uriTracking(props.packageId));
          }
        }}
      >
        <TableCell>
          {props.retailer}
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