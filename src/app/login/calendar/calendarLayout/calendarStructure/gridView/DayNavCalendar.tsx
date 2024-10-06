"use client";

import { IoChevronBack, IoChevronForward } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  Container,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import btnClasses from "@/styles/btn-styles.module.css";
import { GeneralDivider } from "@/components/GeneralDivider";
import { months } from "@/data/calendarDaysAndMonth";
import { useCalendarStore } from "@/store/calendar-store";

export default function DayNavCalendar() {
  const { colorScheme } = useMantineColorScheme();
  const { currentMonth, currentYear, fnNextMonth, fnPrevMonth } =
    useCalendarStore();
  return (
    <Container style={{ maxWidth: "100%", width: "100%", padding: "0" }}>
      <Stack gap={4} style={{ width: "100%" }}>
        <Flex gap={10} align={"center"}>
          <Flex gap={4}>
            <UnstyledButton
              onClick={fnPrevMonth}
              variant="white"
              size={"lg"}
              classNames={{
                root:
                  colorScheme === "light"
                    ? btnClasses.btnMonth
                    : btnClasses.btnMonth_dark,
              }}
            >
              <Center>
                <IoChevronBack />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              onClick={fnNextMonth}
              variant="white"
              size={"lg"}
              classNames={{
                root:
                  colorScheme === "light"
                    ? btnClasses.btnMonth
                    : btnClasses.btnMonth_dark,
              }}
            >
              <Center>
                <IoChevronForward />
              </Center>
            </UnstyledButton>
          </Flex>
          <Text
            styles={(theme) => ({
              root: {
                fontSize: "1.5rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            {/* {months.find((month, index) =>
                  monthCount === index ? month : "",
                )}{" "}
                - {yearCount} */}
            {months[currentMonth]} {currentYear}
          </Text>
        </Flex>
        <GeneralDivider orientation="horizontal" />
      </Stack>
    </Container>
  );
}
