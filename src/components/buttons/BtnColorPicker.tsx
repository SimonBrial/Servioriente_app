import { MdCircle } from "@/icons";
import { ActionIcon } from "@mantine/core";
import React from "react";

export const BtnColorPicker = ({ color }: { color: string }) => {
  return (
    <ActionIcon variant="transparent" color={color}>
      <MdCircle />
    </ActionIcon>
  );
};
