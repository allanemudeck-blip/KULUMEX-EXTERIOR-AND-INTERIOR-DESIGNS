import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Namukasa',
    role: 'Home Owner',
    content: 'Kulumex transformed our home beautifully. Their gypsum ceiling design and painting were outstanding. The attention to detail is unmatched.',
    rating: 5
  },
  {
    name: 'David Okello',
    role: 'Office Manager',
    content: 'Very professional team. They completed our office renovation on time and within budget. The aluminium glass partitions look amazing.',
    rating: 5
  },
  {
    name: 'Grace Atwine',
    role: 'Property Developer',
    content: 'The landscaping and compound design exceeded our expectations. They have a real eye for modern outdoor aesthetics.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote size={400} className="absolute -top-20 -left-20 text-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-serif italic text-lg mb-2"
          >
            Client Feedback
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-serif font-bold"
          >
            What Our Clients Say
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl relative"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/80 italic leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-gold text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
              <Quote className="absolute top-8 right-8 text-gold/10" size={48} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
