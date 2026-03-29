import React, { useEffect, useState, useRef } from 'react';
import { 
  Monitor, Globe, Scissors, Rocket, Leaf, 
  CheckCircle2, Building2, Quote, Users2 
} from 'lucide-react';
import { useInView, animate } from 'framer-motion';

// 1. Reusable Counter Component
const ScrollingNumber = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

// 2. Sub-Component: Program Card
const ProgramCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group p-6 lg:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
    <div className={`${color} w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm lg:text-base">{desc}</p>
  </div>
);

const Programs = () => {
  const programs = [
    { icon: Monitor, title: "Technical & Vocational", desc: "Hands-on training in various technical fields aligned with industry needs.", color: "bg-blue-50 text-blue-600" },
    { icon: Globe, title: "Digital Skills", desc: "Courses in freelancing, digital marketing, and IT skills development.", color: "bg-emerald-50 text-emerald-600" },
    { icon: Scissors, title: "Women Empowerment", desc: "Training in handicrafts, tailoring, and small business development.", color: "bg-rose-50 text-rose-600" },
    { icon: Rocket, title: "Entrepreneurship", desc: "Support for startups, SME training, and professional mentorship.", color: "bg-orange-50 text-orange-600" },
    { icon: Leaf, title: "Climate & Sustainability", desc: "Skill development initiatives addressing climate change challenges.", color: "bg-green-50 text-green-600" },
  ];

  const stats = [
    { label: "Youth Trained", value: "5000", suffix: "+" },
    { label: "Jobs Created", value: "2000", suffix: "+" },
    { label: "Entrepreneurs", value: "500", suffix: "+" },
    { label: "Women Participation", value: "40", suffix: "%" },
  ];

  return (
    <div className="bg-[#f8fafc] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-blue-600">Programs</span>
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-medium leading-relaxed">
            Empowering the next generation with future-ready skills and sustainable opportunities for a better tomorrow.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {programs.map((p, i) => <ProgramCard key={i} {...p} />)}
        </div>

        {/* Impact & Target Group Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-24">
          {/* Who We Work With */}
          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Users2 className="text-blue-600" size={28} /> Who We Work With
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Unemployed Youth', 'Women & Girls', 'Persons with Disabilities', 'Marginalized Communities', 'Students & Seekers'].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 text-slate-700 font-bold text-sm border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-colors">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" /> 
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-slate-900 p-6 lg:p-8 rounded-[2rem] text-center border border-slate-800 flex flex-col justify-center shadow-xl">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
                  <ScrollingNumber value={s.value} suffix={s.suffix} />
                </h2>
                <p className="text-blue-400 text-[9px] lg:text-[10px] uppercase font-bold tracking-widest leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial & Partners Card */}
        <div className="bg-blue-600 rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <Quote size={40} className="text-blue-300/40 mb-6 mx-auto lg:mx-0" />
              <p className="text-xl lg:text-3xl font-semibold italic mb-6 leading-snug">
                "SDF changed my life by giving me the skills to earn independently and support my family."
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-1 bg-blue-300 rounded-full"></div>
                <p className="font-bold text-blue-100">A Successful Trainee</p>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20">
              <h4 className="text-lg font-bold mb-6 flex items-center justify-center lg:justify-start gap-2">
                <Building2 size={22} className="text-blue-200" /> Strategic Partners
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs lg:text-sm font-bold opacity-90">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Government
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> NGOs
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Private Sector
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Education
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-indigo-500 rounded-full blur-[80px] opacity-30"></div>
        </div>

      </div>
    </div>
  );
};

export default Programs;