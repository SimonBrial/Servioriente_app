/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import {
  useMantineColorScheme,
  Button,
  Title,
  Stack,
  Flex,
  ScrollArea,
} from "@mantine/core";
import {
  HiOutlineUserAdd,
  IoLogoInstagram,
  IoLogoFacebook,
  HiOutlineUser,
  AiOutlineCar,
  IoClose,
  MdOutlineAlternateEmail,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import heightClass from "@/styles/height-view.module.css";
import { notifications } from "@mantine/notifications";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import StatusSelect from "@/components/inputs/StatusSelect";
import PhoneInputLayout from "@/components/inputs/PhoneInputLayout";
import StateSelect from "@/components/inputs/StateSelect";
import SocialMediaInput from "@/components/inputs/SocialMediaInput";
import { useForm } from "react-hook-form";
import RememberWarning from "@/components/RememberWarning";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schema/UserSchema";
import { ListDBProps } from "@/interface/interface";

import dayjs from "dayjs";
import { useDataBaseStore } from "@/store/db-store";

const initialValues: ListDBProps = {
  firstName: "",
  lastName: "",
  vehicle: "",
  state: "",
  typeStatus: "Espera",
  phonePre: "",
  phonePost: "",
  facebook: "",
  instagram: "",
  birthday: dayjs(new Date()),
  carID: "",
  id: crypto.randomUUID(),
  mail: "",
};
export default function CreateRegisterLayout() {
  const { colorScheme } = useMantineColorScheme();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
    reset,
  } = useForm<ListDBProps>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
    defaultValues: initialValues,
  });

  const { fnCreateUser, fnSetShow } = useDataBaseStore();
  console.log(errors);
  const onSubmit = async (data: ListDBProps) => {
    try {
      if (Object.keys(errors).length === 0) {
        await fnCreateUser(data);
        fnSetShow(false);
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "El Registro en la Base de Datos 📄",
          message:
            "Se ha creado el registro en la Base de Datos satisfactoriamente 😎!",
          autoClose: 1000,
          withCloseButton: true,
        });
        reset(initialValues);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const phonePost = watch("phonePost");
  const phonePre = watch("phonePre");

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Stack justify="space-between" style={{ height: "100%" }}>
        <Stack gap={8}>
          <TitleSimpleLayout title="Crear Registro" />
          <ScrollArea
            maw={"100%"}
            scrollbarSize={2}
            offsetScrollbars
            className={heightClass.registerLayout}
          >
            <Stack gap={"xs"}>
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
              <HorizontalInputLayout
                errorDescription={errors.carID?.message}
                asterisk
                icon={<AiOutlineCar />}
                inputSize="200px"
                label="carID"
                max={20}
                min={2}
                register={register}
                required
                title="Placa"
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
                errorDescription={errors.typeStatus?.message}
                typeArray="process"
                asterisk
                inputSize="200px"
                label="typeStatus"
                max={20}
                min={2}
                register={register}
                required
                control={control}
              />
              <HorizontalInputLayout
                errorDescription={errors.mail?.message}
                asterisk
                icon={<MdOutlineAlternateEmail />}
                inputSize="200px"
                label="mail"
                max={20}
                min={2}
                register={register}
                required
                title="Correo"
                control={control}
              />
              {/* <CalendarInput
                  width="200px"
                  withTitle
                  errorDescription={errors.birthday?.message}
                  asterisk={false}
                  icon={<MdOutlineAlternateEmail />}
                  inputSize="100px"
                  label="birthday"
                  max={20}
                  min={2}
                  register={register}
                  required
                  title="Cumpleaños"
                  control={control}
                /> */}
              <PhoneInputLayout
                errorCodePhone={errors.phonePre?.message}
                errorDescription={errors.phonePost?.message}
                asterisk
                inputSize="200px"
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
                {phonePre || phonePost ? (
                  <Flex
                    gap={4}
                    align={"center"}
                    justify={"end"}
                    styles={(theme) => ({
                      root: {
                        color:
                          colorScheme === "light"
                            ? `${theme.colors.lightTheme[3]}`
                            : `${theme.colors.darkTheme[2]}`,
                        width: "55%",
                        textAlign: "center",
                        marginRight: "2rem",
                      },
                    })}
                  >
                    <Title order={5}>{phonePre}</Title> -{" "}
                    <Title order={5}>{phonePost}</Title>
                  </Flex>
                ) : (
                  <Title order={5}>Indicar Telefono</Title>
                )}
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
          </ScrollArea>
        </Stack>
        <Stack>
          <RememberWarning />
          <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
            <Button
              onClick={() => {
                fnSetShow(false);
                reset(initialValues);
              }}
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
                if (Object.keys(errors).length > 0) {
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#F0185C",
                    title: "Errores en el formulario",
                    message:
                      "Existen algunos errores en el formulario, debe solucionarlos para poder registrar los cambios",
                    autoClose: 1000,
                    withCloseButton: true,
                  });
                }
              }}
            >
              Crear Registro
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
}
