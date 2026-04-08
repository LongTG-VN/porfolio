import React from 'react';
import { Layout, Server, Database, Layers, ShieldCheck, Rocket } from 'lucide-react';

const modules = [
  { icon: <Layout />, title: 'Frontend Mastery', skill: 'HTML, CSS, JS, React', weeks: '4 weeks', level: 'Beginner to Advanced' },
  { icon: <Server />, title: 'Backend Development', skill: 'Node.js, Express, REST APIs', weeks: '3 weeks', level: 'Intermediate' },
  { icon: <Database />, title: 'Database Design', skill: 'SQL, MongoDB, Data Modeling', weeks: '2 weeks', level: 'Intermediate' },
  { icon: <Layers />, title: 'Fullstack Projects', skill: 'Real-world applications', weeks: '3 weeks', level: 'Advanced' },
  { icon: <ShieldCheck />, title: 'Security & Auth', skill: 'JWT, OAuth, Best Practices', weeks: '1 week', level: 'Advanced' },
  { icon: <Rocket />, title: 'Deployment', skill: 'AWS, Docker, CI/CD', weeks: '1 week', level: 'Advanced' },
];

const stats = [
  { value: '50+', label: 'Video Lessons' },
  { value: '20+', label: 'Projects' },
  { value: '100+', label: 'Coding Challenges' },
  { value: '∞', label: 'Lifetime Access' },
];

const CurriculumComponent = () => {
  return (
    <section id="curriculum" className="relative flex w-full flex-col items-center bg-[#030014] pt-20 pb-24 px-4 text-white">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        {/* Header Section */}
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-5 text-5xl font-black tracking-tighter md:text-7xl italic uppercase">
            Complete <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent not-italic">Curriculum</span>
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed tracking-wide">
            Everything you need to become job-ready in 12 intensive weeks
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <div key={i} className="group relative flex flex-col items-start gap-5 rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 text-left transition-all duration-300 hover:border-purple-500/20 hover:shadow-[0_0_40px_rgba(79,70,229,0.2)]">
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4 text-white shadow-lg">
                {m.icon}
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold group-hover:text-purple-400 transition-colors">{m.title}</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">{m.skill}</p>
              </div>
              <div className="mt-auto flex w-full items-center justify-between border-t border-white/5 pt-5 text-[10px] uppercase font-bold tracking-widest">
                <span className="text-purple-300">{m.weeks}</span>
                <span className="text-gray-500">{m.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="relative mt-24 grid w-full grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumComponent;