import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black-matte/90 backdrop-blur-lg py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="https://i.postimg.cc/cJdgDWxs/102139.jpg" 
                alt="KULUMEX Logo" 
                className="h-12 w-auto object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+256787276482" className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-gold transition-colors">
              <Phone size={16} className="text-gold" />
              <span>Call Now</span>
            </a>
            <a href="#contact" className="gold-gradient px-6 py-2 rounded-full text-black text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-gold/20">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-white/80 hover:text-gold border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 flex flex-col space-y-4">
                <a href="tel:+256787276482" className="flex items-center justify-center space-x-2 w-full py-3 border border-gold text-gold rounded-full font-bold">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2 w-full py-3 gold-gradient text-black rounded-full font-bold">
                  <Mail size={18} />
                  <span>Get Quote</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
