export default function About() {
  return (
    <div className="py-20 px-6 container mx-auto text-gray-800 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 text-center">About Us</h1>
      <p className="text-lg leading-relaxed">
        PoshBarbers is Ibadan’s premier barber shop offering top-tier grooming services with a personal touch. Our mission is to make every client look and feel their best.
      </p>
      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {name:"Tunde – Master Barber",desc:"10 years experience in grooming styles."},
            {name:"Grace – Stylist",desc:"Expert in modern cuts and fades."},
            {name:"Amara – Beard Artist",desc:"Precision beard shaping specialist."}
          ].map((b,i)=>(
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-indigo-700">{b.name}</h3>
              <p className="mt-2 text-gray-700">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Journey</h2>
        <p className="text-gray-700 leading-relaxed">
          Since launching in 2022, we've built a community rooted in style, trust, and quality grooming.
        </p>
      </section>
    </div>
  );
}
