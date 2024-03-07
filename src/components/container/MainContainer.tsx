import { Container } from "@mantine/core";

export const MainContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Container
      style={{
        maxWidth: "100vw",
        width: "100%",
        height: "100vh",
        padding: "0",
        margin: "0",
      }}
    >
      {children}
    </Container>
  );
};
