"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

import logo from "@/src/assets/logo/logo.svg";
import { Phone } from "lucide-react";
import useMenus from "@/src/hook/useLinks";

const Header = ({ className }: { className?: string }) => {
  const { menus } = useMenus();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`${className} fixed w-full z-100`}>
        <div className="bg-background py-5">
          <Container className="flex justify-between items-center">
            {/* Logo + Menus Bar */}
            <div className="flex items-center gap-5">
              <Link href="/">
                <Image src={logo} alt="Logo Pic" className="w-25" />
              </Link>
              {menus?.mainMenus?.map((menu) => (
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
        </div>

        <Container className={`${isScrolled ? "hidden" : "block"} top-0`}>
          <div className="flex items-center gap-5">
            {menus?.subMenus?.map((menu) => (
              <Link
                href={menu.href}
                key={menu.name}
                className="text-xl text-font-color hover:underline decoration-2"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </Container>
      </header>
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;
