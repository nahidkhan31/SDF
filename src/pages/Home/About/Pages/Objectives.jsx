import { Award, BookOpen, Briefcase, Users } from 'lucide-react';
import React from 'react';

const Objectives = () => {
    return (
        <section className="py-20 bg-slate-100">
        <div className="px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Objectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen />, title: "Training", desc: "Industry-relevant technical and ICT vocational training." },
              { icon: <Briefcase />, title: "Employment", desc: "Job placement locally and internationally." },
              { icon: <Users />, title: "Inclusion", desc: "Access for women and marginalized communities." },
              { icon: <Award />, title: "Innovation", desc: "Market research and career fair organization." }
            ].map((obj, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border-b-4 border-primary">
                <div className="text-primary mb-4 flex justify-center">{obj.icon}</div>
                <h4 className="font-bold text-lg mb-2">{obj.title}</h4>
                <p className="text-slate-500 text-sm">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Objectives;