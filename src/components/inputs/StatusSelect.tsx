"use client";

import { Flex, Select, Title, useMantineColorScheme } from "@mantine/core";
import React from "react";

export const StatusSelect = ({ inputSize }: { inputSize: string }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={5}>Estatus</Title>
      <Select
        w={inputSize}
        placeholder="Estatus"
        data={[
          "Muy Importante",
          "Importante",
          "Normal",
          "Poco Importante",
          "Muy Poco Importante",
        ]}
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
};
