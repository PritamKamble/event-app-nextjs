// "use client";

// import React from "react";
// import Image from "next/image";

// const images = [
//   "/gallery/haldihero.png",
//   "/gallery/proposal.jpeg",
//   "/images/bday.jpeg",
//   "/gallery/anvrsry.jpg",
//   "/gallery/babyShower.jpeg",
//   "/gallery/bday2.jpeg",
// ];

// export default function GalleryPage() {
//   return (
//     <div className="min-h-screen px-2 sm:px-6 py-12 bg-gray-50 w-full">
//       <h1 className="text-3xl font-bold text-center mb-8 text-pink-950">
//         Celebrating Moments💫
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full">
//         {images.map((src, index) => (
//           <div key={index} className="overflow-hidden  shadow-2xl   bg-white">
//             <Image
//               src={src}
//               alt={`Gallery Image ${index + 1}`}
//               width={300}
//               height={200}
//               className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform
//                duration-300 hover:scale-105 border-2 border-amber-600"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryItems = [
  { type: "image", src: "/gallery/haldihero.png" },
  { type: "video", src: "/videos/event1.mp4" },
  { type: "image", src: "/images/bday.jpeg" },
  { type: "video", src: "/videos/event2.mp4" },
  { type: "image", src: "/gallery/anvrsry.jpg" },
  { type: "image", src: "/gallery/babyShower.jpeg" },
];

export default function GalleryPage() {
  const [modalItem, setModalItem] = useState<null | { type: string; src: string }>(null);

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-pink-50 to-amber-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-pink-900 font-serif">
        Moments We Made Special 💖
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-xl border border-amber-300 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setModalItem(item)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
            ) : (
              <video
                muted
                loop
                autoPlay
                className="w-full h-56 object-cover"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden p-4">
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={28} />
            </button>
            {modalItem.type === "image" ? (
              <Image
                src={modalItem.src}
                alt="Gallery Preview"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
            ) : (
              <video
                src={modalItem.src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
