import { Carousel } from "@mantine/carousel";
import classes from "@/styles/carousel.module.css";

export const CarouselContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Carousel
      slideGap={{ base: 0, sm: "6px" }}
      className={classes.control}
      withControls={false}
      slidesToScroll={3}
      slideSize={220}
      align="start"
      loop={false}
      dragFree
    >
      {children}
    </Carousel>
  );
};
