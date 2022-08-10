import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-black h-10 ">
      <div className="text-white flex justify-center items-center">
        <Link href="/">
          <a className="m-2 hover:underline">Home</a>
        </Link>
        <Link href="/dashboard">
          <a className="m-2 hover:underline">Dashboard</a>
        </Link>
        <Link href="/client/1">
          <a className="m-2 hover:underline">client 1</a>
        </Link>
        <Link href="/client/1/page1">
          <a className="m-2 hover:underline">client 1_a</a>
        </Link>
        <Link href="/client/1/page2">
          <a className="m-2 hover:underline">client 1_b</a>
        </Link>
      </div>
    </div>
  );
}
