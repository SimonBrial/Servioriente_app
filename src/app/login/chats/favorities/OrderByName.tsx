"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import {
  useMantineColorScheme,
  Tooltip,
  Switch,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React from "react";

export const OrderByName = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={4}>
      <Flex align={"center"} justify={"space-between"}>
        <Text
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          Ordenar por:{" "}
        </Text>
        <Tooltip
          offset={{ mainAxis: 10, crossAxis: -4 }}
          label="Ordenar lista de contactos"
          position="right-start"
          arrowPosition="side"
          refProp="rootRef"
          color={colorScheme === "light" ? " #004EE5" : "#52A5E0"}
          arrowOffset={14}
          arrowSize={5}
          withArrow
          style={{ color: "white" }}
        >
          <Switch
            size="md"
            onLabel="Z→A"
            offLabel="A→Z"
            color={colorScheme === "light" ? " #004EE5" : "#52A5E0"}
          />
        </Tooltip>
      </Flex>
      <GeneralDivider orientation="horizontal" key={crypto.randomUUID()}/>
    </Stack>
  );
};
