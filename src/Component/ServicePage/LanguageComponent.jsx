import React from 'react';
import { BookOpen, Clock, Users, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const languages = [
  {
    id: 'jp',
    title: 'Japanese',
    subTitle: '日本語 Master',
    code: '日',
    desc: 'Master Hiragana, Katakana, Kanji and conversational Japanese with tech-focus.',
    level: 'Beginner to Advanced',
    stats: { lessons: 120, duration: '6 months', students: '2.4k' },
    highlights: ['Kanji Mastery', 'Cultural Context', 'JLPT Prep', 'Native Speakers'],
    color: 'from-pink-500 via-purple-500 to-indigo-600',
    glow: 'group-hover:shadow-[0_0_50px_rgba(219,39,119,0.35)]',
    border: 'border-pink-500/30'
  },
  {
    id: 'en',
    title: 'English',
    subTitle: 'English Global',
    code: 'EN',
    desc: 'Business English, IELTS/TOEFL prep, and fluent tech-communication.',
    level: 'All Levels',
    stats: { lessons: 150, duration: '8 months', students: '5.2k' },
    highlights: ['Business English', 'Native Accent', 'IELTS/TOEFL', 'Writing Skills'],
    color: 'from-blue-400 via-indigo-500 to-blue-600',
    glow: 'group-hover:shadow-[0_0_50px_rgba(37,99,235,0.35)]',
    border: 'border-blue-500/30'
  },
  {
    id: 'cn',
    title: 'Chinese',
    subTitle: '中文 Mastery',
    code: '中',
    desc: 'Mandarin mastery with HSK certification and IT-character writing.',
    level: 'Beginner to Expert',
    stats: { lessons: 140, duration: '7 months', students: '3.8k' },
    highlights: ['HSK Certified', 'Tones Mastery', 'Character Writing', 'Business Mandarin'],
    color: 'from-orange-500 via-red-500 to-orange-600',
    glow: 'group-hover:shadow-[0_0_50px_rgba(234,88,12,0.35)]',
    border: 'border-orange-500/30'
  }
];

const LanguageComponent = () => {
  return (
    <section className="relative bg-[#030014] py-32 px-4 text-white overflow-hidden">
      
      {/* 1. Background Elements (Grid + Glow) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section: Đẩy mạnh Typo */}
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-black uppercase tracking-[0.3em] text-purple-300 mb-8 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
             <span className="text-indigo-400">{'</>'}</span> Learn in Your Native Syntax
          </div>
          
          <h2 className="text-6xl md:text-8xl font-[1000] mb-8 tracking-[-0.05em] leading-[0.9]">
            Master New <br />
            <span className="bg-gradient-to-b from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              Languages
            </span>
          </h2>
          
          <p className="max-w-xl mx-auto text-gray-400 font-light text-lg leading-relaxed">
            Accelerate your career with <span className="text-white">tech-focused</span> language courses designed for global developers.
          </p>
        </div>

        {/* 3. Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {languages.map((lang) => (
            <div 
              key={lang.id} 
              className={`group relative flex flex-col rounded-[3rem] border ${lang.border} bg-white/[0.02] p-10 transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-3 ${lang.glow}`}
            >
              {/* Header Card: Code Icon */}
              <div className="flex items-center gap-5 mb-10">
                <div className={`flex h-16 w-20 items-center justify-center rounded-[1.5rem] bg-white/5 border ${lang.border} text-2xl font-mono font-black text-gray-100 shadow-inner`}>
                  <span className="opacity-30 text-base mr-1">{'{'}</span>
                  {lang.code}
                  <span className="opacity-30 text-base ml-1">{'}'}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tighter">{lang.title}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{lang.subTitle}</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light">
                {lang.desc}
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 mb-10 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                {lang.level}
              </div>

              {/* Stats Section: Đẹp như dashboard */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-10 mb-10">
                <div className="flex flex-col items-center">
                  <BookOpen size={20} className="text-indigo-400 mb-3 opacity-60" />
                  <span className="text-xl font-black">{lang.stats.lessons}</span>
                  <span className="text-[9px] uppercase text-gray-500 tracking-tighter">Lessons</span>
                </div>
                <div className="flex flex-col items-center border-x border-white/5 px-2">
                  <Clock size={20} className="text-indigo-400 mb-3 opacity-60" />
                  <span className="text-xl font-black whitespace-nowrap">{lang.stats.duration}</span>
                  <span className="text-[9px] uppercase text-gray-500 tracking-tighter">Duration</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users size={20} className="text-indigo-400 mb-3 opacity-60" />
                  <span className="text-xl font-black">{lang.stats.students}</span>
                  <span className="text-[9px] uppercase text-gray-500 tracking-tighter">Students</span>
                </div>
              </div>

              {/* Progress Bar: Rực rỡ */}
              <div className="mt-auto mb-10">
                <div className="flex justify-between text-[10px] text-gray-500 mb-3 uppercase tracking-widest font-bold">
                  <span>Avg Progress</span>
                  <span className="text-gray-300">78%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${lang.color} w-[78%] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]`}></div>
                </div>
              </div>

              {/* CTA Button: Super Glow */}
              < NavLink to={lang.id} className={`cursor-pointer w-full group/btn relative py-5 rounded-[1.8rem] bg-gradient-to-r ${lang.color} text-sm font-black uppercase tracking-widest text-white transition-all active:scale-95 flex items-center justify-center gap-3 hover:brightness-110 shadow-lg`}>
                <Zap size={18} className="fill-current" />
                Start Learning
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-[1.8rem]"></div>
              </ NavLink >
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LanguageComponent;