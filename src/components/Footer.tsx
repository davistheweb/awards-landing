import * as React from "react";
import { Github, Instagram, Twitch, Twitter } from "lucide-react";
type LinkItem = {
  href: string;
  icon: React.ReactNode;
};

const links: LinkItem[] = [
  { href: "https://discord.com", icon: <Twitch /> },
  { href: "https://discord.com", icon: <Twitter /> },
  { href: "https://www.instagram.com/davistheweb.dev", icon: <Instagram /> },
  { href: "https://github.com/davistheweb", icon: <Github /> },
];
export const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy;Nova 2024. All right reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, _i) => (
            <a
              key={_i}
              href={link.href}
              target="_blank"
              rel="noopener norefer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
