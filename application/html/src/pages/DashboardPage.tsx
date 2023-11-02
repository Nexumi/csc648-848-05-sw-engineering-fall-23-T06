import { useNavigate, useSearchParams } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { uriHome, uriRegistration } from "../utils/uri";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";
import { For, Show, createResource, createSignal } from "solid-js";
import TrackingList from "../components/TrackingList";
import { getAllTracking } from "../utils/requests";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../common/components/dialog";
import Cookies from "js-cookie";
import { Button } from "../common/components/button";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [packages] = createResource(getAllTracking);

  const HEADER = "text-center border-2 border-black";
  const CELL = "text-left border-2 border-black";
  const CELL_TODAY = "text-left border-2 border-black text-red-500 font-bold";

  const [today] = createSignal(String(new Date().getDate()));
  const [month] = createSignal(String(new Date().toLocaleDateString("default", { month: "long" })));
  const [calendar] = createSignal(getCalendar());

  const [firstTime, setFirstTime] = createSignal(Boolean(searchParams.guest));

  return (
    <>
      <Dialog open={!Cookies.get("user") && firstTime()}>
        <DialogContent class="bg-orange-50 border-2 border-black" hideCloseButton>
          <DialogHeader class="space-y-4">
            <DialogTitle class="text-center text-3xl">
              Welcome!
            </DialogTitle>
            <DialogDescription class="text-center">
              Feel free to try out our service, but consider creating an account
              to track your packages across devices. It's free to do so!
            </DialogDescription>
            <Flex class="gap-x-4">
              <Button
                class="text-white bg-black hover:bg-gray-600 grow"
                onClick={() => {
                  setFirstTime(false);
                }}
              >
                Continue as Guest
              </Button>
              <Button
                class="text-white bg-black hover:bg-gray-600 grow"
                onClick={() => {
                  navigate(uriRegistration());
                }}
              >
                Register a new account
              </Button>
            </Flex>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div class="space-y-4">
        <div class="text-center text-6xl">
          <p>Dashboard</p>
        </div>
        <div class="text-center text-3xl font-bold">
          <p>{month()}</p>
        </div>
        <Table class="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead class={HEADER}>
                Sunday
              </TableHead>
              <TableHead class={HEADER}>
                Monday
              </TableHead>
              <TableHead class={HEADER}>
                Tuesday
              </TableHead>
              <TableHead class={HEADER}>
                Wednesday
              </TableHead>
              <TableHead class={HEADER}>
                Thursday
              </TableHead>
              <TableHead class={HEADER}>
                Friday
              </TableHead>
              <TableHead class={HEADER}>
                Saturday
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={calendar()}>
              {(week) =>
                <TableRow>
                  <For each={week}>
                    {(day) => 
                      <TableCell class={today() === day ? CELL_TODAY : CELL}>
                        <p>{day}</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                      </TableCell>
                    }
                  </For>
                </TableRow>
              }
            </For>
          </TableBody>
        </Table>
        <div>
          <div class="text-3xl">
            <p>Arriving Soon:</p>
          </div>
          <TrackingList
            display={packages()?.sort((a: any, b: any) => (a.eta > b.eta) ? 1 : -1)}
            limit={2}
          />
        </div>
      </div>
    </>
  );
}

function getCalendar() {
  const month = new Date().toLocaleDateString("default", { month: "long" });
  const year = new Date().getFullYear();

  const week = ["", "", "", "", "", "", ""];
  const calendar = [];
  let currDate = new Date(`${month} 1 ${year}`);
  
  let currWeek = [...week];
  for (let i = 1; currDate.toLocaleDateString("default", { month: "long" }) === month; i++) {
    if (currDate.getDay() === 0 && currDate.getDate() !== 1) {
      calendar.push(currWeek);
      currWeek = [...week];
    }
    currWeek[currDate.getDay()] = String(i);
    currDate = new Date(`${month} ${i + 1} ${year}`);
  }

  calendar.push(currWeek);

  return calendar;
}