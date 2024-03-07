import { GlobalContainer } from "@/components/container/GlobalContainer";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Flex } from "@mantine/core";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Flex p={0}>
      <Sidebar />
      <GlobalContainer>{children}</GlobalContainer>
    </Flex>
  );
}
