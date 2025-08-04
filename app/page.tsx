// app/leader/page.tsx or components/LeaderList.tsx
import { Metadata } from "next";
import GalleryImageCard from "@/component/GalleryImageCard ";
import Hero from "@/component/Hero";
import Leadership from "@/component/Leadership";
import MissionVisionValues from "@/component/missionvisionvalues";
import NewsAnnouncements from "@/component/NewsAnnouncements";
import AdmissionsSection from "@/component/AdmissionsSection";
import ContactUs from "@/component/ContactUs";
import Footer from "@/component/Footer";

import SchoolStats from "@/component/SchoolStats";
import AcademicsWithImages from "@/component/AcademicsWithImages";
import AboutusComponent from "@/component/aboutusComponent";
import VideoParticipationGrid from "@/component/VideoTrend";

export const metadata: Metadata = {
  title: "GS Mater Dei Nyanza",
  description:
    "Groupe Scolaire Mater Dei Nyanza is a Catholic school in Rwanda dedicated to academic excellence, moral integrity, and holistic student growth.",
  keywords: [
    "GS Mater Dei",
    "Mater Dei Nyanza",
    "Groupe Scolaire Mater Dei",
    "Catholic School Rwanda",
    "Nyanza Education",
    "Rwanda schools",
    " Secondary education",
    "md",
    "gs md",
    "gs mater dei nyanza",
  ],
  authors: [{ name: "GS Mater Dei Nyanza", url: "https://gsmaterdei.rw" }],
  creator: "GS Mater Dei Nyanza",
  publisher: "GS Mater Dei Nyanza",

  metadataBase: new URL("https://gsmaterdei.rw"),

  openGraph: {
    title: "GS Mater Dei Nyanza",
    description:
      "Catholic-based education in Nyanza fostering excellence, faith, and leadership.",
    url: "https://gsmaterdei.rw",
    siteName: "GS Mater Dei Nyanza",
    images: [
      {
        url: "/md-logo.png", // Place your OG image in /public
        width: 1200,
        height: 630,
        alt: "GS Mater Dei Nyanza School Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GS Mater Dei Nyanza",
    description:
      "Faith-centered learning and academic excellence at GS Mater Dei Nyanza.",
    images: ["/md-logo.png"],
    creator: "@materdei_nyanza", // optional if you have a Twitter
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/md-logo.png", // optional
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "Education",
};

export default async function LeaderList() {
  return (
    <>
      <Hero />

      <AboutusComponent />

      <MissionVisionValues />

      <Leadership />

      <SchoolStats />

      <AcademicsWithImages />

      <GalleryImageCard />

      <VideoParticipationGrid />

      <NewsAnnouncements />

      <AdmissionsSection />

      <ContactUs />

      <Footer />
    </>
  );
}
