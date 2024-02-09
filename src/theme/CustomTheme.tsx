"use client";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    principalTheme: [
      "#F06418",
      "#FFA903",
      "#D9D02F",
      "#2BDD66",
      "#4F23C0",
      "#6B31B2",
      "#115dfe", // This is the principal theme color -> 6
      "#52a5e0",
      "#F018E8",
      "#F0185C",
    ],
    darkTheme: [
      "#115dfe",
      "#52a5e0",
      "#EFF3F5",
      "#C8CDD0",
      "#A0A7AC",
      "#29363f",
      "#2A3B47",
      "#9a90ef1a",
      "#3a4c5a", // --> Semejanza al blanco
      "#262749", // --> El gris oscuro para los backgrounds
      "#0b1115",
    ],
    lightTheme: [
      "#F8F8F8", // --> Sidebar bg
      "#EFEFEF", // --> Sidebar bg - hover
      "#cdcdcd", // --> Border Container
      "#696969", // --> Text Edit Bar/50% - Dashboard Color Title
      "#2BDD66",
      "#4F23C0",
      "#115dfe", // --> Principal Theme Color
      "#52a5e0",
      "#033EB2", // --> Theme hover
      "#F018E8",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  /* headings: {
        fontFamily: "Roboto, sans-serif",
        sizes: {
            h1: { fontSize: rem(36) },
        },
    }, */
});
