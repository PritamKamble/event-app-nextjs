// "use client";

// import React, { useState, useEffect } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     date: "",
//     number: "",
//     enquiryFor: "",
//     location: "",
//   });

//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowPopup(true), 4000);
//   }, []);
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Message sent!");
//     setFormData({
//       name: "",
//       date: "",
//       number: "",
//       enquiryFor: "",
//       location: "",
//     });
//     setShowPopup(false); // Close modal after submit
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-6 px-6 relative">
//       {/* 🌟 Modal Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-xs z-50 flex items-center justify-center">
//           <div className="bg-white rounded-xl shadow-2xl p-6 w-[95%] max-w-2xl relative">
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-3xl font-bold "
//             >
//               ×
//             </button>
//             <h2 className="text-2xl font-bold text-center text-pink-900 mb-6">
//               Get In Touch With Us 💬
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="date"
//                   name="date"
//                   placeholder="Date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="tel"
//                   name="number"
//                   placeholder="WhataApp Number"
//                   value={formData.number}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   name="location"
//                   placeholder="Location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="Enquiry For"
//                 placeholder="Enquiry For"
//                 value={formData.enquiryFor}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-pink-900 text-white py-2 rounded hover:bg-pink-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* 🎯 Main Contact Page Content (still visible behind/after popup) */}
//       <div className="min-h-screen bg-gray-50 py-2 w-full">
//         <h1 className="text-3xl font-bold text-pink-900 mb-4 text-center">
//           Get In Touch With Us
//         </h1>

//         <div className="max-w-4xl mx-auto p-1 rounded ">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="date"
//                 name="date"
//                 placeholder="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="tel"
//                 name="number"
//                 placeholder="WhatApp Number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <input
//               type="text"
//               name="Enquiry For"
//               placeholder="Enquiry For"
//               value={formData.enquiryFor}
//               onChange={handleChange}
//               required
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <button
//               type="submit"
//               className="w-full bg-pink-900 text-white py-2 rounded hover:bg-pink-700 transition"
//             >
//               Send Message
//             </button>
//           </form>{" "}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function ContactUsPage() {
  return (
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
              type="text"
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
  );
}
