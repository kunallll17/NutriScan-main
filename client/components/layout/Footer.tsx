import {
  Leaf,
  Instagram,
  Twitter,
  Facebook,
  TrendingUp,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-dashed border-nutri-border-dashed py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-nutri-gray bg-nutri-light-green flex items-center justify-center">
              <Leaf className="w-5 h-5 text-black" />
            </div>
            <span className="font-architects text-xl text-black">
              NutriScan
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <div className="w-10 h-10 border-2 border-nutri-gray rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
              <Instagram className="w-4 h-4 text-black" />
            </div>
            <div className="w-10 h-10 border-2 border-nutri-gray rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
              <Twitter className="w-4 h-4 text-black" />
            </div>
            <div className="w-10 h-10 border-2 border-nutri-gray rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
              <Facebook className="w-4 h-4 text-black" />
            </div>
            <div className="w-10 h-10 border-2 border-nutri-gray rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
              <TrendingUp className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-nutri-border-dashed pt-6 text-center">
          <p className="font-architects text-base text-black mb-2">
            © 2023 NutriScan. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="font-architects text-sm text-black">
              Made with
            </span>
            <Heart className="w-4 h-4 text-nutri-light-coral fill-current" />
            <span className="font-architects text-sm text-black">
              for your health
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 