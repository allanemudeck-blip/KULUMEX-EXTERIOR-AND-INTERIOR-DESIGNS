import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-matte via-black-matte/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <img 
                src="https://i.postimg.cc/cJdgDWxs/102139.jpg" 
                alt="KULUMEX Logo" 
                className="h-10 w-auto object-contain rounded-sm border border-gold/20"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-gold font-serif italic text-xl mb-4 tracking-wider">Transforming Spaces with Creativity</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              KULUMEX <br />
              <span className="gold-text-gradient">Exterior & Interior</span> <br />
              Designs Ltd
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
              We specialize in modern interior and exterior design, construction finishing, and compound beautification. Our mission is to transform ordinary spaces into beautiful, functional, and inspiring environments.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                'Modern Designs',
                'Professional Workmanship',
                'Quality Materials',
                'Reliable Service'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle size={18} className="text-gold" />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="gold-gradient px-8 py-4 rounded-full text-black font-bold text-center hover:scale-105 transition-transform shadow-xl shadow-gold/20">
                Get Free Quote
              </a>
              <a href="#gallery" className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full text-white font-bold text-center hover:bg-white/10 transition-colors">
                View Our Work
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Phone className="text-gold" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Call Us Today</p>
                <a href="tel:+256787276482" className="text-xl font-bold hover:text-gold transition-colors">+256 787 276 482</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full h-full"
        >
          <div className="absolute right-10 bottom-10 w-64 h-64 border-r-2 border-b-2 border-gold/30"></div>
          <div className="absolute right-20 bottom-20 w-64 h-64 border-r-2 border-b-2 border-gold/10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
