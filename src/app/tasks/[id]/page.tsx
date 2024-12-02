import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();

  if (!session) redirect("/login");

  return <div>Task Id</div>;
}
export default page;
