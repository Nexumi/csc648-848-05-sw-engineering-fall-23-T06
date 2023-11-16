import { createSignal, For } from "solid-js";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../common/components/table";

export default function Calendar() {
  const HEADER = "text-center border-2 border-black";
  const CELL = "text-left border-2 border-black";
  const CELL_TODAY = "text-left border-2 border-black text-red-500 font-bold";

  const [today] = createSignal(String(new Date().getDate()));
  const [month] = createSignal(String(new Date().toLocaleDateString("default", { month: "long" })));
  const [calendar] = createSignal(getCalendar());

  return (
    <>      
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
                      <div class="h-10 overflow-y-scroll">
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                        <p>test</p>
                      </div>
                    </TableCell>
                  }
                </For>
              </TableRow>
            }
          </For>
        </TableBody>
      </Table>
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