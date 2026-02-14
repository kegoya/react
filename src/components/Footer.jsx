export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-600 dark:text-gray-400">
          © 2026 ReactDev. All rights reserved.
        </div>
        <div className="flex gap-8 text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-blue-600">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-600">
            Terms
          </a>
          <a href="#" className="hover:text-blue-600">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
