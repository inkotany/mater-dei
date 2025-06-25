"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

type PdfDocument = { _id: string; title: string; url: string };

export default function PdfDownloadSection() {
  const [pdfs, setPdfs] = useState<PdfDocument[]>([]);

  useEffect(() => {
    const fetchPdfs = async () => {
      const data = await client.fetch<PdfDocument[]>(`*[_type == "pdfDocument"]{
        _id,
        title,
        "url": file.asset->url
      }`);
      setPdfs(data);
    };
    fetchPdfs().catch(console.error);
  }, []);

  const handleDownload = (url: string, title: string) => {
    const a = document.createElement("a");
    a.href = `${url}?dl=${encodeURIComponent(title)}`;
    a.click();
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {pdfs.map(({ _id, title, url }) => (
        <motion.div
          key={_id}
          whileHover={{ y: -3 }}
          onClick={() => handleDownload(url, title)}
          className="cursor-pointer flex items-center gap-3 p-4 bg-white border rounded-lg shadow hover:shadow-md"
        >
          {/* PDF Icon */}
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
          <div>
            <p className="font-medium text-gray-700">{title}</p>
            <p className="text-xs text-gray-500">Click to download</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
