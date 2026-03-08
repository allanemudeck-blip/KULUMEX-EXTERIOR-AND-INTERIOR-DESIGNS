import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Plus } from 'lucide-react';

const projects = [
  {
    title: 'Luxury Living Room',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Modern Gypsum Ceiling',
    category: 'Gypsum Ceilings',
    image: 'https://i.postimg.cc/j2RRTx1L/102150.jpg'
  },
  {
    title: 'Commercial Painting',
    category: 'Painting Projects',
    image: 'https://i.postimg.cc/h47KkY3V/102157.jpg'
  },
  {
    title: 'Garden Landscape',
    category: 'Landscaping',
    image: 'https://i.postimg.cc/63W9J6gR/102156.jpg'
  },
  {
    title: 'Aluminium Glass Wall',
    category: 'Aluminium installations',
    image: 'https://i.postimg.cc/6qZbMncv/946e3fa689a1531cbac2c159ee41c626.jpg'
  },
  {
    title: 'Premium Glass Fittings',
    category: 'Glass fittings',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-black-matte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-serif italic text-lg mb-2"
            >
              Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-serif font-bold"
            >
              Our Recent Projects
            </motion.h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'gold-gradient text-black' 
                    : 'border border-white/20 text-white/60 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">{project.title}</h4>
                <button className="flex items-center space-x-2 text-white/80 hover:text-gold transition-colors font-bold text-sm uppercase tracking-widest">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black">
                  <Plus size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
