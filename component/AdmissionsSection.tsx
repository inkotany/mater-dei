export default function AdmissionsSection() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-sky-700 text-center mb-12">
          Welcome to Our School Family
        </h2>

        {/* Introduction */}
        <div className="mb-10 text-center">
          <p className="text-xl text-gray-700">
            At Mater Dei, we joyfully welcome new families to our faith-based
            learning community. Our admissions process is designed to be
            straightforward while ensuring every child receives the care and
            attention they deserve.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-14 bg-sky-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-sky-600 mb-6">
            Application Requirements
          </h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              <span>
                Completed application form (available from our office or
                website)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              <span>Certified copy of birth certificate</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              <span>Two recent passport-sized photographs</span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              <span>
                Academic reports from previous school (where applicable)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 mr-2">•</span>
              <span>Current medical records and vaccination card</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        {/* <div className="text-center">
          <p className="text-lg text-gray-700 mb-8">
            Our admissions team is here to guide you through every step of the
            process. We understand each family's journey is unique, and we're
            happy to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact Admissions
            </a>
            <a
              href="/apply"
              className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-medium px-8 py-3 rounded-lg transition duration-300"
            >
              Begin Application
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
