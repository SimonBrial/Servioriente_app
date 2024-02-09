import { Stack, } from "@mantine/core";
import { AvatarGroup } from "./AvatarGroup";
import { DifusionListEditor } from "./DifusionListEditor";

export const DifusionListChat = (): JSX.Element => {
  // Se le debe suministrar un array con el nombre de los contactos a los que se les desee enviar el mensaje
  const userFakeData: string[] = [
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
    "Mario H.",
  ];
  return (
    <Stack gap={6}>
      <AvatarGroup usersArr={userFakeData} />
      <DifusionListEditor />
    </Stack>
  );
};
