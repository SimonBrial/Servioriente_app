"use client";

import { useMantineColorScheme, Button, Stack, Flex } from "@mantine/core";
import {
  MdOutlineInsertEmoticon,
  HiOutlineSave,
  IoClose,
  MdTitle,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import { TitleLayout } from "@/components/layout/TitleLayout";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { folderSchema } from "@/schema/FolderSchema";
import ColorSelectInput from "@/components/inputs/ColorSelectInput";
import { notifications } from "@mantine/notifications";
import RememberWarning from "@/components/RememberWarning";
import TextAreaInput from "@/components/inputs/TextAreaInput";
import { useAlarmStore } from "@/store/alarm-store";
import { AlarmFolderArray, AlarmObj } from "@/interface/interface";
import { useEffect, useState } from "react";

interface IEditFolderProps {
  title: string;
  icon: string;
  color: string;
  description: string;
  alarmsArray: AlarmObj[];
  idFolder: string;
}

const initialValues = {
  title: "",
  icon: "",
  color: "",
  description: "",
  alarmsArray: [],
  idFolder: "",
};

export default function UpdateFolderLayout({
  fnSetShowDrawner,
  folderId,
}: {
  folderId: string;
  fnSetShowDrawner: (state: boolean) => void;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { fnGetFolder, fnUpdateFolder } = useAlarmStore();
  const [data, setData] = useState<IEditFolderProps>(initialValues);

  useEffect(() => {
    const folderFound = fnGetFolder(folderId);
    if (folderFound !== undefined) {
      const { description, icon, idFolder, themeColor, title, alarmsArray } =
        folderFound as AlarmFolderArray;
      
      console.log(alarmsArray)

      setData({
        color: themeColor,
        description: description,
        icon: icon,
        title: title,
        alarmsArray: alarmsArray,
        idFolder: idFolder,
      });
    }
  }, []);

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<IEditFolderProps>({
    mode: "onChange",
    resolver: zodResolver(folderSchema),
    defaultValues: data !== undefined ? data : initialValues,
    values:
      data !== undefined
        ? {
            color: data.color,
            description: data.description,
            icon: data.icon,
            title: data.title,
            alarmsArray: data.alarmsArray,
            idFolder: data.idFolder,
          }
        : initialValues,
  });

  const onSubmit = async (dataUpdated: IEditFolderProps) => {
    try {
      if (Object.keys(errors).length === 0) {
        const folderData: AlarmFolderArray = {
          idFolder: folderId,
          description: dataUpdated.description,
          themeColor: dataUpdated.color,
          title: dataUpdated.title,
          alarmsArray: data.alarmsArray,
          icon: dataUpdated.icon,
        };
        await fnUpdateFolder(folderId, folderData);
        fnSetShowDrawner(false);
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "El Registro Editado 📄",
          message:
            "Se ha editado y guardado el registro en la Base de Datos satisfactoriamente 😎!",
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
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Stack
        justify="space-between"
        style={{
          padding: "0 0.5rem",
          height: "95vh",
        }}
        gap={6}
      >
        <Stack gap={6} p={0}>
          <TitleLayout title="Crear Carpeta" color="" icon="" onText={false} />
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
            maxRows={8}
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
                fnSetShowDrawner(false);
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
              leftSection={<HiOutlineSave />}
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
              Guardar Cambios
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
}
