import { createResource, createSignal, For } from "solid-js";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../common/components/table";
import { getTrackingBySearch } from "../utils/requests";

export default function Calendar() {
  const HEADER = "text-center border-2 border-black";

  const [today] = createSignal(String(new Date().getDate()));
  const [month] = createSignal(String(new Date().toLocaleDateString("default", { month: "long" })));
  const [calendar] = createSignal(getCalendar());

  const [day, setDay] = createSignal("");

  const [packages] = createResource(
    () => ({
      searchText: day()
    }),
    getTrackingBySearch
  );

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
                    <TableCell class="text-left border-2 border-black">
                      <div class={today() === day ? "text-red-500 font-bold" : ""}>
                        <p>{day}</p>
                      </div>
                      <div class="h-11 space-y-1 overflow-y-scroll">
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

function CalendarEvent(props: {
  text: string
}) {
  return (
    <>
      <div class="bg-[#D7B19D] rounded-full px-1.5 mr-1">
        <p>{props.text}</p>
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