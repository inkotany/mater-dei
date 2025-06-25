"use client";

import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    // alert("Thank you! We've received your message and will respond shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-700 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're inquiring about admissions, school life, or just want
            to say hello, our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-sky-600 mb-4">
                Our Location
              </h3>
              <address className="not-italic">
                <p className="text-lg mb-2">Mater Dei School</p>
                <p className="text-gray-700">Nyanza District</p>
                <p className="text-gray-700">Southern Province, Rwanda</p>
              </address>

              <p className="mt-4 text-gray-700">
                Nestled in the heart of Rwanda's cultural capital, our campus
                blends modern education with the rich traditions of Nyanza.
              </p>
            </div>

            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-sky-600 mb-4">
                Contact Details
              </h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +250 788 123 456 (Office)
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@materdeinyanza.rw
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Office Hours: 7:30 AM - 4:30 PM (Mon-Fri)
                </p>
              </div>
            </div>

            <div className="bg-sky-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-sky-600 mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors"
                >
                  <span className="sr-only">WhatsApp</span>
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17937.715516825974!2d29.74731200775091!3d-2.3529398435119804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c33f006ae4d139%3A0xbbc0a19789311253!2sMater%20dei!5e0!3m2!1sfr!2sca!4v1750637683987!5m2!1sfr!2sca"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mater Dei School Location"
              ></iframe>
            </div>
          </div>

          {/* Message Form */}
          {/* <form
            onSubmit={handleSubmit}
            className="bg-sky-50 p-8 rounded-xl shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-sky-600">
              Send Us a Message
            </h3>
            <p className="text-gray-700">
              Have questions about admissions, school programs, or anything
              else? We typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-sky-200 bg-white focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-sky-200 bg-white focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border border-sky-200 bg-white focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
