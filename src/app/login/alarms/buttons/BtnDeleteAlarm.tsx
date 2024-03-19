"use client";

import {
  useMantineColorScheme,
  Center,
  Modal,
  Flex,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineTrash, HiOutlineCheck } from "@/icons";
import DeleteAlarmLayout from "../DeleteAlarmLayout";
import BtnActions from "@/components/buttons/BtnActions";

export default function BtnDeleteAlarm({ deleteRef }: { deleteRef: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        styles={{
          content: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#262749",
          },
        }}
      >
        <DeleteAlarmLayout />
        <BtnActions
          close={close}
          icon={<HiOutlineCheck/>}
          title="Aceptar"
          key={crypto.randomUUID()}
        />
      </Modal>
      <Flex gap={6} onClick={open} ref={deleteRef}>
        <Center style={{ fontSize: "1.2rem" }}>
          <HiOutlineTrash />
        </Center>
        <Text>Elimnar</Text>
      </Flex>
    </>
  );
}
