"use client";

import { Box, Flex, Stack } from "@mantine/core";
import { HiOutlineExclamationCircle } from "@/icons";
import { CountIndicator } from "@/components/CountIndicator";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import AlarmContainer from "./AlarmContainer";
import CreateFolderLayout from "./buttons/CreateFolderLayout";
import CreateAlarmLayout from "./buttons/CreateAlarmLayout";
import { useAlarmStore } from "@/store/alarm-store";
import BtnAdd from "@/components/buttons/BtnAdd";

export default function AlarmViewContainer() {
  const { fnSetFolderShow, fnSetAlarmShow, showFolderLayout, showAlarmLayout } = useAlarmStore();
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
            fnShow={fnSetFolderShow}
            showDrawer={showFolderLayout}
            iconTag="folder"
            label="Nuevo Carpeta"
          >
            <CreateFolderLayout />
          </BtnAdd>
        </Box>
        <Box>
          <BtnAdd
            fnShow={fnSetAlarmShow}
            showDrawer={showAlarmLayout}
            iconTag="add"
            label="Nuevo Alarma"
          >
            <CreateAlarmLayout />
          </BtnAdd>
        </Box>
      </Flex>
      <AlarmContainer />
    </Stack>
  );
}

{
  /* <BtnAdd
  fnShow={fnSetFolderShow}
  showDrawer={showFolderLayout}
  iconTag="add"
  label="Nuevo Recordatorio"
>
  <CreateAlarmLayout title="Crear Nueva Recordatorio" />
</BtnAdd> */
}
