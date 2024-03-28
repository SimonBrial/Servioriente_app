import { Box, Flex, Stack } from "@mantine/core";
import InsideContainer from "@/components/container/InsideContainer";
import { CountIndicator } from "@/components/CountIndicator";
import { HiOutlineExclamationCircle } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import BtnAdd from "@/components/buttons/BtnAdd";
import AlarmDescription from "./AlarmDescription";
import { AlarmObj } from "@/interface/interface";
import FolderContainer from "./FolderContainer";
import CreateAlarmLayout from "./layouts/CreateAlarmLayout";
import CreateFolderLayout from "./layouts/CreateFolderLayout";

const fakeAlarmDescription: AlarmObj = {
  id: crypto.randomUUID(),
  title: "Cumpleaños",
  color: "#FD0E78",
  icon: "😎",
  createAt: "20/9/2023 - 10:58 AM",
  createdTo: "Simon Briceño",
  privateAlarm: true,
  privateUser: "Simon Briceño",
  description: `t is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.
    t is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.t
    is a long established fact that a reader
    will be distracted by the readable content
    of a page when looking at its layout. The
    point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters,
    as opposed to using Content here, content
    here, making it look like readable English.`,
  automated: true,
};

function page(): JSX.Element {
  return (
    <Stack gap={12}>
      <Flex
        gap={4}
        align={"center"}
        style={{ height: "2.5rem", width: "100%" }}
      >
        <CountIndicator
          count={5}
          iconSection={<HiOutlineExclamationCircle />}
          description="Total de Alarmas"
        />
        <AutoCompleteInput />
        <BtnFilter>
          <GeneralFilterLayout />
        </BtnFilter>
        <Box>
          <BtnAdd
            iconTag="folder"
            label="Nueva Carpeta"
            key={crypto.randomUUID()}
            id={crypto.randomUUID()}
            labelBtn="Crear Carpeta"
            title="Carpeta Creada 📂!"
            description="La carpeta ha sido creada satisfactoriamente, añadele recordatorios 😎!"
            color="green"
          >
            <CreateFolderLayout title="Crear Nueva Carpeta" />
          </BtnAdd>
        </Box>
        <Box>
          <BtnAdd
            iconTag="add"
            label="Nueva Alarma"
            key={crypto.randomUUID()}
            id={crypto.randomUUID()}
            labelBtn="Crear Alarma"
            color="green"
            title="Recordatorio Creado 🔔"
            description="el recordatorio ha sido creado satisfactoriamente 😎!"
          >
            <CreateAlarmLayout title="Crear Nueva Alarma" />
          </BtnAdd>
        </Box>
      </Flex>
      <InsideContainer
        offset={120}
        withBackground={false}
        withBorder={false}
        key={crypto.randomUUID()}
      >
        <Flex gap={"sm"} style={{ height: "100%" }}>
          <FolderContainer />
          <AlarmDescription objAlarm={fakeAlarmDescription} />
        </Flex>
      </InsideContainer>
    </Stack>
  );
}

export default page;
