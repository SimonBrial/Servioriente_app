// #E53E3E Very important
// #E56000 Important
// #E5DB00 Normal
// #38A169 Less important
// #319795 No important

import { degreeType } from "@/types/types";

interface ColorDegree {
  colorDegree: string;
  degreeStr: degreeType;
  colorWithOpacity: string;
}

const colorsArray: ColorDegree[] = [
  {
    colorDegree: "#E53E3E",
    degreeStr: "Muy Importante",
    colorWithOpacity: "#E53E3E7f",
  },
  {
    colorDegree: "#E56000",
    degreeStr: "Importante",
    colorWithOpacity: "#E560007f",
  },
  {
    colorDegree: "#E5DB00",
    degreeStr: "Normal",
    colorWithOpacity: "#E5DB007f",
  },
  {
    colorDegree: "#38A169",
    degreeStr: "Poco Importante",
    colorWithOpacity: "#38A1697f",
  },
  {
    colorDegree: "#319795",
    degreeStr: "Nada Importante",
    colorWithOpacity: "#3197957f",
  },
];

export default function degreeColor(degree: degreeType) {
  const colorSelected = colorsArray.find(
    (colorDegree: ColorDegree) =>
      colorDegree.degreeStr.toLowerCase() === degree.toLowerCase(),
  );
  return colorSelected
    ? [colorSelected.colorDegree, colorSelected.colorWithOpacity] : "#E53E3E";
}
