import { ClientCard } from "../../components/ClientCard";
import AdminLayout from "../../layouts/AdminLayout";

export default function () {
  return (
    <>
      <AdminLayout>
        <h1>Random Page</h1>
        <ClientCard _id="3" />
      </AdminLayout>
    </>
  );
}
