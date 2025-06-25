import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserFriends,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Excellence in Education
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Nurturing young minds for a brighter future through innovative
              learning and character development
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/admissions"
                className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition duration-300 shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="https://picsum.photos/id/1056/1920/1080"
          alt="School building with students"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-lg bg-blue-50">
            <FaGraduationCap className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">1,200+</h3>
            <p className="text-gray-600">Students</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50">
            <FaChalkboardTeacher className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">85+</h3>
            <p className="text-gray-600">Qualified Teachers</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50">
            <FaBookOpen className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">30+</h3>
            <p className="text-gray-600">Courses Offered</p>
          </div>
          <div className="p-6 rounded-lg bg-blue-50">
            <FaUserFriends className="text-4xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-900">25+</h3>
            <p className="text-gray-600">Student Clubs</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/id/180/800/600"
              alt="Students in classroom"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Our School
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1985, our school has been a beacon of academic
              excellence and holistic development. We believe in fostering not
              just intellectual growth but also emotional and social development
              in a nurturing environment.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  State-of-the-art facilities
                </span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Personalized learning approach
                </span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">
                  Focus on character development
                </span>
              </li>
            </ul>
            <Link
              href="/about"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Read More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a diverse range of academic and extracurricular programs
              designed to meet the needs of every student
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 relative">
                <Image
                  src="https://picsum.photos/id/256/800/600"
                  alt="Elementary students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Elementary School
                </h3>
                <p className="text-gray-600 mb-4">
                  Our elementary program focuses on foundational skills with a
                  blend of play-based and structured learning.
                </p>
                <Link
                  href="/programs/elementary"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 relative">
                <Image
                  src="https://picsum.photos/id/258/800/600"
                  alt="Middle school students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  Middle School
                </h3>
                <p className="text-gray-600 mb-4">
                  Our middle school program helps students transition to more
                  advanced studies while exploring their interests.
                </p>
                <Link
                  href="/programs/middle"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 relative">
                <Image
                  src="https://picsum.photos/id/259/800/600"
                  alt="High school students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  High School
                </h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive high school program prepares students for
                  college and career with advanced courses.
                </p>
                <Link
                  href="/programs/high"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Parents & Students Say
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Hear from our school community about their experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://picsum.photos/id/1005/200/200"
                    alt="Parent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-blue-300 text-sm">Parent</p>
                </div>
              </div>
              <p className="italic">
                "The teachers here go above and beyond to ensure each child's
                success. My daughter has flourished both academically and
                socially."
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://picsum.photos/id/1011/200/200"
                    alt="Student"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-blue-300 text-sm">Grade 11 Student</p>
                </div>
              </div>
              <p className="italic">
                "The STEM program is incredible. I've had opportunities here
                that I wouldn't have at other schools, like robotics
                competitions."
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://picsum.photos/id/1027/200/200"
                    alt="Alumni"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">David Martinez</h4>
                  <p className="text-blue-300 text-sm">Alumni</p>
                </div>
              </div>
              <p className="italic">
                "The college prep program gave me such a strong foundation. I
                was more than prepared for university-level work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-900 mb-8 max-w-3xl mx-auto">
            Schedule a tour or begin the application process today to give your
            child the gift of an exceptional education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/apply"
              className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
