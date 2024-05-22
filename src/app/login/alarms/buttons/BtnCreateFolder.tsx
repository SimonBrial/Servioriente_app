/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import {
  useMantineColorScheme,
  Button,
  Drawer,
  Stack,
  Flex,
} from "@mantine/core";
import {
  HiOutlineFolderAdd,
  IoClose,
  MdOutlineInsertEmoticon,
  MdTitle,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import { useDisclosure } from "@mantine/hooks";
import { TitleLayout } from "@/components/layout/TitleLayout";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { folderSchema } from "@/schema/FolderSchema";
import ColorSelectInput from "@/components/inputs/ColorSelectInput";
import { notifications } from "@mantine/notifications";
import RememberWarning from "@/components/RememberWarning";
import TextAreaInput from "@/components/inputs/TextAreaInput";

interface CreateFolderProps {
  title: string;
  icon: string;
  color: string;
  description: string;
}

const initialValues = {
  title: "",
  icon: "",
  color: "",
  description: "",
};

export default function BtnCreateFolder() {
  const [opened, { open, close }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<CreateFolderProps>({
    mode: "onChange",
    resolver: zodResolver(folderSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: CreateFolderProps) => {
    try {
      if (Object.keys(errors).length === 0) {
        console.log(data);
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
        reset(initialValues);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
          <Stack
            justify="space-between"
            style={{
              padding: "0 1rem",
              height: "95vh",
            }}
            gap={6}
          >
            <Stack gap={6}>
              <TitleLayout
                title="Crear Carpeta"
                color=""
                icon=""
                onText={false}
              />
              <HorizontalInputLayout
                errorDescription={errors.title?.message}
                register={register}
                icon={<MdTitle />}
                control={control}
                inputSize="200px"
                label="title"
                title="Titulo"
                asterisk
                max={20}
                required
                min={3}
              />
              <HorizontalInputLayout
                errorDescription={errors.icon?.message}
                icon={<MdOutlineInsertEmoticon />}
                register={register}
                inputSize="200px"
                control={control}
                label="icon"
                asterisk={false}
                title="Icono"
                max={20}
                required
                min={3}
              />
              <ColorSelectInput
                errorDescription={errors.color?.message}
                register={register}
                control={control}
                inputSize="200px"
                label="color"
                asterisk={true}
                required
              />
              <TextAreaInput
                errorDescription={errors.description?.message}
                label="description"
                title="Descripción"
                control={control}
                inputSize="200px"
                maxRows={10}
                minRows={4}
                asterisk
                required
                icon
              />
            </Stack>
            <Stack>
              <RememberWarning />
              <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
                <Button
                  onClick={() => {
                    close();
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
                  leftSection={<HiOutlineFolderAdd />}
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
                  Crear Carpeta
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </form>
      </Drawer>
      <Button
        leftSection={<HiOutlineFolderAdd />}
        styles={{
          section: { fontSize: "1.2rem" },
          root: {
            padding: "0.6rem 1.5rem",
            height: "100%",
            width: "100%",
          },
        }}
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
        Crear Carpeta
      </Button>
    </>
  );
}
