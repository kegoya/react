export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-450 mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Build Faster with{" "}
            {/* 1. text-brand -> Switches color based on theme selection */}
            <span className="text-brand">React & Tailwind</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Master the art of modern web development. Create beautiful,
            responsive, and high-performance applications in record time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* 2. bg-brand & hover:bg-brand-hover -> The button now updates instantly */}
            {/* 3. shadow-brand/30 -> The glow effect now matches the theme color */}
            <button className="px-8 py-3 bg-brand text-white rounded-full font-bold hover:bg-brand-hover shadow-lg shadow-brand/30 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              View Documentation
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          {/* 4. ring-brand/10 -> Added a subtle themed ring around the image */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
            alt="Coding Setup"
            className="rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 lg:ring-brand/10"
          />
        </div>
      </div>
    </section>
  );
}
