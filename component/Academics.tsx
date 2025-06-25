"use client";
import { motion } from "framer-motion";

export default function Academics() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section
      id="academics"
      className="py-20 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header with animation */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-sky-700 mb-4"
          >
            Our Academic Programs
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive curriculum designed to nurture intellectual
            growth, critical thinking, and lifelong learning skills in a
            supportive environment.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Secondary Program - Animated card */}
          <motion.div variants={item}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-sky-100 p-3 rounded-lg mr-4"
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
                  <h3 className="text-2xl font-bold text-gray-800">
                    Secondary School
                  </h3>
                </div>

                <motion.div variants={container} className="space-y-6">
                  <motion.div variants={item}>
                    <h4 className="text-lg font-semibold text-sky-600 mb-2">
                      O-Level (S1–S3)
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive foundation in sciences, humanities, and
                      languages with strong preparation for national
                      examinations.
                    </p>
                  </motion.div>

                  <motion.div variants={item}>
                    <h4 className="text-lg font-semibold text-sky-600 mb-2">
                      A-Level (S4–S6)
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Specialized combinations preparing students for university
                      and careers:
                    </p>
                    <motion.ul
                      variants={container}
                      className="space-y-2 text-gray-600"
                    >
                      <motion.li variants={item} className="flex items-start">
                        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm font-medium mr-2">
                          MCE
                        </span>
                        <span>Mathematics, Computer, Economics</span>
                      </motion.li>
                      <motion.li variants={item} className="flex items-start">
                        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm font-medium mr-2">
                          MPC
                        </span>
                        <span>Mathematics, Physics, Chemistry</span>
                      </motion.li>
                      <motion.li variants={item} className="flex items-start">
                        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm font-medium mr-2">
                          MCB
                        </span>
                        <span>Mathematics, Chemistry, Biology</span>
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Extracurricular - Animated card */}
          <motion.div variants={item}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-sky-100 p-3 rounded-lg mr-4"
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
                <h3 className="text-2xl font-bold text-gray-800">
                  Extracurricular Activities
                </h3>
              </div>
              <motion.p variants={fadeIn} className="text-gray-600">
                We offer diverse clubs and sports including debate, robotics,
                football, and music to develop well-rounded individuals. Our
                programs complement academic learning with practical skills and
                teamwork experiences.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Explore All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
