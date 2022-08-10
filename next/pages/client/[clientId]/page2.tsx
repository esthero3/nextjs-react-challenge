import { ClientCard } from "../../../components/ClientCard";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  let { clientId } = router.query;
  clientId = clientId as string;

  return <ClientCard _id={clientId} />;
}
