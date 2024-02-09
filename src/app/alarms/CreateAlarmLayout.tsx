import { MdOutlineInsertEmoticon, MdTitle } from "@/icons";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { Flex, Stack, Title, Text, ScrollArea } from "@mantine/core";
import PrivateInput from "./PrivateInput";
import AutomatedInput from "./AutomatedInput";
import WarningInfo from "@/components/WarningInfo";
import TimeSelect from "./TimeSelect";
import SelectInput from "@/components/inputs/SelectInput";
import TextEditor from "@/components/TextEditor";
import { CalendarInput } from "@/components/inputs/CalendarInput";
import HorizontalInputLayout from "@/components/inputs/HorizontalInputLayout";

export default function CreateAlarmLayout({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <ScrollArea offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
      <Stack
        gap={"0.4rem"}
        styles={{
          root: { padding: "0 0.2rem" },
        }}
      >
        <TitleLayout title={title} color="" icon="" onText={false} />
        <HorizontalInputLayout
          title="Titulo"
          icon={<MdTitle />}
          asterisk={false}
          inputSize="200px"
        />
        <HorizontalInputLayout
          title="Icono"
          icon={<MdOutlineInsertEmoticon />}
          asterisk={false}
          inputSize="200px"
        />
        <CalendarInput title="Title" withTitle width="200px" />
        <Flex justify={"space-between"} align={"center"}>
          <Title order={4}>Fecha de Creacion</Title>
          <Flex gap={4}>
            <Text>20/9/2023 - 10:58 AM</Text>
            <WarningInfo description="Este valor no se puede modificar" />
          </Flex>
        </Flex>
        <TimeSelect label="Hora" />
        <PrivateInput privateStatus={false} userName="" />
        <AutomatedInput automatedStatus={false} />
        <SelectInput title="Selecciona una Carpeta" inputSize="200px" periodeArr={[]} />
        <TextEditor />
      </Stack>
    </ScrollArea>
  );
}
