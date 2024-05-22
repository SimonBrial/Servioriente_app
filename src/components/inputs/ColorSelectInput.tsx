"use client";

import { Flex, ColorInput, Title, useMantineColorScheme } from "@mantine/core";
import { Controller, Path, UseFormRegister } from "react-hook-form";

interface ColorInputProps {
  asterisk: boolean;
  errorDescription: string | undefined;
  inputSize: string;
  label: Path<any>;
  required: boolean;
  register: UseFormRegister<any>;
  control: any;
}
export default function ColorSelectInput({
  errorDescription,
  inputSize,
  asterisk,
  control,
  label,
}: ColorInputProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
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
          Seleccionar color
        </Title>{" "}
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ColorInput
            error={errorDescription !== undefined ? errorDescription : null}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Seleccionar color"
            styles={(theme) => ({
              root: { width: "200px" },
              eyeDropperButton: { display: "none" },
              input: {
                backgroundColor:
                  colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
                color: `${theme.colors.lightTheme[3]}`,
              },
            })}
            format="hex"
            closeOnColorSwatchClick
            // defaultValue={colorScheme === "light" ? "#115dfe" : "#52a5e0"}
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
          />
        )}
      />
    </Flex>
  );
}
