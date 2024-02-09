"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import {
  useMantineColorScheme,
  Stack,
  Title,
  Badge,
  Flex,
} from "@mantine/core";
// import dayjs from "@/utils/dayjs";

interface ColumnEventTitleProps {
  dayNumber: number;
  containerDate: string | null | undefined;
  containerEvents: number;
}

export const ColumnEventTitle = ({
  containerEvents,
  containerDate,
  dayNumber,
}: ColumnEventTitleProps) => {
  const { colorScheme } = useMantineColorScheme();
  /* console.log(dayjs); */
  return (
    <Stack gap={0} px={5}>
      <Flex gap={4} align={"center"}>
        <Title order={3}>Dia {dayNumber}:</Title>
        <Title
          order={3}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[6]}`
                  : `${theme.colors.darkTheme[1]}`,
            },
          })}
        >
          {containerDate?.split("/")[0]}/ {containerDate?.split("/")[1]}
          {/* Ajustar para que se vea el nombre del mes y no el numero */}
        </Title>
        {containerEvents > 0 ? (
          <Badge
            radius={"sm"}
            styles={(theme) => ({
              root: {
                marginLeft: "0.5rem",
                backgroundColor:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[6]}`
                    : `${theme.colors.darkTheme[1]}`,
              },
            })}
          >
            {containerEvents}
          </Badge>
        ) : (
          <></>
        )}
      </Flex>
      <GeneralDivider />
    </Stack>
  );
};
