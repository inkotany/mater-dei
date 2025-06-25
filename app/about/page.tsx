"use client";

import { NavBar } from "@/component/nav";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-6">
            Our Story & Mission
          </motion.h1>

          <motion.div
            variants={fadeIn}
            className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8"
          >
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Mater Dei School campus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-sky-900/40 flex items-center justify-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white text-xl md:text-2xl max-w-2xl px-4"
              >
                Educating hearts and minds in Nyanza for over 70 years
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* History Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 className="text-3xl font-bold text-sky-600 mb-8 text-center">
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 h-full w-1 bg-sky-200 transform -translate-x-1/2 origin-top"
            ></motion.div>

            {/* Timeline items */}
            <div className="space-y-12">
              {[
                {
                  year: "1952",
                  title: "School Founding",
                  content:
                    "Established by Les Soeurs Missionnaires de Notre Dame d'Afrique as Ecole Technique Feminine (E.T.F)",
                },
                {
                  year: "1981",
                  title: "Academic Expansion",
                  content: "Introduced Biochimie department",
                },
                {
                  year: "2003",
                  title: "Modernization",
                  content:
                    "Added Electronics & Telecommunications, followed by Math-Physics",
                },
                {
                  year: "Present",
                  title: "Current Identity",
                  content:
                    "Known as Groupe Scolaire Mater Dei Nyanza offering Math-Physics-Computer and Math-Chemistry-Biology combinations",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative flex ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`w-1/2 p-6 ${
                      idx % 2 === 0 ? "pr-12 text-right" : "pl-12"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-sky-700">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 flex flex-col justify-center items-center rounded-full bg-sky-600 text-white  mx-auto z-10"
                  >
                    {item.year}
                  </motion.div>

                  <div
                    className={`w-1/2 ${idx % 2 === 0 ? "pl-12" : "pr-12"}`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Leadership */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2 className="text-3xl font-bold text-sky-600 mb-8 text-center">
            School Leadership
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "1952-1981: Sr Greta",
              "1981-1984: Venantie Mukarugomwa",
              "2007-2024: Marie Pélagie Umumararungu",
              "2024-Present: Marie Grace Mukashyaka",
            ].map((leader, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-sky-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-sky-700 font-medium">{leader}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-sky-50 rounded-xl p-10 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-sky-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To provide holistic education that empowers students with
                knowledge and skills, developing physically and psychologically
                fit individuals ready to serve society.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-sky-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To equip students with competitive knowledge and skills that
                address societal needs, fostering academic excellence rooted in
                Catholic values.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Spiritual Life */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold text-sky-600 mb-8 text-center">
            Spiritual Formation
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Community prayer sessions",
              "Faith-based student groups",
              "Religious retreats",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="border border-sky-200 rounded-lg p-6 text-center hover:bg-sky-50 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-10 h-10 text-sky-600 mx-auto mb-3"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </motion.div>
                <p className="font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}
