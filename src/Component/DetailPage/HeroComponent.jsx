import React from 'react';
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react';

const HeroDetailComponent = () => {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#050505] px-6 py-20">
      
      {/* Background Decor (Tinh tế, không AI ảo) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#1e1b4b_0%,transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT (6 Cột) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          
          

          {/* Title: Khít, Đậm, Quyền lực */}
          <h1 className="text-6xl md:text-8xl mt-18 font-[1000] tracking-[-0.04em] leading-[0.95] text-white">
            Full-Stack <br />
            <span className="bg-gradient-to-r from-indigo-400 via-white to-gray-500 bg-clip-text text-transparent">
              Development
            </span> <br />
            Mastery
          </h1>

          {/* Description: Phân cấp tốt */}
          <p className="max-w-lg text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Transform into a <span className="text-gray-200">world-class engineer</span> through 12 weeks of intensive, project-based learning.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Enroll in Program
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
              <PlayCircle size={24} strokeWidth={1.5} />
              Watch Preview
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT (5 Cột) - Tạo sự cân bằng */}
        <div className="lg:col-span-5 relative hidden lg:block">
          {/* Card thông tin nhanh (Bento style) */}
          <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl"></div>
            
            <div className="space-y-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-indigo-500 font-bold mb-1">Start Date</div>
                <div className="text-2xl font-bold text-white">May 15, 2026</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase mb-1">Duration</div>
                  <div className="font-bold">12 Weeks</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase mb-1">Level</div>
                  <div className="font-bold">Advanced</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex -space-x-3 mb-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-gray-800 flex items-center justify-center text-[10px] font-bold">JD</div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-indigo-600 flex items-center justify-center text-[10px] font-bold">+12</div>
                </div>
                <div className="text-xs text-gray-500 italic">Join 400+ developers already enrolled</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroDetailComponent;