
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-farm-green font-bold text-2xl">Smart<span className="text-farm-lightGreen">Farm</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-farm-green font-medium">Home</Link>
          <Link to="/farm-form" className="text-gray-700 hover:text-farm-green font-medium">Farm Analysis</Link>
          <Link to="/resource-dashboard" className="text-gray-700 hover:text-farm-green font-medium">Resource Dashboard</Link>
          <Link to="/algorithm-comparison" className="text-gray-700 hover:text-farm-green font-medium">Algorithm Comparison</Link>
          <Link to="/water-fertilizer" className="text-gray-700 hover:text-farm-green font-medium">Water & Fertilizer</Link>
          <Button asChild className="bg-farm-green hover:bg-farm-lightGreen ml-4">
            <Link to="/farm-form">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4 absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-farm-green font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/farm-form" 
              className="text-gray-700 hover:text-farm-green font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Farm Analysis
            </Link>
            <Link 
              to="/resource-dashboard" 
              className="text-gray-700 hover:text-farm-green font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resource Dashboard
            </Link>
            <Link 
              to="/algorithm-comparison" 
              className="text-gray-700 hover:text-farm-green font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Algorithm Comparison
            </Link>
            <Link 
              to="/water-fertilizer" 
              className="text-gray-700 hover:text-farm-green font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Water & Fertilizer
            </Link>
            <Button asChild className="bg-farm-green hover:bg-farm-lightGreen w-full mt-2">
              <Link to="/farm-form" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
