"use client";

import { useMantineColorScheme, TextInput, Center, Flex } from "@mantine/core";
import { HiOutlineSearch } from "@/icons";
import classes from "@/styles/general-styles.module.css";
import { filterData } from "@/utils/filterData";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect } from "react";

interface AutoCompleteInputProps {
  fnSearchTerm: (term: string) => void;
  fnResults: (results: any[]) => void;
  term: string;
  dataFilter: any[];
}
export function AutoCompleteInput({
  fnSearchTerm,
  dataFilter,
  fnResults,
  term,
}: AutoCompleteInputProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const [debounced] = useDebouncedValue(term, 200);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    fnSearchTerm(term);
  };

  useEffect(() => {
    if (debounced) {
      // Realizar la búsqueda con el término debounced
      const filteredResults = filterData(dataFilter, debounced);
      fnResults(filteredResults);
    }
  }, [debounced, dataFilter]);

  return (
    <Flex
      className={
        colorScheme === "light" ? classes.container : classes.container_dark
      }
      align={"center"}
    >
      <Center className={classes.icon}>
        <HiOutlineSearch />
      </Center>
      <TextInput
        size="xs"
        /// defaultValue={value}
        value={term}
        onChange={handleSearch}
        style={{ width: "100%" }}
        placeholder="Buscar Informacion del usuario"
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
