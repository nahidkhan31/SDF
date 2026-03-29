import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8"
        >
          <Sparkles size={16} />
          <span>Empowering Youth, Building Futures</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight"
        >
          Transforming Lives Through <br className="hidden lg:block" />
          <span className="text-blue-600">Practical Excellence</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
        >
          We are committed to transforming lives by equipping youth with practical skills, 
          creating employment opportunities, and fostering entrepreneurship across Bangladesh.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Join Our Mission
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-sm font-bold text-slate-400 uppercase tracking-[0.3em]"
        >
          Build a Skilled & Self-Reliant Nation 🇧🇩
        </motion.p>
      </div>
    </section>
    );
};

export default HeroSection;