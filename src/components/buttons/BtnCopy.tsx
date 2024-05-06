import { HiLink, HiOutlineCheck } from "@/icons";
import { CopyButton, ActionIcon } from "@mantine/core";
import TooltipLayout from "../TooltipLayout";

export default function BtnCopy({ value }: { value: string }) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <TooltipLayout label={copied ? "Copiado" : "Copiar"} position="top">
          <ActionIcon
            color={copied ? "teal" : "gray"}
            variant="subtle"
            onClick={copy}
          >
            {copied ? (
              <HiOutlineCheck style={{ fontSize: "1.2rem" }} />
            ) : (
              <HiLink style={{ fontSize: "1.2rem" }} />
            )}
          </ActionIcon>
        </TooltipLayout>
      )}
    </CopyButton>
  );
}
