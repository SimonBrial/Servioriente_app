"use client";

import React from "react";
import { Modal, Button, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFilter } from "../../icons";
import classes from "@/styles/btn-styles.module.css";

export function BtnFilter({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{
          header: { textAlign: "center" },
          title: { textAlign: "center", margin: "0 auto" },
          body: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        {children}
        <Button
          onClick={close}
          leftSection={<BsFilter />}
          fullWidth
          styles={(theme) => ({
            section: { fontSize: "1.8rem" },
            root: {
              backgroundColor: `${theme.colors.principalTheme[6]}`,
            },
          })}
        >
          Aplicar Filtros
        </Button>
      </Modal>
      <Button
        classNames={{
          root:
            colorScheme === "light"
              ? classes.btnFilter
              : classes.btnFilter_dark,
        }}
        onClick={open}
        // fullWidth
        styles={(theme) => ({
          root: { width: "15%" },
          section: {
            fontSize: "1.4rem",
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`,
          },
        })}
        leftSection={<BsFilter style={{ strokeWidth: "0.5px" }} />}
      >
        Filtrar
      </Button>
    </>
  );
}
