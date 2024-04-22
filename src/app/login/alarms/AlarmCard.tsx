"use client";

import { Container, Divider, Stack, Title, Flex, Text } from "@mantine/core";
import AlarmCardDate from "./AlarmCardDate";
import { useHover } from "@mantine/hooks";
import BtnAlarmAction from "./buttons/BtnAlarmAction";
import { AlarmCardArray } from "@/interface/interface";

interface AlarmCardProps extends AlarmCardArray {
  themeColor: string;
}

export default function AlarmCard({
  description,
  themeColor,
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
      p={10}
      style={{
        border: `1px solid ${themeColor}`,
        width: "100%",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: "#FFFF",
      }}
    >
      <Stack gap={4}>
        <Flex
          align={"center"}
          justify={"space-between"}
          styles={{ root: { color: `${"#696969"}` } }}
        >
          <Stack gap={1} w={"95%"}>
            <Flex align={"center"} gap={5}>
              <Text size="1.2rem">🎂</Text>
              <Title
                order={6}
                styles={(theme) => ({
                  root: {
                    color: `${hovered ? themeColor : "#696969"}`,
                    transition: "color 0.3s ease-in-out",
                  },
                })}
              >
                {title}
              </Title>
            </Flex>
            <Divider
              size="md"
              styles={(theme) => ({ root: { borderColor: themeColor } })}
            />
          </Stack>
          <BtnAlarmAction id={id} themeColor={themeColor} />
        </Flex>
        <AlarmCardDate
          themeColor={themeColor}
          key={crypto.randomUUID()}
          date={createdAt}
          hour={createHour}
          label="Creado"
          hover={hovered}
        />
        <AlarmCardDate
          themeColor={themeColor}
          key={crypto.randomUUID()}
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
