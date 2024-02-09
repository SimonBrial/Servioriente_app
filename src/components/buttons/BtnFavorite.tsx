"use client";

import { HiHeart } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import btnFavoriteClasses from "@/styles/BtnStyles.module.css";
import toast, { Toaster } from "react-hot-toast";
import { NotificationLayout } from "../layout/NotificationLayout";

import { notifications } from "@mantine/notifications";

export const BtnFavorite = () => {
  // Falta agregarle que cuando se le haga click, se muestre una notificacion de "Agregado a Favoritos" y que cambie su color al del tema principal
  const [colorState, setColorState] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();
  // console.log(colorState);

  const notify = () =>
    toast.custom(
      (t) =>
        !colorState ? (
          <NotificationLayout
            description="Agregado a favoritos"
            title="Agregado"
            type="Info"
            close={() => toast.dismiss(t.id)}
          />
        ) : (
          <NotificationLayout
            description="Eliminado de favoritos"
            title="Eliminado"
            type="Warning"
            close={() => toast.dismiss(t.id)}
          />
        ),
      {
        position: "bottom-right",
        duration: 5000,
      },
    );
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
      <Toaster />
    </>
  );
};
