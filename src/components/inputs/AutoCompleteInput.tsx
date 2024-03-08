"use client";

import {
  Autocomplete,
  Center,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { HiOutlineSearch } from "../../icons";
import classes from "@/styles/generalStyles.module.css";

export function AutoCompleteInput(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex
      className={
        colorScheme === "light"
          ? classes.container
          : classes.container_dark
      }
      align={"center"}
    >
      <Center className={classes.icon}>
        <HiOutlineSearch />
      </Center>
      <Autocomplete
        size="xs"
        style={{ width: "100%" }}
        maxDropdownHeight={100}
        placeholder="Buscar Informacion del usuario"
        data={["Mario Hurtado", "Simon Briceño", "Manuel"]}
        styles={(theme) => ({
          input: {
            backgroundColor:
              colorScheme === "light"
                ? "#FFFFFF"
                : `${theme.colors.darkTheme[7]}`,
            color: `${theme.colors.lightTheme[5]}`,
            borderColor:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[3]}`
                : `1px solid ${theme.colors.lightTheme[2]}`,
          },
        })}
        classNames={{
          input:
            colorScheme === "light"
              ? classes.input_placeholder
              : classes.input_placeholder_dark,
        }}
      />
    </Flex>
  );
}
