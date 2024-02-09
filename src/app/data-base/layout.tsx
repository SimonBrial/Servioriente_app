import { Stack } from "@mantine/core";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Stack align="stretch" justify="flex-start" gap={8}>
      {children}
    </Stack>
  );
}
