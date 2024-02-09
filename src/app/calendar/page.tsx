import { CalendarContainer } from "./CalendarContainer";
import { CalendarView } from "./calendarLayout/CalendarView";

export default function page(): JSX.Element {
  return (
    <CalendarContainer>
      <CalendarView />
    </CalendarContainer>
  );
}
