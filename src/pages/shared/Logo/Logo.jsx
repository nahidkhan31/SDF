import React from 'react';
import picture from '../../../assets/WhatsApp Image 2026-03-29 at 1.56.07 PM.jpeg'
import { Link } from 'react-router';
import { Users, Lightbulb, Link as LinkIcon } from 'lucide-react';
const Logo = () => {
    return (
        <Link to="/" className="flex items-center gap-2 group">
      <img 
        src={picture}
        alt="SDF Logo" 
        className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black leading-none tracking-tighter text-slate-800">SDF</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Skills Development</span>
      </div>
    </Link>
    // <Link to="/" className="flex flex-col items-start group">
    //   {/* The Icon Grid */}
    //   <div className="flex gap-0.5 mb-1">
    //     {/* Box 1: Orange */}
    //     <div className="bg-[#FF7F50] p-1.5 rounded-tl-md rounded-tr-md">
    //       <Users size={16} className="text-white" />
    //     </div>
    //     {/* Box 2: Red */}
    //     <div className="bg-[#C41E3A] p-1.5">
    //       <Lightbulb size={16} className="text-white" />
    //     </div>
    //     {/* Box 3: Maroon */}
    //     <div className="bg-[#800020] p-1.5 rounded-tr-md">
    //       <LinkIcon size={16} className="text-white" />
    //     </div>
    //   </div>

    //   {/* The Text Part */}
    //   <div className="flex flex-col">
    //     <h1 className="text-2xl font-black tracking-widest leading-none text-[#005BAB]">
    //       SDF
    //     </h1>
    //     <p className="text-[9px] font-bold text-slate-700 uppercase tracking-tighter mt-1 border-t border-slate-200 pt-0.5">
    //       Skills Development Foundation
    //     </p>
    //   </div>
    // </Link>
    );
};

export default Logo;