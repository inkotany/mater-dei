"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { ZoomIn, Hand, X } from "lucide-react";

type GalleryImage = {
  _id: string;
  image?: {
    asset?: {
      url: string;
    };
  };
  alt: string;
  category: string;
  description?: string;
};

export default function GalleryImageCard() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState<GalleryImage | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  }, [expandedImage]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await client.fetch<GalleryImage[]>(
          `*[_type == "galleryImage"]{
            _id,
            image {
              asset-> {
                url
              }
            },
            alt,
            category,
            description
          }`
        );
        setImages(data.filter((img) => img.image?.asset?.url));
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const SkeletonCard = () => (
    <div className="bg-gray-100 animate-pulse rounded-xl shadow-md overflow-hidden">
      <div className="h-64 w-full bg-gray-300" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-24" />
        <div className="h-5 bg-gray-300 rounded w-32" />
        <div className="h-4 bg-gray-300 rounded w-full" />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="grid p-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (!images.length) {
    return <div className="text-center py-4">No images found</div>;
  }

  return (
    <div className="pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-4xl font-bold text-sky-700 mb-4">School Gallery</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore moments from our vibrant school community
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((image) => (
          <motion.div
            key={image._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative group"
          >
            {/* Click Prompt */}
            <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center text-xs font-medium text-gray-800 shadow-sm">
              <Hand className="h-3 w-3 mr-1" />
              Click
            </div>

            {/* Image Container */}
            <div
              className="relative h-64 w-full cursor-pointer"
              onClick={() => setExpandedImage(image)}
            >
              <Image
                src={image.image?.asset?.url || "/placeholder.jpg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:brightness-90 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <ZoomIn className="h-10 w-10 text-white/90 drop-shadow-lg" />
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4">
              <span className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {image.category}
              </span>
              <h3 className="text-lg  text-gray-800">{image.alt}</h3>
              {image.description && (
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {image.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setExpandedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={expandedImage.image?.asset?.url || "/placeholder.jpg"}
                alt={expandedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <button
              type="button"
              className="absolute top-2 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={() => setExpandedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
