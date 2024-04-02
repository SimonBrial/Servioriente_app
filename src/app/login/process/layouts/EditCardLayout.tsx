"use client";

import { CalendarInput } from "@/components/inputs/CalendarInput";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import PhoneInputLayout from "@/components/inputs/PhoneInputLayout";
import { SelectSocialRed } from "@/components/SelectSocialRed";
import UserPhoto from "@/components/UserPhoto";
import { HiOutlineUser } from "@/icons";
import {
  Container,
  Divider,
  Flex,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";

export default function EditCardLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Stack gap={2} style={{ width: "100%" }}>
        <Flex gap={5} justify={"center"} align={"center"}>
          <Title
            order={2}
            style={{
              color: colorScheme === "light" ? "#696969" : "#EFF3F5",
              textAlign: "center",
            }}
          >
            Editar Registro
          </Title>
        </Flex>
        <Divider
          size="md"
          styles={(theme) => ({
            root: {
              borderColor:
                colorScheme === "light"
                  ? theme.colors.lightTheme[6]
                  : theme.colors.darkTheme[1],
              marginTop: "-0.3rem",
            },
          })}
        />
      </Stack>
      <Stack align="center" justify="space-between" gap={2}>
        <UserPhoto userIconSize="6rem" />
        <Stack gap={4} justify="space-between" w={"100%"}>
          <HorizontalInputLayout
            inputSize="235px"
            asterisk
            icon={<HiOutlineUser />}
            title="Nombre"
          />
          <HorizontalInputLayout
            inputSize="235px"
            asterisk
            icon={<HiOutlineUser />}
            title="Apellido"
          />
          <HorizontalInputLayout
            inputSize="235px"
            asterisk
            icon={<HiOutlineUser />}
            title="Vehiculo"
          />
          <HorizontalInputLayout
            inputSize="235px"
            asterisk
            icon={<HiOutlineUser />}
            title="Placa del vehiculo"
          />
          <HorizontalInputLayout
            inputSize="235px"
            asterisk
            icon={<HiOutlineUser />}
            title="Zona"
          />
          <HorizontalInputLayout
            inputSize="235px"
            asterisk
            icon={<HiOutlineUser />}
            title="Email"
          />
          <SelectSocialRed />
          <CalendarInput withTitle title="Cumpleaños" width={"235px"} />
          <PhoneInputLayout />
        </Stack>
      </Stack>
    </Container>
  );
}
