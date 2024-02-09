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

export const AdminDescriptionLayout = ({ size }: { size: string }) => {
  return (
    <Stack gap={8}>
      <TitleLayout color="" icon="" onText title="Datos del Usuario" />
      <Stack gap={6}>
        <HorizontalInputLayout
          inputSize={size}
          asterisk={false}
          icon={<HiOutlineUser />}
          title="Nombre"
        />
        <HorizontalInputLayout
          inputSize={size}
          asterisk={false}
          icon={<HiOutlineUser />}
          title="Apellido"
        />
        <HorizontalInputLayout
          inputSize={size}
          asterisk={false}
          icon={<HiOutlineMail />}
          title="Correo"
        />
        <CalendarInput title="Fecha de Cumpleaños" withTitle width={size} />
        <AgeInput inputSize={size} />
        <AdminTypeSelect inputSize={size} />
        <StateSelect inputSize={size} />
        <MunicipalitySelect estado="Amazonas" inputSize={size} />
      </Stack>
    </Stack>
  );
};
