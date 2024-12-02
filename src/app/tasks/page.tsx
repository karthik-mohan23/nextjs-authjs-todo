import { auth } from "@/auth";
import CreateTaskDialog from "@/components/tasks/CreateTaskDialog";
import ListUsersTasks from "@/components/tasks/ListUsersTasks";
import prisma from "@/db";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();
  if (!session) redirect("/login");

  const userId = session.user?.id;

  const usersTasks = await prisma.todo.findMany({
    where: {
      authorId: userId,
    },
  });

  return (
    <div>
      Tasks
      {/* create task dialog */}
      <CreateTaskDialog userId={userId as string} />
      {/* list users tasks */}
      <ListUsersTasks usersTasks={usersTasks} />
    </div>
  );
}
export default page;
