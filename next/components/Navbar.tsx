import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-black h-10 ">
      <div className="text-white flex justify-center items-center">
        <Link href="/">
          <a className="m-2 hover:underline">Home</a>
        </Link>
        <Link href="/admin/dashboard">
          <a className="m-2 hover:underline">Dashboard</a>
        </Link>
        <Link href="/admin/randomPage">
          <a className="m-2 hover:underline">Random Page 1</a>
        </Link>
      </div>
    </div>
  );
}
