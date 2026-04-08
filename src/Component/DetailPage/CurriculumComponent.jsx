import React from 'react';
import { Clock } from 'lucide-react';

const CurriculumItem = ({ number, title, description, duration }) => (
  <div className="group flex items-center justify-between p-8 border-b border-[#1A1A1A] last:border-b-0 hover:bg-[#0A0A0A] transition-all duration-300 first:rounded-t-2xl last:rounded-b-2xl">
    <div className="flex items-center gap-10">
      {/* Numbering */}
      <span className="text-4xl md:text-5xl font-bold text-[#2A2A2A] group-hover:text-gray-400 transition-colors duration-300">
        {number}
      </span>
      
      {/* Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base max-w-md">
          {description}
        </p>
      </div>
    </div>

    {/* Duration Badge */}
    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A1A1A] bg-black/50 text-gray-400">
      <Clock size={14} />
      <span className="text-xs font-medium uppercase tracking-wider">{duration}</span>
    </div>
  </div>
);

const CurriculumComponent = () => {
  const curriculumData = [
    {
      number: "01",
      title: "Foundations",
      description: "Core programming concepts, algorithms, and web fundamentals",
      duration: "4 weeks"
    },
    {
      number: "02",
      title: "Advanced Projects",
      description: "Full-stack applications, databases, and modern frameworks",
      duration: "4 weeks"
    },
    {
      number: "03",
      title: "Interview Prep",
      description: "System design, coding challenges, and career acceleration",
      duration: "4 weeks"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-5xl md:text-6xl font-bold mb-12 tracking-tight">
          Curriculum
        </h2>

        {/* Container with border */}
        <div className="border border-[#1A1A1A] rounded-2xl overflow-hidden">
          {curriculumData.map((item, index) => (
            <CurriculumItem 
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumComponent;