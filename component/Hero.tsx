"use client";

import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./nav";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export async function getSliderImages(): Promise<string[]> {
  const query = `*[_type == "backgroundImageSlider"][0].images[]{
    "url": asset->url
  }`;

  const data = await client.fetch(query);
  return data.map((img: { url: string }) => img.url);
}

export default function Hero() {
  const [backgroundImages, setBackgroundImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const constraintsRef = useRef(null);

  // Fetch images on mount
  useEffect(() => {
    getSliderImages().then(setBackgroundImages);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (backgroundImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  // Skeleton loader while images load
  if (backgroundImages.length === 0) {
    return (
      <>
        <NavBar />
        <section
          className="relative h-screen max-h-[800px] w-full flex flex-col items-center justify-center bg-gray-800"
          ref={constraintsRef}
        >
          {/* Skeleton rectangle for image */}
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>

          {/* Gradient overlay placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50 z-10 flex items-center justify-center">
            <div className="max-w-3xl w-full px-4 text-center space-y-6">
              <div className="h-12 bg-gray-600 rounded mx-auto w-3/4 animate-pulse"></div>
              <div className="h-6 bg-gray-600 rounded mx-auto w-1/2 animate-pulse"></div>
              <div className="flex justify-center gap-4 mt-8">
                <div className="h-10 w-32 bg-gray-600 rounded animate-pulse"></div>
                <div className="h-10 w-32 bg-gray-600 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <section
        className="relative h-screen flex flex-col items-center justify-center max-h-[800px] w-full overflow-hidden"
        ref={constraintsRef}
      >
        {/* Background Images with Slider Effect */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 1 : 0,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover object-center"
                priority
                quality={100}
              />
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50 z-10 flex items-center justify-center">
          <motion.div
            className="container flex flex-col items-center justify-center text-center bg-amber-0 px-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.div className="max-w-3xl">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-100 mb-6 leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                Educating Hearts & Minds in Nyanza
                <motion.span
                  className="text-sky-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                {" "} Since 1952
                </motion.span>{" "}
              </motion.h1>

              <motion.p
                className="text-sm md:text-md text-gray-200 mb-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                A Catholic Legacy of Academic Excellence & Spiritual Growth
              </motion.p>

              <motion.div
                className="flex p-4 flex-col items-center justify-center sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/#admissions"
                    className="px-6 py-2 flex justify-center items-center bg-sky-500 text-indigo-100 font-semibold rounded-sm hover:opacity-80 transition-all duration-300 shadow-md hover:shadow-xl text-center"
                  >
                    Start With Us
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <svg
            className="w-6 h-6 text-indigo-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-sky-500 w-6"
                  : "bg-gray-300 bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
