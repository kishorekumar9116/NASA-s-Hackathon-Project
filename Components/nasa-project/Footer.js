import React from "react";
import { 
  Satellite, 
  Mail, 
  Phone, 
  ExternalLink,
  Twitter,
  Facebook,
  Linkedin,
  Youtube
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Project Overview', action: () => scrollToSection('about') },
    { label: 'Data Sources', action: () => scrollToSection('data-sources') },
    { label: 'Community Impact', action: () => scrollToSection('impact') },
    { label: 'City Leadership', action: () => scrollToSection('leadership') },
    { label: 'Get Involved', action: () => scrollToSection('community') }
  ];

  const resources = [
    { label: 'NASA Earth Science', href: 'https://earth.nasa.gov' },
    { label: 'Urban Planning Guide', href: '#' },
    { label: 'Environmental Data Portal', href: '#' },
    { label: 'Community Resources', href: '#' },
    { label: 'Research Publications', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <Satellite className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">NASA Urban Growth</div>
                <div className="text-sm text-gray-400">Smart Cities Initiative</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming urban development through NASA Earth Science data, 
              creating sustainable communities that prioritize both human welfare and environmental protection.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[Twitter, Facebook, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {resource.label}
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300 text-sm">info@nasa-urbangrowth.gov</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-300 text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            {/* Logos */}
            <div className="mt-8">
              <div className="text-sm font-medium mb-3">Partnering Organizations</div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-10 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  NASA
                </div>
                <div className="w-16 h-10 bg-gray-800 rounded flex items-center justify-center text-xs font-bold">
                  CITY
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 NASA Smart Urban Growth Initiative. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}