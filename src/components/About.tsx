import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black-matte overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gold/20">
              <img
                src="https://i.postimg.cc/V6qDMmkn/102158.jpg"
                alt="Person using computer"
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 -z-10"></div>
            
            <div className="absolute bottom-10 left-10 glass-card p-6 rounded-xl max-w-xs">
              <p className="text-gold font-bold text-3xl mb-1">10+</p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-widest">Years of Excellence in Design</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-serif italic text-lg mb-2">Who We Are</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">Excellence in Modern <br />Interior & Exterior Solutions</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Kulumex Exterior & Interior Designs Limited is a professional design and finishing company specializing in modern interior and exterior solutions. We focus on delivering creative designs, high-quality finishing, and professional workmanship that exceed client expectations.
            </p>
            <p className="text-white/70 mb-10 leading-relaxed">
              Our team is passionate about transforming spaces into beautiful, comfortable, and functional environments. We take pride in our attention to detail and commitment to quality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-gold/10 p-2 rounded-lg text-gold">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Mission</h4>
                  <p className="text-white/60 text-sm">To deliver high-quality design and construction finishing services that improve the beauty and value of our clients' properties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-gold/10 p-2 rounded-lg text-gold">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Vision</h4>
                  <p className="text-white/60 text-sm">To become one of the leading interior and exterior design companies in Uganda, recognized for creativity, reliability, and excellence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: 'Professional Team', icon: <Users size={24} /> },
            { label: 'Modern Designs', icon: <Layout size={24} /> },
            { label: 'Quality Materials', icon: <Package size={24} /> },
            { label: 'Guaranteed Satisfaction', icon: <CheckCircle size={24} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 glass-card rounded-2xl">
              <div className="text-gold mb-4">{item.icon}</div>
              <p className="font-bold text-sm uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CheckCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Package = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

export default About;
