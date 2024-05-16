"use client";

import { useMantineColorScheme, TextInput, Center, Flex } from "@mantine/core";
import { HiOutlineSearch } from "@/icons";
import classes from "@/styles/general-styles.module.css";
import { useDataBaseStore } from "@/store/db-store";
import { filterData } from "@/utils/filterData";

export function AutoCompleteInput(): JSX.Element {
  const { searchTerm, setSearchTerm, setResults, data } = useDataBaseStore();
  const { colorScheme } = useMantineColorScheme();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Suponiendo que `data` es la colección de datos donde quieres buscar
    const filteredResults = filterData(data, term);
    setResults(filteredResults);
  };

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
        value={searchTerm}
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
