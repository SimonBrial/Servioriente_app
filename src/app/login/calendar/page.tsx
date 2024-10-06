import { CalendarContainer } from "./CalendarContainer";
import { CalendarGridView } from "./calendarLayout/CalendarGridView";

export default function page(): JSX.Element {
  return (
    <CalendarContainer>
      <CalendarGridView />
    </CalendarContainer>
  );
}
