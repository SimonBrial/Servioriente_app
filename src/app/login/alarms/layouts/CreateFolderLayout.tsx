/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import ColorSelectInput from "@/components/inputs/ColorSelectInput";
import {
  HiOutlineUserAdd,
  IoClose,
  MdOutlineInsertEmoticon,
  MdTitle,
} from "@/icons";
import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  Button,
  Flex,
  ScrollArea,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { ContainerInside } from "@/components/container/ContainerInside";
import heightClasses from "@/styles/height-view.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { notifications } from "@mantine/notifications";
import RememberWarning from "@/components/RememberWarning";
import classesBtn from "@/styles/btn-styles.module.css";
import { folderSchema } from "@/schema/FolderSchema";

interface IFolderProps {
  value1: string;
  value2: string;
  value3: string;
}

const initialValues: IFolderProps = {
  value1: "one",
  value2: "two",
  value3: "three",
};

export default function CreateFolderLayout(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<IFolderProps>({
    mode: "onChange",
    resolver: zodResolver(folderSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: any) => console.log(data);

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Stack
        gap={"0.4rem"}
        styles={{
          root: { padding: "0 0.2rem" },
        }}
      >
        <TitleLayout
          title="Crear Nueva Carpeta"
          color=""
          icon=""
          onText={false}
        />
        <HorizontalInputLayout
          errorDescription={errors.value1?.message}
          label="value1"
          max={100}
          min={1}
          register={register}
          required
          control={control}
          title="Titulo"
          icon={<MdTitle />}
          inputSize="200px"
          asterisk
        />
        <HorizontalInputLayout
          errorDescription={errors.value2?.message}
          label="value2"
          max={100}
          min={1}
          register={register}
          required
          control={control}
          title="Icono"
          icon={<MdOutlineInsertEmoticon />}
          inputSize="200px"
          asterisk
        />
        <ColorSelectInput />
        <ContainerInside
          allWhite
          width="100%"
          withBorder
          key={crypto.randomUUID()}
        >
          <ScrollArea
            scrollbarSize={2}
            p={0}
            className={heightClasses.createFolder_scroll_container}
          >
            <TextEditor />
          </ScrollArea>
          <RememberWarning />
          <Flex align={"center"} gap={"sm"} style={{ height: "2.25rem" }}>
            <Button
              onClick={() => {
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
                notifications.show({
                  id: crypto.randomUUID(),
                  color: "#2BDD66",
                  title: "Carpeta Creada 📂!",
                  message:
                    "La carpeta ha sido creada satisfactoriamente, añadele recordatorios 😎!",
                  autoClose: 1000,
                  withCloseButton: true,
                });
              }}
            >
              Crear Registro
            </Button>
          </Flex>
        </ContainerInside>
      </Stack>
    </form>
  );
}

/* if (Object.keys(errors).length > 0) {
                  notifications.show({
                    id: crypto.randomUUID(),
                    color: "#F0185C",
                    title: "Errores en el formulario",
                    message:
                      "Existen algunos errores en el formulario, debe solucionarlos para poder registrar los cambios",
                    autoClose: 1000,
                    withCloseButton: true,
                  });
                } */
