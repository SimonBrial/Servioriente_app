/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  Button,
  Drawer,
  Title,
  Stack,
  Flex,
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
// import { CalendarInput } from "@/components/inputs/CalendarInput";

/* interface ClientFormProps {
  firstName: string;
  lastName: string;
  vehicle: string;
  state: string;
  typeStatus: processTitle | string;
  phonePre: string;
  phonePost: string | number;
  facebook?: string;
  instagram?: string;
} */

/*
{
  description,
  children,
  labelBtn,
  iconTag,
  loading,
  classes,
  color,
  title,
  addFn,
  label,
  icon,
  id,
}: BtnAddProps
*/

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
export default function BtnAddUser(): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
  } = useForm<ListDBProps>({
    resolver: zodResolver(userSchema),
    defaultValues: initialValues,
  });

  const { fnCreateUser } = useDataBaseStore();
  // console.log(errors);
  const onSubmit = (data: ListDBProps) => {
    // console.log(data);
    fnCreateUser(data);
  };
  const phonePost = watch("phonePost");
  const phonePre = watch("phonePre");
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={true}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 1rem",
            height: "95vh",
          }}
        >
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
                      {phonePre || phonePost ? (
                        <Flex
                          gap={4}
                          align={"center"}
                          justify={"end"}
                          style={{ marginRight: "2rem" }}
                        >
                          <Title order={5}>{phonePre}</Title> -{" "}
                          <Title order={5}>{phonePost}</Title>
                        </Flex>
                      ) : (
                        <Title order={5}>Indicar Telefono</Title>
                      )}
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
                <Stack>
                  {/* <Box
                    style={{
                      border: "1px solid #F0185C",
                      borderRadius: "6px",
                      padding: "0.5rem 0.8rem ",
                    }}
                  >
                    <Stack gap={0}>
                      <Text size="sm">Prueba</Text>
                      <Text size="sm">Prueba</Text>
                    </Stack>
                  </Box> */}
                  <RememberWarning />
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
                  <Flex
                    align={"center"}
                    gap={"sm"}
                    style={{ height: "2.25rem" }}
                  >
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
                      // disabled={errors !== null ? true : false}
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
                        close();
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
                  </Flex>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Drawer>
      <Button
        leftSection={<HiOutlineUserAdd />}
        styles={(theme) => ({
          section: { fontSize: "1.2rem" },
          root: {
            padding: "0.6rem 1.5rem",
            height: "100%",
            width: "100%",
          },
        })}
        // fullWidth
        onClick={open}
        classNames={{
          root:
            colorScheme === "light"
              ? classesBtn.btnAdd
              : classesBtn.btnAdd_dark,
        }}
        key={crypto.randomUUID()}
      >
        Nuevo Usuario
      </Button>
    </>
  );
}
