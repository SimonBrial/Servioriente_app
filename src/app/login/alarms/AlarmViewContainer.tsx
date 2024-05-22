"use client";

import { Box, Flex, Stack } from "@mantine/core";
import { CountIndicator } from "@/components/CountIndicator";
import { HiOutlineExclamationCircle } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { AlarmContainer } from "./AlarmContainer";
import BtnCreateFolder from "./buttons/BtnCreateFolder";
import BtnCreateAlarm from "./buttons/BtnCreateAlarm";

export default function AlarmViewContainer() {
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
          <BtnCreateFolder />
        </Box>
        <Box>
          <BtnCreateAlarm />
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
