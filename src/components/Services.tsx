import React from 'react';
import { motion } from 'motion/react';
import { Paintbrush, Layout, Trees, GlassWater, Construction, Hammer, Package } from 'lucide-react';

const services = [
  {
    icon: <Paintbrush size={32} />,
    title: 'Interior & Exterior Painting',
    description: 'Professional painting solutions that give buildings a fresh, modern, and durable finish.'
  },
  {
    icon: <Layout size={32} />,
    title: 'Gypsum & Suspended Ceiling',
    description: 'Stylish ceiling designs that enhance lighting and beauty of interiors with elegant patterns.'
  },
  {
    icon: <Trees size={32} />,
    title: 'Landscaping & Beautification',
    description: 'We design beautiful outdoor spaces including gardens and compounds that inspire.'
  },
  {
    icon: <GlassWater size={32} />,
    title: 'Glass Fittings & Trimming',
    description: 'Modern glass installations for homes, offices, and commercial spaces.'
  },
  {
    icon: <Construction size={32} />,
    title: 'General Construction & Renovation',
    description: 'Building renovations and finishing services with modern standards and quality.'
  },
  {
    icon: <Hammer size={32} />,
    title: 'Aluminium Works',
    description: 'High-quality aluminium doors, windows, and compound structures for durability.'
  },
  {
    icon: <Package size={32} />,
    title: 'General Supplies',
    description: 'Supply of quality materials used in construction finishing and interior design.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-serif italic text-lg mb-2"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Core Services
          </motion.h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h4>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
