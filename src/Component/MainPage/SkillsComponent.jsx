import React from 'react';

const SkillsComponent = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Netbeans", level: 87 },
      ]
    }
  ];

  return (
    /* Đổi từ bg-[#030014] sang bg-[#05011d] và thêm relative */
    <section className="relative bg-[#05011d] py-24 px-4 text-white overflow-hidden">
      
      {/* 1. Hiệu ứng ánh sáng nền tỏa ra để phân biệt với phần tối */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Title Section */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
            Skills & Expertise
          </h2>
          <div className="mx-auto mt-2 h-1.5 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-80 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {skillsData.map((group, index) => (
            <div 
              key={index} 
              /* Tăng độ sáng của card: bg-white/[0.05] và border-white/20 */
              className="group/card relative rounded-3xl bg-white/[0.05] p-8 border border-white/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 shadow-xl shadow-black/20"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/15 to-blue-500/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="mb-10 text-2xl font-bold text-white tracking-tight">
                {group.category}
              </h3>

              <div className="space-y-8">
                {group.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="group/item cursor-default">
                    <div className="mb-3 flex justify-between items-end">
                      {/* Chữ text-gray-200 thay vì 400 để sáng hơn */}
                      <span className="text-gray-200 font-medium group-hover/item:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-purple-300 group-hover/item:text-purple-200 group-hover/item:scale-110 transition-all duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Container: Sáng hơn với bg-white/20 */}
                    <div className="h-2.5 w-full rounded-full bg-white/20 overflow-hidden shadow-inner shadow-black/40">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-400 relative 
                                   shadow-[0_0_20px_rgba(168,85,247,0.6)]
                                   group-hover/item:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                                   group-hover/item:brightness-125
                                   transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/item:animate-[shimmer_1.5s_infinite] transition-transform"></div>
                        <div className="absolute top-0 right-0 h-full w-2 bg-white/40 blur-[2px]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030014] to-transparent z-20"></div>
    </section>
  );
};

export default SkillsComponent;