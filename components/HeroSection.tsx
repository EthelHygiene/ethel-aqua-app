export default function HeroSection() {
  return (
    <section className="bg-white text-center py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D1C46] mb-6">
          Pure. Refreshing. Delivered.
        </h1>
        <p className="text-lg md:text-xl text-[#0D1C46]/80 mb-8">
          Welcome to <span className="text-[#3CBF70] font-semibold">Ethel Aqua</span> — your trusted source for premium purified water, sparkling refreshment, and ice. Delivered directly to homes, businesses, and beyond.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/27838788100"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3CBF70] text-white px-8 py-3 rounded-2xl shadow-md hover:bg-[#32a761] transition"
          >
            Order via WhatsApp
          </a>
          <a
            href="#ethel-aqua-tank"
            className="border border-[#0D1C46] text-[#0D1C46] px-8 py-3 rounded-2xl hover:bg-[#0D1C46] hover:text-white transition"
          >
            Coming Soon: Ethel Aqua Tank
          </a>
        </div>
      </div>
    </section>
  );
}
