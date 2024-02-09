import { Flex } from "@mantine/core";

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Flex gap={16} h={"100%"}>
      {children}
    </Flex>
  );
};

export default layout;
