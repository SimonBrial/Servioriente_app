"use client";

import { HiOutlineStar, TbStarFilled } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import notificationsFn from "@/utils/notificationFn";
import TooltipLayout from "../TooltipLayout";

type sizeType = "small" | "medium" | "large";

export const BtnFavorite = ({ size }: { size: sizeType }) => {
  const [colorState, setColorState] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();

  if (size === "medium") {
    return (
      <UnstyledButton
        size={"xl"}
        variant="transparent"
        onClick={() => {
          setColorState(!colorState);
          notificationsFn({
            color: colorState ? "red" : "green",
            description: !colorState
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
  } else if (size === "small") {
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
            notificationsFn({
              color: colorState ? "red" : "green",
              description: !colorState
                ? "Eliminado de favoritos satisfactoriamente ♥️!"
                : "Agregado a favoritos satisfactoriamente!",
              id: crypto.randomUUID(),
              title: colorState ? "Eliminado" : "Agregado",
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
                  : theme.colors.lightTheme[3],
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
