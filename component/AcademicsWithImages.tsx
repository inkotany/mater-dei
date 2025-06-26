"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function AcademicsWithImages() {
  // Animation variants

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // const fadeIn: Variants = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: { duration: 0.8 },
  //   },
  // };

  const imageCard: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="academics"
      className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-0 right-0 w-32 h-32 bg-sky-200 rounded-full -mr-16 -mt-16"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-sky-200 rounded-full -ml-32 -mb-32"
      />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={item}>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
              Our Academic Programs
            </h2>
          </motion.div>
          <motion.div variants={item}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured curriculum designed to foster intellectual growth and
              prepare students for higher education and professional success.
            </p>
          </motion.div>
        </motion.div>

        {/* Secondary Program */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 mb-24 items-center"
        >
          <motion.div
            variants={imageCard}
            className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="Secondary students in class"
              fill
              className="object-cover"
              priority
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent"
            />
          </motion.div>

          <motion.div variants={container} className="space-y-8">
            <motion.div variants={item} className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="bg-sky-100 p-3 rounded-xl"
              >
                <svg
                  className="w-8 h-8 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800">
                Secondary Education
              </h3>
            </motion.div>

            <motion.div variants={container} className="space-y-8">
              <motion.div variants={item}>
                <h4 className="text-xl font-semibold text-sky-600 mb-2">
                  O-Level (S1–S3)
                </h4>
                <p className="text-gray-600">
                  Comprehensive foundation in sciences, humanities, and
                  languages with strong preparation for national examinations.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <h4 className="text-xl font-semibold text-sky-600 mb-4">
                  A-Level (S4–S6)
                </h4>
                <p className="text-gray-600 mb-6">
                  Specialized combinations preparing students for university and
                  professional careers:
                </p>
                <motion.div
                  variants={container}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  {[
                    { name: "MCE", desc: "Mathematics, Computer, Economics" },
                    { name: "MPC", desc: "Mathematics, Physics, Chemistry" },
                    { name: "MCB", desc: "Mathematics, Chemistry, Biology" },
                  ].map((subject, index) => (
                    <motion.div
                      key={subject.name}
                      variants={item}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white p-4 rounded-lg border border-sky-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <h5 className="font-bold text-sky-700 mb-1">
                        {subject.name}
                      </h5>
                      <p className="text-sm text-gray-600">{subject.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Extracurricular */}
        {/* <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={container} className="space-y-8 md:order-2">
            <motion.div variants={item} className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="bg-sky-100 p-3 rounded-xl"
              >
                <svg
                  className="w-8 h-8 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800">
                Beyond Academics
              </h3>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-gray-600">
                Our comprehensive extracurricular program includes robotics
                club, debate team, sports, music, and community service
                initiatives that develop well-rounded individuals.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageCard}
            className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
              alt="Students in robotics club"
              fill
              className="object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-sky-900/30 to-transparent"
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
