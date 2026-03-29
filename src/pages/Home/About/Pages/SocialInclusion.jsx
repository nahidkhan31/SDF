import { Users } from "lucide-react";
import React from "react";

const SocialInclusion = () => {
  return (
    <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors duration-200">
      <div className="bg-orange-100 p-3 rounded-lg text-orange-600 h-fit">
        <Users size={24} />
      </div>

      <div>
        <h4 className="font-bold text-xl text-slate-800">Social Inclusion</h4>
        <ul className="mt-3 space-y-3">
          <li className="text-slate-500 flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-orange-400 mt-1">•</span>
            Ensure access to training for women, persons with disabilities, and
            marginalized communities
          </li>
          <li className="text-slate-500 flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-orange-400 mt-1">•</span>
            Provide low-cost or free training programs
          </li>
          <li className="text-slate-500 flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-orange-400 mt-1">•</span>
            Support women empowerment through cottage and handicraft training
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialInclusion;
