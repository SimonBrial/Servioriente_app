// <--------------------------------------------------------------------->
// - Conservar esta estructura para que no se vean afectados los estilos -
// <--------------------------------------------------------------------->
// Basic Components
/* import { Sidebar } from "@/components/sidebar/Sidebar";
import { GlobalContainer } from "@/components/container/GlobalContainer"; */
// App Global Styles
import "./globals.css";
// Mantine configuration
import { ColorSchemeScript, MantineProvider, Container } from "@mantine/core";
// Mantine Global theme configuration
import { theme } from "../theme/CustomTheme";
// Mantine Dependencies Styles
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
// <--------------------------------------------------------------------->
// Next/Metadata
import type { Metadata } from "next";
// Next/fonts
// import { Inter } from "next/font/google";
import { Notifications } from "@mantine/notifications";
import { MainContainer } from "@/components/container/MainContainer";
import { DatesProvider } from "@mantine/dates";
// import LoginPage from "./login/page";
/* const inter = Inter({
  weight: ["100", "900"],
  subsets: ["latin"]
}); */

export const metadata: Metadata = {
  title: "ServiOriente",
  description: "ServiOriente App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <DatesProvider settings={{ locale: "es" }}>
            <Container fluid px={0}>
              <Notifications />
              {/* <Flex p={0}>
              <Sidebar />
              <GlobalContainer>{children}</GlobalContainer>
            </Flex> */}
              {/* <LoginPage /> */}
              <main /* className={inter.className} */>
                <MainContainer>{children}</MainContainer>
              </main>
            </Container>
          </DatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
