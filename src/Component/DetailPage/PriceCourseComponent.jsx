import React from 'react';
import { Check } from 'lucide-react';

const PriceCourseComponent = () => {
  const benefits = [
    "Lifetime access to course materials",
    "1-on-1 mentorship sessions",
    "Project code reviews",
    "Career placement support",
    "Alumni network access",
    "Certificate of completion",
  ];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-[32px] p-10 md:p-12 max-w-lg w-full flex flex-col items-center">
        
        {/* Header Section */}
        <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Full Course Access
        </span>
        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-white text-6xl md:text-7xl font-bold italic tracking-tighter">
            $4,999
          </span>
          <span className="text-gray-500 text-xl font-medium uppercase">USD</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-12">
          One-time payment, lifetime access
        </p>

        {/* Benefits List */}
        <div className="w-full flex flex-col gap-5 mb-12">
          <h4 className="text-white text-lg font-semibold mb-1 text-left">
            What's included
          </h4>
          
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                  <Check size={12} className="text-white opacity-60 group-hover:opacity-100" />
                </div>
                <span className="text-gray-300 text-base font-light tracking-wide group-hover:text-white transition-colors">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action Button */}
        <button className="w-full py-4 bg-[#5842FF] hover:bg-[#4a36e6] text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(88,66,255,0.3)] hover:shadow-[0_0_35px_rgba(88,66,255,0.5)] active:scale-[0.98]">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default PriceCourseComponent;