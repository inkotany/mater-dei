"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaUserTie } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

type Leader = {
  name: string;
  position: string;
  role: string;
  phone: string;
  email: string;
  photoUrl: string;
  bio?: string;
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

async function getLeaders(): Promise<Leader[]> {
  const query = `*[_type == "leader"]{
    name,
    position,
    role,
    phone,
    email,
    "photoUrl": photoUrl.asset->url,
    bio
  }`;

  const leaders = await client.fetch(query);
  return leaders;
}

export default function Leadership() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const data = await getLeaders();
        setLeaders(data);
      } catch (error) {
        console.error("Error fetching leaders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  if (loading) {
    return (
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="h-12 w-64 mx-auto bg-gray-200 rounded animate-pulse mb-4"></div>
            <div className="h-6 w-96 mx-auto bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center animate-pulse"
              >
                <div className="h-8 w-28 bg-gray-200 rounded-full mb-6"></div>
                <div className="h-40 w-40 rounded-full bg-gray-300 mb-6"></div>
                <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 w-20 bg-gray-200 rounded"></div>
                <div className="mt-4 h-10 w-full bg-gray-200 rounded"></div>
                <div className="mt-6 w-full space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Leadership Team
          </motion.h2>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced educators guiding Mater Dei's mission of excellence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col items-center">
                {/* Position Badge */}
                <div className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium mb-4 flex items-center">
                  <FaUserTie className="mr-2" />
                  {leader.position}
                </div>

                <img
                  src={leader.photoUrl}
                  alt={`${leader.name}, ${leader.role}`}
                  className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-sky-100"
                  loading="lazy"
                />

                <h3 className="text-1xl text-center font-semibold text-gray-700">
                  {leader.name}
                </h3>
                <p className="text-sky-600 font-medium mt-2">{leader.role}</p>

                {leader.bio && (
                  <p className="text-gray-600 mt-4 text-center">{leader.bio}</p>
                )}

                {/* Contact Info */}
                <div className="mt-6 w-full space-y-2">
                  <div className="flex items-center justify-center text-gray-700">
                    <FaPhone className="mr-2 text-sky-600" />
                    <a
                      href={`tel:${leader.phone}`}
                      className="hover:text-sky-700 transition-colors"
                    >
                      {leader.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <FaEnvelope className="mr-2 text-sky-600" />
                    <a
                      href={`mailto:${leader.email}`}
                      className="hover:text-sky-700 transition-colors truncate max-w-xs"
                    >
                      {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
