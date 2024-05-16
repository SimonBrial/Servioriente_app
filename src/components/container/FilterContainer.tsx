"use client";

import {
  useMantineColorScheme,
  Container,
  Stack,
  Title,
  Flex,
  Badge,
} from "@mantine/core";
import { PillFilter } from "../PillFilter";
import { GeneralDivider } from "../GeneralDivider";
import { useDataBaseStore } from "@/store/db-store";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { HiOutlineTrash } from "@/icons";

export function FilterContainer(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const { filterFields, fnDeleteAllPillFilter } = useDataBaseStore();
  return (
    <Container
      style={{
        maxWidth: "100%",
        width: "100%",
        padding: "0",
      }}
    >
      <Stack style={{ width: "100%" }} gap={4}>
        <Flex justify="space-between" align="center">
          <Flex justify="flex-start" align="center" gap={"xs"}>
            <Title
              order={5}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `1px solid ${theme.colors.lightTheme[2]}`
                      : `1px solid ${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Filter:{" "}
            </Title>
            {filterFields.length > 0 ? (
              <Flex gap={0} style={{ width: "74vw" }}>
                {filterFields.map((field, index) => {
                  console.log(field, field);
                  return (
                    <PillFilter
                      tag={capitalizeFirstLetter(field)}
                      key={index}
                    />
                  );
                })}
              </Flex>
            ) : null}
          </Flex>
          <Badge
            onClick={() => fnDeleteAllPillFilter()}
            variant="light"
            color="blue"
            radius="sm"
            style={{
              color: "#FF0000",
              backgroundColor: "rgba(255, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            rightSection={
              <HiOutlineTrash
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
            }
          >
            Borrar Filtros
          </Badge>
        </Flex>
        <GeneralDivider orientation="horizontal" />
      </Stack>
    </Container>
  );
}
