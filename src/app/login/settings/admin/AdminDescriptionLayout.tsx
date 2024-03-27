import { ContainerInside } from "@/components/container/ContainerInside";
import { TitleLayout } from "@/components/layout/TitleLayout";
import RegisterInfo from "@/components/RegisterInfo";
import { Stack } from "@mantine/core";
import React from "react";

export const AdminDescriptionLayout = () => {
  return (
    <ContainerInside withBorder width="70%" allWhite>
      <Stack gap={8} px={10}>
        <TitleLayout color="" icon="" onText title="Datos del Usuario" />
        <Stack px={20} py={10}>
          <RegisterInfo keyInput={"Nombre: "} valueInput={"Simon"} />
          <RegisterInfo keyInput={"Apellido: "} valueInput={"Briceño"} />
          <RegisterInfo
            keyInput={"Tipo de Admin: "}
            valueInput={"Super Admin"}
          />
          <RegisterInfo keyInput={"Edad: "} valueInput={"27"} />
          <RegisterInfo
            keyInput={"Correo: "}
            valueInput={"correo@correo.com"}
          />
          <RegisterInfo
            keyInput={"Fecha de Cumpleaños: "}
            valueInput={"16 Dic. 1996"}
          />
          <RegisterInfo
            keyInput={"Ubicacion: "}
            valueInput={"Carabobo, Valencia VE"}
          />
          <RegisterInfo keyInput={"Oficina: "} valueInput={"Valencia"} />
        </Stack>
      </Stack>
    </ContainerInside>
  );
};
