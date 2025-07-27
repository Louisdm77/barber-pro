import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Men's Haircut",
      price: "₦5,000",
      desc: "Tailored precision cuts for modern or classic styles.",
      img: "https://i.pinimg.com/736x/b8/81/b5/b881b5f39ca8fbf76260b5e81fb39f68.jpg",
    },
    {
      title: "Beard Grooming",
      price: "₦3,000",
      desc: "Perfectly shaped, lined, and styled beards.",
      img: "https://i.pinimg.com/736x/4a/54/d7/4a54d73b4cbe425b4e67c37681c5dcef.jpg",
    },
    {
      title: "Hot Towel Shave",
      price: "₦4,000",
      desc: "Old-school razor shave with relaxing steam towels.",
      img: "https://i.pinimg.com/736x/90/0e/01/900e01ebe808b06460ee5ba7fbbb6396.jpg",
    },
    {
      title: "Kids' Cut",
      price: "₦4,000",
      desc: "Gentle, clean cuts designed with kids in mind.",
      img: "https://i.pinimg.com/736x/0c/bb/8e/0cbb8e6956815cdb347294cb50110bcd.jpg",
    },
    {
      title: "Cut + Shave Combo",
      price: "₦8,000",
      desc: "All-in-one service for a complete fresh look.",
      img: "https://i.pinimg.com/736x/89/5d/15/895d15a18e3f2a4bd40a03bd234d9bcd.jpg",
    },
    {
      title: "Steam Facial",
      price: "₦6,000",
      desc: "Deep-clean steam facials for revitalized skin.",
      img: "https://i.pinimg.com/1200x/6e/3d/80/6e3d80d5b5859b371d5cfe0019d18fd3.jpg",
    },
  ];

  return (
    <section className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16"
        >
          Our Signature Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white group hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-0 left-0 bg-opacity-40 w-full h-full group-hover:bg-opacity-20 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{s.desc}</p>
                <div className="font-bold text-yellow-600 text-lg">
                  {s.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 bg-gray-900 text-white text-center py-12 px-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Experience Premium Grooming
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Whether it’s a fresh fade, a beard line-up, or a relaxing shave—our
            team delivers every time.
          </p>
          <a
            href="/booking"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 transition text-white font-semibold py-3 px-8 rounded-lg text-lg"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
