import { Box, Flex } from "@mantine/core";
import ListDataBase from "@/app/login/data-base/ListDataBase";
import ListLayout from "./layout";
import { FilterContainer } from "@/components/container/FilterContainer";
import { CountIndicator } from "@/components/CountIndicator";
import { HiOutlineUserCircle } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import CreateRegisterLayout from "./layout/CreateRegisterLayout";
import BtnAdd from "@/components/buttons/BtnAdd";

export default function DBContainer() {
  return (
    <ListLayout>
      <Flex
        gap={6}
        align={"center"}
        style={{ height: "2.5rem", width: "100%" }}
        justify={"space-between"}
      >
        <CountIndicator
          count={24}
          iconSection={<HiOutlineUserCircle />}
          description="Total de Usuarios"
        />
        <AutoCompleteInput />
        <BtnFilter>
          <GeneralFilterLayout />
        </BtnFilter>
        <Box style={{ height: "100%", width: "25%" }}>
          <BtnReportGenerate />
        </Box>
        <Box>
          <BtnAdd
            color=""
            description=""
            title=""
            labelBtn=""
            label="Crear Usuario"
            id={crypto.randomUUID()}
            iconTag="add-user"
          >
            <CreateRegisterLayout />
          </BtnAdd>
        </Box>
      </Flex>
      <FilterContainer />
      <ListDataBase />
    </ListLayout>
  );
}
