import { Briefcase } from "lucide-react";
import React from "react";

const Employment = () => {
  return (
    <div className="flex gap-4 p-4 hover:shadow-sm transition-shadow duration-300">
      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
        <Briefcase size={24} />
      </div>

      <div>
        <h4 className="font-bold text-xl text-slate-800">
          Employment & Entrepreneurship
        </h4>

        <ul className="mt-2 space-y-2">
          <li className="text-slate-500 flex items-start gap-2">
            <span className="text-blue-500 mt-1.5">•</span>
            Facilitate job placement opportunities locally and internationally
          </li>
          <li className="text-slate-500 flex items-start gap-2">
            <span className="text-blue-500 mt-1.5">•</span>
            Promote entrepreneurship and SME development
          </li>
          <li className="text-slate-500 flex items-start gap-2">
            <span className="text-blue-500 mt-1.5">•</span>
            Provide startup mentorship and business guidance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Employment;
