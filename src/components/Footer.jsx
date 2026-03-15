import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors"
    >
      <div className="max-w-450 mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Part: Uses 'bg-brand' and 'text-brand' */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                Kegz<span className="text-brand">.dev</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              Building the future of open source,{" "}
              <br className="hidden md:block" /> one repository at a time.
            </p>
          </div>

          {/* Social & Links: Updated hover states to 'text-brand' */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-5">
              <a
                href="https://github.com"
                target="_blank"
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand hover:border-brand/30 hover:shadow-md transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand hover:border-brand/30 hover:shadow-md transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand hover:border-brand/30 hover:shadow-md transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>

            <div className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-400">
              <Link
                to="/privacy"
                className="hover:text-brand transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-brand transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-800/60 text-center text-xs dark:text-gray-400 text-gray-900 uppercase tracking-widest">
          © {currentYear} Kegz Dev — Crafted with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
