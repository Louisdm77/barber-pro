export default function Contact() {
  return (
    <section className="pt-24 pb-20 bg-[#111827] text-white min-h-screen transition-all duration-500">
      <div className="container mx-auto px-6 max-w-2xl bg-[#1f2937] p-10 rounded-2xl shadow-2xl animate-fade-in-up">
        <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>

        <form className="space-y-6">
          {["Name", "Email", "Message"].map((label, i) => (
            <div key={i} className="transition duration-300">
              <label className="block mb-2 text-sm font-medium">{label}</label>
              {label === "Message" ? (
                <textarea
                  className="w-full bg-[#111827] border border-gray-700 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
              ) : (
                <input
                  type={label === "Email" ? "email" : "text"}
                  className="w-full bg-[#111827] border border-gray-700 px-4 py-3 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm space-y-2">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@barberpro.com"
              className="text-yellow-400 hover:underline"
            >
              support@barberpro.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+2348000000000"
              className="text-yellow-400 hover:underline"
            >
              +234 800 000 0000
            </a>
          </p>
          <p>
            <strong>Address:</strong> 123 Barber St, Ibadan
          </p>
        </div>
      </div>
    </section>
  );
}
