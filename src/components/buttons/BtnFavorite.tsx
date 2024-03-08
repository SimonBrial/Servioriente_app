"use client";

import { HiHeart } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import btnFavoriteClasses from "@/styles/btnStyles.module.css";
import { notifications } from "@mantine/notifications";

export const BtnFavorite = () => {
  // Falta agregarle que cuando se le haga click, se muestre una notificacion de "Agregado a Favoritos" y que cambie su color al del tema principal
  const [colorState, setColorState] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();
  // console.log(colorState);

  return (
    <>
      <UnstyledButton
        size={"xl"}
        variant="transparent"
        onClick={() => {
          setColorState(!colorState);
          // notify();
          notifications.show({
            color: colorState ? "red" : "blue",
            autoClose: 3000,
            title: colorState ? "Eliminado" : "Agregado",
            message: colorState
              ? "Eliminado de favoritos"
              : "Agregado a favoritos",
          });
        }}
        styles={(theme) => ({
          root: {
            color: colorState
              ? colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`
              : colorScheme === "light"
                ? `${theme.colors.lightTheme[2]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
        classNames={{
          root:
            colorScheme === "light"
              ? btnFavoriteClasses.btnFavorite
              : btnFavoriteClasses.btnFavorite_dark,
        }}
      >
        <Center>
          <HiHeart />
        </Center>
      </UnstyledButton>
    </>
  );
};
