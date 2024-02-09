"use client";

import { RegisterInfoProps } from "@/interface/interface";
import { Flex, Divider, Title, useMantineColorScheme } from "@mantine/core";

export default function RegisterInfo({
  keyInput,
  valueInput,
}: RegisterInfoProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div style={{ marginBottom: "-1.5rem" }}>
      <Flex
        justify={"space-between"}
        style={{ color: colorScheme === "light" ? "#696969" : "#f8f8f8" }}
      >
        <Title order={5}>{keyInput}</Title>
        <Title order={5}>{valueInput}</Title>
      </Flex>
      <Divider
        my="sm"
        color={colorScheme === "light" ? "#696969" : "#f8f8f8"}
      />
    </div>
  );
}
