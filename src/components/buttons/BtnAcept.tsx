"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { HiOutlineCheck } from "@/icons";
import classes from "@/styles/BtnStyles.module.css";

export const BtnAcept = (): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Button
      leftSection={<HiOutlineCheck />}
      variant="default"
      fullWidth
      classNames={{
        root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
      }}
      styles={(theme) => ({ section: { fontSize: "1.5rem" } })}
    >
      Aceptar
    </Button>
  );
};
