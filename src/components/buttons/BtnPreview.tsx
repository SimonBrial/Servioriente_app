"use client";

import { HiOutlineEye, IoClose } from "@/icons";
import { Button, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { TitleLayout } from "../layout/TitleLayout";

export const BtnPreview = (): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <Stack gap={6} justify="space-between" style={{ height: "96vh" }}>
          <TitleLayout color="" icon="" onText title="Vista Previa" />
          {/* Aqui adentro va la descripcion del mensaje */}
          <Button
            onClick={close}
            fullWidth
            variant="#004EE5"
            leftSection={<IoClose />}
            styles={(theme) => ({
              section: { fontSize: "1.2rem" },
              root: { backgroundColor: `${theme.colors.lightTheme[6]}` },
            })}
          >
            Cerrar
          </Button>
        </Stack>
      </Drawer>
      <Button
        onClick={open}
        variant="#004EE5"
        fullWidth
        leftSection={<HiOutlineEye />}
        styles={(theme) => ({
          section: { fontSize: "1.2rem" },
          root: { backgroundColor: `${theme.colors.principalTheme[6]}` },
        })}
      >
        Vista Previa
      </Button>
    </>
  );
};
