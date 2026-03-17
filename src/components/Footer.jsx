import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      /* bg-primary (Light) | dark:bg-secondary (Dark) */
      className="bg-primary dark:bg-secondary border-t border-textsecondary/10 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Part */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg font-bold text-textmain dark:text-textprimary tracking-tight">
                Kegz<span className="text-brand">.dev</span>
              </span>
            </div>
            <p className="text-sm text-textsecondary text-center md:text-left">
              Building the future of open source,{" "}
              <br className="hidden md:block" /> one repository at a time.
            </p>
          </div>

          {/* Social & Links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-5">
              {[
                { icon: <Github size={18} />, href: "https://github.com" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* bg-primary/secondary & border-textsecondary/10 */
                  className="p-2 rounded-full bg-primary dark:bg-tertiary border border-textsecondary/20 text-textsecondary hover:text-brand hover:border-brand/30 hover:shadow-md transition-all cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex gap-6 text-sm font-medium text-textmain dark:text-textsecondary">
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
        <div className="mt-12 pt-8 border-t border-textsecondary/10 text-center text-xs text-textsecondary uppercase tracking-widest">
          © {new Date().getFullYear()} Kegz Dev — Crafted with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
