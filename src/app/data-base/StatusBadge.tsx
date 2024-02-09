"use client";

import { Badge, useMantineColorScheme } from "@mantine/core";

export default function StatusBadge({ title }: { title: string }): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Badge
      color={colorScheme === "light" ? "#004EE5" : "#52A5E0"}
      size="md"
      radius="sm"
    >
      {title}
    </Badge>
  );
}
