"use client";

import { HiOutlineStar, TbStarFilled } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";

type sizeType = "small" | "medium" | "large";

export const BtnFavorite = ({ size }: { size: sizeType }) => {
  const [colorState, setColorState] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();

  if (size === "large") {
    return (
      <UnstyledButton
        size={"xl"}
        variant="transparent"
        onClick={() => {
          setColorState(!colorState);
          notifications.show({
            color: colorState ? "red" : "green",
            message: !colorState
              ? "Eliminado de favoritos satisfactoriamente ♥️!"
              : "Agregado a favoritos satisfactoriamente!",
            id: crypto.randomUUID(),
            title: colorState ? "Eliminado" : "Agregado",
          });
        }}
        styles={(theme) => ({
          root: {
            color: colorState
              ? colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`
              : theme.colors.lightTheme[2],
          },
        })}
        classNames={{
          root:
            colorScheme === "light"
              ? classes.btnFavorite
              : classes.btnFavorite_dark,
        }}
      >
        <Center>
          <TbStarFilled />
        </Center>
      </UnstyledButton>
    );
  } else if (size === "medium") {
    return (
      <TooltipLayout
        label={!colorState ? "Agregar a favoritos" : "Eliminar de favoritos"}
        position="bottom"
        key={crypto.randomUUID()}
      >
        <UnstyledButton
          classNames={{
            root:
              colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
          }}
          onClick={() => {
            setColorState(!colorState);
            notifications.show({
              color: colorState ? "#115dfe" : "#2BDD66",
              message: colorState
                ? "Correo eliminado de favoritos satisfactoriamente ♥️!"
                : "Correo agregado a favoritos satisfactoriamente!",
              id: crypto.randomUUID(),
              title: colorState ? "Correo Eliminado" : "Correo Agregado",
            });
          }}
        >
          <Center
            styles={(theme) => ({
              root: {
                fontSize: "1.5rem",
                color: colorState
                  ? colorScheme === "light"
                    ? `${theme.colors.lightTheme[6]}`
                    : `${theme.colors.darkTheme[1]}`
                  : colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            {colorState ? <TbStarFilled /> : <HiOutlineStar />}
          </Center>
        </UnstyledButton>
      </TooltipLayout>
    );
  } else if (size === "small") {
    return (
      <TooltipLayout
        label={!colorState ? "Agregar a favoritos" : "Eliminar de favoritos"}
        position="bottom"
        key={crypto.randomUUID()}
      >
        <UnstyledButton
          mb={0}
          classNames={{
            root:
              colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
          }}
          onClick={() => {
            setColorState(!colorState);
            notifications.show({
              color: colorState ? "#115dfe" : "#2BDD66",
              message: colorState
                ? "Correo eliminado de favoritos satisfactoriamente!"
                : "Correo agregado a favoritos satisfactoriamente!",
              id: crypto.randomUUID(),
              title: colorState ? "Correo Eliminado" : "Correo Agregado",
            });
          }}
        >
          <Center
            styles={(theme) => ({
              root: {
                fontSize: "1.1rem",
                // border: "1px solid red",
                color: colorState
                  ? colorScheme === "light"
                    ? theme.colors.lightTheme[6]
                    : theme.colors.darkTheme[1]
                  : colorScheme === "light"
                    ? theme.colors.lightTheme[3]
                    : theme.colors.darkTheme[2],
              },
            })}
          >
            {colorState ? <TbStarFilled /> : <HiOutlineStar />}
          </Center>
        </UnstyledButton>
      </TooltipLayout>
    );
  }
};
