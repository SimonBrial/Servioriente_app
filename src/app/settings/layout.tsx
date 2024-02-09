import TabsNavigation from "@/components/TabsNavigation";
import { HiOutlineUser, BiCrown, TbWorld } from "@/icons";
import { Box, Stack } from "@mantine/core";
import React from "react";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const mailSections = [
    { value: "Globales", icon: <TbWorld />, dir: "/settings" },
    { value: "Admin", icon: <HiOutlineUser />, dir: "/settings/admin" },
    {
      value: "Super Admin",
      icon: <BiCrown />,
      dir: "/settings/super-admin",
    },
  ];
  return (
    <Box>
      <Stack>
        <TabsNavigation sectionsArray={mailSections} orientation />
        {children}
      </Stack>
    </Box>
  );
}
