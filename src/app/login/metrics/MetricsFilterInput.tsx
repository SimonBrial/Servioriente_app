"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import BtnAdd from "@/components/buttons/BtnAdd";
import { HiOutlineTrash } from "@/icons";
import {
  useMantineColorScheme,
  Autocomplete,
  Container,
  Center,
  Badge,
  Stack,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import React, { useState } from "react";
import { GoalsLayout } from "./GoalsLayout";
import classes from "@/styles/metrics.module.css";

export const MetricsFilterInput = ({
  btnDisable,
}: {
  btnDisable: boolean;
}): JSX.Element => {
  const [value, setValue] = useState("");
  const { colorScheme } = useMantineColorScheme();
  const adminArr: string[] = ["Mario Hurtado", "Simon Briceño"];
  return (
    <Container p={0} style={{ maxWidth: "100%", width: "100%" }}>
      <Stack gap={4} mt={6}>
        <Flex align={"center"} gap={8} style={{ height: "2.2rem" }}>
          <Flex
            align={"center"}
            gap={8}
            style={{ width: "100%" }}
            styles={(theme) => ({
              root: {
                backgroundColor:
                  colorScheme === "light"
                    ? "#ffffff"
                    : `${theme.colors.darkTheme[7]}`,
                padding: "0.2rem 0.5rem",
                borderRadius: "6px 6px 0 0",
              },
            })}
          >
            <Text
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : "#ffffff",
                },
              })}
            >
              Filtros:
            </Text>
            <Autocomplete
              data={adminArr}
              value={value}
              onChange={setValue}
              variant="unstyled"
              placeholder="Indicar un nombre de administrador"
              style={{ width: "100%" }}
              styles={(theme) => ({
                input: {
                  color:
                    colorScheme === "light"
                      ? `${theme.colors.lightTheme[3]}`
                      : `${theme.colors.darkTheme[2]}`,
                },
              })}
              classNames={{
                input: classes.filter_input,
              }}
            />
            <Badge
              size="md"
              style={{ cursor: "pointer" }}
              color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
            >
              {" "}
              {/* Hay que agregarle los estilos a este badge que esta funcionando como boton */}
              <Center style={{ fontSize: "1.2rem" }}>
                <HiOutlineTrash />
              </Center>
            </Badge>
          </Flex>
          {btnDisable ? (
            <Box>
              <BtnAdd
                // iconTag="add-event"
                label="Nueva Meta"
                key={crypto.randomUUID()}
                fnShow={() => { }}
                iconTag="goal"
                showDrawer
                // color="#2BDD66"
                // description="La meta ha sido creada y guardada satisfactoriamente 📈!"
                // id={crypto.randomUUID()}
                // labelBtn="Crear Meta"
                // title="Meta Creada"
              >
                <GoalsLayout />
              </BtnAdd>
            </Box>
          ) : (
            <></>
          )}
        </Flex>
        <GeneralDivider orientation="horizontal" key={crypto.randomUUID()} />
      </Stack>
    </Container>
  );
};
