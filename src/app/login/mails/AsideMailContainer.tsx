/* eslint-disable @typescript-eslint/prefer-optional-chain */
"use client";

import React, { useEffect, useState } from "react";
import MailItem from "./MailItem";
import { ScrollArea, Stack } from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import BtnMail from "@/components/buttons/BtnMail";
import { useMailStore } from "@/store/mail-store";
import { usePathname } from "next/navigation";
import { MailDataProps } from "@/interface/interface";

export const AsideMailContainer = () => {
  const { selectData } = useMailStore();
  const path = usePathname();
  const [dataMails, setDataMails] = useState<MailDataProps[]>();
  useEffect(() => {
    const data = selectData(path);
    setDataMails(data);
  }, [path]);

  return (
    <ContainerInside width="35%" allWhite={false} withBorder>
      <Stack gap={4} style={{ height: "100%" }}>
        <BtnMail />
        <ScrollArea
          h={"100%"}
          style={{ borderRadius: "6px" }}
          offsetScrollbars
          scrollbarSize={2}
        >
          {dataMails !== undefined &&
            dataMails.map((item: MailDataProps, i: number) => {
              const {
                description,
                mailStatus,
                userName,
                idMail,
                title,
                photo,
                mail,
                date,
              } = item;
              return (
                <MailItem
                  description={description}
                  mailStatus={mailStatus}
                  userName={userName}
                  idMail={idMail}
                  photo={photo}
                  title={title}
                  date={date}
                  mail={mail}
                  key={i}
                />
              );
            })}
        </ScrollArea>
      </Stack>
    </ContainerInside>
  );
};
