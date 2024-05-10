"use client";

import {
  useMantineColorScheme,
  ScrollArea,
  Stack,
  Table,
  Flex,
  Text,
} from "@mantine/core";
import { useState } from "react";
import classes from "@/styles/list-styles.module.css";
import heightClasses from "@/styles/height-view.module.css";
import PaginationLayout from "./PaginationLayout";
import HeaderRowItem from "./HeaderRowItem";
import BtnDelete from "@/components/buttons/BtnDelete";
import BtnSee from "@/components/buttons/BtnSee";
import UserDeleteLayout from "./UserDeleteLayout";
import UserDescriptionLayout from "./UserDescriptionLayout";
import { useDataBaseStore } from "@/store/db-store";
import BtnEditUser from "./buttons/BtnEditUser";
import StatusBadge from "@/components/badge/StatusBadge";
import dayjs from "dayjs";

export default function ListDataBase(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [sorted, setSorted] = useState(false);
  const { colorScheme } = useMantineColorScheme();

  // Reading the context from zustand store folder
  const { data } = useDataBaseStore();

  const rows = data.map((element, index) => (
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
          {/* <BtnEdit
            key={crypto.randomUUID()}
            buttonStyles="special"
            description="El registro ha sido editado y guardado satisfactoriamente 😎!"
            labelBtn="Guardar"
            color="#2BDD66"
            title="Registro Editado"
            id={element.id}
            icon
          >
            <RegisterEditLayout />
          </BtnEdit> */}
        </Flex>
      </Table.Td>
      <Table.Td>{element.firstName}</Table.Td>
      <Table.Td>{element.lastName}</Table.Td>
      <Table.Td>{element.vehicle}</Table.Td>
      <Table.Td>{element.carID}</Table.Td>
      <Table.Td>{element.state}</Table.Td>
      <Table.Td>
        {element.phonePre} - {element.phonePost}
      </Table.Td>
      <Table.Td>{element.mail}</Table.Td>
      <Table.Td>
        <StatusBadge title={element.typeStatus} />
      </Table.Td>
      <Table.Td>
        {element.birthday !== undefined && element.birthday instanceof dayjs ? (
          dayjs(element.birthday).format("DD MMMM YYYY")
        ) : (
          <Text size="xs">No asignada</Text>
        )}
      </Table.Td>
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
