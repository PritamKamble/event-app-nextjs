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

import React from "react";
import Image from "next/image";

const galleryItems = [
  { type: "image", src: "/gallery/haldihero.png" },
  { type: "video", src: "/videos/event1.mp4" },
  { type: "image", src: "/images/bday.jpeg" },
  { type: "video", src: "/videos/event2.mp4" },
  { type: "image", src: "/gallery/anvrsry.jpg" },
  { type: "image", src: "/gallery/babyShower.jpeg" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen px-2 sm:px-6 py-12 bg-gray-50 w-full">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-950">
        Moments We Made Special 💖
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white  shadow-2xl border-2 border-amber-600"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <video
                controls
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
