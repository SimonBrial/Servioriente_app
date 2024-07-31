"use client";

import {
  useMantineColorScheme,
  Center,
  Drawer,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlinePencil } from "@/icons";
import CreateFolderLayout from "../layouts/CreateFolderLayout";

export default function BtnEditAlarm({ editRef }: { editRef: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        // closeOnClickOutside={false}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <Stack gap={4}>
          <CreateFolderLayout /* title="Editar Carpeta" */ />
          {/* <BtnActions
            icon={<HiOutlineSave />}
            title="Guardar"
            close={close}
            key={crypto.randomUUID()}
          /> */}
        </Stack>
      </Drawer>

      <Flex gap={6} onClick={open} ref={editRef}>
        <Center style={{ fontSize: "1.2rem" }}>
          <HiOutlinePencil />
        </Center>
        <Text>Editar</Text>
      </Flex>
    </>
  );
}
