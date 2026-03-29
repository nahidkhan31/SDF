
import { BookOpen, Globe, Users } from 'lucide-react';
import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
      //  <footer className="bg-slate-900 text-slate-400 py-12">
      //   <div className="max-w-7xl mx-auto px-4 text-center">
      //     <p className="text-white font-bold mb-4">Skills Development Foundation (SDF)</p>
      //     <p className="mb-6">© 2026 SDF | All Rights Reserved | Designed for a Skilled Bangladesh 🇧🇩</p>
      //     <div className="flex justify-center space-x-6">
      //       <Globe className="hover:text-white cursor-pointer" />
      //       <Users className="hover:text-white cursor-pointer" />
      //       <BookOpen className="hover:text-white cursor-pointer" />
      //     </div>
      //   </div>
      // </footer>

      <footer className="bg-slate-950 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                
                {/* Logo Section - Top & Centered */}
                <div className="mb-8 transform scale-110">
                    <Logo />
                </div>

                {/* Brand Name & Divider */}
                <div className="w-24 h-1 bg-slate-800 rounded-full mb-6"></div>

                <div className="text-center space-y-3">
                    <p className="text-white font-bold text-lg tracking-wide uppercase">
                        Skills Development Foundation (SDF)
                    </p>
                    <p className="max-w-md mx-auto text-sm leading-relaxed mb-6">
                        © 2026 SDF | All Rights Reserved | Empowering a Skilled Bangladesh 🇧🇩
                    </p>
                </div>

                {/* Social/Quick Icons */}
                <div className="flex justify-center space-x-8 mt-4 border-t border-slate-800/50 pt-8 w-full max-w-xs">
                    <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                        <Globe size={20} />
                    </a>
                    <a href="#" className="hover:text-orange-400 transition-colors duration-300">
                        <Users size={20} />
                    </a>
                    <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                        <BookOpen size={20} />
                    </a>
                </div>

                {/* Credit */}
                <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    Built with Excellence
                </p>
            </div>
        </footer>
    );
};

export default Footer;