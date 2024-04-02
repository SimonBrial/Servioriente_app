"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { HiOutlineDocumentText } from "@/icons";
import btnClass from "@/styles/btn-styles.module.css";
import { notifications } from "@mantine/notifications";

export const BtnReportGenerate = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      fullWidth
      classNames={{
        root:
          colorScheme === "light"
            ? btnClass.btnFilter
            : btnClass.btnFilter_dark,
      }}
      onClick={() =>
        notifications.show({
          id: `${crypto.randomUUID()}`,
          color: "blue",
          title: "Descargando Reporte",
          message: "El reporte solicitado se esta descargando!",
          autoClose: 1000,
          withCloseButton: true,
          loading: true,
        })
      }
      variant="filled"
      leftSection={<HiOutlineDocumentText />}
      // fullWidth
      styles={(theme) => ({
        // root: { width: "25%" },
        section: {
          fontSize: "1.4rem",
          color:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[6]}`
              : `${theme.colors.darkTheme[1]}`,
        },
      })}
    >
      Generar Reporte
    </Button>
  );
};

/*
<>
  <Modal
    centered
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
  </Modal>
  <Button
    classNames={{
      root:
        colorScheme === "light"
          ? btnClass.btnFilter
          : btnClass.btnFilter_dark,
    }}
    onClick={open}
    variant="filled"
    leftSection={<HiOutlineDocumentText />}
    // fullWidth
    styles={(theme) => ({
      root: { width: "25%" },
      section: {
        fontSize: "1.4rem",
        color:
          colorScheme === "light"
            ? `${theme.colors.lightTheme[6]}`
            : `${theme.colors.darkTheme[1]}`,
      },
    })}
  >
    Generar Reporte
  </Button>
</>
*/
