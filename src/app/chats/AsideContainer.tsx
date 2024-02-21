import { ContainerInside } from "@/components/container/ContainerInside";
import { Stack } from "@mantine/core";

export const AsideContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <ContainerInside width="35%" allWhite={false} withBorder>
      <Stack gap={0}>
        {children}
      </Stack>
    </ContainerInside>
  );
};
