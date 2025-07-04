import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Facebook, Instagram, Youtube } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-coffee-dark text-coffee-light py-2">
      {/* Top bar with hours and social media */}
      <div className="border-b border-coffee-medium/30">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm py-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-coffee-gold rounded-full"></span>
            <span>Monday - Sunday: 05:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-coffee-gold transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-coffee-gold transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0zM9 3.5L6.5 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.5L15 3.5H9z" />
              </svg>
            </a>
            <a href="#" className="hover:text-coffee-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-coffee-gold transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-2xl font-serif">
            <div className="w-10 h-10 bg-coffee-gold rounded-full flex items-center justify-center">
              <Coffee className="w-6 h-6 text-coffee-dark" />
            </div>
            <span className="italic text-coffee-gold">Marie Roast</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-coffee-light hover:text-coffee-gold transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-coffee-light hover:text-coffee-gold transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              to="/blog"
              className="text-coffee-light hover:text-coffee-gold transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-coffee-light hover:text-coffee-gold transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Order button */}
          <Button className="bg-coffee-gold text-coffee-dark hover:bg-coffee-gold/90 font-semibold px-6">
            Order Here
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-coffee-light">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
