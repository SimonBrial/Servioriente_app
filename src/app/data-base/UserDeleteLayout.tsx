import RegisterInfo from "@/components/RegisterInfo";
import { Stack } from "@mantine/core";
import StatusBadge from "./StatusBadge";

export const UserDeleteLayout = () => {
  const fakeArr = {
    id: 1,
    name: "Mario",
    lastName: "Hurtado",
    car: "car",
    carID: "da6s5d4",
    site: "Estado",
    phone: "32165487",
    email: "correo@gmail.com",
    status: <StatusBadge title="GENERACION" />,
    birthdate: "16-12-1996",
  };
  return (
    <Stack>
      <RegisterInfo keyInput={"Nombre: "} valueInput={fakeArr.name} />
      <RegisterInfo keyInput={"Apellido: "} valueInput={fakeArr.lastName} />
      <RegisterInfo keyInput={"Vehiculo: "} valueInput={fakeArr.car} />
      <RegisterInfo keyInput={"Numero de Placa: "} valueInput={fakeArr.carID} />
      <RegisterInfo keyInput={"Estado: "} valueInput={fakeArr.site} />
      <RegisterInfo keyInput={"Telefono: "} valueInput={fakeArr.phone} />
      <RegisterInfo keyInput={"Correo: "} valueInput={fakeArr.email} />
      <RegisterInfo keyInput={"Status: "} valueInput={fakeArr.status} />
      <RegisterInfo keyInput={"Facebook: "} valueInput={"Facebook"} />
      <RegisterInfo keyInput={"Whatsapp: "} valueInput={fakeArr.phone} />
      <RegisterInfo keyInput={"Instagram: "} valueInput={"Instagram"} />
    </Stack>
  );
};
