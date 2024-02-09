"use client";

import { ScrollArea, Stack, Table, useMantineColorScheme } from "@mantine/core";
import BtnFn from "../../components/buttons/BtnFn";
import { useState } from "react";
import classes from "@/styles/listStyles.module.css";
import { listDB as elements } from "@/data/ListDB";

export default function ListDataBase(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.id}
      style={{ color: colorScheme === "light" ? "#000" : "white" }}
      classNames={{
        tr: colorScheme === "light" ? classes.row : classes.row_dark,
      }}
    >
      <Table.Td style={{ paddingRight: "0", width: "2.5rem" }}>
        <BtnFn />
      </Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.lastName}</Table.Td>
      <Table.Td>{element.car}</Table.Td>
      <Table.Td>{element.carID}</Table.Td>
      <Table.Td>{element.site}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>{element.birthdate}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap={2}>
      <ScrollArea
        h={520}
        offsetScrollbars
        scrollbarSize={6}
        onScrollPositionChange={({ y }) => {
          setScrolled(y !== 0);
        }}
      >
        <Table
          highlightOnHover
          styles={(theme) => ({
            td: {
              borderTop:
                colorScheme === "light"
                  ? `1px solid ${theme.colors.lightTheme[2]}`
                  : `1px solid ${theme.colors.darkTheme[8]}`,
              textAlign: "center",
            },
            thead: {
              color: "#000",
            },
            th: { textAlign: "center" },
          })}
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
              <Table.Th style={{ textAlign: "center" }}>Nombre</Table.Th>
              <Table.Th>Apellido</Table.Th>
              <Table.Th>Vehiculo</Table.Th>
              <Table.Th>ID Vehiculo</Table.Th>
              <Table.Th>Lugar</Table.Th>
              <Table.Th>Telefono</Table.Th>
              <Table.Th>Correo</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Cumpleaños</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </Stack>
  );
}
