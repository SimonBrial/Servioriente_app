"use client";

import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Title, Flex, useMantineColorScheme } from "@mantine/core";
import { HiOutlineCalendar } from "../../icons";

export function CalendarInput({
  withTitle,
  title,
  width,
}: {
  withTitle: boolean;
  title: string;
  width: string;
}): JSX.Element {
  const [value, setValue] = useState<Date | null>(null);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"} w={"100%"}>
      <Title order={4}>{withTitle ? <>{title}</> : <></>}</Title>
      <DateInput
        w={width}
        size="sm"
        leftSection={<HiOutlineCalendar />}
        value={value}
        clearable
        onChange={setValue}
        placeholder={title}
        styles={(theme) => ({
          input: {
            cursor: "pointer",
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: colorScheme === "light" ? "#696969" : "#696969",
          },
          section: {
            color: colorScheme === "light" ? "#696969" : "#696969",
          },
        })}
      />
    </Flex>
  );
}
