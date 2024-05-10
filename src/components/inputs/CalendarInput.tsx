"use client";

import { DateInput } from "@mantine/dates";
import { Title, Flex, useMantineColorScheme } from "@mantine/core";
import { HiOutlineCalendar } from "@/icons";
import { Controller } from "react-hook-form";
import { HorizontalLayoutProps } from "@/interface/interface";
/* import dayjs from 'dayjs'
import 'dayjs/locale/en'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.locale('es')
dayjs.extend(customParseFormat) */

interface CalendarInputProps extends HorizontalLayoutProps {
  withTitle: boolean;
  title: string;
  width: string;
}

export function CalendarInput({
  errorDescription,
  valueToEdit,
  withTitle,
  inputSize,
  asterisk,
  register,
  required,
  control,
  title,
  width,
  label,
  icon,
  max,
  min,
}: CalendarInputProps): JSX.Element {
  // const [value, setValue] = useState<Date | null>(null);
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"} w={"100%"}>
      <Flex>
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
          {withTitle ? <>{title}</> : <></>}
        </Title>
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          // console.log("DateInput: ", value);
          return (
            <DateInput
              locale="es"
              valueFormat="DD MMMM YYYY"
              /* dateParser={(value) => dayjs(value, 'DD MMMM YYYY', "es").toDate()} */
              w={width}
              size="sm"
              leftSection={<HiOutlineCalendar />}
              clearable
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={title}
              styles={(theme) => ({
                input: {
                  cursor: "pointer",
                  backgroundColor:
                    colorScheme === "light"
                      ? "#FFFFFF"
                      : theme.colors.darkTheme[2],
                  color: theme.colors.lightTheme[3],
                },
                section: {
                  color: theme.colors.lightTheme[3],
                },
              })}
            />
          );
        }}
      />
    </Flex>
  );
}
