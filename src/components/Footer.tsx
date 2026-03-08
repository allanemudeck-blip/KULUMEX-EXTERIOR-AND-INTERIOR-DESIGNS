import React from 'react';
import { Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black-matte pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="mb-6">
              <img 
                src="https://i.postimg.cc/cJdgDWxs/102139.jpg" 
                alt="KULUMEX Logo" 
                className="h-16 w-auto object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Transforming spaces with creativity, quality, and modern design. We are Uganda's leading choice for luxury interior and exterior solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/256746225361" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Painting', 'Gypsum Ceilings', 'Landscaping', 'Glass Fittings', 'Aluminium Works'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/50 hover:text-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <span className="text-gold">📍</span>
                <span className="text-white/50">Kampala, Uganda</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <span className="text-gold">📞</span>
                <a href="tel:+256787276482" className="text-white/50 hover:text-white transition-colors">+256 787 276 482</a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <span className="text-gold">📩</span>
                <a href="mailto:info@kulumex.com" className="text-white/50 hover:text-white transition-colors">info@kulumex.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            © 2026 Kulumex Exterior & Interior Designs Limited. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-white/30 hover:text-gold transition-colors text-xs uppercase tracking-widest font-bold"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
