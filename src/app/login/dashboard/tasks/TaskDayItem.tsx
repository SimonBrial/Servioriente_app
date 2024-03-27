"use client";

import { degreeType } from "@/types/types";
import degreeColor from "@/utils/degreeColor";
import {
  useMantineColorScheme,
  Collapse,
  Divider,
  Avatar,
  Stack,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BtnTaskAction } from "./BtnTaskAction";

interface TaskDayCardProps {
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
  admin: boolean;
}

export const TaskDayItem = ({
  userToassign,
  desription,
  degree,
  admin,
  title,
}: TaskDayCardProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box
        className="prueba"
        style={{
          backgroundColor: degreeColor(degree)[1],
          position: "relative",
          padding: "0.5rem",
          paddingLeft: "1.2rem",
          borderRadius: "6px",
        }}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          // style={{ position: "relative" }}
        >
          <Divider
            orientation="vertical"
            size={"lg"}
            style={{
              borderRadius: "10px",
              height: opened ? "97.5%" : "80%",
              position: "absolute",
              transition: "all 0.4s ease-in-out",
              left: "0.5rem",
            }}
            color={degreeColor(degree)[0]}
          />
          <Flex
            gap={8}
            align={"center"}
            style={{ cursor: "pointer", width: "100%" }}
          >
            <Stack gap={0} style={{ width: "100%", marginLeft: "0rem" }}>
              <Flex onClick={toggle} style={{ width: "100%" }}>
                <Flex gap={6}>
                  <Avatar
                    variant="gradient"
                    size={"md"}
                    gradient={{
                      from: degreeColor(degree)[1],
                      to: degreeColor(degree)[0],
                      deg: 90,
                    }}
                  />
                </Flex>
                <Stack gap={0}>
                  <Text
                    // order={6}
                    style={{
                      paddingLeft: "0.7rem",
                    }}
                  >
                    {userToassign}
                  </Text>
                  {admin ? (
                    <Title
                      order={6}
                      styles={(theme) => ({
                        root: {
                          color:
                            colorScheme === "light"
                              ? `${theme.colors.lightTheme[6]}`
                              : `${theme.colors.darkTheme[1]}`,
                          paddingLeft: "0.7rem",
                          marginTop: "-0.5rem",
                        },
                      })}
                    >
                      Admin
                    </Title>
                  ) : (
                    <></>
                  )}
                </Stack>
              </Flex>
              <Divider
                color={degreeColor(degree)[0]}
                style={{ width: "95%", margin: "0.2rem 0" }}
              />
              <Text
                style={{
                  paddingLeft: "0.2rem",
                  fontSize: "0.8rem",
                }}
              >
                {title.length >= 25 ? <>{title.slice(0, 25)}...</> : title}
              </Text>
            </Stack>
          </Flex>
          <BtnTaskAction />
        </Flex>
        <Collapse
          transitionTimingFunction="linear"
          transitionDuration={250}
          in={opened}
          /* className={
          colorScheme === "light"
            ? classes.containerDay_collapse
            : classes.containerDay_collapse_dark
        } */
          style={{ paddingLeft: "1.25rem", height: "100%" }}
        >
          <Stack gap={3} style={{ marginLeft: "1rem" }}>
            {/* <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1"
            userToassign="Mario Hurtado"
          /> */}
            <ul>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
              <li>prueba</li>
            </ul>
          </Stack>
        </Collapse>
      </Box>
    </>
  );
};
