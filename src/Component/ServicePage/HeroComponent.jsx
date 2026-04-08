import React from 'react';

const HeroComponent = () => {
  // Hàm cuộn mượt xuống phần Curriculum
  const scrollToCurriculum = () => {
    const element = document.getElementById('curriculum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030014] px-4 pt-20 text-center text-white">
      {/* Background & Quầng sáng giữ nguyên như cũ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-center"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center max-w-5xl">
        {/* Badge & Title giữ nguyên */}
        <div className="mb-8 animate-fade-in">
           <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-200/90 italic">Limited Early Access Now Open</span>
          </div>
        </div>

        <h1 className="mb-8 text-6xl font-black tracking-tight md:text-8xl lg:text-9xl leading-[1.1]">
          <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent">Master Code.</span>
          <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(79,70,229,0.3)]">Build Future.</span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-gray-400 md:text-xl leading-relaxed font-light">
          Transform into a <span className="text-white font-medium italic">global developer</span> with our specialized curriculum. 
          Expert training in <span className="text-purple-400">Coding</span> combined with <span className="text-blue-400 font-medium">Japanese, English, and Chinese.</span>
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <button className="cursor-pointer group relative flex items-center justify-center overflow-hidden rounded-2xl bg-indigo-600 px-10 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(79,70,229,0.5)]">
            Start Learning Now →
          </button>

          {/* NÚT KẾT NỐI: Bấm là cuộn xuống */}
          <button 
            onClick={scrollToCurriculum}
            className="cursor-pointer group relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            View Course Curriculum
          </button>
        </div>
      </div>

      {/* Lớp phủ transition mượt mà - để z-10 để không che z-20 của content */}
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-[#030014] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroComponent;