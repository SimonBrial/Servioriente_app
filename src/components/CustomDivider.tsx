import { CardContainerHeader } from "@/types/types";
import { socialRedColor } from "@/utils/socialRedColor";

export const CustomDivider = ({
  colorUser,
  dividerHeight,
  dividerWidth,
}: {
  colorUser: CardContainerHeader;
  dividerHeight: string | number;
  dividerWidth: string | number;
}): JSX.Element => {
  return (
    <div
      style={{
        width: dividerWidth,
        height: dividerHeight,
        borderRadius: "6px",
        backgroundImage:
          colorUser === "instagram"
            ? "linear-gradient(180deg, #fac75d 0%, #fd0e78 40%, #2d68dd 100%)"
            : `linear-gradient(180deg, ${socialRedColor(colorUser)} 0%, ${socialRedColor(colorUser)} 100%`,
      }}
    />
  );
};
