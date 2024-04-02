import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import RegisterInfo from "@/components/RegisterInfo";
import { Stack } from "@mantine/core";
import React from "react";

export default function UserSelectedLayout() {
  return (
    <Stack gap={8} px={10}>
      <TitleSimpleLayout title="Datos del Usuario" key={crypto.randomUUID()} />
      <Stack px={20} py={10}>
        <RegisterInfo keyInput={"Nombre: "} valueInput={"Simon"} />
        <RegisterInfo keyInput={"Apellido: "} valueInput={"Briceño"} />
        <RegisterInfo keyInput={"Vehiculo: "} valueInput={"Jeep"} />
        <RegisterInfo keyInput={"Placa del Vehiculo: "} valueInput={"DA58TG"} />
        <RegisterInfo keyInput={"Correo: "} valueInput={"correo@correo.com"} />
        <RegisterInfo
          keyInput={"Fecha de Cumpleaños: "}
          valueInput={"16 Dic. 1996"}
        />
        <RegisterInfo
          keyInput={"Zona: "}
          valueInput={"Carabobo, Valencia VE"}
        />
        <RegisterInfo keyInput={"Instagram: "} valueInput={"@Instagram"} />
        <RegisterInfo keyInput={"Facebook: "} valueInput={"Facebook"} />
        <RegisterInfo
          keyInput={"Telefono/ Whatsapp: "}
          valueInput={"0416-684.95.78"}
        />
      </Stack>
    </Stack>
  );
}
