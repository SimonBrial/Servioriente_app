"use client";

import { FaAt } from "@/icons";
import { HorizontalLayoutProps } from "@/interface/interface";
import {
  CheckIcon,
  Combobox,
  Flex,
  Group,
  Pill,
  PillsInput,
  Stack,
  Text,
  TextInput,
  Title,
  useCombobox,
  useMantineColorScheme,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { Controller, Path } from "react-hook-form";

interface Root {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const groceries: Root[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

export default function MailAutoCompleteInput({
  handleMails,
  errorDescription,
}: {
  handleMails: (newMails: string | string[]) => void;
  errorDescription: boolean;
  /* handleInputChange: (value: string) => void;
    value: string | string[]; */
}) {
  const { colorScheme } = useMantineColorScheme();
  // const [text, setText] = useState("");

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [search, setSearch] = useState("");
  const [mail, setMail] = useState<string[]>([]);
  // const [req, setReq] = useState<Root[]>([]);

  /* useEffect(() => {
    console.log(mail);
    console.log(search);
    // TODO: When the user types something, the component will make a fetch request to the API to get the values that make match the search.
    handleFetch();
  }, [search, mail.length]); */

  // console.log(req);

  /* const handleFetch = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setReq(data);
      const res = await groceries.find((user) => user.email.includes(search))
      const data = await res.json();
      console.log(data)
    } catch (err) {
      console.log("Something went wrong: ", err);
    }
  }; */

  /* const handleFetch = () => {
    const data = groceries.find((user) => {
      if (user.email.includes(search)) {
        return user;
      }
    });
    console.log(data);
  }; */

  const handleValueSelect = (val: string) =>
    setMail((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val],
    );

  const handleValueRemove = (val: string) =>
    setMail((current) => current.filter((v) => v !== val));

  const values = mail.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) =>
      item.email.toLowerCase().includes(search.trim().toLowerCase()),
    )
    .map((item) => (
      <Combobox.Option
        value={item.email}
        key={item.id}
        active={mail.includes(item.email)}
      >
        <Group gap="sm">
          {mail.includes(item.email) ? <CheckIcon size={12} /> : null}
          <span>{item.email}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Flex>
        <Title
          order={4}
          styles={(theme) => ({
            root: {
              color:
                colorScheme === "light"
                  ? theme.colors.lightTheme[3]
                  : theme.colors.darkTheme[2],
            },
          })}
        >
          Destinatarios
        </Title>{" "}
        <span style={{ color: "red" }}>*</span>
      </Flex>
      <Combobox
          store={combobox}
          onOptionSubmit={handleValueSelect}
          styles={(theme) => ({ search: { width: "100%" } })}
        >
          <Combobox.DropdownTarget>
            <PillsInput
              onClick={() => combobox.openDropdown()}
              style={{ width: "82%" }}
              leftSection={<FaAt />}
              error={
                errorDescription ? null : (
                  <Text size={"xs"} color="red">
                    No se pueden enviar a mas de 5 correos
                  </Text>
                )
              }
            >
              <Pill.Group>
                {values}
                <Combobox.EventsTarget>
                  <PillsInput.Field
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => combobox.closeDropdown()}
                    value={search}
                    placeholder="Search values"
                    onChange={(event) => {
                      handleMails(mail);
                      combobox.updateSelectedOptionIndex();
                      setSearch(event.currentTarget.value);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Backspace" && search.length === 0) {
                        event.preventDefault();
                        handleValueRemove(mail[mail.length - 1]);
                      }
                    }}
                  />
                </Combobox.EventsTarget>
              </Pill.Group>
            </PillsInput>
          </Combobox.DropdownTarget>

          <Combobox.Dropdown>
            <Combobox.Options>
              {options.length > 0 ? (
                options
              ) : (
                <Combobox.Empty>Nothing found...</Combobox.Empty>
              )}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      {/* <TextInput
        // error={errorDescription !== undefined ? errorDescription : null}
        onChange={(event) => setText(event.currentTarget.value)}
        // onBlur={onBlur}
        value={text}
        leftSectionPointerEvents="none"
        leftSection={<FaAt />}
        placeholder={"mails"}
        w={"82%"}
        size="sm"
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
          section: {
            color: theme.colors.lightTheme[3],
          },
        })}
      /> */}
      {/* <Controller
        name={label}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          
        )}
      /> */}
    </Flex>
  );
}
