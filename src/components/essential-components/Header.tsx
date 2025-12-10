"use client";

import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

import logo from "@/src/assets/logo/logo.svg";
import { Phone } from "lucide-react";
import useMenus from "@/src/hook/useLinks";

const Header = ({ className }: { className?: string }) => {
  const { menus } = useMenus();
  return (
    <>
      <header
        className={`${className} py-5 h-[80px] fixed w-full bg-background z-100`}
      >
        <Container className="flex justify-between items-center">
          {/* Logo + Menus Bar */}
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image src={logo} alt="Logo Pic" className="w-25" />
            </Link>
            {menus.map((menu) => (
              <Link
                href={menu.href}
                key={menu.name}
                className="text-2xl text-font-color"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Book a call */}
          <Link
            href="tel:+84898247910"
            className="flex gap-2 items-center text-foreground"
          >
            <Phone size={20} />
            Book a call
          </Link>
        </Container>
      </header>
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;
