import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Facebook } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";

// Optional: You can define a type for contact item
type ContactItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const Footer: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      icon: <EmailIcon />,
      label: "neupanejiban89@gmail.com",
      href: "mailto:neupanejiban89@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      label: "+977-9866586815",
      href: "tel:+9779866586815",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/neuzbadxhah/",
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      href: "https://github.com/Neuz-Badxhah",
    },
    {
      icon: <Facebook />,
      label: "Facebook",
      href: "https://www.facebook.com/neuzbadxhah",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      href: "https://www.instagram.com/neuz_badxhah",
    },
  ];

  return (
    <footer className="footer-container fixed bottom-0 left-0 right-0 p-6 bg-gray-800 text-white z-50">
      <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
      <ul className="contact-list space-y-2">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {item.icon}
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="hover:text-blue-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        &copy; 2026 Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
