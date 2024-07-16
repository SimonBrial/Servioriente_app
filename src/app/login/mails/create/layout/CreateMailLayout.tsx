"use client";

import { FaAt, IoClose, IoIosSend, MdOutlineImage, MdTitle } from "@/icons";
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
import { useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";

const initialValues: MailDataProps = {
  date: new Date(),
  description: "<p></p>",
  idMail: crypto.randomUUID(),
  mail: [""],
  mailArchive: false,
  mailFavorite: false,
  mailRead: true,
  title: "",
  userName: "",
  photo: "",
  docs: [],
};

export default function CreateMailLayout() {
  // const [mails, setMails] = useState<string | string[]>([]);
  const [docs, setDocs] = useState<File[]>([]);
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<MailDataProps>({
    mode: "onChange",
    resolver: zodResolver(mailSchema),
    defaultValues: initialValues,
  });

  /* const handleMailsChange = (newMails: string | string[]) => {
    setMails(newMails);
  }; */

  const fnSubmit = async (data: MailDataProps) => {
    try {
      /* if (Object.keys(errors).length > 0) {
        notifications.show({
          id: crypto.randomUUID(),
          color: "#F0185C",
          title: "Errores Existentes",
          message:
            "Hay errores existentes en el formulario, por favor corregirlos",
          autoClose: 1000,
          withCloseButton: true,
        });
      } */
      if (data !== undefined && Object.keys(errors).length === 0) {
        const dataComplete: MailDataProps = {
          date: new Date(),
          description: data.description,
          idMail: crypto.randomUUID(),
          mail:
            typeof data.mail === "string" ? data.mail.split(",") : data.mail,
          mailArchive: false,
          mailFavorite: false,
          mailRead: false,
          title: data.title,
          userName: initialValues.userName,
          docs: docs,
        };
        console.log(dataComplete);
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "Correo Enviado 📨",
          message: "Correo enviado satisfactoriamente!",
          autoClose: 1000,
          withCloseButton: true,
        });
        reset(initialValues);
        router.push("/login/mails");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ContainerInside width="100%" allWhite={false} withBorder>
      <form onSubmit={handleSubmit(fnSubmit)}>
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
          <HorizontalInputLayout
            asterisk
            control={control}
            errorDescription={errors.mail?.message}
            icon={<FaAt />}
            inputSize="82%"
            label="mail"
            max={20}
            min={3}
            register={register}
            required
            title="Destinatarios"
          />
          <GeneralDivider orientation="horizontal" />
          <Flex style={{ width: "100%", position: "relative" }} gap={8}>
            <Stack align={"space-between"} style={{ width: "100%" }}>
              <Flex
                align={"end"}
                gap={10}
                style={{
                  width: "100%",
                }}
              >
                <Title
                  order={4}
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[3]
                          : theme.colors.darkTheme[2],
                    },
                  })}
                >
                  Cuerpo del Correo
                </Title>
                <Text size="xs" style={{ color: "red" }}>
                  {errors.description?.message}
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
                <ArchiveContainer arr={docs} setDocs={setDocs} />
              </Flex>
            </Stack>
          </Flex>
          {/* <Text size="sm">{errors.description?.message}</Text> */}
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
