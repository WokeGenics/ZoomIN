import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 h-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Zoomin Clone</h2>
          <p className="text-sm text-gray-400">
            Capture your memories beautifully. Premium quality photo prints, gifts, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/prints" className="hover:text-white">Photo Prints</Link></li>
            <li><Link href="/gifts" className="hover:text-white">Photo Gifts</Link></li>
            <li><Link href="/albums" className="hover:text-white">Photo Books</Link></li>
            <li><Link href="/frames" className="hover:text-white">Frames</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Zoomin Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
