import RegisterInfo from "@/components/RegisterInfo";
import { Stack } from "@mantine/core";
import { useDataBaseStore } from "@/store/db-store";
import { useEffect, useState } from "react";
import { ListDBProps } from "@/interface/interface";
import StatusBadge from "@/components/badge/StatusBadge";

export default function UserDeleteLayout({
  idToDelete,
}: {
  idToDelete: string;
}) {
  const { data } = useDataBaseStore();
  const [userToDelete, setUserToDelete] = useState<ListDBProps | undefined>(
    undefined,
  );
  useEffect(() => {
    setUserToDelete(data.find((user: ListDBProps) => user.id === idToDelete));
  }, [idToDelete]);
  return (
    <>
      {userToDelete !== undefined ? (
        <Stack gap={6}>
          <RegisterInfo
            keyInput={"Nombre: "}
            valueInput={userToDelete.firstName}
          />
          <RegisterInfo
            keyInput={"Apellido: "}
            valueInput={userToDelete.lastName}
          />
          <RegisterInfo
            keyInput={"Vehiculo: "}
            valueInput={userToDelete.vehicle}
          />
          <RegisterInfo
            keyInput={"Numero de Placa: "}
            valueInput={userToDelete.carID}
          />
          <RegisterInfo keyInput={"Estado: "} valueInput={userToDelete.state} />
          <RegisterInfo
            keyInput={"Telefono: "}
            valueInput={`${userToDelete.phonePre}-${userToDelete.phonePost}`}
          />
          <RegisterInfo
            keyInput={"Correo: "}
            valueInput={
              userToDelete.mail !== undefined
                ? userToDelete.mail
                : "Correo no Registrado"
            }
          />
          <RegisterInfo
            keyInput={"Status: "}
            valueInput={<StatusBadge title={userToDelete.typeStatus} />}
          />
          <RegisterInfo
            keyInput={"Fecha de Cumpleños: "}
            valueInput={
              userToDelete.birthdate !== undefined
                ? userToDelete.birthdate
                : "No Registrada"
            }
          />
          <RegisterInfo
            keyInput={"Facebook: "}
            valueInput={
              userToDelete.facebook !== undefined
                ? userToDelete.facebook
                : "Facebook no registrado"
            }
          />
          <RegisterInfo
            keyInput={"Whatsapp: "}
            valueInput={`${userToDelete.phonePre}-${userToDelete.phonePost}`}
          />
          <RegisterInfo
            keyInput={"Instagram: "}
            valueInput={
              userToDelete.instagram !== undefined
                ? userToDelete.instagram
                : "Instagram no registrado"
            }
          />
        </Stack>
      ) : null}
    </>
  );
}
