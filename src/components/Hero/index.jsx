import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-white text-center">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-indigo-700"
      >
        Welcome to PoshBarbers
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 text-lg text-gray-600 max-w-xl"
      >
        Experience style, precision and grooming excellence in every visit.
      </motion.p>
    </section>
  );
}
