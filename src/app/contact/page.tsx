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
  const [today, setToday] = useState("");
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setToday(`${yyyy}-${mm}-${dd}`);
  }, []);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpenModel(true);
        sessionStorage.setItem("popupShown", "true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {openModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-3xl w-full mx-4 rounded-2xl relative shadow-2xl overflow-y-auto max-h-[90vh] p-6">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setOpenModel(false)}
            >
              <X size={24} />
            </button>

            <div className={`${poppins.className} grid grid-cols-1 md:grid-cols-2 gap-10`}>
              <form className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-[#51A4A8]">
                  Get in Touch
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b w-full p-2 bg-transparent outline-none text-gray-900"
                  />
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-500 mb-1">Select Date</label>
                    <input
                      type="date"
                      min={today}
                      className="border-b w-full p-3 bg-transparent outline-none text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="WhatsApp No"
                    className="border-b w-full p-2 bg-transparent outline-none text-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="border-b w-full p-2 bg-transparent outline-none text-gray-900"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Query For"
                  className="border-b w-full p-2 bg-transparent outline-none text-gray-900"
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
            </div>
          </div>
        </div>
      )}

      <section className={`${poppins.className} bg-gradient-to-br from-[#fdfaf7] via-[#eaf5f5] to-[#ffffff] py-16 px-4`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          <form className="bg-transparent rounded-2xl p-8  space-y-6">
            <h2 className="text-3xl font-bold text-[#2899a7] mb-2">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border-b p-2 outline-none bg-transparent text-gray-900" />
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1">Select Date</label>
                <input type="date" min={today} className="border-b p-3 outline-none text-gray-900 bg-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="WhatsApp No" className="border-b p-2 outline-none bg-transparent text-gray-900" />
              <input type="text" placeholder="Location" className="border-b p-2 outline-none bg-transparent text-gray-900" />
            </div>
            <input type="text" placeholder="Query For" className="border-b w-full p-2 outline-none bg-transparent text-gray-900" />
            <button type="submit" className="bg-[#2899a7] text-white px-6 py-2 rounded-full hover:bg-[#1c7d8b] flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21l20.99-9L2.01 3v7l15 2-15 2z" />
              </svg>
              Submit
            </button>
          </form>

          <div className="p-6 rounded-2xl ">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Details</h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-[#2899a7]" />
                <span>+91 93590 30024</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-[#2899a7]" />
                <span>contact@kamblebrothers.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-[#2899a7]" />
                <span>Pune</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
