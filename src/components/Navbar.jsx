import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">R</span>
        </div>
        <span className="text-xl font-extrabold tracking-tight text-gray-800">
          React<span className="text-blue-600">Dev</span>
        </span>
      </div>

      {/* Links Section */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Projects
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          About
        </a>
      </div>

      {/* Action Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">
        <ThemeToggle /> Get Started
      </button>
    </nav>
  );
}

export default Navbar;
