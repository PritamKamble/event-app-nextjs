import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-blue-400">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Services", "About", "Gallery", "Review", "Contact"].map((item) => (
              <li key={item} className="flex items-center gap-3 group">
                <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-blue-400">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="text-blue-500" size={18} />
              <span className="text-gray-300">+91 9359030024</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-500" size={18} />
              <span className="text-gray-300">Contact@Kamblebrothers.Com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-500" size={18} />
              <span className="text-gray-300">Pune</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-blue-400">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
              <Facebook size={20} className="text-white" />
            </Link>
            <Link href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors">
              <Instagram size={20} className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Kamble Brothers. All rights reserved.
      </div>
    </footer>
  );
}
