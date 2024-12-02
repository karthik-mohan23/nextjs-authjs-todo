import { auth } from "@/auth";
import prisma from "@/db";
import { findUser, getAllUsers } from "@/lib/actions";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();
  if (!session) redirect("/login");
  const user = await findUser(session.user?.email as string);
  if (user?.role !== "admin") redirect("/");

  const totalUsers = await getAllUsers();

  return (
    <main>
      <div className="bg-green-400 p-8 rounded-md">
        Total Users : {totalUsers}
      </div>
    </main>
  );
}
export default page;
