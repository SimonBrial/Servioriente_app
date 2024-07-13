"use client";

import { IoClose, IoIosSend, MdOutlineImage, MdTitle } from "@/icons";
import {
  useMantineColorScheme,
  ScrollArea,
  Button,
  Drawer,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { ContainerInside } from "@/components/container/ContainerInside";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { GeneralDivider } from "@/components/GeneralDivider";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MailDataProps } from "@/interface/interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { mailSchema } from "@/schema/MailSchema";
import ArchiveContainer from "../ArchiveContainer";
import TextEditor from "@/components/TextEditor";
import heightClasses from "@/styles/height-view.module.css";
import MailAutoCompleteInput from "../MailAutoCompleteInput";

import z from "zod";

export default function CreateMailLayout() {
  const [editorError, setEditorError] = useState("");
  const [mails, setMails] = useState<string | string[]>([]);
  const [docs, setDocs] = useState<File[]>([]);
  const { colorScheme } = useMantineColorScheme();

  const exampleSchema = z
    .string()
    .array()
    .max(3, { message: "Maximo 10 correos" });

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    watch,
    reset,
  } = useForm<MailDataProps>({
    mode: "onChange",
    resolver: zodResolver(mailSchema),
    defaultValues: {},
  });

  const m = watch("mail");
  console.log(mails);
  console.log(exampleSchema.safeParse(mails));
  console.log(exampleSchema.safeParse(m));

  const handleMailsChange = (newMails: string | string[]) => {
    setMails(newMails);
  };
  return (
    <ContainerInside width="100%" allWhite={false} withBorder>
      <form onSubmit={handleSubmit((data) => {
        const dataComplete: MailDataProps = {
          date: new Date(),
          description: data.description,
          idMail: crypto.randomUUID(),
          mail: mails,
          mailArchive: false,
          mailFavorite: false,
          mailRead: false,
          title: data.title,
          userName: data.userName,
          docs: data.docs
        }
        console.log(dataComplete)
      })}>
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
            title="Asunto"
          />
          <GeneralDivider orientation="horizontal" />

          <MailAutoCompleteInput
            handleMails={handleMailsChange}
            errorDescription={exampleSchema.safeParse(mails).success}
          />
          {/* {!exampleSchema.safeParse(mails).success ? <>error</> : null} */}
          {/* <GeneralDivider orientation="horizontal" />
          <HorizontalInputLayout
            asterisk
            control={control}
            errorDescription={errors.mail?.message}
            icon={<MdTitle />}
            inputSize="82%"
            label="mail"
            max={20}
            min={3}
            register={register}
            required
            title="Destinatarios"
          /> */}
          <GeneralDivider orientation="horizontal" />
          <Flex style={{ width: "100%", position: "relative" }} gap={8}>
            <Stack align={"space-between"} style={{ width: "100%" }}>
              <Flex
                gap={10}
                style={{
                  width: "100%",
                }}
              >
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
                  Cuerpo del Correo
                </Title>
                <Text size="xs" style={{ color: "#F0185C" }}>
                  {editorError}
                </Text>
              </Flex>
              <Flex gap={8} style={{ height: "100%" }}>
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
                    name={"description"}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextEditor
                        errorDescription={errors.description?.message}
                        onEditorContent={onChange}
                        description={value}
                      />
                    )}
                  />
                </ScrollArea>
                <ArchiveContainer arr={docs} />
              </Flex>
            </Stack>
          </Flex>
          {/* <Text size="sm">{errors.bodyDescription?.message}</Text> */}
          <Flex
            gap={8}
            style={{ width: "40%", marginRight: "0" }}
            justify={"end"}
          >
            <Button
              fullWidth
              color="red"
              /* onClick={() => {
                reset(initialValues);
                router.push("/login/mails/formats");
              }} */
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
              leftSection={<IoIosSend />}
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
              Enviar Correo
            </Button>
          </Flex>
        </Stack>
      </form>
    </ContainerInside>
  );
}
