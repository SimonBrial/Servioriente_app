import { HiOutlineTrash } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import { useMailStore } from "@/store/mail-store";

export default function BtnDeleteTemplate({
  mailId,
  path,
}: {
  mailId: string;
  path: string;
}) {
  const { colorScheme } = useMantineColorScheme();
  const { fnDeleteTemplate } = useMailStore();
  return (
    <UnstyledButton
      onClick={() => fnDeleteTemplate(mailId)}
      classNames={{
        root: colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
      }}
    >
      <Center px={4} style={{ fontSize: "1.1rem" }}>
        <HiOutlineTrash />
      </Center>
    </UnstyledButton>
  );
}
