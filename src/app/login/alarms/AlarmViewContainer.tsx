"use client";

import { Box, Flex, Stack } from "@mantine/core";
import { LuFolder, MdOutlineAccessAlarms } from "@/icons";
import { CountIndicator } from "@/components/CountIndicator";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import AlarmContainer from "./AlarmContainer";
import CreateFolderLayout from "./layouts/CreateFolderLayout";
import CreateAlarmLayout from "./layouts/CreateAlarmLayout";
import { useAlarmStore } from "@/store/alarm-store";
import BtnAdd from "@/components/buttons/BtnAdd";

export default function AlarmViewContainer() {
  const {
    showFolderLayout,
    alarmFolderArray,
    fnSetFolderShow,
    showAlarmLayout,
    fnSetAlarmShow,
    searchTerm,
    setResults,
    setSearchTerm,
  } = useAlarmStore();
  // To show the total of alarms
  const getTotalAlarm = (): number => {
    const alarmArray = alarmFolderArray.map(folder => folder.alarmsArray.length);
    return alarmArray.reduce((acc, current) => current + acc, 0)
  };
  return (
    <Stack gap={12}>
      <Flex
        gap={4}
        align={"center"}
        style={{ height: "2.5rem", width: "100%" }}
      >
        <CountIndicator
          count={alarmFolderArray.length}
          iconSection={<LuFolder />}
          description="Total de Carpetas"
        />
        <CountIndicator
          count={getTotalAlarm()}
          iconSection={<MdOutlineAccessAlarms />}
          description="Total de Alarmas"
        />
        <AutoCompleteInput dataFilter={alarmFolderArray} fnResults={setResults} fnSearchTerm={setSearchTerm} term={searchTerm} />
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
