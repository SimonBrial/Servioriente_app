"use client";

import { HiOutlineStar, TbStarFilled } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "@/styles/btn-styles.module.css";
import TooltipLayout from "../TooltipLayout";
import { notifications } from "@mantine/notifications";
import { useMailStore } from "@/store/mail-store";

type sizeType = "small" | "medium" | "large";

export default function BtnFavorities({
  status,
  mailId,
  size,
  path,
}: {
  status: boolean;
  mailId?: string;
  size: sizeType;
  path?: string;
}) {
  const [colorState, setColorState] = useState<boolean>(status);
  const { colorScheme } = useMantineColorScheme();
  const { fnFavoriteMark, fnFavoriteMarkTemplate } = useMailStore();

  useEffect(() => setColorState(status), [status]);

  const handleFavorites = () => {
    if (!path?.includes("formats")) {
      if (mailId !== undefined && path !== undefined) {
        fnFavoriteMark(mailId, path, !colorState);
      }
      setColorState(!colorState);
      notifications.show({
        color: colorState ? "#115dfe" : "#2BDD66",
        message: colorState
          ? "Correo eliminado de favoritos satisfactoriamente!"
          : "Correo agregado a favoritos satisfactoriamente!",
        id: crypto.randomUUID(),
        title: colorState ? "Correo Eliminado" : "Correo Agregado",
      });
    }
    if (path?.includes("formats")) {
      if (mailId !== undefined && path !== undefined) {
        fnFavoriteMarkTemplate(mailId)
      }
      setColorState(!colorState);
      notifications.show({
        color: colorState ? "#115dfe" : "#2BDD66",
        message: colorState
          ? "Formato eliminado de favoritos satisfactoriamente!"
          : "Formato agregado a favoritos satisfactoriamente!",
        id: crypto.randomUUID(),
        title: colorState ? "Formato Eliminado" : "Formato Agregado",
      });
    }
    
  };

  if (size === "large") {
    return (
      <UnstyledButton
        size={"xl"}
        variant="transparent"
        onClick={() => {
          setColorState(!colorState);
          notifications.show({
            color: colorState ? "#115dfe" : "#2bdd66",
            message: colorState
              ? "Eliminado de favoritos satisfactoriamente ♥️!"
              : "Agregado a favoritos satisfactoriamente!",
            id: crypto.randomUUID(),
            title: colorState
              ? "Eliminado de Favoritos"
              : "Agregado a Favoritos",
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
            if (mailId !== undefined && path !== undefined) {
              fnFavoriteMark(mailId, path, !colorState);
            }
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
          onClick={handleFavorites}
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
}
