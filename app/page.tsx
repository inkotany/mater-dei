// app/leader/page.tsx or components/LeaderList.tsx

import GalleryImageCard from "@/component/GalleryImageCard ";
import Hero from "@/component/Hero";
import Leadership from "@/component/Leadership";
import MissionVisionValues from "@/component/missionvisionvalues";
import NewsAnnouncements from "@/component/NewsAnnouncements";
import AdmissionsSection from "@/component/AdmissionsSection";
import ContactUs from "@/component/ContactUs";
import Footer from "@/component/Footer";

import SchoolStats from "@/component/SchoolStats";

export default async function LeaderList() {
  return (
    // <div className="max-w-6xl mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    //     Our Leadership Team
    //   </h1>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {leaders.map((leader) => (
    //       <div
    //         key={leader.email}
    //         className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    //       >
    //         <div className="p-6">
    //           <div className="flex flex-col items-center mb-4">
    //             {leader.photoUrl && (
    //               <Image
    //                 src={leader.photoUrl}
    //                 alt={leader.name}
    //                 width={400}
    //                 height={120}
    //                 className=" object-cover border-4"
    //               />
    //             )}
    //             <h2 className="text-xl font-bold text-gray-800 mt-4">
    //               {leader.name}
    //             </h2>
    //             <p className="text-gray-600 font-medium">{leader.position}</p>
    //           </div>

    //           <div className="border-t border-gray-100 pt-4">
    //             <p className="text-gray-700 mb-2">
    //               <span className="font-semibold">Role:</span> {leader.role}
    //             </p>
    //             <p className="text-gray-700 mb-2">
    //               <span className="font-semibold">Phone:</span> {leader.phone}
    //             </p>
    //             <p className="text-gray-700 mb-3">
    //               <span className="font-semibold">Email:</span>{" "}
    //               <a
    //                 href={`mailto:${leader.email}`}
    //                 className="text-blue-600 hover:underline"
    //               >
    //                 {leader.email}
    //               </a>
    //             </p>

    //             {leader.bio && (
    //               <div className="mt-4 pt-4 border-t border-gray-100">
    //                 <h3 className="font-semibold text-gray-800 mb-2">Bio</h3>
    //                 <p className="text-gray-600">{leader.bio}</p>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <Hero />

      <MissionVisionValues />

      <Leadership />

      <SchoolStats />

      <GalleryImageCard />

      <NewsAnnouncements />

      <AdmissionsSection />

      <ContactUs />

      <Footer />
    </>
  );
}
