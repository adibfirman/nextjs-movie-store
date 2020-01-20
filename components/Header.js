import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="w-full flex-grow">
        <div className="text-sm">
          <Link href="/">
            <a className="mt-4 text-teal-200 hover:text-white mr-4">Home</a>
          </Link>
          <Link href="/about">
            <a className="mt-4 text-teal-200 hover:text-white mr-4">About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
