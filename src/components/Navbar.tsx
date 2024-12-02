import Link from "next/link";
import { SignOut } from "./SignOut";
import { auth } from "@/auth";
import { findUser } from "@/lib/actions";

async function Navbar() {
  const session = await auth();
  let user;
  if (session) {
    user = await findUser(session.user?.email as string);
  }

  return (
    <header className="py-5">
      <nav className=" mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Logo</h1>
        <ul className="flex items-center gap-10">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/tasks"}>Tasks</Link>
          </li>
          <li>
            {session?.user?.name ? (
              session?.user?.name
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </li>
          {user && user.role === "admin" && (
            <Link href={"/dashboard"}>Dashboard</Link>
          )}
          {session?.user?.name ? (
            <li>
              <SignOut />
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
