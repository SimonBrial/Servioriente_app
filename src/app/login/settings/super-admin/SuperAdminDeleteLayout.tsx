import RegisterInfo from "@/components/RegisterInfo";
import { Stack } from "@mantine/core";
import React from "react";

export const SuperAdminDeleteLayout = () => {
  return (
    <Stack>
      <RegisterInfo keyInput={"Nombre: "} valueInput={"Simon"} />
      <RegisterInfo keyInput={"Apellido: "} valueInput={"Briceño"} />
      <RegisterInfo keyInput={"Correo: "} valueInput={"correo@correo.com"} />
      <RegisterInfo
        keyInput={"Fecha de Cumpleaños: "}
        valueInput={"16 Dic. 1996"}
      />
      <RegisterInfo keyInput={"Tipo de Admin: "} valueInput={"Super Admin"} />
      <RegisterInfo keyInput={"Estado: "} valueInput={"Carabobo"} />
      <RegisterInfo keyInput={"Municipio: "} valueInput={"Tocuyito"} />
    </Stack>
  );
};
