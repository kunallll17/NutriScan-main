import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="h-[84px] px-6 py-4 border-b-4 border-dashed border-nutri-border-dashed bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-nutri-gray bg-nutri-light-green flex items-center justify-center">
            <Leaf className="w-7 h-7 text-black" />
          </div>
          <span className="font-architects text-2xl text-black">
            NutriScan
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/compare"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Compare
          </Link>
          <Link
            to="/download"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Download
          </Link>
          <Link
            to="/login"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Login
          </Link>
          <Link
            to="/profile"
            className="font-architects text-lg text-black hover:text-nutri-gray transition-colors"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
} 