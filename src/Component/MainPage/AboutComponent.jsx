import React from 'react'

const AboutComponent = () => {
  const stats = [
    { 
      title: "Clean Code", 
      desc: "Writing maintainable and scalable solutions",
      icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    },
    { 
      title: "Performance", 
      desc: "Optimized for speed and efficiency",
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    },
    { 
      title: "Modern Stack", 
      desc: "Latest technologies and best practices",
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    },
    { 
      title: "User Focus", 
      desc: "Creating delightful user experiences",
      icon: <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
    },
  ];

  return (
    <section id="about" className="relative bg-[#030014] pb-32 pt-10 px-4 text-white">
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          
          {/* Left Side: Giới thiệu bản thân bản nâng cấp */}
          <div className="group relative rounded-3xl bg-white/[0.03] p-10 border border-white/10 transition-all duration-500 overflow-hidden
            hover:bg-white/[0.06] hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">Thái Gia Long</span>, a passionate <span className="text-purple-400 font-medium">Fullstack Developer Intern</span> currently pursuing a Bachelor of Software Engineering at <span className="text-white">FPT University</span>. 
              </p>
              <p>
                With a solid foundation in <span className="text-blue-400">Java (IBM Certified)</span> and modern web technologies, I specialize in building <span className="italic">scalable</span> and <span className="italic">high-performance</span> digital solutions.
              </p>
              <p>
                Beyond coding, I am a multilingual enthusiast with a <span className="text-white border-b border-blue-500/50">B2 English level</span> and am currently aiming for <span className="text-white border-b border-purple-500/50">JLPT N2/N3</span>. I strive to become a Bridge Software Engineer connecting technology with global business needs.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 px-5 py-2.5 text-sm font-medium text-purple-300 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all">
                  SE Student @ FPTU
                </div>
                <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 px-5 py-2.5 text-sm font-medium text-blue-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all">
                  IBM Java Certified
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Grid các thẻ kĩ năng nhỏ */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {stats.map((item, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all duration-300 group 
                  hover:bg-white/[0.08] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 
                  group-hover:scale-110 group-hover:bg-indigo-500/30 group-hover:text-indigo-200 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Lớp phủ để kết nối mượt với phần Skills bên dưới */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#05011d] to-transparent z-10"></div>
    </section>
  )
}

export default AboutComponent