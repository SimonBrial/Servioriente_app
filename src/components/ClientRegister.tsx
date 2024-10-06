/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { useMantineColorScheme, Title, Stack, Flex } from "@mantine/core";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  HiOutlineUser,
  AiOutlineCar,
} from "@/icons";
import { useForm } from "react-hook-form";
import TitleSimpleLayout from "./layout/TitleSimpleLayout";
import { degreeType } from "@/types/types";
import HorizontalInputLayout from "./inputs/HorizontalInputLayout";
import StateSelect from "./inputs/StateSelect";
import StatusSelect from "./inputs/StatusSelect";
import PhoneInputLayout from "./inputs/PhoneInputLayout";
import SocialMediaInput from "./inputs/SocialMediaInput";

interface ClientFormProps {
  firstName: string;
  lastName: string;
  vehicle: string;
  state: string;
  typeStatus: degreeType | string;
  facebook?: string;
  instagram?: string;
  phonePre: string;
  phonePost: string | number;
}

export default function ClientRegister(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
  } = useForm<ClientFormProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      vehicle: "",
      state: "",
      typeStatus: "",
      phonePre: "",
      phonePost: "",
      facebook: "",
      instagram: "",
    },
  });
  // console.log(errors);
  const onSubmit = (data: ClientFormProps) => {
    console.log(data);
  };

  // const firstName = watch("firstName");
  // const facebook = watch("facebook");
  // const instagram = watch("instagram");
  // const lastName = watch("lastName");
  const phonePost = watch("phonePost");
  const phonePre = watch("phonePre");
  // const state = watch("state");
  // const typeStatus = watch("typeStatus");
  // const vehicle = watch("vehicle");
  return (
    <Stack
      justify="space-between"
      style={{
        padding: "0 1rem",
        height: "95vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <Stack justify="space-between" style={{ height: "100%" }}>
          <Stack gap={"xs"}>
            <TitleSimpleLayout title="Crear Registro" />
            <HorizontalInputLayout
              errorDescription={errors.firstName?.message}
              asterisk
              icon={<HiOutlineUser />}
              inputSize="200px"
              label="firstName"
              max={20}
              min={3}
              register={register}
              required
              title="Nombre"
              control={control}
            />
            <HorizontalInputLayout
              errorDescription={errors.lastName?.message}
              asterisk
              icon={<HiOutlineUser />}
              inputSize="200px"
              label="lastName"
              max={20}
              min={3}
              register={register}
              required
              title="Apellido"
              control={control}
            />
            <HorizontalInputLayout
              errorDescription={errors.vehicle?.message}
              asterisk
              icon={<AiOutlineCar />}
              inputSize="200px"
              label="vehicle"
              max={20}
              min={2}
              register={register}
              required
              title="Vehiculo"
              control={control}
            />
            <StateSelect
              errorDescription={errors.state?.message}
              asterisk
              inputSize="200px"
              label="state"
              max={20}
              min={2}
              register={register}
              required
              control={control}
            />
            <StatusSelect
              typeArray="process"
              errorDescription={errors.typeStatus?.message}
              asterisk
              inputSize="200px"
              label="typeStatus"
              max={20}
              min={2}
              register={register}
              required
              control={control}
            />
            <PhoneInputLayout
              errorDescription={errors.phonePre?.message}
              errorCodePhone={errors.phonePost?.message}
              asterisk
              inputSize=""
              label=""
              max={20}
              min={2}
              register={register}
              required
              control={control}
            />
            <TitleSimpleLayout title="Redes Sociales" />
            <SocialMediaInput
              errorDescription={errors.facebook?.message}
              asterisk={false}
              socialMediaIcon={<IoLogoFacebook />}
              socialMediaName="Facebook"
              register={register}
              inputSize="200px"
              control={control}
              label="facebook"
              max={20}
              required
              min={2}
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
                <Flex
                  gap={4}
                  align={"center"}
                  justify={"end"}
                  style={{ marginRight: "2rem" }}
                >
                  <Title order={5}>{phonePre}</Title> -{" "}
                  <Title order={5}>{phonePost}</Title>
                </Flex>
              </Title>
            </Flex>
            <SocialMediaInput
              errorDescription={errors.instagram?.message}
              asterisk={false}
              socialMediaIcon={<IoLogoInstagram />}
              socialMediaName="Instagram"
              register={register}
              inputSize="200px"
              control={control}
              label="instagram"
              max={20}
              required
              min={2}
            />
          </Stack>
          {/* <Stack gap={1}>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{vehicle}</p>
            <p>{state}</p>
            <p>{typeStatus}</p>
            <p>{phonePre}</p>
            <p>{phonePost}</p>
            <p>{facebook}</p>
            <p>{instagram}</p>
          </Stack> */}
          {/* <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
            <Button
              onClick={close}
              fullWidth
              variant="white"
              leftSection={<IoClose />}
              styles={(theme) => ({
                root: {
                  border: `2px solid ${theme.colors.lightTheme[6]}`,
                  color: `${theme.colors.lightTheme[6]}`,
                },
                section: { fontSize: "1.2rem" },
              })}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="filled"
              leftSection={<HiOutlineUserAdd />}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classesBtn.btnAdd
                    : classesBtn.btnAdd_dark,
              }}
              styles={{
                section: { fontSize: "1.2rem" },
              }}
              onClick={() => {
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "El Registro en la Base de Datos 📄",
                  message:
                    "Se ha creado el registro en la Base de Datos satisfactoriamente 😎!",
                  autoClose: 1000,
                  withCloseButton: true,
                });
              }}
            >
              Crear Registro
            </Button>
          </Flex> */}
        </Stack>
      </form>
    </Stack>
  );
}
