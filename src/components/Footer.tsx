
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-studio-black border-t border-studio-gray/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">MOTION<span className="text-studio-amber">CRAFT</span></h3>
            <p className="text-studio-white/70 mb-6">
              Crafting compelling visual stories for brands, businesses, and creative projects worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-studio-white/60 hover:text-studio-amber transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-studio-white/60 hover:text-studio-amber transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-studio-white/60 hover:text-studio-amber transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-studio-white/60 hover:text-studio-amber transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-studio-white/60 hover:text-studio-amber transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-studio-white/70 hover:text-studio-amber transition-colors">Home</a></li>
              <li><a href="#work" className="text-studio-white/70 hover:text-studio-amber transition-colors">Our Work</a></li>
              <li><a href="#services" className="text-studio-white/70 hover:text-studio-amber transition-colors">Services</a></li>
              <li><a href="#about" className="text-studio-white/70 hover:text-studio-amber transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-studio-white/70 hover:text-studio-amber transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-studio-white/70 hover:text-studio-amber transition-colors">Film Production</a></li>
              <li><a href="#" className="text-studio-white/70 hover:text-studio-amber transition-colors">Commercial Production</a></li>
              <li><a href="#" className="text-studio-white/70 hover:text-studio-amber transition-colors">Corporate Video</a></li>
              <li><a href="#" className="text-studio-white/70 hover:text-studio-amber transition-colors">Sound Design</a></li>
              <li><a href="#" className="text-studio-white/70 hover:text-studio-amber transition-colors">Post-Production</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-studio-white/70">123 Cinema Street</li>
              <li className="text-studio-white/70">Los Angeles, CA 90028</li>
              <li className="text-studio-white/70">+1 (555) 123-4567</li>
              <li className="text-studio-white/70">info@motioncraft.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-studio-gray/20 mt-12 pt-8 flex flex-col md:flex-row justify-between text-studio-white/50 text-sm">
          <p>© {new Date().getFullYear()} MotionCraft Studios. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-studio-amber transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-studio-amber transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
