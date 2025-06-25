"use client";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import PdfDownloadSection from "./t";

type Announcement = {
  _id: string;
  _type: "announcement";
  title: string;
  date: string;
  content: string;
};

type Event = {
  _id: string;
  _type: "event";
  title: string;
  date: string;
};

type PdfDocument = {
  _id: string;
  _type: "pdfDocument";
  title: string;
  url: string;
};

type ContentItem = Announcement | Event | PdfDocument;

export default function NewsAnnouncements() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const query = `*[_type in ["announcement", "event", "pdfDocument"]]{
          _id,
          _type,
          title,
          date,
          content,
          url
        }`;
        const data = await client.fetch<ContentItem[]>(query);
        setContent(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <section id="news" className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          Loading content...
        </div>
      </section>
    );
  }

  // Filter content by type
  const announcements = content.filter(
    (item): item is Announcement => item._type === "announcement"
  );
  const events = content.filter(
    (item): item is Event => item._type === "event"
  );
  const pdfs = content.filter(
    (item): item is PdfDocument => item._type === "pdfDocument"
  );

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-sky-700 mb-4">
            Stay Connected With Our School Community
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Important updates, upcoming events, and resources to keep our
            families informed and engaged.
          </p>
        </motion.div>

        {/* Latest Announcements */}
        {announcements.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sky-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Latest Updates
              </h3>
            </div>

            <div className="space-y-6">
              {announcements.map(({ _id, title, date, content }) => (
                <motion.div
                  key={_id}
                  whileHover={{ y: -3 }}
                  className="border border-gray-100 rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-sky-50 p-2 rounded-lg">
                      <svg
                        className="w-5 h-5 text-sky-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">
                        {title}
                      </h4>
                      <time className="text-sm text-gray-500 block mb-3">
                        {new Date(date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <p className="text-gray-600">{content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Upcoming Events */}
        {events.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sky-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Mark Your Calendars
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {events.map(({ _id, title, date }) => (
                <motion.div
                  key={_id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-sky-50 rounded-lg p-5 border border-sky-100"
                >
                  <h4 className="font-bold text-sky-700 mb-1">{title}</h4>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* PDF Downloads */}
        {pdfs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sky-100 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Important Documents
              </h3>
            </div>

            {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pdfs.map(({ _id, title, url }) => (
                <motion.a
                  key={_id}
                  whileHover={{ y: -3 }}
                  href={url}
                  download={`${title.replace(/\s+/g, "-").toLowerCase()}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-sky-100 p-2 rounded-lg">
                    <svg
                      className="w-5 h-5 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">
                    {title}
                    <span className="block text-xs text-gray-500 mt-1">
                      Click to download
                    </span>
                  </span>
                </motion.a>
              ))}
            </div> */}
            <PdfDownloadSection />
          </motion.div>
        )}
      </div>
    </section>
  );
}
