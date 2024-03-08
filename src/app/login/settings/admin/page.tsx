import React from "react";
import { AdminLayout } from "./AdminLayout";
import { AsideAdminContainer } from "./AsideAdminContainer";
import { AdminDescriptionContainer } from "./AdminDescriptionContainer";

export default function page() {
  return (
    <AdminLayout>
      <AsideAdminContainer />
      <AdminDescriptionContainer />
    </AdminLayout>
  );
}
