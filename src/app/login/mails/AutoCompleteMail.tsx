"use client";

import { HiOutlineSearch } from "@/icons";
import { MailDataProps } from "@/interface/interface";
import { useMailStore } from "@/store/mail-store";
import { filterData } from "@/utils/filterData";
import {
  useMantineColorScheme,
  AutocompleteProps,
  Autocomplete,
  ActionIcon,
  Avatar,
  Group,
  Flex,
  Text,
  TextInput,
  Combobox,
  useCombobox,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// TODO: Este codigo debe ser modificado una vez que se tengan los endpoints de la API

export default function AutoCompleteMail() {
  const [search, setSearch] = useState("");
  const [valueShow, setValueShow] = useState<MailDataProps[]>([]);
  const { colorScheme } = useMantineColorScheme();
  const { mailGlobalArray } = useMailStore();

  const [debounced] = useDebouncedValue(search, 200);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[] | null>(null);
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(false);
  const abortController = useRef<AbortController>();

  /* useEffect(() => {
    if (debounced !== "") {

      const dataFound = filterData(mailGlobalArray, debounced);

      setValueShow(dataFound);
    }
  }, [debounced]); */

  const MOCKDATA = [
    "Apples",
    "Bananas",
    "Broccoli",
    "Carrots",
    "Chocolate",
    "Grapes",
    "Lemon",
    "Lettuce",
    "Mushrooms",
    "Oranges",
    "Potatoes",
    "Tomatoes",
    "Eggs",
    "Milk",
    "Bread",
    "Chicken",
    "Hamburger",
    "Cheese",
    "Steak",
    "French Fries",
    "Pizza",
    "Cauliflower",
    "Peanuts",
    "Ice Cream",
    "Honey",
    "Baguette",
    "Sushi",
    "Kiwi",
    "Strawberries",
  ];

  function getAsyncData(searchQuery: string, signal: AbortSignal) {
    return new Promise<string[]>((resolve, reject) => {
      signal.addEventListener("abort", () => {
        reject(new Error("Request aborted"));
      });

      setTimeout(() => {
        resolve(
          MOCKDATA.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()),
          ).slice(0, 5),
        );
      }, Math.random() * 1000);
    });
  }

  const fetchOptions = (query: string) => {
    abortController.current?.abort();
    abortController.current = new AbortController();
    setLoading(true);

    getAsyncData(query, abortController.current.signal)
      .then((result) => {
        setData(result);
        setLoading(false);
        setEmpty(result.length === 0);
        abortController.current = undefined;
      })
      .catch(() => {});
  };

  const options = (data || []).map((item) => (
    <Link href={`/login/mails/${item}`}>
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    </Link>
  ));
  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      withinPortal={false}
      store={combobox}
    >
      <Combobox.Target>
        <Flex align={"center"} gap={6}>
          <TextInput
            w={320}
            placeholder="Introduce un nombre de usuario"
            value={value}
            onChange={(event) => {
              setValue(event.currentTarget.value);
              fetchOptions(event.currentTarget.value);
              combobox.resetSelectedOption();
              combobox.openDropdown();
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => {
              combobox.openDropdown();
              if (data === null) {
                fetchOptions(value);
              }
            }}
            onBlur={() => combobox.closeDropdown()}
            leftSection={<HiOutlineSearch style={{ fontSize: "1.4rem" }} />}
          />
        </Flex>
      </Combobox.Target>
      <Combobox.Dropdown hidden={data === null}>
        <Combobox.Options>
          {options}
          {empty && <Combobox.Empty>No results found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
