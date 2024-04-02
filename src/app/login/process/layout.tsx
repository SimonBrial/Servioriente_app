import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/layout/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { BtnReportGenerate } from "@/components/buttons/BtnReportGenerate";
import { Flex, Stack, Container, Box } from "@mantine/core";
import { HiOutlineUserCircle } from "@/icons";
import BtnCreateRegister from "@/app/login/process/buttons/BtnCreateRegister";
import { CountIndicator } from "@/components/CountIndicator";
import InsideContainer from "@/components/container/InsideContainer";

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <Stack gap={10} p={0}>
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
            <BtnCreateRegister />
          </Box>
        </Flex>
        <InsideContainer
          offset={118}
          withBackground
          withBorder={false}
          key={crypto.randomUUID()}
        >
          {children}
        </InsideContainer>
      </Stack>
    </Container>
  );
}

{
  /* <BtnAdd
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
    </BtnAdd> */
}
