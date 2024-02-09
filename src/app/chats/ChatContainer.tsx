import { ContainerInside } from "@/components/container/ContainerInside";
import { Stack } from "@mantine/core";
import React from "react";

export const ChatContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <ContainerInside width="70%" allWhite={false} withBorder>
      <Stack gap={8}>{children}</Stack>
    </ContainerInside>
  );
};
