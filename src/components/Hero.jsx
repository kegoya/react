export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Build Faster with{" "}
            <span className="text-blue-600">React & Tailwind</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Master the art of modern web development. Create beautiful,
            responsive, and high-performance applications in record time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              View Documentation
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
            alt="Coding Setup"
            className="rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800"
          />
        </div>
      </div>
    </section>
  );
}
