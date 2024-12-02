import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();

  if (session) redirect("/");

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/tasks" });
        }}>
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}
export default page;
