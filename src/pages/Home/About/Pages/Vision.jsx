import { Target } from 'lucide-react';
import React from 'react';

const Vision = () => {
    return (
        <div className="flex gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-primary h-fit"><Target /></div>
                <div><h4 className="font-bold text-xl">Our Vision</h4><p className="text-slate-500">To build a skilled, self-reliant, and empowered workforce.</p></div>
              </div>
    );
};

export default Vision;