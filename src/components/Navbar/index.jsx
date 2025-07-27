import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const linkHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          BarberPro
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          {["/", "/services", "/booking", "/gallery", "/contact"].map(
            (path, i) => (
              <motion.div key={i} whileHover={linkHover}>
                <Link
                  to={path}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {["Home", "Services", "Booking", "Gallery", "Contact"][i]}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-2xl transition"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gray-800 px-6 pb-6 pt-4 space-y-4 text-center font-medium"
          >
            {["/", "/services", "/booking", "/gallery", "/contact"].map(
              (path, i) => (
                <motion.div key={i} whileHover={linkHover}>
                  <Link
                    to={path}
                    onClick={toggleMenu}
                    className="block hover:text-yellow-400 transition duration-300"
                  >
                    {["Home", "Services", "Booking", "Gallery", "Contact"][i]}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
