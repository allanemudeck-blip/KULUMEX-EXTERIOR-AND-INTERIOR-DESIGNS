import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MessageSquare, Phone, Check, MessageCircle } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const WHATSAPP_NUMBER = '256746225361';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatWhatsAppMessage = () => {
    return `New Appointment Request – KULUMEX Website

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = formatWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-[2rem] relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 gold-gradient opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 gold-gradient opacity-10 blur-3xl"></div>

          <div className="text-center mb-12">
            <h2 className="text-gold font-serif italic text-lg mb-2">Start Your Project</h2>
            <h3 className="text-4xl font-serif font-bold">Book a Consultation</h3>
            <p className="text-white/50 mt-4">Schedule a meeting with our design experts to discuss your vision.</p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:border-gold outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Phone Number</label>
                <div className="flex items-center border-b border-white/20 focus-within:border-gold transition-colors">
                  <Phone size={16} className="text-white/30 mr-3" />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent py-3 text-white outline-none"
                    placeholder="+256 787 276 482"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Preferred Date</label>
                <div className="flex items-center border-b border-white/20 focus-within:border-gold transition-colors">
                  <Calendar size={16} className="text-white/30 mr-3" />
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent py-3 text-white outline-none [color-scheme:dark]"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Preferred Time</label>
                <div className="flex items-center border-b border-white/20 focus-within:border-gold transition-colors">
                  <Clock size={16} className="text-white/30 mr-3" />
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent py-3 text-white outline-none [color-scheme:dark]"
                  />
                </div>
              </div>
              <div className="relative md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Message</label>
                <div className="flex items-start border-b border-white/20 focus-within:border-gold transition-colors">
                  <MessageSquare size={16} className="text-white/30 mr-3 mt-4" />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-transparent py-3 text-white outline-none resize-none"
                    placeholder="Tell us about your project vision..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button 
                type="submit"
                className="w-full gold-gradient py-5 rounded-2xl text-black font-bold text-lg flex items-center justify-center space-x-3 hover:scale-[1.01] transition-transform shadow-2xl shadow-gold/20"
              >
                <Check size={20} />
                <span>Book Appointment</span>
              </button>
              
              <button 
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full border border-green-500/50 hover:bg-green-500/10 py-5 rounded-2xl text-green-500 font-bold text-lg flex items-center justify-center space-x-3 transition-all"
              >
                <MessageCircle size={20} />
                <span>Book on WhatsApp</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
