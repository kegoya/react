export default function Hero() {
  return (
    /* bg-primary (white) | dark:bg-secondary (#0f172a) */
    <section className="relative bg-primary dark:bg-secondary transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* text-textmain (#0f172a) | dark:text-textprimary (#f8fafc) */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-textmain dark:text-textprimary leading-tight animate-fade-in-up">
            Build Faster with{" "}
            <span className="text-brand">React & Tailwind</span>
          </h1>

          {/* text-textsecondary (#94a3b8) */}
          <p className="mt-6 text-lg text-textsecondary">
            Master the art of modern web development. Create beautiful,
            responsive, and high-performance applications in record time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Primary Button */}
            <button className="px-8 py-3 bg-brand text-white rounded-full font-bold hover:bg-brand-hover shadow-lg shadow-brand/30 transition-all cursor-pointer">
              Get Started
            </button>

            {/* Secondary Button - border uses textsecondary at 30% opacity */}
            <button className="px-8 py-3 border border-textsecondary/30 text-textmain dark:text-textprimary rounded-full font-bold hover:bg-brand-soft transition-all cursor-pointer">
              View Documentation
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
            alt="Coding Setup"
            /* Ensure the image has a width and height to be visible */
            className="rounded-2xl shadow-2xl ring-1 ring-textsecondary/20 lg:ring-brand/20 w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
