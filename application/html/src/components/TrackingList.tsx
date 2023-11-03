import { For, Match, Switch } from "solid-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";
import { A, useNavigate, useSearchParams } from "@solidjs/router";
import { uriTracking } from "../utils/uri";
import { getURL, sortBy } from "../utils/util";
import { Flex } from "../common/layout/flex";

export default function TrackingList(props: {
  display: any,
  limit?: number,
  sort?: Boolean
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function updateSort(key: string) {
    if (searchParams.key === key) {
      const direction = Number(searchParams.direction) + 1;
      if (direction === 2) {
        setSearchParams({key: null, direction: null});
      } else {
        setSearchParams({direction: direction});
      }
    } else {
      setSearchParams({key: key, direction: 0});
    }
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <HeaderTitle
                title="Retailer"
                key="retailer"
                current={searchParams.key === "retailer"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
            <TableHead>
              <HeaderTitle
                title="Carrier"
                key="carrier"
                current={searchParams.key === "carrier"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
            <TableHead>
              <HeaderTitle
                title="ETA"
                key="eta"
                current={searchParams.key === "eta"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
            <TableHead>
              <HeaderTitle
                title="Status"
                key="status"
                current={searchParams.key === "status"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
            <TableHead>
              <HeaderTitle
                title="Location"
                key="location"
                current={searchParams.key === "location"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
            <TableHead>
              <HeaderTitle
                title="Address"
                key="address"
                current={searchParams.key === "address"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
            <TableHead>
              <HeaderTitle
                title="Tracking Number"
                key="trackingNumber"
                current={searchParams.key === "trackingNumber"}
                direction={searchParams.direction}
                update={updateSort}
                sort={!!props.sort}
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={sortBy((props.limit ? props.display?.slice(0, props.limit) : props.display), searchParams.key, searchParams.direction)}>
            {(pack) => 
              <TrackingRow
                packageId={pack.id}
                retailer={pack.retailer}
                carrier={pack.carrier}
                eta={pack.eta}
                status={pack.status}
                location={pack.location}
                address={pack.address}
                trackingNumber={pack.trackingNumber}
              />
            }
          </For>
        </TableBody>
      </Table>
    </>
  );
}

function HeaderTitle(props: {
  title: string,
  key: string,
  current: boolean,
  direction?: string | number,
  update: Function,
  sort: Boolean
}) {
  return (
    <>
      <Switch>
        <Match when={props.sort}>
          <Flex
            justifyContent="start"
            class="cursor-pointer select-none gap-x-1"
            onClick={() => {
              props.update(props.key);
            }}
          >
            {props.title}
            <Switch>
              <Match when={!props.current}>
                <div class="w-2 h-2" />
              </Match>
              <Match when={Number(props.direction) === 0}>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-2 h-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </Match>
              <Match when={Number(props.direction) === 1}>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-2 h-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Match>
            </Switch>
          </Flex>
        </Match>
        <Match when={!props.sort}>
          {props.title}
        </Match>
      </Switch>
    </>
  );
}

function TrackingRow(props: {
  packageId?: string | number,
  retailer: string,
  carrier: string,
  eta: string,
  status: string,
  location: string,
  address: string,
  trackingNumber: string
}) {
  const navigate = useNavigate();

  const HOVER = props.packageId !== undefined ? "hover:bg-gray-100 cursor-pointer" : "";

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
          <A
            href={getURL(props.retailer || "")}
            target="_blank"
            class="text-blue-700 underline"
            onClick={() => {
              window.event?.stopPropagation();
            }}
          >
            {props.retailer}
          </A>
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
        <TableCell>
          {props.address}
        </TableCell>
        <TableCell>
          {props.trackingNumber}
        </TableCell>
      </TableRow>
    </>
  );
}