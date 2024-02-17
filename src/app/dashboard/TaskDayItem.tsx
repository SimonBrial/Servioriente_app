import { HiOutlineDotsVertical } from "@/icons";
import { degreeType } from "@/types/types";
import degreeColor from "@/utils/degreeColor";
import {
  useMantineColorScheme,
  Collapse,
  Divider,
  Avatar,
  Center,
  Stack,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useCallback, useState } from "react";

interface TaskDayCardProps {
  title: string;
  desription: string;
  degree: degreeType;
  userToassign: string;
  admin: boolean;
}
export const TaskDayItem = ({
  admin,
  degree,
  desription,
  title,
  userToassign,
}: TaskDayCardProps) => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [heightCard, setHeightCard] = useState<number | undefined>(90);

  const taskCard = useCallback((card: any) => {
    if (card !== null) {
      setHeightCard(document.querySelector(".prueba")?.clientHeight);
    }
  }, []);

  // useEffect(() => {}, [opened]);
  // console.log(heightCard);
  // console.log(taskCard);
  return (
    <>
      <Box
        ref={taskCard}
        className="prueba"
        style={{
          backgroundColor: degreeColor(degree)[1],
          position: "relative",
          padding: "0.5rem",
          borderRadius: "6px",
        }}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          style={{ position: "relative" }}
        >
          <Flex
            gap={8}
            align={"center"}
            style={{ cursor: "pointer", width: "100%" }}
          >
            <Divider
              orientation="vertical"
              size={"lg"}
              style={{
                borderRadius: "10px",
                height: opened
                  ? heightCard !== undefined
                    ? `${heightCard - 10}`
                    : "100px"
                  : "",
                position: opened ? "absolute" : "relative",
                transition: "height 0.8s ease-in-out",
                left: "0.5rem",
              }}
              color={degreeColor(degree)[0]}
            />
            <Stack
              gap={0}
              style={{ width: "100%", marginLeft: opened ? "1rem" : "0.26rem" }}
            >
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
          <Center
            style={{ position: "absolute", right: "0.5rem", top: "0.5rem" }}
          >
            <HiOutlineDotsVertical />
          </Center>
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
          style={{ paddingLeft: "1.25rem" }}
        >
          <Stack gap={3}>
            {/* <TaskDayItem
            admin
            degree="Muy Importante"
            desription="Prueba"
            title="Prueba 1"
            userToassign="Mario Hurtado"
          /> */}
            prueba
          </Stack>
        </Collapse>
      </Box>
    </>
  );
};
