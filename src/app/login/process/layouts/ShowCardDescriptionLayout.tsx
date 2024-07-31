"use client";

import StatusBadge from "@/components/badge/StatusBadge";
import { TitleLayout } from "@/components/layout/TitleLayout";
import RegisterInfo from "@/components/RegisterInfo";
import { CardProcessProps } from "@/interface/interface";
import { useProcessStore } from "@/store/process-store";
import { UniqueIdentifier } from "@dnd-kit/core";
import { ScrollArea, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";

export default function ShowCardDescriptionLayout({
  rcvId,
  columnId,
}: {
  rcvId: string | UniqueIdentifier;
  columnId: string;
}) {
  const { fnGetRcvById } = useProcessStore();
  const [dataToShow, setDataToShow] = useState<CardProcessProps | {}>();

  useEffect(() => {
    const rcvFound = fnGetRcvById(rcvId, columnId);
    if (rcvFound !== undefined) {
      setDataToShow(rcvFound);
    }
  }, []);

  console.log(dataToShow);
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
        {/* {dataToShow !== undefined ? (
          <>{dataToShow.firstName}</>
        ) : (
          <>Cargando...</>
        )} */}
        {/* {dataToShow !== undefined ? (
          <Stack>
            <RegisterInfo
              keyInput={"Nombre: "}
              valueInput={dataToShow}
            />
            <RegisterInfo
              keyInput={"Apellido: "}
              valueInput={dataToShow.lastName}
            />
            <RegisterInfo
              keyInput={"Vehiculo: "}
              valueInput={dataToShow.vehicle}
            />
            <RegisterInfo
              keyInput={"Numero de Placa: "}
              valueInput={dataToShow.carID}
            />
            <RegisterInfo
              keyInput={"Estado: "}
              valueInput={dataToShow.state}
            />
            <RegisterInfo
              keyInput={"Telefono: "}
              valueInput={`${dataToShow.phonePre}-${dataToShow.phonePost}`}
            />
            <RegisterInfo
              keyInput={"Correo: "}
              valueInput={
                dataToShow.mail !== undefined
                  ? dataToShow.mail
                  : "Correo no Registrado"
              }
            />
            <RegisterInfo
              keyInput={"Status: "}
              valueInput={<StatusBadge title={dataToShow.typeStatus} />}
            />
            <RegisterInfo
              keyInput={"Facebook: "}
              valueInput={
                dataToShow.facebook !== undefined
                  ? dataToShow.facebook
                  : "Facebook no registrado"
              }
            />
            <RegisterInfo
              keyInput={"Whatsapp: "}
              valueInput={`${dataToShow.phonePre}-${dataToShow.phonePost}`}
            />
            <RegisterInfo
              keyInput={"Instagram: "}
              valueInput={
                dataToShow.instagram !== undefined
                  ? dataToShow.instagram
                  : "Instagram no registrado"
              }
            />
          </Stack>
        ) : null} */}
        text
      </ScrollArea>
    </Stack>
  );
}
