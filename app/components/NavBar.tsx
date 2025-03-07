import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center bg-gray-600 text-white p-4 shadow-md border-b border-gray-500">
      <Link href="/">
        <h1 className="text-2xl md:text-4xl font-bold">Weather Dashboard</h1>
      </Link>
      <Link href="/about">
        <h1 className="text-basic mr-8">about</h1>
      </Link>
    </header>
  );
}
