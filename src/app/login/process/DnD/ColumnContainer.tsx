/* eslint-disable object-shorthand */
"use client";
// DnD
import { UniqueIdentifier } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
// Mantine
import {
  useMantineColorScheme,
  ScrollArea,
  Divider,
  Stack,
  Title,
  Badge,
  Flex,
  Text,
  Center,
} from "@mantine/core";
// Others
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import heightClasses from "@/styles/height-view.module.css";
import classes from "@/styles/card-process.module.css";
import { underScoreColor } from "@/utils/underScoreColor";
import { CardProcessProps } from "@/interface/interface";
import { Items } from "./Items";
import { LiaIdCard } from "@/icons";

interface ContainerProps {
  id: UniqueIdentifier;
  // children: React.ReactNode;
  title: string;
  cardArray: CardProcessProps[];
}

export function ColumnContainer({
  cardArray,
  // children,
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
      style={{
        padding: "0.3rem 0.5rem",
        border:
          colorScheme === "light" ? "1px solid #cdcdcd" : "1px solid #2A3B47",
        borderRadius: "6px",
        boxShadow:
          colorScheme === "light"
            ? "0px 5px 6px -6px #696969bf"
            : "0px 5px 6px -6px #696969bf",
      }}
      className={
        colorScheme === "light"
          ? `${heightClasses.column_process_parent} ${classes.columns}`
          : `${heightClasses.column_process_parent} ${classes.columns_dark}`
      }
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
      <SortableContext
        id={id as string}
        items={cardArray}
        strategy={verticalListSortingStrategy}
      >
        <ScrollArea
          style={{
            padding: "0.2rem",
          }}
          scrollbarSize={2}
          // h={300}
          className={heightClasses.column_process_children}
        >
          {cardArray.length === 0 ? (
            <Flex
              justify={"center"}
              align={"center"}
              gap={6}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[3]
                      : theme.colors.darkTheme[2],

                  padding: "0.5rem 1rem",

                  backgroundColor:
                    colorScheme === "light"
                      ? theme.colors.lightTheme[1]
                      : theme.colors.darkTheme[9],
                  borderRadius: "6px",
                },
              })}
            >
              <Center style={{ fontSize: "2.5rem" }}>
                <LiaIdCard />
              </Center>
              <Text size="md" style={{ fontWeight: "bold" }}>
                Sin RCV!
              </Text>
            </Flex>
          ) : (
            cardArray.map((rcv) => {
              /* console.log("rcv: ", rcv.columnId);
                  console.log("container.title: ", container.title);
                  console.log(
                    "container.items.length: ",
                    container.items.length,
                  ); */
              return <Items card={rcv} key={rcv.id} />;
            })
          )}
        </ScrollArea>
      </SortableContext>
    </div>
  );
}
