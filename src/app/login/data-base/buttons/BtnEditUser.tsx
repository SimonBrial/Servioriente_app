/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  useMantineColorScheme,
  UnstyledButton,
  ScrollArea,
  Button,
  Drawer,
  Center,
  Title,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import {
  MdOutlineAlternateEmail,
  HiOutlineUserAdd,
  IoLogoInstagram,
  HiOutlinePencil,
  IoLogoFacebook,
  HiOutlineUser,
  AiOutlineCar,
  IoClose,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import heightClass from "@/styles/height-view.module.css";
// import { notifications } from "@mantine/notifications";
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
import TooltipLayout from "@/components/TooltipLayout";
import { useEffect, useState } from "react";
import { useDataBaseStore } from "@/store/db-store";
import { ListDBProps } from "@/interface/interface";
import { notifications } from "@mantine/notifications";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default function BtnEditUser({
  idToEdit,
}: {
  idToEdit: string;
}): JSX.Element {
  const initialValues: ListDBProps = {
    firstName: "initial values",
    lastName: "initial values",
    vehicle: "initial values",
    state: "Carabobo",
    typeStatus: "Entregado",
    phonePre: "",
    phonePost: "",
    facebook: "initial values",
    instagram: "initial values",
    birthday: "Thu May 09 2024 17:10:35 GMT-0400 (Venezuela Time)",
    carID: "initial values",
    id: idToEdit,
    mail: "initial values",
  };
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  const { dataToShow, fnGetUser, fnUpdateData } = useDataBaseStore();
  const [data, setData] = useState<ListDBProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (dataToShow[0] !== undefined) {
        setData(dataToShow);
      }
    };
    fetchData();
  }, [dataToShow]);

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = useForm<ListDBProps>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
    defaultValues: data[0] !== undefined ? data[0] : initialValues,
    values:
      data[0] !== undefined
        ? {
            firstName: capitalizeFirstLetter(data[0].firstName),
            lastName: capitalizeFirstLetter(data[0].lastName),
            vehicle: data[0].vehicle,
            state: data[0].state,
            typeStatus: data[0].typeStatus,
            phonePre: data[0].phonePre,
            phonePost: data[0].phonePost,
            facebook: data[0].facebook,
            instagram: data[0].instagram,
            birthday: data[0].birthday,
            carID: data[0].carID,
            id: data[0].id,
            mail: data[0].mail,
          }
        : initialValues,
  });
  // console.log(errors);
  const onSubmit = async (dataUpdated: ListDBProps) => {
    try {
      const newData: ListDBProps[] = [
        {
          birthday: dataUpdated.birthday,
          carID: dataUpdated.carID,
          firstName: dataUpdated.firstName,
          id: idToEdit,
          lastName: dataUpdated.lastName,
          phonePost: dataUpdated.phonePost,
          phonePre: dataUpdated.phonePre,
          state: dataUpdated.state,
          typeStatus: dataUpdated.typeStatus,
          vehicle: dataUpdated.vehicle,
          facebook: dataUpdated.facebook,
          instagram: dataUpdated.instagram,
          mail: dataUpdated.mail,
        },
      ];
      if (Object.keys(errors).length === 0) {
        await fnUpdateData(idToEdit, newData);
        close();
        notifications.show({
          id: idToEdit,
          color: "#2BDD66",
          title: "Registro Editado",
          message:
            "El registro ha sido editado y guardado satisfactoriamente 😎!",
          autoClose: 1000,
          withCloseButton: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            padding: "0 0.5rem",
            height: "95vh",
          }}
        >
          <Stack
            justify="space-between"
            style={{
              padding: "0 0.8rem",
              height: "95vh",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
              <Stack justify="space-between" style={{ height: "100%" }}>
                <Stack gap={8}>
                  <TitleSimpleLayout title="Editar Registro" />
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
                      <p>Here must be the Calendar Component</p>
                      {/* <CalendarInput
                    width="200px"
                    withTitle
                    errorDescription={errors.mail?.message}
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
                          {data[0] !== undefined ? (
                            <Flex
                              gap={4}
                              align={"center"}
                              justify={"end"}
                              style={{ marginRight: "2rem" }}
                            >
                              <Title order={5}>{data[0].phonePre}</Title> -{" "}
                              <Title order={5}>{data[0].phonePost}</Title>
                            </Flex>
                          ) : (
                            <Text size="xs">No asignada</Text>
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
                  </ScrollArea>
                </Stack>
                <Stack>
                  <RememberWarning />
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
                            id: idToEdit,
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
                      Editar Registro
                    </Button>
                  </Flex>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Drawer>
      <TooltipLayout label="Editar" position="top" key={crypto.randomUUID()}>
        <UnstyledButton
          variant="transparent"
          color="gray"
          aria-label="Editar"
          className={
            colorScheme === "light"
              ? classesBtn.btnEdit_item
              : classesBtn.btnEdit_item_dark
          }
          onClick={() => {
            open();
            fnGetUser(idToEdit);
          }}
        >
          <Center>
            <HiOutlinePencil />
          </Center>
        </UnstyledButton>
      </TooltipLayout>
    </>
  );
}
