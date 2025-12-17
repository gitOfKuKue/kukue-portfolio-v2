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
    mainMenus: {
      name: string;
      href: string;
    }[];
    subMenus: {
      name: string;
      href: string;
    }[];
  };
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
  menus: {
    mainMenus: [
      { name: "About", href: "/#about-me" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Skills", href: "/skills" },
      { name: "Contact", href: "/contact" },
    ],
    subMenus: [
      { name: "Projects", href: "/projects" },
      { name: "Versions", href: "/version" },
    ],
  },
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
      href: "https://www.linkedin.com/in/thu-htet-naing/",
      icon: faLinkedin,
    },
    {
      platform: "Facebook",
      href: "https://www.facebook.com/share/1CJcPU6Fwu/?mibextid=wwXIfr",
      icon: faFacebook,
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/ichbin_kukue",
      icon: faInstagram,
    },
  ],
}));

export default useLinks;
