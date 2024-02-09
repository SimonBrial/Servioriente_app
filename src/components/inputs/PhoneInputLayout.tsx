"use client";

import {
  useMantineColorScheme,
  TextInput,
  Select,
  Title,
  Flex,
} from "@mantine/core";
import { BsTelephone } from "../../icons";

export default function PhoneInputLayout(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Title order={4}>Telefono</Title>
      <Flex gap={4}>
        <Select
          w={80}
          placeholder="****"
          data={["0424", "0412", "0426", "0414"]}
          styles={(theme) => ({
            input: {
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: `${theme.colors.lightTheme[3]}`,
            },
          })}
        />
        <TextInput
          w={150}
          leftSection={<BsTelephone />}
          placeholder="*** ** **"
          styles={(theme) => ({
            input: {
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: `${theme.colors.lightTheme[3]}`,
            },
          })}
        />
      </Flex>
    </Flex>
  );
}
