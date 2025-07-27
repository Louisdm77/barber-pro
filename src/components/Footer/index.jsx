import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <p className="text-gray-400">
            BarberPro is your trusted destination for elegant, professional
            grooming. We combine tradition and modern style to deliver premium
            haircuts, beard trims, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/booking" className="hover:text-white">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 15 Elegance Road, Bodija, Ibadan
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +234 901 234 5678
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@barberpro.ng
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Stay connected for style tips & updates.
          </p>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-800 pt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BarberPro. All rights reserved.
      </div>
    </footer>
  );
}
