import { getVenezuelaState } from "@/utils/vzlaStateSelection";
import { Flex, Select, Title, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";

export const MunicipalitySelect = ({
  estado,
  inputSize,
}: {
  estado: string;
  inputSize: string;
}) => {
  const [value, setValue] = useState<string | null>("");
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex align={"center"} justify={"space-between"}>
      <Title order={4}>Municipio</Title>
      <Select
        w={inputSize}
        placeholder="Seleccione un Estado de Venezuela"
        data={getVenezuelaState(estado)}
        onChange={setValue}
        value={value}
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
          dropdown: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
          },
        })}
      />
    </Flex>
  );
};
