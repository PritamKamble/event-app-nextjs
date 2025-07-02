import { Facebook, Instagram, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div >
          <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Service", "About", "Gallery", "Review", "Contact"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-blue-500 hover:underline">
                <ArrowRight size={16} />
                <Link href={`/${item.toLowerCase()}`} className="text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-blue-500">
              <Phone size={16} />
              <span className="text-white">+91 9359030024</span>
            </li>
            <li className="flex items-center gap-2 text-blue-500">
              <Mail size={16} />
              <span className="text-white">Contact@Kamblebrothers.Com</span>
            </li>
            <li className="flex items-center gap-2 text-blue-500">
              <MapPin size={16} />
              <span className="text-white">Pune</span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-blue-500">
              <Facebook size={16} />
              <span className="text-white">Facebook</span>
            </li>
            <li className="flex items-center gap-2 text-blue-500">
              <Instagram size={16} />
              <span className="text-white">Instagram</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
