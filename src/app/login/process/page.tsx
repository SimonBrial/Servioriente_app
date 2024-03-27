import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import BtnAdd from "@/components/buttons/BtnAdd";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import { Flex, Stack, Container, Box } from "@mantine/core";
import { CountIndicator } from "../../../components/CountIndicator";
import { HiOutlineUserCircle } from "@/icons";
import CreateClientLayout from "./layouts/CreateClientLayout";
import { ProcessContainer } from "./ProcessContainer";

function page(): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%" }}>
      <Stack style={{ width: "100%" }} gap={8} p={0}>
        <Flex
          gap={4}
          align={"center"}
          style={{ height: "2.5rem", width: "100%" }}
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
              label="Nuevo Cliente"
              key={crypto.randomUUID()}
              id={crypto.randomUUID()}
              labelBtn="Crear Registro"
              color="green"
              title="El registro ha sido creado 📄"
              description="La tarjeta del registro para la generacion de la RCV, ha sido creado satisfactoriamente 😎!"
            >
              <CreateClientLayout />
            </BtnAdd>
          </Box>
        </Flex>
        <ProcessContainer />
      </Stack>
    </Container>
  );
}

export default page;
