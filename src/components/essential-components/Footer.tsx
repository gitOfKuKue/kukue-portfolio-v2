"use client";

import React from "react";
import Container from "./Container";
import Image from "next/image";

import logo from "@/src/assets/logo/logo.svg";
import useRole from "@/src/hook/useRole";
import useLinks from "@/src/hook/useLinks";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ className }: { className?: string }) => {
  const { role } = useRole();
  const { menus, resources, contacts } = useLinks();

  return (
    <footer className={`${className} my-10`}>
      <Container className="bg-foreground min-h-80 p-8 rounded-(--standard-radius) flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand & Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="bg-background w-fit p-3 rounded-xl mb-4">
                <Image src={logo} alt="Logo" className="w-20" />
              </div>
              <h1 className="text-4xl font-bold bg-linear-to-b from-background to-foreground bg-clip-text text-transparent">
                Thu Htet Naing @ Ku Kue
              </h1>
              <p className="text-xl mt-2 text-background/80">{role}</p>
            </div>

            <div className="flex gap-5">
              {contacts.map((contact) => (
                <Link
                  href={contact.href}
                  key={contact.platform}
                  className="text-background hover:text-background/80 transition-colors"
                  aria-label={contact.platform}
                >
                  <FontAwesomeIcon icon={contact.icon} className="text-3xl" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 border-l border-background/20 pl-10">
            <h3 className="text-background font-bold text-lg uppercase tracking-wider">
              Navigation
            </h3>
            <div className="flex flex-col gap-3">
              {menus.mainMenus.map((menu) => (
                <Link
                  href={menu.href}
                  key={menu.name}
                  className="text-xl text-background hover:underline decoration-1 font-light"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4 border-l border-background/20 pl-10">
            <h3 className="text-background font-bold text-lg uppercase tracking-wider">
              Resources
            </h3>
            <div className="flex flex-col gap-3">
              {resources.map((resource) => (
                <Link
                  href={resource.href}
                  key={resource.name}
                  className="text-xl text-background hover:underline decoration-1 font-light"
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-background/20 flex justify-between items-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Ku Kue. All rights reserved.</p>
          <p>Designed & Built with attitudes.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
