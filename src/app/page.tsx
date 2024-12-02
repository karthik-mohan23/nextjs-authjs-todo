import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 min-h-[80vh] items-center justify-center">
      <h1 className="text-7xl font-semibold">Task App</h1>
      <Link
        href={"/tasks"}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg">
        Get Started
      </Link>
    </main>
  );
}
