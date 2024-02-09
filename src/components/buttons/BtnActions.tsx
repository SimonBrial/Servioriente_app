"use client";

import { Button, Flex, useMantineColorScheme } from "@mantine/core";
import { IoClose } from "../../icons";
import { BtnActionProps } from "@/interface/interface";
import classes from "@/styles/BtnStyles.module.css";

export default function BtnActions({
  title,
  close,
  icon,
}: BtnActionProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
      <Button
        onClick={close}
        fullWidth
        variant="white"
        leftSection={<IoClose />}
        styles={(theme) => ({
          root: {
            border: `2px solid ${theme.colors.lightTheme[6]}`,
            color: `${theme.colors.lightTheme[6]}`,
          },
          section: { fontSize: "1.2rem" },
        })}
      >
        Cancelar
      </Button>
      <Button
        fullWidth
        variant="filled"
        leftSection={icon}
        classNames={{
          root: colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark,
        }}
        styles={(theme) => ({
          section: { fontSize: "1.2rem" },
        })}
      >
        {title}
      </Button>
    </Flex>
  );
}
