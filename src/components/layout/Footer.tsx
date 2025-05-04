
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Smart<span className="text-farm-green">Farm</span></h3>
            <p className="text-gray-600 mb-4">Empowering farmers with intelligent resource management and data-driven decisions.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/farm-form" className="text-gray-600 hover:text-farm-green">Farm Analysis</Link></li>
              <li><Link to="/resource-dashboard" className="text-gray-600 hover:text-farm-green">Resource Optimization</Link></li>
              <li><Link to="/algorithm-comparison" className="text-gray-600 hover:text-farm-green">Algorithm Comparison</Link></li>
              <li><Link to="/water-fertilizer" className="text-gray-600 hover:text-farm-green">Water & Fertilizer Analysis</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-farm-green">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-600 hover:text-farm-green">Research Papers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-farm-green">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-farm-green">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@smartfarm.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
              <li className="text-gray-600">123 Farm Lane, Agritech Valley</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SmartFarm. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-farm-green">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-farm-green">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
