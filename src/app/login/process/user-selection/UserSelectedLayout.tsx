"use client";

import StatusBadge from "@/components/badge/StatusBadge";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import RegisterInfo from "@/components/RegisterInfo";
import { HiOutlineCheck, IoClose } from "@/icons";
import { ListDBProps } from "@/interface/interface";
import { useProcessStore } from "@/store/process-store";
import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Stack,
  Flex,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import classes from "@/styles/btn-styles.module.css";
import classHeight from "@/styles/height-view.module.css";

export default function UserSelectedLayout() {
  const { dataShow } = useProcessStore();
  const { colorScheme } = useMantineColorScheme();
  const { setShowRegisterDescription } = useProcessStore();
  const numberValidation = (
    value: string | number,
    limitInf: number,
    limitSup: number,
  ) => {
    if (typeof value === "string") {
      return value.slice(limitInf, limitSup);
    }
    return value;
  };

  if (dataShow === undefined) return null;

  if (dataShow !== undefined) {
    const {
      typeStatus,
      firstName,
      phonePost,
      instagram,
      facebook,
      lastName,
      phonePre,
      birthday,
      vehicle,
      carID,
      state,
      mail,
    } = dataShow as ListDBProps;
    return (
      <Stack gap={8} px={10} style={{ height: "100%" }}>
        <TitleSimpleLayout title="Datos del Usuario" />
        <Stack justify="space-between" style={{ height: "100%" }}>
          <ScrollArea
            offsetScrollbars
            scrollbarSize={2}
            className={classHeight.processRegisterDescriptionContainer}
          >
            <Stack px={20} py={10}>
              <RegisterInfo keyInput={"Nombre: "} valueInput={firstName} />
              <RegisterInfo keyInput={"Apellido: "} valueInput={lastName} />
              <RegisterInfo keyInput={"Vehiculo: "} valueInput={vehicle} />
              <RegisterInfo
                keyInput={"Placa del Vehiculo: "}
                valueInput={carID}
              />
              <RegisterInfo
                keyInput={"RCV Status: "}
                valueInput={<StatusBadge title={typeStatus} />}
              />
              <RegisterInfo
                keyInput={"Correo: "}
                valueInput={mail ? mail : "Sin correo"}
              />
              <RegisterInfo
                keyInput={"Fecha de Cumpleaños: "}
                valueInput={birthday}
              />
              <RegisterInfo keyInput={"Zona: "} valueInput={state} />
              <RegisterInfo keyInput={"Instagram: "} valueInput={instagram} />
              <RegisterInfo keyInput={"Facebook: "} valueInput={facebook} />
              <RegisterInfo
                keyInput={"Telefono/ Whatsapp: "}
                valueInput={`${phonePre} -
              ${numberValidation(phonePost, 0, 3)} ${numberValidation(
                  phonePost,
                  3,
                  5,
                )} ${numberValidation(phonePost, 5, 7)}
            `}
              />
            </Stack>
          </ScrollArea>
          <Flex gap={6}>
            <Button
              onClick={() => setShowRegisterDescription(false)}
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
            <Link href={"/login/process"} style={{ width: "100%" }}>
              <Button
                fullWidth
                variant="default"
                leftSection={<HiOutlineCheck />}
                styles={(theme) => ({
                  root: {
                    color: "white",
                    backgroundColor: `${theme.colors.principalTheme[6]}`,
                  },
                  section: { fontSize: "1.2rem" },
                })}
                onClick={() =>
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#2BDD66",
                    title: "Usuario Seleccionado",
                    message:
                      "Se ha creado la tarjeta de RCV del usuario seleccionado satisfactoriamente!",
                    autoClose: 1000,
                    withCloseButton: true,
                  })
                }
              >
                Seleccionar
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Stack>
    );
  }
}
