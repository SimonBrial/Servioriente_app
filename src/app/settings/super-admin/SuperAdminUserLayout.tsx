import { AdminTypeSelect } from "@/components/inputs/AdminTypeSelect";
import { AgeInput } from "@/components/inputs/AgeInput";
import { CalendarInput } from "@/components/inputs/CalendarInput";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { MunicipalitySelect } from "@/components/inputs/MunicipalitySelect";
import { StateSelect } from "@/components/inputs/StateSelect";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { HiOutlineMail, HiOutlineUser } from "@/icons";
import { Stack } from "@mantine/core";
import React from "react";

export const SuperAdminUserLayout = () => {
  return (
    <Stack gap={6}>
      <TitleLayout color="" icon="" onText title="Datos del Usuario" />
      <HorizontalInputLayout
        inputSize="200px"
        asterisk={false}
        icon={<HiOutlineUser />}
        title="Nombre"
      />
      <HorizontalInputLayout
        inputSize="200px"
        asterisk={false}
        icon={<HiOutlineUser />}
        title="Apellido"
      />
      <HorizontalInputLayout
        inputSize="200px"
        asterisk={false}
        icon={<HiOutlineMail />}
        title="Correo"
      />
      <CalendarInput title="Fecha de Cumpleaños" withTitle width={"200px"} />
      <AgeInput inputSize="200px" />
      <AdminTypeSelect inputSize="200px" />
      <StateSelect inputSize="200px" />
      <MunicipalitySelect estado="Amazonas" inputSize="200px" />
    </Stack>
  );
};
