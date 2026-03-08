import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black-matte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-serif italic text-lg mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">Contact Kulumex</h3>
            <p className="text-white/60 mb-10 leading-relaxed">
              We are ready to help transform your space. Whether it's a small renovation or a large-scale construction project, our team is here to deliver excellence.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Phone Number</p>
                  <a href="tel:+256787276482" className="text-xl font-bold hover:text-gold transition-colors">+256 787 276 482</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email Address</p>
                  <a href="mailto:info@kulumex.com" className="text-xl font-bold hover:text-gold transition-colors">info@kulumex.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-xl font-bold">Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 rounded-xl text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Business Hours</p>
                  <p className="text-xl font-bold">Mon – Sat: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <h4 className="text-2xl font-serif font-bold mb-8">Send Us a Message</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button className="w-full gold-gradient py-4 rounded-xl text-black font-bold flex items-center justify-center space-x-2 hover:scale-[1.02] transition-transform">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
