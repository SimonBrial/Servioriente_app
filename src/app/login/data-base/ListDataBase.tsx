"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Stack,
  Table,
  Flex,
} from "@mantine/core";
import { useState } from "react";
import classes from "@/styles/list-styles.module.css";
import heightClasses from "@/styles/height-view.module.css";
import { listDB as elements } from "@/data/ListDB";
import PaginationLayout from "./PaginationLayout";
import HeaderRowItem from "./HeaderRowItem";
import BtnDelete from "@/components/buttons/BtnDelete";
import BtnSee from "@/components/buttons/BtnSee";
import UserDeleteLayout from "./UserDeleteLayout";
import { UserDescriptionLayout } from "./UserDescriptionLayout";
import BtnEdit from "@/components/buttons/BtnEdit";
import RegisterEditLayout from "./RegisterEditLayout";

export default function ListDataBase(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [sorted, setSorted] = useState(false);
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
        <Flex gap={6} align={"center"}>
          <BtnDelete
            key={crypto.randomUUID()}
            description="El registro del usuario ha sido eliminado  de la base de datos satisfactoriamente!"
            labelBtn="Aceptar"
            color="#115dfe"
            title="El registro ha sido eliminado"
            id={crypto.randomUUID()}
            icon
          >
            <UserDeleteLayout />
          </BtnDelete>
          <BtnSee>
            <UserDescriptionLayout />
          </BtnSee>
          <BtnEdit
            key={crypto.randomUUID()}
            buttonStyles="special"
            description="El registro ha sido editado y guardado satisfactoriamente 😎!"
            labelBtn="Guardar"
            color="#2BDD66"
            title="Registro Editado"
            id={crypto.randomUUID()}
            icon
          >
            <RegisterEditLayout />
          </BtnEdit>
        </Flex>
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
    <Stack gap={10}>
      <ScrollArea
        // h={620}
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
              <Table.Th
                style={{ textAlign: "center" }}
                onClick={() => setSorted((s) => !s)}
              >
                <HeaderRowItem label="Nombre" sorted={sorted} />
              </Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>
                <HeaderRowItem label="Apellido" sorted={sorted} />
              </Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>
                {" "}
                <HeaderRowItem label="Vehiculo" sorted={sorted} />
              </Table.Th>
              <Table.Th>ID Vehiculo</Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>
                {" "}
                <HeaderRowItem label="Lugar" sorted={sorted} />
              </Table.Th>
              <Table.Th>Telefono</Table.Th>
              <Table.Th>Correo</Table.Th>
              <Table.Th onClick={() => setSorted((s) => !s)}>
                {" "}
                <HeaderRowItem label="Status" sorted={sorted} />
              </Table.Th>
              <Table.Th>Cumpleaños</Table.Th>
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
