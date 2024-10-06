import InsideContainer from "@/components/container/InsideContainer";

export const CalendarContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <InsideContainer offset={115} withBackground={false} withBorder={false} key={crypto.randomUUID()}>
      {children}
    </InsideContainer>
  );
};
