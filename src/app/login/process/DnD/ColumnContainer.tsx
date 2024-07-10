/* eslint-disable object-shorthand */
"use client";
// DnD
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
// Mantine
import {
  useMantineColorScheme,
  ScrollArea,
  Divider,
  Stack,
  Title,
  Badge,
  Flex,
} from "@mantine/core";
// Others
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import heightClasses from "@/styles/height-view.module.css";
import classes from "@/styles/card-process.module.css";
import { underScoreColor } from "@/utils/underScoreColor";
import { CardProcessProps } from "@/interface/interface";

interface ContainerProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title: string;
  cardArray: CardProcessProps[];
}

export function ColumnContainer({
  cardArray,
  children,
  title,
  id,
}: ContainerProps) {
  // const [cardsArray, setCardsArray] = useState<CardProcessProps[]>(cardArray);
  const { colorScheme } = useMantineColorScheme();
  const { setNodeRef } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });

  /* function changeProperty(
    columnTitle: string,
    arr: CardProcessProps[],
  ): CardProcessProps[] {
    arr.forEach((arrCards) => {
      if (arrCards.columnId !== title) {
        arrCards.columnId = title;
      }
    });
    return arr;
  }
  useEffect(() => {
    setCardsArray(changeProperty(title, cardsArray));
  }, [cardsArray.length]); */

  return (
    <div
      ref={setNodeRef}
      style={{ padding: "0.3rem 0.5rem" }}
      className={`${heightClasses.column_process_parent} ${
        classes.columns}`}
    >
      <Stack gap={0}>
        <Flex gap={5} justify={"center"} align={"center"}>
          <Title
            order={2}
            styles={(theme) => ({
              root: {
                textAlign: "center",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            {capitalizeFirstLetter(title)}
          </Title>
          <Badge radius="sm" styles={{ label: { fontSize: "0.9rem" } }}>
            {cardArray.length}
          </Badge>
        </Flex>
        <Divider
          size="md"
          styles={{
            root: {
              borderColor: underScoreColor(capitalizeFirstLetter(title)),
              borderRadius: "10px",
              // marginTop: "-0.3rem",
            },
          }}
        />
      </Stack>
      <ScrollArea
        scrollbarSize={2}
        className={heightClasses.column_process_children}
      >
        {children}
      </ScrollArea>
    </div>
  );
}
