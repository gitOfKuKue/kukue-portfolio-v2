import {
  faFacebook,
  faInstagram,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { create } from "zustand";

interface MenuState {
  menus: {
    name: string;
    href: string;
  }[];
  resources: {
    name: string;
    href: string;
  }[];
}

interface ContactState {
  contacts: {
    platform: string;
    href: string;
    icon: IconDefinition;
  }[];
}

const useLinks = create<MenuState & ContactState>((set) => ({
  menus: [
    { name: "About", href: "/#about-me" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ],
  resources: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  contacts: [
    {
      platform: "Phone",
      href: "tel:+84898247910",
      icon: faSquarePhone,
    },
    {
      platform: "Email",
      href: "mailto:thuhtetnaing.14.11@gmail.com",
      icon: faEnvelope,
    },
    {
      platform: "Linkedin",
      href: "",
      icon: faLinkedin,
    },
    {
      platform: "Facebook",
      href: "",
      icon: faFacebook,
    },
    {
      platform: "Instagram",
      href: "",
      icon: faInstagram,
    },
  ],
}));

export default useLinks;
