"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    { href: "/about", text: "About" },
    { href: "/#academics", text: "Academics" },
    { href: "/#admissions", text: "Admissions" },

    { href: "/#leadership", text: "Leadership" },

    { href: "/#school-life", text: "School life" },

    { href: "/#contact", text: "Contact Us" },
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
                className={`text-xl font-bold ${
                  isScrolled ? "text-sky-600 " : "text-indigo-100"
                }`}
              >
                G.S Mater <span className="text-sky-500">Dei</span> Nyanza
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
                  className={`${
                    isScrolled
                      ? "text-sky-500 hover:text-indigo-100"
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
                  ? "bg-sky-600 text-indigo-100 hover:bg-gray-100"
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
