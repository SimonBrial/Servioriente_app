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
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import convertHtmlToString from "@/utils/convertHtmlToString";
import { useRouter } from "next/navigation";
import { MailTemplateProps } from "@/interface/interface";

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';



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

export default function CreateTemplateLayout() {
  const [editorError, setEditorError] = useState("");
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
    reset,
  } = useForm<MailTemplateProps>({
    mode: "onChange",
    resolver: zodResolver(templateSchema),
    defaultValues: initialValues,
  });

  // const shortDescription = watch("shortDescription");
  // const [dataTemplate, setDataTemplate] = useState(shortDescription);
  // console.log(s);

  /* const handleEditorContent = (html: string) => {
    console.log("html: ", html);
    if (html) {
      setDataTemplate(html);
    }
  }; */
  // console.log("dataTemplate: ", dataTemplate);
  const body = watch("bodyDescription");
  console.log(body);
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

      const dataTemplate: MailTemplateProps = {
        ...data,
        id: initialValues.id,
        createdAt: initialValues.createdAt,
        updatedAt: initialValues.updatedAt,
        userCreatedAt: initialValues.userCreatedAt,
        userUpdatedAt: initialValues.userUpdatedAt,
      };
      notifications.show({
        id: crypto.randomUUID(),
        color: "#2BDD66",
        title: "La Plantilla fue creada 📄",
        message:
          "Se ha creado la plantilla para los correos satisfactoriamente 😎!",
        autoClose: 1000,
        withCloseButton: true,
      });

      console.log(dataTemplate);
      // return dataTemplate;
      reset(initialValues);
      router.push("/login/mails/formats");
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
              render={({ field: { value, onChange } }) => (
                <TextEditor
                  errorDescription={errors.bodyDescription?.message}
                  onEditorContent={onChange}
                  description={value}
                />
              )}
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
                reset(initialValues);
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

{
  /* <FileButton
                onChange={(payload) => {
                  setFile(payload);
                  console.log(payload)
                  if (payload && editor) {
                    editor.chain().focus().setImage({ src: payload.name }).run();
                  }
                }}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <ActionIcon {...props} variant="default">
                    <LuImagePlus />
                  </ActionIcon>
                )}
              </FileButton> */
}
