"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { Zap } from "lucide-react";
import NexusLogo from "./NexusLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    closeMenu();
    if (pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} onClick={closeMenu}>
        <NexusLogo size={34} style={{ marginRight: 0 }} />
        <span className={styles.logoText}>
          NEX<span className={styles.logoSerif}>us</span>
        </span>
      </Link>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}>
        <Link
          href="/"
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/")}
        >
          Home
        </Link>
        <Link
          href="/works"
          className={`${styles.link} ${isActive("/works") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/works")}
        >
          Works
        </Link>
        <Link
          href="/services"
          className={`${styles.link} ${isActive("/services") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/services")}
        >
          Services
        </Link>
        <Link
          href="/team"
          className={`${styles.link} ${isActive("/team") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/team")}
        >
          Team
        </Link>
        <Link
          href="/contact"
          className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`}
          onClick={(e) => handleLinkClick(e, "/contact")}
        >
          Contact
        </Link>
        
        {/* Mobile CTA inside menu drawer */}
        <Link
          href="/contact"
          className={`${styles.ctaBtn} ${styles.mobileCta}`}
          style={{ display: "none" }}
          onClick={(e) => handleLinkClick(e, "/contact")}
        >
          Let's Build <Zap size={14} />
        </Link>
      </nav>

      <Link href="/contact" className={styles.ctaBtn}>
        Let's Build <Zap size={14} />
      </Link>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerActive : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
