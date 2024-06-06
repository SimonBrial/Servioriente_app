"use client";

import { HiOutlineCheck, HiOutlineTrash, IoClose } from "@/icons";
import { useAlarmStore } from "@/store/alarm-store";
import {
  ActionIcon,
  Collapse,
  Divider,
  Button,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function BtnDeleteAllAlarms({ folderId }: { folderId: string }) {
  const [opened, { close, open }] = useDisclosure(false);
  const {fnDeleteAllAlarms} = useAlarmStore()
  return (
    <Box
      py={8}
      px={12}
      mt={4}
      style={{
        width: "100%",
        maxWidth: "100%",
        border: "1px solid red",
        backgroundColor: "rgba(240, 24, 92, 0.5)",
        borderRadius: "6px",
        color: "#f0185c",
      }}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Title order={5}>Limpiar Carpeta</Title>
        <ActionIcon
          size={"lg"}
          onClick={open}
          styles={{ root: { fontSize: "1.2rem" } }}
          color="#f0185c"
        >
          <HiOutlineTrash />
        </ActionIcon>
        {/* <Button  leftSection={<HiOutlineTrash />}>
          Eliminar Todo
        </Button> */}
      </Flex>
      <Collapse in={opened}>
        <Divider color="#f0185c" mt={8} />
        <Box
          style={{
            border: "1px solid #f0185c",
            padding: "0.5rem",
            borderRadius: "6px",
            marginTop: "0.5rem",
          }}
        >
          <Title order={5} /* style={{ textAlign: "center" }} */>
            Estas seguro que deseas eliminar todas las alertas de esta carpeta?
          </Title>
          <Divider color="#f0185c" my={8} />
          <Flex gap={8}>
            <Button
              onClick={close}
              fullWidth
              leftSection={<IoClose />}
              color="#f0185c"
              styles={{ section: { fontSize: "1.2rem" } }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => fnDeleteAllAlarms(folderId)}
              color="#2BDD66"
              fullWidth
              leftSection={<HiOutlineCheck />}
              styles={{ section: { fontSize: "1.2rem" } }}
            >
              Confirmar
            </Button>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}
