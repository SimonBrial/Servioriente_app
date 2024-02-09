"use client";

import { useRef } from "react";
import { ActionIcon, Flex, Title, useMantineColorScheme } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { HiOutlineClock } from "@/icons";

export default function TimeSelect({ label }: { label: string }): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);
  const { colorScheme } = useMantineColorScheme();

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <HiOutlineClock style={{ color: "#696969" }} />
    </ActionIcon>
  );

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>{label}</Title>
      <TimeInput
        ref={ref}
        leftSection={pickerControl}
        styles={(theme) => ({
          root: { width: "200px" },
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
        })}
      />
    </Flex>
  );
}
