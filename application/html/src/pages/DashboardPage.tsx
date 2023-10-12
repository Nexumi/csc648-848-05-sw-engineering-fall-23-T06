import { useNavigate } from "@solidjs/router";
import { Flex } from "../common/layout/flex";
import { uriHome } from "../utils/uri";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../common/components/table";
import { For, createSignal } from "solid-js";

export default function DashboardPage() {
  const navigate = useNavigate();

  const HEADER = "text-center border-2 border-black";
  const CELL = "text-left border-2 border-black";
  const CELL_TODAY = "text-left border-2 border-black text-red-500 font-bold";

  const [today] = createSignal(String(new Date().getDate()));
  const [calendar] = createSignal(getCalendar());

  return (
    <>
      <Flex justifyContent="center" class="h-full">
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
      </Flex>
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