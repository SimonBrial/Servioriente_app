"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";

import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { GeneralDivider } from "@/components/GeneralDivider";
import heightClasses from "@/styles/height-view.module.css";
import classes from "@/styles/btn-styles.module.css";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { templateSchema } from "@/schema/TemplateSchema";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { HiOutlineDocumentAdd, IoClose, MdTitle } from "@/icons";
import TextEditor from "@/components/TextEditor";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import convertHtmlToString from "@/utils/convertHtmlToString";
import { usePathname, useRouter } from "next/navigation";
import { MailTemplateProps } from "@/interface/interface";
import { useMailStore } from "@/store/mail-store";

const initialValues: MailTemplateProps = {
  templateFavorite: false,
  id: crypto.randomUUID(),
  bodyDescription: "<p></p>",
  shortDescription: "",
  title: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  userCreatedAt: "Simon Briceño",
  userUpdatedAt: "Simon Briceño",
};

export default function EditTemplateLayout() {
  const [editorError, setEditorError] = useState("");
  const [templateEdit, setTemplateEdit] = useState<MailTemplateProps | {}>({});
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const { fnGetTemplateById } = useMailStore();
  const path = usePathname();

  useEffect(() => {
    const pathId = path.split("/");
    const dataTemplate = fnGetTemplateById(pathId[pathId.length - 1]);
    // console.log("PathId: ", pathId[pathId.length - 1])
    // console.log("dataTemplate: ", dataTemplate)
    if (!dataTemplate) {
      setTemplateEdit({});
    }
    setTemplateEdit(dataTemplate);
  }, [path]);

  console.log("templateEdit: ", templateEdit);

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
    control,
    reset,
  } = useForm<MailTemplateProps>({
    mode: "onChange",
    resolver: zodResolver(templateSchema),
    defaultValues: templateEdit
      ? {
          bodyDescription: (templateEdit as MailTemplateProps).bodyDescription,
          createdAt: (templateEdit as MailTemplateProps).createdAt,
          id: (templateEdit as MailTemplateProps).id,
          shortDescription: (templateEdit as MailTemplateProps)
            .shortDescription,
          templateFavorite: (templateEdit as MailTemplateProps)
            .templateFavorite,
          title: (templateEdit as MailTemplateProps).title,
          updatedAt: (templateEdit as MailTemplateProps).updatedAt,
          userCreatedAt: (templateEdit as MailTemplateProps).userCreatedAt,
          userUpdatedAt: (templateEdit as MailTemplateProps).userUpdatedAt,
        }
      : {},
    values: templateEdit
      ? {
          bodyDescription: (templateEdit as MailTemplateProps).bodyDescription,
          createdAt: (templateEdit as MailTemplateProps).createdAt,
          id: (templateEdit as MailTemplateProps).id,
          shortDescription: (templateEdit as MailTemplateProps)
            .shortDescription,
          templateFavorite: (templateEdit as MailTemplateProps)
            .templateFavorite,
          title: (templateEdit as MailTemplateProps).title,
          updatedAt: (templateEdit as MailTemplateProps).updatedAt,
          userCreatedAt: (templateEdit as MailTemplateProps).userCreatedAt,
          userUpdatedAt: (templateEdit as MailTemplateProps).userUpdatedAt,
        }
      : initialValues,
  });

  const onSubmit = async (data: MailTemplateProps) => {
    try {
      // TODO: The request should be validated before pushing to the template section.
      if (
        data.bodyDescription === "<p></p>" ||
        convertHtmlToString(data.bodyDescription).length === 0
      ) {
        return setEditorError(
          "El cuerpo de la Plantilla no puede estar vacio, por favor introduce algo!",
        );
      }
      setEditorError("");

      if (!templateEdit) {
        console.log("Somthing went wrong");
      }

      if (templateEdit && data) {
        const dataTemplate: MailTemplateProps = {
          ...data,
          id: (templateEdit as MailTemplateProps).id,
          createdAt: (templateEdit as MailTemplateProps).createdAt,
          updatedAt: (templateEdit as MailTemplateProps).updatedAt,
          userCreatedAt: (templateEdit as MailTemplateProps).userCreatedAt,
          userUpdatedAt: (templateEdit as MailTemplateProps).userUpdatedAt,
        };
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "La Plantilla fue Editada 📄",
          message:
            "Se ha editado la plantilla para los correos satisfactoriamente 😎!",
          autoClose: 1000,
          withCloseButton: true,
        });
        console.log(dataTemplate);
        // reset(initialValues);
        // router.push("/login/mails/formats");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContainerInside width="100%" allWhite={false} withBorder>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={"sm"} align="end">
          <HorizontalInputLayout
            asterisk
            control={control}
            errorDescription={errors.title?.message}
            icon={<MdTitle />}
            inputSize="82%"
            label="title"
            max={20}
            min={3}
            register={register}
            required
            title="Titulo de la Plantilla"
          />
          <GeneralDivider orientation="horizontal" />
          <HorizontalInputLayout
            asterisk
            control={control}
            errorDescription={errors.shortDescription?.message}
            icon={<MdTitle />}
            inputSize="82%"
            label="shortDescription"
            max={20}
            min={3}
            register={register}
            required
            title="Breve descripción"
          />
          <GeneralDivider orientation="horizontal" />
          <Flex gap={10} align={"end"} style={{ width: "100%" }}>
            <Title
              order={4}
              styles={(theme) => ({
                root: {
                  // width: "100%",
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],
                },
              })}
            >
              Cuerpo de la Plantilla
            </Title>
            <Text size="xs" style={{ color: "#F0185C" }}>
              {editorError}
            </Text>
          </Flex>
          <ScrollArea
            scrollbarSize={2}
            className={heightClasses.createTemplate_scroll_container}
            // h={450}
            styles={(theme) => ({
              root: {
                width: "100%",
                border:
                  colorScheme === "light"
                    ? `1px solid ${theme.colors.lightTheme[2]}`
                    : `1px solid ${theme.colors.darkTheme[6]}`,
                backgroundColor:
                  colorScheme === "light"
                    ? "#fff"
                    : `${theme.colors.darkTheme[7]}`,
                borderRadius: "6px",
                padding: "0.2rem",
              },
            })}
          >
            <Controller
              name={"bodyDescription"}
              control={control}
              render={({ field: { value, onChange } }) => {
                console.log("value: ", value);
                return (
                  <TextEditor
                    errorDescription={errors.bodyDescription?.message}
                    onEditorContent={(html) => setValue("bodyDescription", html)}
                    description={value}
                  />
                );
              }}
            />
          </ScrollArea>
          {/* <Text size="sm">{errors.bodyDescription?.message}</Text> */}
          <Flex
            gap={8}
            style={{ width: "40%", marginRight: "0" }}
            justify={"end"}
          >
            <Button
              fullWidth
              color="red"
              onClick={() => {
                // reset(initialValues);
                router.push("/login/mails/formats");
              }}
              leftSection={<IoClose />}
              styles={(theme) => ({
                section: {
                  fontSize: "1.2rem",
                },
              })}
              className={
                colorScheme === "light"
                  ? classes.btnCancel
                  : classes.btnCancel_dark
              }
            >
              Cancelar
            </Button>
            <Button
              leftSection={<HiOutlineDocumentAdd />}
              fullWidth
              styles={(theme) => ({
                section: {
                  fontSize: "1.2rem",
                },
              })}
              className={
                colorScheme === "light" ? classes.btnAdd : classes.btnAdd_dark
              }
              type="submit"
            >
              Crear Plantilla
            </Button>
          </Flex>
        </Stack>
      </form>
    </ContainerInside>
  );
}
