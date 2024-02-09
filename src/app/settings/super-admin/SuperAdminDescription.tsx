import RegisterInfo from "@/components/RegisterInfo";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { Stack } from "@mantine/core";

export const SuperAdminDescription = () => {
  return (
    <Stack
      style={{
        padding: "1rem 1rem 0 1rem",
        height: "90vh",
      }}
    >
      <TitleLayout
        title="Descipcion del Admin"
        icon=""
        color=""
        onText={false}
      />
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
    </Stack>
  );
};
