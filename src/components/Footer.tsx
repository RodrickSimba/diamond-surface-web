
import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Diamond Surface</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional cleaning services for homes and businesses across South Africa. 
              Where cleanliness shines bright.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Residential Cleaning</li>
              <li className="text-gray-300">Commercial Cleaning</li>
              <li className="text-gray-300">Carpet & Upholstery</li>
              <li className="text-gray-300">Deep Cleaning</li>
              <li className="text-gray-300">Move-in/Move-out</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">079 238 6289</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">+27 61 969 8601</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">murendenibuhle6@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">Johannesburg, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Diamond Surface. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
