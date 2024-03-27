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
import BtnAdd from "@/components/buttons/BtnAdd";
import ClientRegister from "@/components/ClientRegister";

function page(): JSX.Element {
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
          description="Total de usuario"
        />
        <AutoCompleteInput />
        <BtnFilter>
          <GeneralFilterLayout />
        </BtnFilter>
        <BtnReportGenerate />
        <Box>
          <BtnAdd
            iconTag="add-user"
            label="Nuevo Usuario"
            key={crypto.randomUUID()}
            id={crypto.randomUUID()}
            labelBtn="Crear Registro"
            color="green"
            title="El Registro en la Base de Datos 📄"
            description="Se ha creado el registro en la Base de Datos satisfactoriamente 😎!"
          >
            <ClientRegister />
          </BtnAdd>
        </Box>
      </Flex>
      <FilterContainer />
      <ListDataBase />
    </ListLayout>
  );
}

export default page;
