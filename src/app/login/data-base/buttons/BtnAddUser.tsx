/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { useMantineColorScheme, Button, Drawer, Stack } from "@mantine/core";
import { HiOutlineUserAdd } from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import { useDataBaseStore } from "@/store/db-store";
import React from "react";

/*
{
  description,
  children,
  labelBtn,
  iconTag,
  loading,
  classes,
  color,
  title,
  addFn,
  label,
  icon,
  id,
}: BtnAddProps
*/

export default function BtnAddUser({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { colorScheme } = useMantineColorScheme();

  const { fnSetShow, showRegisterLayout } = useDataBaseStore();

  return (
    <>
      <Drawer
        opened={showRegisterLayout}
        onClose={() => fnSetShow(false)}
        closeOnClickOutside={true}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 0.5rem",
            height: "95vh",
          }}
        >
          <Stack
            justify="space-between"
            style={{
              padding: "0 0.8rem",
              height: "95vh",
            }}
          >
            {children}
          </Stack>
        </Stack>
      </Drawer>
      <Button
        leftSection={<HiOutlineUserAdd />}
        styles={{
          section: { fontSize: "1.2rem" },
          root: {
            padding: "0.6rem 1.5rem",
            height: "100%",
            width: "100%",
          },
        }}
        // fullWidth
        onClick={() => fnSetShow(true)}
        classNames={{
          root:
            colorScheme === "light"
              ? classesBtn.btnAdd
              : classesBtn.btnAdd_dark,
        }}
        key={crypto.randomUUID()}
      >
        Nuevo Usuario
      </Button>
    </>
  );
}
