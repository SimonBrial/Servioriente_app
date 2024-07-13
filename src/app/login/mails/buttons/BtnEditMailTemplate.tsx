import { HiOutlinePencil } from "@/icons";
import { Center, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import classes from "@/styles/btn-styles.module.css";
import Link from "next/link";

export default function BtnEditMailTemplate({
  templateId,
}: {
  templateId: string;
}) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Link href={`/login/mails/formats/edit/${templateId}`}>
      <UnstyledButton
        classNames={{
          root:
            colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
        }}
      >
        <Center px={4} style={{ fontSize: "1.1rem" }}>
          <HiOutlinePencil />
        </Center>
      </UnstyledButton>
    </Link>
  );
}
