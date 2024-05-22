import {
  Flex,
  Stack,
  Textarea,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { Controller, Path } from "react-hook-form";
import { GeneralDivider } from "../GeneralDivider";

interface TextAreaProps {
  errorDescription: string | undefined;
  inputSize: string;
  asterisk: boolean;
  control: any;
  title: string;
  label: Path<any>;
  icon: React.ReactNode;
  required: boolean;
  maxRows: number;
  minRows: number;
}

export default function TextAreaInput({
  errorDescription,
  inputSize,
  asterisk,
  required,
  control,
  maxRows,
  minRows,
  label,
  title,
  icon,
}: TextAreaProps) {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
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
          {title}
        </Title>{" "}
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <GeneralDivider orientation="horizontal" />
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Textarea
            error={errorDescription !== undefined ? errorDescription : null}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            autosize
            maxRows={maxRows}
            minRows={minRows}
          />
        )}
      />
    </Stack>
  );
}
