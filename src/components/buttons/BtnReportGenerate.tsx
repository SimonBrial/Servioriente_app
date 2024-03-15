"use client";

import { Button, Modal, useMantineColorScheme } from "@mantine/core";
import { HiOutlineDocumentText } from "@/icons";
import { useDisclosure } from "@mantine/hooks";
import btnClass from "@/styles/btn-styles.module.css";

export const BtnReportGenerate = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
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
  );
};
