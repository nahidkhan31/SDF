
import { BookOpen, Globe, Users } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-bold mb-4">Skills Development Foundation (SDF)</p>
          <p className="mb-6">© 2026 SDF | All Rights Reserved | Designed for a Skilled Bangladesh 🇧🇩</p>
          <div className="flex justify-center space-x-6">
            <Globe className="hover:text-white cursor-pointer" />
            <Users className="hover:text-white cursor-pointer" />
            <BookOpen className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    );
};

export default Footer;