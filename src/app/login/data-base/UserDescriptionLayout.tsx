"use client";

import RegisterInfo from "@/components/RegisterInfo";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { useDataBaseStore } from "@/store/db-store";
import { ScrollArea, Stack } from "@mantine/core";

export default function UserDescriptionLayout() {
  const { dataToShow } = useDataBaseStore();
  return (
    <Stack
      style={{
        padding: "0",
        height: "87vh",
      }}
    >
      <TitleLayout
        title="Registro del cliente"
        icon=""
        color=""
        onText={false}
      />
      <ScrollArea h={"90vh"} offsetScrollbars scrollbarSize={2}>
        {dataToShow[0] !== undefined ? (
          <Stack>
            <RegisterInfo keyInput={"Nombre: "} valueInput={dataToShow[0].name} />
            <RegisterInfo
              keyInput={"Apellido: "}
              valueInput={dataToShow[0].lastName}
            />
            <RegisterInfo keyInput={"Vehiculo: "} valueInput={dataToShow[0].car} />
            <RegisterInfo
              keyInput={"Numero de Placa: "}
              valueInput={dataToShow[0].carID}
            />
            <RegisterInfo keyInput={"Estado: "} valueInput={dataToShow[0].site} />
            <RegisterInfo
              keyInput={"Telefono: "}
              valueInput={dataToShow[0].phone}
            />
            <RegisterInfo keyInput={"Correo: "} valueInput={dataToShow[0].mail} />
            <RegisterInfo
              keyInput={"Status: "}
              valueInput={dataToShow[0].status}
            />
            <RegisterInfo keyInput={"Facebook: "} valueInput={"Facebook"} />
            <RegisterInfo
              keyInput={"Whatsapp: "}
              valueInput={dataToShow[0].phone}
            />
            <RegisterInfo keyInput={"Instagram: "} valueInput={"Instagram"} />
          </Stack>
        ) : null}
      </ScrollArea>
    </Stack>
  );
}
