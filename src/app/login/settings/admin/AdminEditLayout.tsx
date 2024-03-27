"use client";

import { BtnSave } from "@/components/buttons/BtnSave";
import { ContainerInside } from "@/components/container/ContainerInside";
import { IconLayout } from "@/components/IconLayout";
import { AdminTypeSelect } from "@/components/inputs/AdminTypeSelect";
import { AgeInput } from "@/components/inputs/AgeInput";
import { CalendarInput } from "@/components/inputs/CalendarInput";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { MunicipalitySelect } from "@/components/inputs/MunicipalitySelect";
import { StateSelect } from "@/components/inputs/StateSelect";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { HiOutlineMail, HiOutlineSave, HiOutlineUser, IoClose } from "@/icons";
import { Button, Flex, Stack, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import Link from "next/link";

export function AdminEditLayout() {
  const { colorScheme } = useMantineColorScheme();
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
          <CalendarInput
            title="Fecha de Cumpleaños"
            withTitle
            width={"300px"}
          />
          <AgeInput inputSize="300px" />
          <AdminTypeSelect inputSize="300px" />
          <StateSelect inputSize="300px" />
          <MunicipalitySelect estado="Amazonas" inputSize="300px" />
        </Stack>
        <Flex gap={6}>
          <Link href={"/login/settings/admin"} style={{ width: "100%" }}>
            <Button
              onClick={() => console.log("first")}
              fullWidth
              variant="white"
              leftSection={<IoClose />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnCancel
                    : classes.btnCancel_dark,
              }}
              styles={(theme) => ({
                root: {
                  border: `2px solid ${theme.colors.principalTheme[6]}`,
                  color: `${theme.colors.principalTheme[6]}`,
                },
                section: { fontSize: "1.2rem" },
              })}
            >
              Cancelar
            </Button>
          </Link>
          <BtnSave
            key={crypto.randomUUID()}
            id={crypto.randomUUID()}
            color="green"
            title="Los cambios han sido guardados"
            description="Los cambios realizados en el registro del usuario, han sido guardados satisfatoriamente 😎!"
            icon={
              <IconLayout>
                <HiOutlineSave />
              </IconLayout>
            }
          />
        </Flex>
      </Stack>
    </ContainerInside>
  );
}
