import { Microscope } from "lucide-react";
import React from "react";

const ResearchInnovation = () => {
  return (
    <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors duration-200">
      <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 h-fit">
        <Microscope size={24} />
      </div>

      <div>
        <h4 className="font-bold text-xl text-slate-800">
          Research & Innovation
        </h4>
        <ul className="mt-3 space-y-3">
          <li className="text-slate-500 flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-indigo-400 mt-1">•</span>
            Conduct labor market research
          </li>
          <li className="text-slate-500 flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-indigo-400 mt-1">•</span>
            Develop updated training curricula
          </li>
          <li className="text-slate-500 flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-indigo-400 mt-1">•</span>
            Organize seminars, workshops, and career fairs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResearchInnovation;
