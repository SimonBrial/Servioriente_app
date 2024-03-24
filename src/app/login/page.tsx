import { Container, Flex } from "@mantine/core";
import LoginForm from "./LoginForm";
import Image from "next/image";
import LoginImg from "../../../public/loginImg.jpg";
import classes from "@/styles/login.module.css";

function LoginPage(): JSX.Element {
  return (
    <Flex style={{ position: "relative" }}>
      <Container
        style={{
          width: "50%",
          height: "100vh",
          position: "absolute",
          zIndex: "10",
          backgroundColor: "#343434",
          display: "flex",
          alignItems: "center",
          color: "#F8F8F8",
        }}
      >
        <LoginForm />
      </Container>
      <Image
        alt="bg login app"
        src={LoginImg}
        sizes="50%"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        className={classes.login_img}
      />
    </Flex>
  );
}

export default LoginPage;
