// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const socialLinks: { name: string; href: string }[] = [
    { name: "GitHub", href: "https://github.com/riphori-dev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/riphoria1/" },
    {
      name: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61575548308177",
    },
    { name: "Email", href: "mailto:your.email@example.com" },
  ];

  return (
    <footer className="py-12 text-center">
      <div className="flex justify-center gap-6 mb-8">
        {socialLinks.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            {name}
          </a>
        ))}
      </div>
      <p className="text-gray-500">
        © {new Date().getFullYear()} Rios Zoe Bunao. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
