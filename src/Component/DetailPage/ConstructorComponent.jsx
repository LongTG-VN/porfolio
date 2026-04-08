import React from 'react';
import { ShieldCheck } from 'lucide-react';

const InstructorComponent = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-12 tracking-tight">
          Your Instructor
        </h2>

        {/* Instructor Card */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 transition-all hover:border-gray-800">
          
          {/* Avatar Area */}
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#1A1A1A] bg-[#1A2238] flex items-center justify-center shadow-2xl">
              <span className="text-white/80 text-3xl md:text-4xl font-bold tracking-tighter">
                TGL
              </span>
            </div>
            {/* Verified Badge */}
            <div className="absolute bottom-1 right-1 bg-black rounded-full p-1 border border-[#1A1A1A]">
              <div className="bg-[#2A2A2A] rounded-full p-1">
                <ShieldCheck size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white text-3xl font-bold mb-1">
              Thái Gia Long
            </h3>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-6">
              Senior Software Engineer
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              10+ years building scalable systems at top tech companies. Specialized in full-stack 
              development, system architecture, and technical mentorship. Passionate about 
              helping developers level up their careers through hands-on learning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorComponent;