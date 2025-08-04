"use client";
import { motion } from "framer-motion";

interface VideoCard {
  id: string;
  youtubeId: string;
  title: string;
  event: string;
  date: string;
  description: string;
}

export default function VideoParticipationGrid() {
  // Sample data - replace with your actual videos
  const videos: VideoCard[] = [
    {
      id: "1",
      youtubeId: "5C_V2AGdfh8",
      title: "Wavumbuzi Entrepreneurship Challenge  2024",
      event: "National Innovation and Entrepreneurship Showcase",
      date: "May 13, 2024 ",
      description:
        "Our school joined the 2024 Wavumbuzi Challenge, where students showcased innovation and problem-solving. They pitched real-world solutions, impressed judges, and gained recognition for their creativity, teamwork, and entrepreneurial spirit.",
    },
    {
      id: "2",
      youtubeId: "8fiefTfRxvw",
      title: "Through Our Eyes: The Wavumbuzi Challenge Rwanda #4 Journey",
      event: "National Innovation and Entrepreneurship ",
      date: " May 20, 2024",
      description:
        "A firsthand look at how students experienced the 4th Wavumbuzi Challenge — their challenges, growth, and unforgettable moments as they tackled real-world problems through creativity.",
    },
    {
      id: "3",
      youtubeId: "ZKyaDXW1zFk",
      title: "Mater Dei yasoje Icyumweru cy’Uhurezi i Nyanza n’Ibyino Gakondo",
      event: "Icyumweru cy’Uhurezi Gatolika 2024",
      date: "Ku wa 31 Gicurasi 2024",
      description:
        "Abanyeshuri ba Mater Dei bitabiriye igikorwa cyo gusoza Icyumweru cy’Uhurezi Gatolika cyabereye i Nyanza. Bagaragaje impano zabo binyuze mu byino gakondo, indirimbo n’imbyino zubaka umuco. Ibi birori byabaye umwanya mwiza wo gusigasira indangagaciro z’uburere no guteza imbere umuco nyarwanda mu rubyiruko.",
    },
    {
      id: "4",
      youtubeId: "BzjkUqLARt8",
      title: "Robotics Training – G.S. Mater Dei Session 1",
      event: "Robotics Workshop Series",
      date: "2024-06-10",
      description:
        "Students from G.S. Mater Dei participated in Session 1 of their robotics workshop series. They learned to build and program basic robots, including line-following and obstacle-detection designs. The hands-on session introduced core concepts in STEM and encouraged teamwork, creativity, and coding skills.",
    },
    {
      id: "5",
      youtubeId: "rgML6Un_4jQ",
      title: "Amateka ya Mater Dei – i Nyanza",
      event: "Ishuri ry’Abaterikira Benebikira – Nyanza",
      date: "1950s‑ubu",
      description:
        "G.S. Mater Dei ni imwe mu mashuri y’Abaterikira Benebikira mu Karere ka Nyanza, izwiho gushyigikira uburezi bufite umuco, ubufatanye n’ubuyobozi mu banyeshuri. Ishuri rifite umwihariko mu guteza imbere ikoranabuhanga, STEM, no guha urubyiruko amahirwe yo gutekereza, gukora ubushakashatsi no kugira uruhare mu iterambere ry’igihugu.",
    },
  ];

  return (
    <section id="in-action" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our School in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlights of Mater Dei's participation in regional and national
            events
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* YouTube Embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{video.event}</p>
                  </div>
                  <span className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full">
                    {video.date}
                  </span>
                </div>
                <p className="text-gray-600 mt-3">{video.description}</p>

                {/* View Button */}
                <div className="mt-4">
                  <a
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
                  >
                    Watch on YouTube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
          >
            View More School Events
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}
