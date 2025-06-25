"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

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

// PortText component for styled descriptions
const PortText = ({ children }: { children: React.ReactNode }) => {
  return <p className="port-text">{children}</p>;
};

export default function GalleryImageCard() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading)
    return <div className="text-center py-4">Loading gallery...</div>;
  if (!images.length)
    return <div className="text-center py-4">No images found</div>;

  return (
    <div className="grid p-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {images.map((image) => (
        <motion.div
          key={image._id}
          whileHover={{ y: -5 }}
          className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={image.image?.asset?.url || "/placeholder.jpg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
              {image.category}
            </span>
            <p className="text-gray-800 mt-2 font-medium">{image.alt}</p>
            {image.description && <PortText>{image.description}</PortText>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
