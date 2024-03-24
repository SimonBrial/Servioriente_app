"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import { GeneralDivider } from "@/components/GeneralDivider";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { TitleLayout } from "@/components/layout/TitleLayout";
import TextEditor from "@/components/TextEditor";
import { MdOutlineTitle } from "@/icons";
import {
  useMantineColorScheme,
  ScrollArea,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import heightClasses from "@/styles/height-view.module.css";
import SelectInput from "@/components/inputs/SelectInput";

export default function CalendarNewEventLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack p={0}>
      <TitleLayout
        color=""
        icon=""
        onText
        title="Crear Nuevo Evento"
        key={crypto.randomUUID()}
      />
      <Stack gap={6}>
        <HorizontalInputLayout
          key={crypto.randomUUID()}
          inputSize="250px"
          asterisk={false}
          title="Titulo"
          icon={<MdOutlineTitle />}
        />
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <Stack gap={6}>
        <Flex justify={"space-between"} align={"center"}>
          <Title order={4}>Asigando por</Title>
          <Title order={4}>Mario Hurtado</Title>
        </Flex>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <Stack gap={6}>
        <SelectInput
          inputSize="250px"
          periodeArr={["Mario Hurtado", "Simon Briceño"]}
          title="Asignado a"
          key={crypto.randomUUID()}
        />
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
      <Stack gap={6}>
        <Title
          order={4}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
            },
          })}
        >
          Descripcion de la Tarea
        </Title>
        <ContainerInside
          allWhite
          width="100%"
          withBorder
          key={crypto.randomUUID()}
        >
          <ScrollArea
            scrollbarSize={0}
            p={0}
            className={heightClasses.metrics_event_container_edit}
          >
            <TextEditor />
          </ScrollArea>
        </ContainerInside>
      </Stack>
    </Stack>
  );
}
