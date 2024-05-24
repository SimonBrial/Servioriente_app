"use client";

import {
  useMantineColorScheme,
  FloatingPosition,
  Tooltip,
} from "@mantine/core";

export default function TooltipLayout({
  label,
  children,
  position,
}: {
  label: string;
  children: React.ReactNode;
  position: FloatingPosition | undefined;
}) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Tooltip
      label={label}
      color={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
      position={position}
      arrowOffset={10}
      withArrow
      transitionProps={{ transition: "scale", duration: 300 }}
    >
      {children}
    </Tooltip>
  );
}
