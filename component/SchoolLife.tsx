"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type SchoolEvent = {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
};

const events: SchoolEvent[] = [
  {
    title: "Graduation Ceremony",
    description:
      "A sacred milestone where we honor our students' academic and spiritual growth. With hymns of gratitude, blessings from faculty, and the beaming pride of families, we commission graduates to serve as ethical leaders in Rwanda and beyond.",
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    altText: "Mater Dei graduation ceremony with smiling students in gowns",
  },
  {
    title: "Inter-school Competitions",
    description:
      "Where talent meets virtue! Our students shine in sports, debates, and STEM fairs—demonstrating excellence with humility, teamwork with compassion, and ambition with integrity. Every participation reflects Mater Dei's commitment to holistic development.",
    imageUrl:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    altText: "Students competing in a science fair with judges",
  },
  {
    title: "Cultural Day",
    description:
      "A jubilant celebration of God's gift of Rwandan heritage. Through traditional Umushagiriro dance, storytelling, and culinary arts, students connect with their roots while embodying the Catholic values of unity, creativity, and joyful fellowship.",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    altText: "Students performing traditional Rwandan dance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

import { easeOut } from "framer-motion";

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function SchoolLife() {
  return (
    <section id="school-life" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-sky-700 mb-4"
          >
            Flourishing Together at Mater Dei
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Where faith, knowledge, and Rwandan traditions unite to shape
            compassionate leaders.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
            >
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={event.imageUrl}
                    alt={event.altText}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-md object-cover w-full h-auto"
                    priority={idx === 0}
                  />
                </motion.div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <motion.h3
                  className="text-2xl font-semibold text-sky-600"
                  whileHover={{ color: "#0369a1" }}
                >
                  {event.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {event.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
