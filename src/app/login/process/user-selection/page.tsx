import InsideContainer from "@/components/container/InsideContainer";
import AsideUserSearch from "./AsideUserSearch";
import { Flex } from "@mantine/core";
import UserSelectedLayout from "./UserSelectedLayout";

function page(): JSX.Element {
  return (
    <InsideContainer
      offset={118}
      withBackground
      withBorder
      key={crypto.randomUUID()}
    >
      <Flex
        gap={16}
        styles={{
          root: {
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            width: "100%",
          },
        }}
      >
        <AsideUserSearch />
        <UserSelectedLayout />
      </Flex>
    </InsideContainer>
  );
}

export default page;
