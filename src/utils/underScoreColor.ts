// const colorUnderScore = ["Espera", "Generacion", "Pagado", "Entregado", "Rechazado"];

import { processTitle } from "@/types/types";

export function underScoreColor(colorEnum: processTitle | string): string {
  if (colorEnum === "Espera") {
    return "#fad901";
  } else if (colorEnum === "Generacion") {
    return "#fd6a01";
  } else if (colorEnum === "Pagado") {
    return "#12E500";
  } else if (colorEnum === "Entregado") {
    return "#004EE5";
  } else if (colorEnum === "Rechazado") {
    return "#FF0000";
  } else {
    return "#004EE5";
  }
}
