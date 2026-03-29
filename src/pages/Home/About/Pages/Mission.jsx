import { Rocket } from 'lucide-react';
import React from 'react';

const Mission = () => {
    return (
       <div className="flex gap-4">
                <div className="bg-amber-100 p-3 rounded-lg text-secondary h-fit"><Rocket /></div>
                <div><h4 className="font-bold text-xl">Our Mission</h4><p className="text-slate-500">Transforming unemployed youth into skilled human resources.</p></div>
              </div>
    );
};

export default Mission;