export default function Gallery() {
  const images = [
    "https://i.pinimg.com/736x/bf/61/4f/bf614febee6d525fe46ace47c18b3f15.jpg",
    "https://i.pinimg.com/1200x/dc/52/ae/dc52ae111af31ad5e56b6419a7079fd3.jpg",
    "https://i.pinimg.com/736x/a0/b4/c7/a0b4c72d530c85c2cc76dbb36f2ed838.jpg",
    "https://i.pinimg.com/736x/0f/0d/44/0f0d448a3c4674ac3fb012b1cbde71ac.jpg",
    "https://i.pinimg.com/736x/b6/95/5c/b6955c791b794ba502f09f5d13779a43.jpg",
    "https://i.pinimg.com/736x/ce/2f/e5/ce2fe557ba99e3d925e0a379a2e81098.jpg",
    "https://i.pinimg.com/1200x/de/00/80/de0080e37cbd54dc1d473bc98339d9d4.jpg",
    "https://i.pinimg.com/736x/bb/57/33/bb573304702403d73bc7b0de7d7946bc.jpg",
    "https://i.pinimg.com/1200x/65/65/6a/65656a2cdbafe2986b96e65398685261.jpg",
    "https://i.pinimg.com/736x/1e/23/1c/1e231ceffab9d38318cb50a92e7c7028.jpg",
    "https://i.pinimg.com/736x/e4/4f/5b/e44f5b4768dd0492a8aa228890589817.jpg",
    "https://i.pinimg.com/736x/4f/24/39/4f2439c914edd5e4872fa641c9a8be4b.jpg",
  ];

  return (
    <section className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
          Our Gallery
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-xl mx-auto mb-10">
          Browse through real transformations: fades, trims, and styles that
          speak to quality and craftsmanship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300 animate-fade-up"
              style={{
                animationDelay: `${idx * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <img
                src={src}
                alt={`Barber style ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-25 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
