/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import {
  useMantineColorScheme,
  Button,
  Drawer,
  Stack,
  Title,
  Flex,
  Text,
} from "@mantine/core";
import { MdOutlineInsertEmoticon, BiBellPlus, IoClose, MdTitle } from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import { useDisclosure } from "@mantine/hooks";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";
import RememberWarning from "@/components/RememberWarning";
import TextAreaInput from "@/components/inputs/TextAreaInput";
/* import SelectInput from "@/components/inputs/SelectInput";
import PrivateInput from "@/components/inputs/PrivateInput";
import AutomatedInput from "@/components/inputs/AutomatedInput";
import TimeSelect from "../TimeSelect";
import { useAlarmStore } from "@/store/alarm-store"; */
import WarningInfo from "@/components/WarningInfo";
import dayjs from "dayjs";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { alarmSchema } from "@/schema/AlarmSchema";

interface ICreateFolderProps {
  title: string;
  icon: string;
  /* time: string;
  privateAlarm: boolean;
  automatedAlarm: boolean;
  folderSelected: string; */
  description: string;
}
const initialValues = {
  title: "title",
  icon: "😎",
  // time: dayjs(new Date()).format("DD/MM/YYYY - hh: mm A"),
  /* privateAlarm: false,
  automatedAlarm: false,
  folderSelected: "", */
  description: "desc",
};
export default function BtnCreateAlarm() {
  // const { alarmFolderArray } = useAlarmStore();
  const [opened, { open, close }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<ICreateFolderProps>({
    mode: "onChange",
    resolver: zodResolver(alarmSchema),
    defaultValues: initialValues ?? {},
  });

  console.log("control._names.mount: ", control._names.mount);
  console.log("control._fields: ", control._fields);
  console.log("control._fields: ", typeof control._fields);
  console.log("Control._formValues: ", control._formValues);

  const onSubmit = async (data: ICreateFolderProps) => {
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
              <TitleSimpleLayout title="Crear Alarma" />

              {control ? (
                <>
                  <input type="text" {...register("title")} />
                  <input type="text" {...register("icon")} />
                  <input type="text" {...register("description")} />
                  <p>{errors.title?.message}</p>
                  <p>{errors.icon?.message}</p>
                  <p>{errors.description?.message}</p>
                </>
              ) : (
                <>Vacio</>
              )}
              {/* <HorizontalInputLayout
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
              /> */}
              <Flex justify={"space-between"} align={"center"}>
                <Title order={4}>Fecha de Creacion</Title>
                <Flex gap={4}>
                  <Text>
                    {dayjs(new Date()).format("DD/MM/YYYY - hh: mm A")}
                  </Text>
                  <WarningInfo description="Este valor no se puede modificar" />
                </Flex>
              </Flex>
              {/* <TimeSelect
                errorDescription={errors.time?.message}
                control={control}
                label="time"
                asterisk
                required
              />
              <PrivateInput
                errorDescription={errors.privateAlarm?.message}
                privateStatus={false}
                label="privateAlarm"
                control={control}
                userName=""
              />
              <AutomatedInput
                errorDescription={errors.automatedAlarm?.message}
                automatedStatus={false}
                label="automatedAlarm"
                control={control}
                userName=""
              />
              <SelectInput
                errorDescription={errors.folderSelected?.message}
                periodeArr={alarmFolderArray.map((folder) => folder.title)}
                title="Carpeta"
                control={control}
                inputSize="200px"
                label="folderSelected"
                asterisk
              /> */}
              {/* <TextAreaInput
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
              /> */}
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
                  leftSection={<BiBellPlus />}
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
                  Crear Alarma
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </form>
      </Drawer>
      <Button
        leftSection={<BiBellPlus />}
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
        Crear Alarma
      </Button>
    </>
  );
}
