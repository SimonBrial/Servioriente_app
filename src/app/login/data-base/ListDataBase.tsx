/* eslint-disable indent */
"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Stack,
  Table,
  Flex,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "@/styles/list-styles.module.css";
import heightClasses from "@/styles/height-view.module.css";
import PaginationLayout from "./PaginationLayout";
// import HeaderRowItem from "./HeaderRowItem";
import BtnDelete from "@/components/buttons/BtnDelete";
import BtnSee from "@/components/buttons/BtnSee";
import UserDeleteLayout from "./UserDeleteLayout";
import UserDescriptionLayout from "./UserDescriptionLayout";
import { useDataBaseStore } from "@/store/db-store";
import BtnEditUser from "./buttons/BtnEditUser";
import StatusBadge from "@/components/badge/StatusBadge";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { ListDBProps } from "@/interface/interface";
import { filterDataByFields } from "@/utils/filterDataByFields";

export default function ListDataBase(): JSX.Element {
  // Reading the context from zustand store folder
  const { data, searchTerm, results, filterFields, defaultFiltersValue } =
    useDataBaseStore();

  const [scrolled, setScrolled] = useState(false);
  // const [sorted, setSorted] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const [showData, setShowData] = useState<ListDBProps[]>(data);
  const [filters, setFilters] = useState<string[]>(defaultFiltersValue);

  useEffect(() => {
    // Establece los datos mostrados basado en si searchTerm está vacío o no
    setShowData(searchTerm !== "" ? results : data);
    // Establece los filtros basado en la longitud de filterFields
    setFilters(filterFields.length ? filterFields : defaultFiltersValue);
  }, [searchTerm, data, results, filterFields, defaultFiltersValue]);

  function generateTableField(jsxElement: JSX.Element, value: string) {
    if (filters.includes(value)) {
      return jsxElement;
    }
    return null;
  }

  const rows = showData.map((element, index) => (
    <Table.Tr
      key={index}
      style={{ color: colorScheme === "light" ? "#000" : "white" }}
      classNames={{
        tr: colorScheme === "light" ? classes.row : classes.row_dark,
      }}
    >
      <Table.Td style={{ paddingRight: "0", width: "2.5rem" }}>
        <Flex gap={6} align={"center"}>
          <BtnDelete
            key={crypto.randomUUID()}
            description="El registro del usuario ha sido eliminado  de la base de datos satisfactoriamente!"
            labelBtn="Aceptar"
            color="#115dfe"
            title="El registro ha sido eliminado"
            id={element.id}
            icon
          >
            <UserDeleteLayout idToDelete={element.id} />
          </BtnDelete>
          <BtnSee idToShow={element.id}>
            <UserDescriptionLayout />
          </BtnSee>
          <BtnEditUser idToEdit={element.id} />
        </Flex>
      </Table.Td>
      {generateTableField(
        <Table.Td>{capitalizeFirstLetter(element.firstName)}</Table.Td>,
        "nombre",
      )}
      {generateTableField(
        <Table.Td>{capitalizeFirstLetter(element.lastName)}</Table.Td>,
        "apellido",
      )}
      {generateTableField(
        <Table.Td>{capitalizeFirstLetter(element.vehicle)}</Table.Td>,
        "vehiculo",
      )}
      {generateTableField(<Table.Td>{element.carID}</Table.Td>, "placa")}
      {generateTableField(<Table.Td>{element.state}</Table.Td>, "estado")}
      {generateTableField(
        <Table.Td>
          {element.phonePre}-{element.phonePost}
        </Table.Td>,
        "telefono",
      )}
      {generateTableField(<Table.Td>{element.mail}</Table.Td>, "correo")}
      {generateTableField(
        <Table.Td>
          <StatusBadge title={element.typeStatus} />
        </Table.Td>,
        "status",
      )}
      {generateTableField(
        <Table.Td>
          {element.birthday !== undefined &&
          element.birthday instanceof dayjs ? (
            dayjs(element.birthday).format("DD MMMM YYYY")
          ) : (
            <Text size="xs">No asignado</Text>
          )}
        </Table.Td>,
        "cumpleaños",
      )}
      {generateTableField(
        <Table.Td>
          {element.facebook !== undefined ? (
            element.facebook
          ) : (
            <Text size="xs">No asignado</Text>
          )}
        </Table.Td>,
        "facebook",
      )}
      {generateTableField(
        <Table.Td>
          {element.instagram !== undefined ? (
            element.instagram
          ) : (
            <Text size="xs">No asignado</Text>
          )}
        </Table.Td>,
        "instagram",
      )}
    </Table.Tr>
  ));

  return (
    <Stack gap={10} mt={-8}>
      <ScrollArea
        w={"90vw"}
        className={heightClasses.DB_container}
        offsetScrollbars
        scrollbarSize={2}
        onScrollPositionChange={({ y }) => {
          setScrolled(y !== 0);
        }}
      >
        <Table
          highlightOnHover
          styles={(theme) => ({
            table: { width: "100%" },
            td: {
              borderTop:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[2]}`
                  : `1px solid ${theme.colors.darkTheme[8]}`,
              textAlign: "center",
              fontSize: "0.8rem",
            },
            thead: {
              color: "#000",
            },
            th: { textAlign: "center", cursor: "pointer" },
          })}
          verticalSpacing="sm"
          classNames={{
            thead: classes.thead_row,
          }}
        >
          <Table.Thead
            className={
              colorScheme === "light"
                ? `${classes.header} ${scrolled && classes.scrolled}`
                : `${classes.header_dark} ${scrolled && classes.scrolled}`
            }
          >
            <Table.Tr
              classNames={{
                tr:
                  colorScheme === "light"
                    ? classes.thead_row
                    : classes.thead_row_dark,
              }}
            >
              <Table.Th
                style={{
                  zIndex: "100",
                }}
              ></Table.Th>
              {filters.map((item, index) => {
                return (
                  <Table.Th key={index}>{capitalizeFirstLetter(item)}</Table.Th>
                );
              })}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
      <PaginationLayout />
    </Stack>
  );
}

// https://ui.mantine.dev/category/tables/ -> When i need to create an sorted table

{
  /* <Table.Th
                style={{ textAlign: "center" }}
                onClick={() => setSorted((s) => !s)}
              >
                <HeaderRowItem label="Nombre" sorted={sorted} />
              </Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>
                <HeaderRowItem label="Apellido" sorted={sorted} />
              </Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>

                <HeaderRowItem label="Vehiculo" sorted={sorted} />
              </Table.Th>
              <Table.Th>ID Vehiculo</Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>

                <HeaderRowItem label="Estado" sorted={sorted} />
              </Table.Th>
              <Table.Th>Telefono</Table.Th>
              <Table.Th>Correo</Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>

                {<HeaderRowItem label="Status" sorted={sorted} />}
                Status
              </Table.Th>
              <Table.Th>Cumpleaños</Table.Th>
              <Table.Th>Facebook</Table.Th>
              <Table.Th>Instagram</Table.Th> */
}
