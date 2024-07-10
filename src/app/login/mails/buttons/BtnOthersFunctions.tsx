import { HiOutlineDotsVertical, HiOutlineSave, IoClose } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  Center,
  Menu,
} from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { usePathname } from "next/navigation";
import { useMailStore } from "@/store/mail-store";

export default function BtnOthersFunctions({ mailId }: { mailId: string }) {
  const { colorScheme } = useMantineColorScheme();
  const path = usePathname();
  const { setMailDescription, fnArchivedMark } = useMailStore();

  return (
    <Menu position="bottom-end" offset={4}>
      <Menu.Target>
        <UnstyledButton
          classNames={{
            root:
              colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
          }}
        >
          <Center style={{ fontSize: "1.5rem" }}>
            <HiOutlineDotsVertical />
          </Center>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {!path.includes("formats") ? (
          <Menu.Item
            color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
            leftSection={<HiOutlineSave />}
            onClick={() => fnArchivedMark(mailId, path)}
          >
            Archivar
          </Menu.Item>
        ) : null}

        <Menu.Item
          color="red"
          leftSection={<IoClose />}
          onClick={() => setMailDescription(true)}
        >
          Cerrar Descripción
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
