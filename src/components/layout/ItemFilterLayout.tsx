"use client";

import {
  Checkbox,
  Flex,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "@/styles/general-styles.module.css";
import { GeneralDivider } from "../GeneralDivider";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export const ItemFilterLayout = ({ label }: { label: string }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Title
          order={5}
          style={{ color: colorScheme === "light" ? "#696969" : "#f8f8f8" }}
        >
          {capitalizeFirstLetter(label)}
        </Title>
        <Checkbox
          value={label}
          aria-label={label}
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          classNames={{
            input:
              colorScheme === "light"
                ? classes.checkbox
                : classes.checkbox_dark,
          }}
        />
      </Flex>
      <GeneralDivider orientation="horizontal" />
    </Stack>
  );
};
