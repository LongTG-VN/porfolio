import React from 'react'

const HeroComponent = () => {
  return (
    <div className="relative min-h-[110vh] w-full overflow-hidden bg-[#030014] flex flex-col items-center justify-center text-white">
      
      {/* 1. Background Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* 2. Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
          </span>
          <span className="text-xs font-medium text-purple-200/80 tracking-wide">Available for new projects</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
          <span className="block mb-2">Front-end</span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            Developer
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-gray-400 md:text-xl font-light">
          Crafting exceptional digital experiences with modern web technologies
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(129,140,248,0.3)]">
            View Projects
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-md hover:bg-white/10 transition-all">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block text-6xl font-mono">{'</>'}</div>
      <div className="absolute top-40 right-10 opacity-10 hidden lg:block rotate-12 text-6xl font-mono">{'{ }'}</div>

      {/* LỚP PHỦ CHUYỂN TIẾP (QUAN TRỌNG) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030014] to-transparent z-20"></div>
    </div>
  )
}

export default HeroComponent