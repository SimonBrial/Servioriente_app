"use client";

import { Select, Flex, Title, useMantineColorScheme } from "@mantine/core";

export default function SelectInput({
  periodeArr = ["Cumpleaños", "Recordatorios", "Por hacer"],
  title,
  inputSize
}: {
  periodeArr: string[];
  title: string;
  inputSize: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={5}>{title}</Title>
      <Select
        placeholder={title}
        data={periodeArr}
        maxDropdownHeight={200}
        allowDeselect
        w={inputSize}
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
        })}
      />
    </Flex>
  );
}
