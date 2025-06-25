"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MissionVisionValues() {
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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Use inView hook for each section
  const [titleRef, titleInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [visionRef, visionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [valuesRef, valuesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "show" : "hidden"}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold mb-4 text-slate-800"
          >
            Our Guiding Principles
          </motion.h2>
          <motion.div
            variants={item}
            className="w-24 h-1 bg-sky-500 mx-auto"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Mission Card */}
          <motion.div
            ref={missionRef}
            initial="hidden"
            animate={missionInView ? "show" : "hidden"}
            variants={item}
            className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={missionInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 mx-auto"
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
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-4 text-center text-slate-700"
            >
              Our Mission
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-center"
            >
              To nurture students in faith, knowledge, and integrity, empowering
              them to become compassionate leaders who contribute positively to
              society.
            </motion.p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            ref={visionRef}
            initial="hidden"
            animate={visionInView ? "show" : "hidden"}
            variants={item}
            className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={visionInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 mx-auto"
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
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={visionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-4 text-center text-slate-700"
            >
              Our Vision
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={visionInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-center"
            >
              To be a leading educational institution recognized for excellence
              in academic achievement, spiritual growth, and community
              engagement.
            </motion.p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? "show" : "hidden"}
            variants={item}
            className="bg-slate-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={valuesInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 mx-auto"
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
                  strokeWidth="2"
                  d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                ></path>
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-4 text-center text-slate-700"
            >
              Our Values
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 text-slate-600"
            >
              {[
                "Faith: Upholding strong spiritual foundations",
                "Excellence: Striving for highest standards",
                "Integrity: Promoting honesty and accountability",
                "Community: Fostering inclusivity",
                "Growth: Encouraging continuous development",
              ].map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    valuesInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-sky-500 mr-2">•</span>
                  <span>
                    <strong className="text-slate-700">
                      {value.split(":")[0]}:
                    </strong>{" "}
                    {value.split(":")[1]}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
