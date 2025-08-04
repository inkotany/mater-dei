"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const navLinks = [
    { href: "/#blog", Color: "text-sky-500", text: "BLOG" },
    { href: "/#leadership", text: "STAFF" },
    { href: "/#Downloadable ", text: "Download Docs " },

    { href: "/#in-action", text: " IN ACTION" },
    { href: "/about", text: "ABOUT US" },
    { href: "/#contact", text: "CONTACT US" },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-indigo-50 shadow-sm" : "backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo on left */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xl font-bold flex items-center justify-center gap-4 ${
                  isScrolled ? "text-sky-600 " : "text-indigo-100"
                }`}
              >
                <Image
                  src={"/md-logo.png"}
                  width={60}
                  height={60}
                  alt={""}
                ></Image>{" "}
                G.S MATER<span className="text-sky-500"> DEI</span> NYANZA
              </motion.span>
            </Link>
          </motion.div>

          {/* Centered navigation links */}
          <motion.div
            variants={containerVariants}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={` ${link?.Color}  ${
                    isScrolled
                      ? "text-sky-500 hover:bg-sky-400"
                      : "text-indigo-100 hover:text-sky-500"
                  } transition-colors duration-200 font-medium`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block"
                  >
                    {link.text}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Login button on right */}
          <motion.div variants={itemVariants} className="flex items-center">
            <Link
              href="/studio"
              className={`px-6 py-1 rounded-md transition-colors duration-200 font-medium ${
                isScrolled
                  ? "bg-sky-600 text-indigo-100 hover:bg-sky-400"
                  : "bg-sky-500 text-indigo-900 hover:bg-sky-400"
              }`}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                Login
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
