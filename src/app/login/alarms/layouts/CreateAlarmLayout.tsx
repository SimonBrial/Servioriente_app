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
  BiBellPlus,
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
import dayjs from "dayjs";
import TitleSimpleLayout from "@/components/layout/TitleSimpleLayout";
import { alarmSchema } from "@/schema/AlarmSchema";

import es from "dayjs/locale/es";
import DateTimePickerInput from "@/components/inputs/DateTimePickerInput";
import { AlarmFolderArray, AlarmObj } from "@/interface/interface";

interface ICreateAlarmProps {
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
const initialValues: ICreateAlarmProps = {
  id: crypto.randomUUID(),
  title: "",
  icon: "",
  // time: dayjs(new Date()),
  toDate: new Date(),
  privateAlarm: false,
  automatedAlarm: false,
  folderSelected: "",
  description: "",
};
export default function CreateAlarmLayout() {
  const { alarmFolderArray, fnSetAlarmShow, fnCreateAlarm, fnGetfolderByName } =
    useAlarmStore();
  const { colorScheme } = useMantineColorScheme();

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<ICreateAlarmProps>({
    mode: "onChange",
    resolver: zodResolver(alarmSchema),
    defaultValues: initialValues,
  });

  /* const onSubmit = async (data: ICreateAlarmProps) => {
    try {
      if (Object.keys(errors).length === 0) {
        console.log("From CreateAlarmLayout: ", data.privateAlarm);
        console.log("From CreateAlarmLayout: ", initialValues);
        fnSetAlarmShow(false);
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
  }; */
  const onSubmit = async (data: ICreateAlarmProps) => {
    try {
      const folderFound: AlarmFolderArray | null = await fnGetfolderByName(
        data.folderSelected,
      );
      if (folderFound !== null) {
        const newAlarm: AlarmObj = {
          alarmTitle: data.title,
          automated: data.automatedAlarm,
          createAt: new Date(),
          createdTo: "Simon Briceño",
          description: data.description,
          folderAssigned: data.folderSelected,
          id: crypto.randomUUID(),
          privateAlarm: data.privateAlarm,
          privateUser: "Simon Briceño",
          toDate: data.toDate,
          color: folderFound.themeColor,
          folderIcon: folderFound.icon,
          icon: data.icon,
        };
        await fnCreateAlarm(newAlarm, data.folderSelected);
        fnSetAlarmShow(false);
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
          <TitleSimpleLayout title="Crear Alarma" />
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
            searchable
            errorDescription={errors.folderSelected?.message}
            dataArr={alarmFolderArray.map((folder) => folder.title)}
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
                fnSetAlarmShow(false);
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
  );
}
