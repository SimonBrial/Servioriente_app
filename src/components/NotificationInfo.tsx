/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import {
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import toast, { Toaster } from "react-hot-toast";
import { IoClose, IoWarningOutline } from "../icons";
import React from "react";
import { NotificationIconsProps } from "@/interface/interface";

export default function NotificationInfo({
  title,
  description,
  children,
}: NotificationIconsProps): JSX.Element {
  const toastOptions = {
    duration: 1000,
    style: {
      background: "#363636",
      color: "#fff",
    },
  };

  const colorSelection = (color: string): string => {
    let colorSelected: string = "";
    if (color === "Aviso") {
      colorSelected = "#f8e916";
    } else if (color === "Error") {
      return (colorSelected = "#E94040");
    } else if (color === "Completado") {
      return (colorSelected = "#9AE6B4");
    } else if (color === "Informacion") {
      return (colorSelected = "#05ebe7");
    }

    return colorSelected;
  };

  const notify = () =>
    toast.custom((t) => (
      <Flex
        align={"center"}
        style={{
          backgroundColor: `${colorSelection(title)}`,
          borderRadius: "6px",
        }}
        styles={{ root: { color: "#000" } }}
        p={10}
        gap={15}
      >
        <Center>
          <IoWarningOutline style={{ fontSize: "1.8rem" }} />
        </Center>
        <Stack gap={0}>
          <Divider
            size={"xs"}
            color="#000"
            styles={{
              label: { color: "#000" },
            }}
            labelPosition="left"
            label={
              <Title order={4} styles={{ root: { cursor: "default" } }}>
                {title}
              </Title>
            }
          />
          <Text styles={{ root: { cursor: "default" } }}>{description}</Text>
        </Stack>
        <Center>
          <UnstyledButton
            onClick={() => {
              toast.dismiss(t.id);
            }}
            styles={{ root: { cursor: "pointer", fontSize: "1.4rem" } }}
          >
            <IoClose />
          </UnstyledButton>
        </Center>
      </Flex>
    ));
  return (
    <>
      <UnstyledButton
        variant="outline"
        onClick={notify}
        styles={(theme) => ({
          root: {
            color: `${theme.colors.principalTheme[6]}`,
            fontSize: "0.8rem",
          },
        })}
      >
        {children}
      </UnstyledButton>
      <Toaster position="top-left" toastOptions={toastOptions} />
    </>
  );
}
