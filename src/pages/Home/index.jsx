import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/4d/c4/df/4dc4dfe9656ef8620a60f1414576861c.jpg"
          alt="Barber shop hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            BarberPro: Redefining Grooming
          </h1>
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Experience precision cuts, smooth fades, and a professional touch
            that sets you apart. Your style deserves our chair.
          </motion.p>
          <Link
            to="/booking"
            className="mt-8 inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-300"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </section>

      {/* ABOUT US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://i.pinimg.com/736x/38/71/4a/38714a9700ac21256997fb86a4e5193e.jpg"
            alt="About barber"
            className="rounded-xl shadow-xl w-full h-auto"
            whileHover={{ scale: 1.02 }}
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">About BarberPro</h2>
            <p className="text-gray-600 mb-4">
              Located in the heart of Ibadan, BarberPro is more than just a
              barber shop — it's a grooming experience.
            </p>
            <p className="text-gray-600">
              From timeless classic cuts to the latest trends, our professionals
              deliver confidence with every style.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Signature Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Haircut",
                desc: "Precision cuts for modern and classic styles.",
                price: "₦5,000",
                image:
                  "https://i.pinimg.com/736x/74/aa/6a/74aa6aa06353f160285dc2e3857e3045.jpg",
              },
              {
                title: "Beard Grooming",
                desc: "Sharp trims, clean lines, and tailored shape-ups.",
                price: "₦3,000",
                image:
                  "https://i.pinimg.com/736x/67/ee/2a/67ee2a60424b10c2696ef43f4c81acb0.jpg",
              },
              {
                title: "Hot Towel Shave",
                desc: "Old-school razoring with a luxury twist.",
                price: "₦4,000",
                image:
                  "https://i.pinimg.com/1200x/7e/be/ff/7ebeff22df117e8a84d7adb4b394e26c.jpg",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600 my-2">{s.desc}</p>
                <span className="font-bold text-gray-800">{s.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-100 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose BarberPro?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "💈",
                title: "Skilled Barbers",
                desc: "Years of experience and modern grooming techniques.",
              },
              {
                icon: "🕒",
                title: "On-Time Appointments",
                desc: "We respect your time — always punctual.",
              },
              {
                icon: "🌟",
                title: "Customer Satisfaction",
                desc: "Every visit is an experience, not just a cut.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 bg-white shadow-md rounded-xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Happy Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jide A.",
                comment:
                  "Best barber shop in Ibadan! Clean environment and top-notch service.",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Uche M.",
                comment:
                  "Got exactly what I asked for. The fade is on point. Highly recommend.",
                avatar: "https://randomuser.me/api/portraits/men/77.jpg",
              },
              {
                name: "Tola K.",
                comment:
                  "Loved the experience — professional staff and stylish ambiance.",
                avatar: "https://randomuser.me/api/portraits/women/45.jpg",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 mb-3">“{t.comment}”</p>
                <span className="font-semibold text-gray-800">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CALL TO ACTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 1 }}
        className="py-20 px-6 relative text-center bg-black text-white"
      >
        <img
          src="https://i.pinimg.com/736x/51/30/08/51300815829d4e15c15d48582be53384.jpg"
          alt="Barber shop hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Next Look?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Book an appointment now and experience the premium touch you
            deserve.
          </p>
          <Link
            to="/booking"
            className="bg-amber-500 hover:bg-amber-600 text-white py-4 px-8 rounded-lg text-lg font-semibold transition"
          >
            Book Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
