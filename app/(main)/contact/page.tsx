"use client";

import Container from "@/src/components/essential-components/Container";
import useLinks from "@/src/hook/useLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Asterisk, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  const { contacts } = useLinks();
  return (
    <section className="py-10">
      <Container>
        <div className="w-150 h-[calc(100vh-10rem)] flex flex-col">
          <h1 className="text-font-color text-6xl font-bold mb-5">
            I'd love to <br /> hear from you!
          </h1>

          <p className="text-justify mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quaerat distinctio ea debitis cumque, suscipit eligendi aperiam
            dolores voluptate laudantium necessitatibus totam atque minus aut,
            amet sit eum neque dignissimos!
          </p>

          {/* Social Medias */}
          <div className="flex items-center gap-5">
            {contacts.slice(2).map((contact, index) => (
              <Link href={contact.href} key={index}>
                <FontAwesomeIcon icon={contact.icon} className="text-5xl" />
              </Link>
            ))}
          </div>

          <form action="#" className="mt-auto">
            <input
              type="text"
              className="border border-foreground rounded-full w-full py-2 px-3 mb-2"
              placeholder="Your name"
            />
            <input
              type="email"
              className="border border-foreground rounded-full w-full py-2 px-3 mb-2"
              placeholder="Your email"
            />
            <textarea
              name="detail"
              id="detail-area"
              className="border border-foreground rounded-(--standard-radius) resize-none w-full h-40 py-2 px-3"
              placeholder="What'd you like to say?"
            ></textarea>
            <button className="flex items-center  gap-2 bg-foreground text-background py-3 px-5 rounded-(--standard-radius) hover:bg-(--secondary) hover:text-foreground hover:underline transition-all duration-300">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
        <Asterisk
          className="absolute top-2/3 -translate-y-1/2 -right-100 opacity-30"
          size={1000}
        />
      </Container>
    </section>
  );
};

export default ContactPage;
