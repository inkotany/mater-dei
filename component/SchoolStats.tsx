"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";

type Stat = {
  _id: string;
  label: string;
  value: number;
  description: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

async function getStats(): Promise<Stat[]> {
  const query = `*[_type == "stat"]{
    _id,
    label,
    value,
    description
  }`;

  const stats = await client.fetch(query);
  return stats;
}

export default function Statistics() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section id="statistics" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <p>Loading statistics...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="statistics" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Statistics
          </motion.h2>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key metrics that showcase our institution's growth and impact.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat._id}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {stat.label}
              </div>

              <div className="text-5xl font-bold text-gray-800 mb-2">
                {stat.value.toLocaleString()}+
              </div>

              <p className="text-gray-600 text-center">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
