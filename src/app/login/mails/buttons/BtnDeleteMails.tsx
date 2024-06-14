"use client";

import { HiOutlineTrash } from "@/icons";
import { useMailStore } from "@/store/mail-store";
import { Group, Button, Title, Flex, Badge } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BtnDeleteMails() {
  const path = usePathname();
  const { fnDeleteMailChecked, itemChecked } = useMailStore();

  const [itemLength, setItemLength] = useState<number>(0);
  useEffect(() => {
    setItemLength(itemChecked.length);
    // console.log(itemChecked);
  }, [itemChecked.length]);

  return (
    <Group
      justify="space-between"
      styles={(theme) => ({
        root: {
          width: "100%",
          border: "1px solid red",
          padding: "0.5rem 0.8rem",
          borderRadius: "6px",
          color: theme.colors.principalTheme[9],
          backgroundColor: `${theme.colors.principalTheme[9]}7f`,
          cursor: "default",
        },
      })}
    >
      <Flex align={"center"} gap={8}>
        <Title order={5}>Eliminar Correos</Title>
        <Badge radius={"sm"} color="#f0185c">
          {itemLength}
        </Badge>
      </Flex>
      <Button
        onClick={() => fnDeleteMailChecked(path)}
        styles={{ section: { fontSize: "1.2rem" } }}
        color="#f0185c"
        leftSection={<HiOutlineTrash />}
      >
        Eliminar
      </Button>
    </Group>
  );
}
