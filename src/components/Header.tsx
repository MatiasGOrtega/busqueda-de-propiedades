"use client";
import Image from "next/image";
import React from "react";
import MobileMenu from "./haeder/MobileMenu";
import DesktopMenu from "./haeder/DesktopMenu";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="flex justify-between items-center w-full px-2 h-24">
      <div className="flex-auto flex items-center gap-12">
        <Link href="/" className="font-bold text-xl flex items-center gap-3">
          <Image
            className="rounded-md"
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="hidden desktop:block">apulo Imbolilaria</span>
        </Link>
        <DesktopMenu />
      </div>
      <div className="flex-auto hidden tablet:flex items-center justify-end laptop:bg-orange-100 p-5 h-full [&>a]:px-6 [&>a]:py-3 ">
        <Link href="/sign-in">Iniciar sesión</Link>
        <Link href="/sign-up" className="bg-yellow-300">
          Registrarse
        </Link>
        {/* {isSignedIn ? <UserButton /> : <></>} */}
      </div>
      <MobileMenu />
    </header>
  );
}

export default Header;
