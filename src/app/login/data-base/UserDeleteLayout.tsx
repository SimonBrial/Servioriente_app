import RegisterInfo from "@/components/RegisterInfo";
import { Stack } from "@mantine/core";
import { useDataBaseStore } from "@/store/db-store";
import { useEffect, useState } from "react";
import { ListDBProps } from "@/interface/interface";

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
          <RegisterInfo keyInput={"Nombre: "} valueInput={userToDelete.name} />
          <RegisterInfo keyInput={"Apellido: "} valueInput={userToDelete.lastName} />
          <RegisterInfo keyInput={"Vehiculo: "} valueInput={userToDelete.car} />
          <RegisterInfo
            keyInput={"Numero de Placa: "}
            valueInput={userToDelete.carID}
          />
          <RegisterInfo keyInput={"Estado: "} valueInput={userToDelete.site} />
          <RegisterInfo keyInput={"Telefono: "} valueInput={userToDelete.phone} />
          <RegisterInfo keyInput={"Correo: "} valueInput={userToDelete.mail} />
          <RegisterInfo keyInput={"Status: "} valueInput={userToDelete.status} />
          <RegisterInfo keyInput={"Facebook: "} valueInput={"Facebook"} />
          <RegisterInfo keyInput={"Whatsapp: "} valueInput={userToDelete.phone} />
          <RegisterInfo keyInput={"Instagram: "} valueInput={"Instagram"} />
        </Stack>
      ) : null}
    </>
  );
}
