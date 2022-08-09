import React from "react";
import { DashboardPage } from "../../_pages/Admin/DashboardPage";
import AdminLayout from "../../layouts/AdminLayout";

export default function Dashboard() {
  return (
    <>
      <AdminLayout>
        <DashboardPage />
      </AdminLayout>
    </>
  );
}
