// app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Mater Dei School</title>
        <meta
          name="description"
          content="The page you ' re looking for doesn ' t exist"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex flex-col items-center justify-center p-6 text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-sky-600 relative">
            4
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-md space-y-4"
        >
          <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 text-lg">
            Oops! The page you &apos; re looking for doesn &apos; t exist or has
            been moved.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm"
          >
            Return Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Optional: School Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <svg
            className="w-64 h-auto text-sky-200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 20L20 70V130L100 180L180 130V70L100 20Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M100 180V100" stroke="currentColor" strokeWidth="2" />
            <path d="M180 70L100 100" stroke="currentColor" strokeWidth="2" />
            <path d="M20 70L100 100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
