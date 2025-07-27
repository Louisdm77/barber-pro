import { useState } from "react";
import { motion } from "framer-motion";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, your appointment is booked for ${form.date}`);
    setForm({ name: "", email: "", phone: "", service: "", date: "" });
  };

  return (
    <section className="pt-28 pb-20 min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 sm:p-12"
        >
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Book Your Appointment
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "phone", label: "Phone Number", type: "tel" },
            ].map((f, i) => (
              <div key={i}>
                <label className="block mb-1 text-sm font-medium">
                  {f.label}
                </label>
                <input
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  type={f.type}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                  placeholder={`Enter your ${f.label.toLowerCase()}`}
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 text-sm font-medium">
                Select Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                required
              >
                <option value="">Choose a service</option>
                <option>Haircut</option>
                <option>Beard Trim</option>
                <option>Shave</option>
                <option>Kids' Cut</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Preferred Date
              </label>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition text-lg"
            >
              Confirm Booking
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
