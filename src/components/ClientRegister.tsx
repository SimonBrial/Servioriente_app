"use client";

import { Title, Stack, Flex, useMantineColorScheme } from "@mantine/core";
import { TitleLayout } from "./layout/TitleLayout";
import {
  HiOutlineUser,
  AiOutlineCar,
  IoLogoFacebook,
  IoLogoInstagram,
} from "../icons";
import HorizontalInputLayout from "./inputs/HorizontalInputLayout";
import { StateSelect } from "./inputs/StateSelect";
import PhoneInputLayout from "./inputs/PhoneInputLayout";
import { StatusSelect } from "./inputs/StatusSelect";
import { SocialMediaInput } from "./inputs/SocialMediaInput";

export default function ClientRegister(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={"xs"}>
      <TitleLayout title="Crear Registro" color="" icon="" onText={false} />
      <HorizontalInputLayout
        asterisk={false}
        icon={<HiOutlineUser />}
        inputSize="200px"
        title="Nombre"
      />
      <HorizontalInputLayout
        asterisk={false}
        icon={<HiOutlineUser />}
        inputSize="200px"
        title="Apellido"
      />
      <HorizontalInputLayout
        asterisk={false}
        icon={<AiOutlineCar />}
        inputSize="200px"
        title="Vehiculo"
      />
      <StateSelect inputSize="200px" />
      <StatusSelect inputSize="200px" />
      <PhoneInputLayout />
      <TitleLayout title="Redes Sociales" color="" icon="" onText={false} />
      <SocialMediaInput
        socialMediaIcon={<IoLogoFacebook />}
        socialMediaName="Facebook"
      />
      <Flex justify={"space-between"} align={"center"}>
        <Title
          order={5}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
            },
          })}
        >
          Whatsapp
        </Title>
        <Title
          order={5}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? `${theme.colors.lightTheme[3]}`
                  : `${theme.colors.darkTheme[2]}`,
              width: "55%",
              textAlign: "center",
            },
          })}
        >
          0424 -589.85.76
        </Title>
      </Flex>
      <SocialMediaInput
        socialMediaIcon={<IoLogoInstagram />}
        socialMediaName="Instagram"
      />
    </Stack>
  );
}
