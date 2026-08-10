import { useState } from "react";
import {
  Home,
  UserRound,
  Code2,
  FolderOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: Home,
    },
    {
      name: "About",
      href: "#about",
      icon: UserRound,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Code2,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderOpen,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
      contact: true,
    },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 items-center justify-between">
      {/* Logo */}
      <a
        href="#home"
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-full
          bg-(--bg-primary)
          text-sm font-extrabold
          tracking-tight
          text-(--text-primary)
          shadow-lg shadow-black/20
          transition-transform duration-300
          hover:scale-105
        "
      >
        AH
      </a>

      {/* Navigation */}
      <nav
        className="
          rounded-full
          border border-black/10
          bg-(--text-primary)/95
          p-1.5
          shadow-2xl shadow-black/20
          backdrop-blur-xl
        "
      >
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  nav-link
                  group
                  relative
                  flex items-center gap-2
                  overflow-hidden
                  rounded-full
                  px-5 py-2.5
                  text-sm font-medium

                  ${
                    item.contact
                      ? "contact-link bg-(--bg-primary) text-(--text-primary)"
                      : "text-(--bg-primary)"
                  }
                `}
              >
                {/* Icon */}
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="nav-icon relative z-10 shrink-0"
                />

                {/* Text animation */}
                <span className="nav-text relative z-10">
                  <span className="text-current">{item.name}</span>

                  <span className="text-hover">{item.name}</span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            flex items-center justify-center
            p-2
            text-(--bg-primary)
            transition-transform duration-300
            hover:scale-110
            md:hidden
          "
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Floating Email */}
      <a
        href="mailto:yourmail@example.com"
        className="email-pill hidden md:flex"
      >
        <Mail size={16} strokeWidth={1.8} className="email-icon" />

        <span className="email-text">
          <span className="email-current">yourmail@example.com</span>

          <span className="email-hover">Let's Talk →</span>
        </span>
      </a>

      {/* Mobile Navigation */}
      <div
        className={`
          absolute right-0 top-16
          w-64
          overflow-hidden
          rounded-3xl
          bg-(--text-primary)/95
          p-2
          shadow-2xl shadow-black/30
          backdrop-blur-xl
          transition-all duration-500
          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto max-h-125 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`
                  flex items-center gap-3
                  rounded-2xl
                  px-5 py-4
                  text-sm font-medium
                  transition-colors duration-300

                  ${
                    item.contact
                      ? "bg-(--bg-primary) text-(--text-primary)"
                      : "text-(--bg-primary) hover:bg-(--accent-cyan)"
                  }
                `}
              >
                <Icon size={18} strokeWidth={1.8} />

                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
