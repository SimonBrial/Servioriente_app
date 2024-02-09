import { verticalInput } from "@/interface/interface";
import { Flex, TextInput, Title } from "@mantine/core";
import React from "react";

export default function VerticalInputLayout({
  label,
  icon,
}: verticalInput): JSX.Element {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>{label}</Title>
      <TextInput
        styles={{ root: { width: "200px" } }}
        leftSectionPointerEvents="none"
        leftSection={icon}
        placeholder={label}
      />
    </Flex>
  );
}
