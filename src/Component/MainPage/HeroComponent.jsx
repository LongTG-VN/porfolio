import React, { useRef } from 'react'

const HeroComponent = () => {
    const btnRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        btnRef.current.style.setProperty("--x", `${x}px`);
        btnRef.current.style.setProperty("--y", `${y}px`);
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#030014] flex flex-col items-center justify-center text-white">

            {/* 1. Background (Z-0) - Thêm pointer-events-none để không chặn chuột */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* 2. Nội dung chính (Z-30) - Nằm cao nhất để ưu tiên tương tác */}
            <div className="relative z-30 flex flex-col items-center px-4 text-center">
                
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-200/80">Available for new projects</span>
                </div>

                <p className="mb-4 text-indigo-400 font-mono text-sm md:text-base tracking-[0.4em] uppercase opacity-90">Thái Gia Long</p>

                <h1 className="max-w-5xl text-6xl font-black tracking-tighter md:text-8xl lg:text-9xl leading-[0.9]">
                    <span className="block text-white">Fullstack</span>
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">Developer</span>
                </h1>

                <p className="mt-10 max-w-2xl text-base text-gray-400 md:text-lg leading-relaxed font-light tracking-wide">
                    Crafting exceptional digital experiences with modern web technologies. Specializing in building <span className="text-white">scalable</span> and <span className="text-white">high-performance</span> applications.
                </p>

             <div className="mt-12">
    <a 
        href="https://m.me/long.thaigia.37" // THAY TÊN USERNAME FACEBOOK CỦA BẠN VÀO ĐÂY

       
        target="_blank" 
        rel="noopener noreferrer"
        className="block" // Đảm bảo vùng click bao phủ toàn bộ button
    >
        <button 
            ref={btnRef}
            onMouseMove={handleMouseMove}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-indigo-600 px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)]"
        >
            {/* HIỆU ỨNG 1: Spotlight follow mouse */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                 style={{
                     background: `radial-gradient(150px circle at var(--x) var(--y), rgba(255,255,255,0.25), transparent 100%)`
                 }}
            ></div>

            {/* HIỆU ỨNG 2: Shimmer (Vệt sáng quét ngang) */}
            <div className="absolute inset-0 z-0 flex h-full w-full justify-center translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]">
                <div className="h-full w-16 bg-white/10 skew-x-[-20deg] blur-md"></div>
            </div>

            {/* NỘI DUNG NÚT */}
            <span className="relative z-10 flex items-center pointer-events-none">
                Let's Talk
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </span>
        </button>
    </a>
</div>
            </div>

            {/* 3. Trang trí góc (Z-0 & pointer-events-none) */}
            <div className="absolute top-20 left-10 opacity-10 hidden xl:block animate-bounce pointer-events-none" style={{ animationDuration: '5s' }}>
                <div className="text-8xl font-serif">“</div>
            </div>
            <div className="absolute bottom-20 right-10 opacity-10 hidden xl:block animate-pulse pointer-events-none">
                <span className="text-5xl font-mono">{'</>'}</span>
            </div>

            {/* 4. Lớp phủ Gradient cuối (Z-20) - Rất quan trọng: POINTER-EVENTS-NONE */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none"></div>
        </div>
    )
}

export default HeroComponent