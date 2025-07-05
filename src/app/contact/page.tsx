"use client";

import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { X } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ContactUsPage() {
  const [openModel, setOpenModel] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModel(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {openModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-3xl w-full mx-4 rounded-lg relative shadow-lg overflow-y-auto max-h-[90vh] p-6">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setOpenModel(false)}
            >
              <X size={24} />
            </button>

            {/* Form */}
            <div
              className={`${poppins.className} grid grid-cols-1 md:grid-cols-2 gap-10`}
            >
              {/* LEFT – Form */}
              <form className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Get in Touch
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b w-full p-2 bg-transparent outline-none"
                  />
                  <input
                    type="date"
                    placeholder="Select Date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = "text";
                      }
                    }}
                    className="border-b w-full p-3 bg-transparent outline-none placeholder:text-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="WhatsApp No"
                    className="border-b w-full p-2 bg-transparent outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="border-b w-full p-2 bg-transparent outline-none"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Query For"
                  className="border-b w-full p-2 bg-transparent outline-none"
                />

                <button
                  type="submit"
                  className="bg-[#fbbd60] text-white px-6 py-2 rounded-full mt-2 hover:bg-[#f9a42a] flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21l20.99-9L2.01 3v7l15 2-15 2z" />
                  </svg>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <section className={`${poppins.className} bg-[#fdf7f3] py-10 px  `}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* LEFT SIDE – Contact Form */}
          <form className=" p-6 rounded-md space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border-b w-full p-2 bg-transparent outline-none"
              />
              <input
                type="date"
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="border-b w-full p-3 bg-transparent outline-none placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="WhatsApp No"
                className="border-b w-full p-2 bg-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Location"
                className="border-b w-full p-2 bg-transparent outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Query For"
              className="border-b w-full p-2 bg-transparent outline-none"
            />

            <button
              type="submit"
              className="bg-[#fbbd60] text-white px-6 py-2 rounded-full mt-2 hover:bg-[#f9a42a] flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21l20.99-9L2.01 3v7l15 2-15 2z" />
              </svg>
              Submit
            </button>
          </form>

          {/* RIGHT SIDE – Contact Details */}
          <div className="px-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 px-2">
              Contact Details
            </h2>

            <div className="space-y-6 text-gray-700 text-sm">
              {/* Phone */}
              <div className="flex gap-3 items-start">
                <FaPhoneAlt className="mt-1 text-xl text-[#222]" />
                <p>+91 93590 30024</p>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <FaEnvelope className="mt-1 text-xl text-[#222]" />
                <p>contact@kamblebrothers.com</p>
              </div>

              {/* Address */}
              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1 text-xl text-[#222]" />
                <p>Pune</p>
              </div>

              {/* Social Media */}
              {/* <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
