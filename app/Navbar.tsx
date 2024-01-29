"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBug } from "react-icons/ai";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex items-center space-x-6 h-14 border-b mb-5 px-5">
      <Link href={"/"}>
        <AiOutlineBug className="text-xl" />
      </Link>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(" hover:text-zinc-800 transition-colors", {
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
