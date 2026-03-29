import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-primary text-white">
        <div className="px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <MapPin className="mb-4 text-secondary" size={32} />
              <p className="text-lg">Dhaka, Bangladesh</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="mb-4 text-secondary" size={32} />
              <p className="text-lg">01717733335</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="mb-4 text-secondary" size={32} />
              <p className="text-lg">info@sdfbangladesh.org</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
