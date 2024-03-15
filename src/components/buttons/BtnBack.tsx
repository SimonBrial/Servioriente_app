"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { IoArrowBackOutline } from "@/icons";
import classes from "@/styles/btn-styles.module.css";

export default function BtnBack({
  close,
  label = "Volver",
}: {
  close: () => void;
  label: string;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      onClick={close}
      variant="filled"
      leftSection={<IoArrowBackOutline />}
      fullWidth
      classNames={{
        root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
      }}
      styles={(theme) => ({
        /* root: { backgroundColor: `${theme.colors.lightTheme[6]}` }, */
        section: { fontSize: "1.2rem" },
      })}
    >
      {label}
    </Button>
  );
}
