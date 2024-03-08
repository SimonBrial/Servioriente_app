import { GeneralDivider } from "@/components/GeneralDivider";
import { BtnColorPicker } from "@/components/buttons/BtnColorPicker";
import { Flex, Stack, Text } from "@mantine/core";
import React from "react";

export const ColorThemeSelection = () => {
  const colorArr: string[] = [
    "#F06418",
    "#FFA903",
    "#D9D02F",
    "#2BDD66",
    "#4F23C0",
    "#6B31B2",
    "#115dfe",
    "#C02ADF",
    "#F018E8",
    "#F0185C",
  ];

  function colorPickerGenerator(colorArr: string[]) {
    return colorArr.map((color, index) => (
      <BtnColorPicker color={color} key={index} />
    ));
  }

  return (
    <Stack gap={4}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Color del Tema</Text>
        <Flex gap={2} align={"center"}>
          {colorPickerGenerator(colorArr)}
        </Flex>
      </Flex>
      <GeneralDivider />
    </Stack>
  );
};
