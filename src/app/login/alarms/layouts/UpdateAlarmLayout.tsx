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
import {
  MdOutlineInsertEmoticon,
  MdOutlineAlarmOn,
  IoClose,
  MdTitle,
} from "@/icons";
import classesBtn from "@/styles/btn-styles.module.css";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";
import RememberWarning from "@/components/RememberWarning";
import TextAreaInput from "@/components/inputs/TextAreaInput";
import SelectInput from "@/components/inputs/SelectInput";
import PrivateInput from "@/components/inputs/PrivateInput";
import { AutomatedInput } from "@/components/inputs/AutomatedInput";
import { useAlarmStore } from "@/store/alarm-store";
import WarningInfo from "@/components/WarningInfo";
import dayjs, { Dayjs } from "dayjs";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { alarmSchema } from "@/schema/AlarmSchema";
import { useEffect, useState } from "react";
import DateTimePickerInput from "@/components/inputs/DateTimePickerInput";
import { AlarmFolderArray, AlarmObj } from "@/interface/interface";

interface IEditAlarmProps {
  id: string;
  title: string;
  icon: string;
  // time: string | Dayjs;
  toDate: Date;
  privateAlarm: boolean;
  automatedAlarm: boolean;
  folderSelected: string;
  description: string;
}
const initialValues: IEditAlarmProps = {
  id: crypto.randomUUID(),
  title: "",
  icon: "",
  // time: dayjs(new Date()),
  toDate: new Date(),
  privateAlarm: false,
  automatedAlarm: true,
  folderSelected: "",
  description: "",
};

export default function UpdateAlarmLayout({
  folderName,
  alarmId,
}: {
  folderName: string;
  alarmId: string;
}) {
  const { colorScheme } = useMantineColorScheme();
  const [data, setData] = useState<IEditAlarmProps>(initialValues);
  const [alarmObj, setAlarmObj] = useState<AlarmObj | null>(null);
  const {
    setCloseDescription,
    fnSetEditAlarmShow,
    fnGetfolderByName,
    alarmFolderArray,
    fnUpdateAlarm,
  } = useAlarmStore();

  useEffect(() => {
    const folderFound = fnGetfolderByName(folderName); // Old folder
    // console.log("From useEffect: ", folderFound);
    if (folderFound !== undefined) {
      // Alarm array of the folder found
      const { alarmsArray } = folderFound as AlarmFolderArray;
      const alarmFound = alarmsArray.find((alarm) => alarm.id === alarmId);
      if (alarmFound !== undefined) {
        setAlarmObj(alarmFound);
        setData({
          privateAlarm: alarmFound.privateAlarm,
          automatedAlarm: alarmFound.automated,
          description: alarmFound.description,
          folderSelected: alarmFound.folderAssigned,
          icon: alarmFound.icon !== undefined ? alarmFound.icon : "",
          id: alarmId,
          title: alarmFound.alarmTitle,
          toDate: alarmFound.toDate,
        });
      }
    }
  }, []);
  console.log("data: ", data)

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<IEditAlarmProps>({
    mode: "onChange",
    resolver: zodResolver(alarmSchema),
    defaultValues: data !== undefined ? data : initialValues,
    values:
      data !== undefined
        ? {
            automatedAlarm: data.automatedAlarm,
            description: data.description,
            folderSelected: data.folderSelected,
            icon: data.icon,
            id: alarmId,
            privateAlarm: data.privateAlarm,
            title: data.title,
            toDate: data.toDate,
          }
        : initialValues,
  });

  const onSubmit = async (updateData: IEditAlarmProps) => {
    try {
      if (Object.keys(errors).length === 0 && alarmObj !== null) {
        const alarmData: AlarmObj = {
          alarmTitle: updateData.title,
          automated: updateData.automatedAlarm,
          createAt: alarmObj?.createAt,
          createdTo: alarmObj?.createdTo,
          description: updateData.description,
          folderAssigned: updateData.folderSelected, // New Folder
          id: alarmId,
          privateAlarm: updateData.privateAlarm,
          privateUser: "Simon Briceño",
          toDate: updateData.toDate,
          color: alarmObj?.color,
          folderIcon: alarmObj?.icon,
          icon: updateData.icon,
        };
        // console.log("alarmData: ", alarmData);
        await fnUpdateAlarm(
          alarmData,
          data.folderSelected,
          updateData.folderSelected,
          alarmId,
        );
        notifications.show({
          id: crypto.randomUUID(),
          color: "#2BDD66",
          title: "El Registro en la Base de Datos 📄",
          message:
            "Se ha creado el registro en la Base de Datos satisfactoriamente 😎!",
          autoClose: 1000,
          withCloseButton: true,
        });
        fnSetEditAlarmShow(false);
        setCloseDescription(true);
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
        <Stack gap={6}>
          <TitleSimpleLayout title="Editar Alarma" />
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
          <Flex justify={"space-between"} align={"center"}>
            <Title order={4}>Fecha de Creacion</Title>
            <Flex gap={4}>
              <Text>{dayjs(new Date()).format("DD/MM/YYYY - hh: mm A")}</Text>
              <WarningInfo description="Este valor no se puede modificar" />
            </Flex>
          </Flex>
          <DateTimePickerInput
            errorDescription={errors.toDate?.message}
            control={control}
            label="toDate"
            asterisk
            required
          />

          {/* <CalendarInput
            asterisk
            control={control}
            errorDescription={errors.toDate?.message}
            icon
            inputSize="200px"
            label="toDate"
            max={200}
            min={100}
            required
            register={register}
            title="Fecha de Asignacion"
            width="200px"
            withTitle
          />*/}
          {/* <TimeSelect
            errorDescription={errors.time?.message}
            control={control}
            label="time"
            asterisk
            required
          /> */}
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
                fnSetEditAlarmShow(false);
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
              leftSection={<MdOutlineAlarmOn />}
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
