import { Box, Flex, Stack } from "@mantine/core";
import { CountIndicator } from "@/components/CountIndicator";
import { HiOutlineExclamationCircle } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import BtnAdd from "@/components/buttons/BtnAdd";
import CreateAlarmLayout from "./layouts/CreateAlarmLayout";
import CreateFolderLayout from "./layouts/CreateFolderLayout";
import { AlarmContainer } from "./AlarmContainer";

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
          description="Total de Recordatorios"
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
            label="Nuevo Recordatorio"
            key={crypto.randomUUID()}
            id={crypto.randomUUID()}
            labelBtn="Crear Recordatorio"
            color="green"
            title="Recordatorio Creado 🔔"
            description="el recordatorio ha sido creado satisfactoriamente 😎!"
          >
            <CreateAlarmLayout title="Crear Nueva Recordatorio" />
          </BtnAdd>
        </Box>
      </Flex>
      <AlarmContainer />
    </Stack>
  );
}

export default page;
