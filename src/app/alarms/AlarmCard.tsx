import { Container, Stack, Text } from "@mantine/core";
import AlarmCardTitle from "./AlarmCardTitle";
import AlarmCardDate from "./AlarmCardDate";
import { AlarmCardProps } from "../../interface/interface";
import { useHover } from "@mantine/hooks";

export default function AlarmCard({
  description,
  createHour,
  createdAt,
  forDate,
  forHour,
  title,
  id,
}: AlarmCardProps): JSX.Element {
  const { hovered, ref } = useHover();
  return (
    <Container
      ref={ref}
      id={id}
      p={10}
      style={{
        border: "1px solid red",
        width: "100%",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: "#FFFF",
      }}
    >
      <Stack gap={4}>
        <AlarmCardTitle label={title} hover={hovered} />
        <AlarmCardDate
          date={createdAt}
          hour={createHour}
          label="Creado"
          hover={hovered}
        />
        <AlarmCardDate
          date={forDate}
          hour={forHour}
          label="Para"
          hover={hovered}
        />
        <Container h={"2rem"} style={{ overflow: "hidden" }} p={0}>
          <Text
            styles={(theme) => ({
              root: {
                width: "100%",
                lineHeight: "16px",
                fontSize: "0.8rem",
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
          >
            {description}
          </Text>
        </Container>
      </Stack>
    </Container>
  );
}
