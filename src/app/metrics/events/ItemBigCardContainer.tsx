"use client";

import React, { useState } from "react";
import { MetricsFilterInput } from "../MetricsFilterInput";
import {
  useMantineColorScheme,
  ScrollArea,
  Container,
  Divider,
  Center,
  Select,
  Stack,
  Table,
  Flex,
} from "@mantine/core";
import {
  HiOutlineCalendar,
  HiOutlineCheck,
  LuListTodo,
  IoClose,
} from "@/icons";
import { PriorityBadge } from "@/components/PriorityBadge";
import classes from "@/styles/metrics.module.css";
import classesList from "@/styles/listStyles.module.css";
import BtnSee from "@/components/buttons/BtnSee";
import BtnEdit from "@/components/buttons/BtnEdit";
import { DatePickerInput } from "@mantine/dates";
import WarningInfo from "@/components/WarningInfo";

type ItemBigCardStatus = "Completada" | "No Completada";

interface ItemBigCardProps {
  id: string;
  title: string;
  priority: JSX.Element;
  status: ItemBigCardStatus;
  actions: string;
  date: string;
}

const elements: ItemBigCardProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Generar RCV al cliente de Caracas",
    priority: <PriorityBadge title="Muy Importante" />,
    status: "Completada",
    actions: "Carbon",
    date: "Febrero 06, 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Generar RCV al cliente de Caracas",
    priority: <PriorityBadge title="Importante" />,
    status: "Completada",
    actions: "Nitrogen",
    date: "Febrero 06, 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Generar RCV al cliente de Caracas",
    priority: <PriorityBadge title="Nada Importante" />,
    status: "No Completada",
    actions: "Yttrium",
    date: "Febrero 06, 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Generar RCV al cliente de Caracas",
    priority: <PriorityBadge title="Nada Importante" />,
    status: "Completada",
    actions: "Barium",
    date: "Febrero 06, 2024",
  },
  {
    id: crypto.randomUUID(),
    title: "Generar RCV al cliente de Caracas",
    priority: <PriorityBadge title="Normal" />,
    status: "No Completada",
    actions: "Cerium",
    date: "Febrero 06, 2024",
  },
];

export const ItemBigCardContainer = () => {
  const [valueSelected, setValueSelected] = useState<string | null>("");
  const selectValueArr = ["Completados", "No Completados"];
  const [scrolled, setScrolled] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        {element.title.length > 35 ? (
          <>{element.title.slice(0, 35)}...</>
        ) : (
          element.title
        )}
      </Table.Td>
      <Table.Td>{element.priority}</Table.Td>
      <Table.Td
        style={{
          color: element.status === "Completada" ? "#2BDD66" : "#F0185C",
        }}
      >
        {element.status}
      </Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>
        <Flex gap={6}>
          <BtnSee>prueba</BtnSee>
          <BtnEdit buttonStyles="special">prueba</BtnEdit>
          {element.status === "No Completada" ? (
            <>
              <Divider orientation="vertical" />
              <Center>
                <HiOutlineCheck
                  style={{ fontSize: "1.5rem", color: "#2BDD66" }}
                />
              </Center>
              <Center>
                <IoClose style={{ fontSize: "1.5rem", color: "#F0185C" }} />
              </Center>
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Container>
      <Stack gap={8}>
        <Flex gap={8} align={"center"}>
          <MetricsFilterInput btnDisable={false} />
          <Select
            styles={(theme) => ({
              section: {
                color:
                  valueSelected === selectValueArr[0]
                    ? `${theme.colors.principalTheme[3]}`
                    : `${theme.colors.principalTheme[9]}`,
                fontSize: "1.2rem",
              },
              root: { width: "30%" },
            })}
            classNames={{
              input: classes.filter_input,
            }}
            variant="unstyled"
            leftSection={<LuListTodo />}
            value={valueSelected}
            onChange={setValueSelected}
            placeholder="Filtrar tareas..."
            data={selectValueArr}
          />
          <WarningInfo description="Seleccionar Rango de fechas" />
          <DatePickerInput
            styles={(theme) => ({
              root: { width: "35%" },
              input: {
                backgroundColor:
                  colorScheme === "light"
                    ? "#FFFFFF"
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
            clearable
            dropdownType="modal"
            type="range"
            value={value}
            onChange={setValue}
            leftSection={<HiOutlineCalendar />}
            leftSectionPointerEvents="none"
          />
        </Flex>
        <ScrollArea
          h={220}
          offsetScrollbars
          scrollbarSize={6}
          onScrollPositionChange={({ y }) => {
            setScrolled(y !== 0);
          }}
        >
          <Table
            highlightOnHover
            classNames={{
              thead:
                colorScheme === "light"
                  ? classes.events_table_header
                  : classes.events_table_header_dark,
              tbody:
                colorScheme === "light"
                  ? classes.events_table_body
                  : classes.events_table_body_dark,
            }}
          >
            <Table.Thead
              className={
                colorScheme === "light"
                  ? `${classesList.header} ${scrolled && classesList.scrolled}`
                  : `${classesList.header_dark} ${
                    scrolled && classesList.scrolled
                  }`
              }
            >
              <Table.Tr>
                <Table.Th>Titulo</Table.Th>
                <Table.Th>Prioridad</Table.Th>
                <Table.Th>Estado</Table.Th>
                <Table.Th>Fecha</Table.Th>
                <Table.Th>Acciones</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      </Stack>
    </Container>
  );
};
