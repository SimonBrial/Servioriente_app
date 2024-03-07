import { Flex, Stack } from "@mantine/core";
import React from "react";
import { IoChevronDownOutline, LuChevronsUpDown } from "@/icons";

export default function HeaderRowItem({
  label,
  sorted,
}: {
  label: string;
  sorted: boolean;
}) {
  return (
    <Flex align={"center"} justify={"center"} gap={6} >
      {label}
      <Stack>{sorted ? <IoChevronDownOutline /> : <LuChevronsUpDown />}</Stack>
    </Flex>
  );
}
