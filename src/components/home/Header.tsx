"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import DesktopMenu from "../haeder/DesktopMenu";
import MobileMenu from "../haeder/MobileMenu";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="flex justify-between items-center h-24">
      <div className="flex-[3] flex items-center gap-12">
        <Link href="/" className="font-bold text-xl flex items-center gap-1">
          <Image
            className="rounded-md"
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="hidden mobile:block">apulo Imbolilaria</span>
        </Link>
        <DesktopMenu />
      </div>
      <div className="flex-[2] hidden laptop:flex items-center justify-end laptop:bg-yellow-100 h-full [&>a]:px-6 [&>a]:py-3 ">
        <Link href="/sign-in">Iniciar sesión</Link>
        <Link href="/sign-up" className="bg-yellow-300 mr-5">
          Registrarse
        </Link>
        {/* {isSignedIn ? <UserButton /> : <></>} */}
      </div>
      <MobileMenu />
    </header>
  );
}

export default Header;
