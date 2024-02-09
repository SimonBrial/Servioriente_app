import { CardContainerHeader } from "@/types/types";

let colorSelected: string = "";

export function socialRedColor(socialRed: CardContainerHeader): string {
  if (socialRed === "whatsapp") {
    colorSelected = "#22D847";
  } else if (socialRed === "facebook") {
    colorSelected = "#1F7BF2";
  }
  return colorSelected;
}
