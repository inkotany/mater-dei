"use client";

import Image from "next/image";

export default function YouTubeCard() {
  return (
    <section
      id="academics"
      className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:gap-20 items-center justify-center p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="relative w-[650px] h-[400px] overflow-hidden rounded-2xl shadow-lg">
          {/* Background Image */}
          <Image
            src="/hd.jpg"
            alt="Video background"
            fill
            className="object-cover"
          />

          {/* Overlay Gradient */}

          <div className=" p-4  h-full absolute inset-0 bg-gradient-to-b  from-transparent to-black/90 z-10">
            <p className="-mb-100 text-md h-90 text-2xl  bg-yellow-0  flex items-end text-white font-medium capitalize ">
              <span className=" border-l-4 border-l-sky-700 p-3 capitalize ">
                Mukashyaka marie grace .
              </span>
            </p>
          </div>
        </div>

        {/* about us content  */}

        <div className="flex flex-col items-left justify-left mt-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl ">
            We are a team of passionate individuals dedicated to making a
            difference in the world through our innovative solutions and
            community engagement.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl  mt-4">
            Our mission is to empower people and organizations to achieve their
            goals by providing high-quality services and support.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl  mt-4">
            Join us on our journey to create a better future for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
