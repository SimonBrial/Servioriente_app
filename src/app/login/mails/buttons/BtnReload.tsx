"use client";

import TooltipLayout from "@/components/TooltipLayout";
import { TbReload } from "@/icons";
import { useMailStore } from "@/store/mail-store";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { usePathname } from "next/navigation";

export default function BtnReload() {
  const { colorScheme } = useMantineColorScheme();
  const { fnGetAllData } = useMailStore();
  const path = usePathname();
  return (
    <TooltipLayout label="Actualizar Imbox" position="top">
      <ActionIcon
        onClick={() => fnGetAllData(path)}
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
