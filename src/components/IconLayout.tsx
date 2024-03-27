import { Center } from "@mantine/core";

export const IconLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center style={{ fontSize: "1.2rem" }}>
      {children}
    </Center>
  );
};
