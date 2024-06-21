"use client";

import TooltipLayout from "@/components/TooltipLayout";
import { TbReload } from "@/icons";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

export default function BtnReload() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <TooltipLayout label="Actualizar Imbox" position="top">
      <ActionIcon
        onClick={() => console.log("Reloading...")}
        size={22}
        variant="default"
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? theme.colors.lightTheme[3]
                : theme.colors.darkTheme[2],
            border: "none",
            padding: "0.1rem",
          },
        })}
      >
        <TbReload style={{ fontSize: "1.5rem" }} />
      </ActionIcon>
    </TooltipLayout>
  );
}
