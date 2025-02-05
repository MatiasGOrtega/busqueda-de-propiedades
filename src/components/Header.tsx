"use client";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import MobileMenu from "./haeder/MobileMenu";
import DesktopMenu from "./haeder/DesktopMenu";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="flex items-center justify-between w-full px-2">
      <Link href="/">
        <h1 className="flex items-center justify-center gap-1 p-4 text-xl font-bold">
          <Image
            className="rounded-md"
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="hidden lg:block">apulo Imbolilaria</span>
        </h1>
      </Link>
      <DesktopMenu />
      <MobileMenu />
      <div className="flex items-center gap-4">
        <Button
          variant="contained"
          href="real_state/add"
          startIcon={<Add />}
          size="small"
        >
          añadir anuncio
        </Button>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button variant="outlined" size="small">
            Login
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
