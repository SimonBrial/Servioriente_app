"use client";

import { BtnCancel } from "@/components/buttons/BtnCancel";
import { BtnSave } from "@/components/buttons/BtnSave";
import { ContainerInside } from "@/components/container/ContainerInside";
import { AdminTypeSelect } from "@/components/inputs/AdminTypeSelect";
import { AgeInput } from "@/components/inputs/AgeInput";
import { CalendarInput } from "@/components/inputs/CalendarInput";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { MunicipalitySelect } from "@/components/inputs/MunicipalitySelect";
import { StateSelect } from "@/components/inputs/StateSelect";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { HiOutlineMail, HiOutlineUser } from "@/icons";
import { Flex, Stack } from "@mantine/core";
import React from "react";

export const AdminDescriptionContainer = () => {
  return (
    <ContainerInside withBorder width="70%" allWhite>
      <Stack justify="space-between" style={{ height: "100%" }}>
        <Stack gap={6} style={{ padding: "0 1rem" }}>
          <TitleLayout color="" icon="" onText title="Datos del Usuario" />
          <HorizontalInputLayout
            inputSize="300px"
            asterisk={false}
            icon={<HiOutlineUser />}
            title="Nombre"
          />
          <HorizontalInputLayout
            inputSize="300px"
            asterisk={false}
            icon={<HiOutlineUser />}
            title="Apellido"
          />
          <HorizontalInputLayout
            inputSize="300px"
            asterisk={false}
            icon={<HiOutlineMail />}
            title="Correo"
          />
          <CalendarInput title="Fecha de Cumpleaños" withTitle width={"300px"} />
          <AgeInput inputSize="300px" />
          <AdminTypeSelect inputSize="300px" />
          <StateSelect inputSize="300px" />
          <MunicipalitySelect estado="Amazonas" inputSize="300px" />
        </Stack>
        <Flex gap={6}>
          <BtnCancel />
          <BtnSave />
        </Flex>
      </Stack>
    </ContainerInside>
  );
};
