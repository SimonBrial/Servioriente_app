import { Container, Flex } from "@mantine/core";
import Image from "next/image";
import LoginImg from "../../../public/loginImg.jpg";
import classes from "@/styles/login.module.css";
import ResetPasswordForm from "./ResetPasswordForm";

function CreateAccountPage(): JSX.Element {
  return (
    <Flex style={{ position: "relative" }}>
      <Container
        style={{
          width: "50%",
          height: "100vh",
          position: "absolute",
          backgroundColor: "#343434",
          display: "flex",
          alignItems: "center",
          color: "#F8F8F8",
        }}
      >
        <ResetPasswordForm />
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

export default CreateAccountPage;
