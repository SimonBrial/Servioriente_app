import React from "react";
import { AdminEditLayout } from "./AdminEditLayout";
import { AdminDescriptionLayout } from "./AdminDescriptionLayout";

export const AdminDescriptionContainer = ({
  editing,
}: {
  editing: boolean;
}) => {
  return (
    <>
      {editing ? (
        <AdminEditLayout key={crypto.randomUUID()} />
      ) : (
        <AdminDescriptionLayout key={crypto.randomUUID()} />
      )}
    </>
  );
};
