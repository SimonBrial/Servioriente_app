"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  Container,
  Collapse,
  Center,
  Stack,
  Badge,
  Flex,
  Text,
  Box,
  useMantineColorScheme,
} from "@mantine/core";
import { BiCrown } from "@/icons";
import BtnAdd from "@/components/buttons/BtnAdd";
import { SuperAdminCard } from "./SuperAdminCard";
import { AdminDescriptionLayout } from "../admin/AdminDescriptionLayout";
import { GeneralDivider } from "@/components/GeneralDivider";

type labelType = "Super Admin" | "Admin";

export const UserContainer = ({ label }: { label: labelType }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      p={12}
      w={"100%"}
      styles={(theme) => ({
        root: {
          border:
            colorScheme === "light"
              ? `2px solid ${theme.colors.lightTheme[2]}`
              : `2px solid ${theme.colors.darkTheme[9]}`,
          borderRadius: "6px",
          backgroundColor:
            colorScheme === "light" ? "#fff" : `${theme.colors.darkTheme[7]}`,
        },
      })}
    >
      <Stack>
        <Stack gap={4}>
          <Flex justify={"space-between"} align={"center"}>
            <Flex
              gap={6}
              align={"center"}
              onClick={toggle}
              style={{ cursor: "default" }}
            >
              <Center
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.principalTheme[6]}`
                        : `${theme.colors.darkTheme[1]}`,
                  },
                })}
              >
                <BiCrown style={{ fontSize: "2.5rem" }} />
              </Center>
              <Text
                style={{ fontSize: "2rem" }}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[3]}`
                        : `${theme.colors.darkTheme[2]}`,
                  },
                })}
              >
                Lista de {label}
              </Text>
              <Badge
                radius={"sm"}
                styles={(theme) => ({
                  root: {
                    backgroundColor:
                      colorScheme === "light"
                        ? `${theme.colors.principalTheme[6]}`
                        : `${theme.colors.darkTheme[1]}`,
                  },
                })}
              >
                9
              </Badge>
            </Flex>
            <Box h={40}>
              <BtnAdd
                iconTag="add-user"
                label={
                  label === "Super Admin" ? "Nuevo Super Admin" : "Nuevo Admin"
                }
                addFn={toggle}
              >
                <AdminDescriptionLayout size="200px" />
              </BtnAdd>
            </Box>
          </Flex>
          <GeneralDivider />
        </Stack>
        <Collapse in={opened}>
          <Stack gap={5}>
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
            <SuperAdminCard admin />
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
          </Stack>
        </Collapse>
      </Stack>
    </Container>
  );
};
