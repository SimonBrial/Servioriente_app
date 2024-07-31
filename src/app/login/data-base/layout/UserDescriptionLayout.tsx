"use client";

import RegisterInfo from "@/components/RegisterInfo";
import StatusBadge from "@/components/badge/StatusBadge";
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
            <RegisterInfo
              keyInput={"Nombre: "}
              valueInput={dataToShow[0].firstName}
            />
            <RegisterInfo
              keyInput={"Apellido: "}
              valueInput={dataToShow[0].lastName}
            />
            <RegisterInfo
              keyInput={"Vehiculo: "}
              valueInput={dataToShow[0].vehicle}
            />
            <RegisterInfo
              keyInput={"Numero de Placa: "}
              valueInput={dataToShow[0].carID}
            />
            <RegisterInfo
              keyInput={"Estado: "}
              valueInput={dataToShow[0].state}
            />
            <RegisterInfo
              keyInput={"Telefono: "}
              valueInput={`${dataToShow[0].phonePre}-${dataToShow[0].phonePost}`}
            />
            <RegisterInfo
              keyInput={"Correo: "}
              valueInput={
                dataToShow[0].mail !== undefined
                  ? dataToShow[0].mail
                  : "Correo no Registrado"
              }
            />
            <RegisterInfo
              keyInput={"Status: "}
              valueInput={<StatusBadge title={dataToShow[0].typeStatus} />}
            />
            <RegisterInfo
              keyInput={"Facebook: "}
              valueInput={
                dataToShow[0].facebook !== undefined
                  ? dataToShow[0].facebook
                  : "Facebook no registrado"
              }
            />
            <RegisterInfo
              keyInput={"Whatsapp: "}
              valueInput={`${dataToShow[0].phonePre}-${dataToShow[0].phonePost}`}
            />
            <RegisterInfo
              keyInput={"Instagram: "}
              valueInput={
                dataToShow[0].instagram !== undefined
                  ? dataToShow[0].instagram
                  : "Instagram no registrado"
              }
            />
          </Stack>
        ) : null}
      </ScrollArea>
    </Stack>
  );
}
