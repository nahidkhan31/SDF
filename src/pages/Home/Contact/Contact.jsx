import React from "react";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Handshake,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";


const Contact = () => {
  const involvementCards = [
    {
      title: "Become a Partner",
      desc: "Collaborate with us to empower more youth and expand our reach.",
      icon: <Handshake className="text-blue-600" />,
      btnText: "Partner with Us",
      color: "hover:border-blue-200",
    },
    {
      title: "Enroll in Training",
      desc: "Join our world-class programs and build a sustainable future.",
      icon: <GraduationCap className="text-emerald-600" />,
      btnText: "Join Now",
      color: "hover:border-emerald-200",
    },
    {
      title: "Donate",
      desc: "Support our mission to create a skilled and self-reliant Bangladesh.",
      icon: <Heart className="text-rose-600" />,
      btnText: "Support Us",
      color: "hover:border-rose-200",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              Contact Us
            </h2>
            <p className="text-slate-500 mb-8 font-medium italic">
              "Building a Skilled Bangladesh 🇧🇩"
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-slate-800 font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
                  <Phone className="text-emerald-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Phone
                  </p>
                  <p className="text-slate-800 font-bold hover:text-emerald-600 cursor-pointer">
                    01717-733335
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-rose-50 transition-colors">
                  <Mail className="text-rose-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-slate-800 font-bold hover:text-rose-600 cursor-pointer">
                    info@sdfbangladesh.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                  <Globe className="text-indigo-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Website
                  </p>
                  <a
                    href="https://www.sdfbangladesh.org"
                    target="_blank"
                    className="text-slate-800 font-bold hover:text-indigo-600 transition-colors">
                    www.sdfbangladesh.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Get Involved Cards */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
              Get Involved{" "}
              <div className="h-1 w-12 bg-blue-600 rounded-full hidden sm:block"></div>
            </h2>

            <div className="grid sm:grid-cols-1 gap-6">
              {involvementCards.map((card, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-center justify-between p-8 bg-slate-50 rounded-[2rem] border border-transparent ${card.color} transition-all duration-300 group`}>
                  <div className="flex items-center gap-6 mb-6 sm:mb-0">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-slate-900">
                        {card.title}
                      </h4>
                      <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl shadow-sm border border-slate-200 hover:bg-slate-900 hover:text-white transition-all duration-300">
                    {card.btnText} <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
