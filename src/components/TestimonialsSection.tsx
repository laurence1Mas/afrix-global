export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Samuel Wassa",
      role: "Community Manager",
      img: "/testimonials/samuel.jpg",
      quote: "Des solutions sur mesure pour un avenir digital optimisé.",
    },
    {
      name: "Yvonne Kadima",
      role: "Directrice Marketing",
      img: "/testimonials/yvonne.jpg",
      quote: "Des solutions sur mesure pour un avenir digital optimisé.",
    },
    {
      name: "Yassim Hassan",
      role: "Fullstack Developer",
      img: "/testimonials/hassan.jpg",
      quote: "Des solutions sur mesure pour un avenir digital optimisé.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITRES */}
        <h4 className="text-blue-600 font-semibold tracking-wide uppercase">
          Témoignages
        </h4>
        <h2 className="text-3xl font-bold mt-2">
          Ils expriment leurs satisfactions
        </h2>

        {/* ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="font-bold text-lg">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>

              <p className="mt-3 text-gray-600 italic max-w-xs mx-auto">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
