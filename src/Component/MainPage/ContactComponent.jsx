import React from 'react';

const ContactComponent = () => {
  const socials = [
    { name: "GitHub", link: "https://github.com/LongTG-VN" ,  icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/> },
    { name: "LinkedIn",link: "https://www.linkedin.com/in/long-th%C3%A1i-08044a357/", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
    { name: "Email",link: "mailto:longtg.ce191181@gmail.com", icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/> },
    { name: "Facebook", link: "https://www.facebook.com/long.thaigia.37/",icon: <path d="M23.6 8c-.1-.2-.2-.3-.4-.4l-10.5-7c-.4-.3-.9-.3-1.3 0l-10.5 7c-.2.1-.3.3-.4.4-.1.2-.1.4-.1.7v6.7c0 .2 0 .5.1.7.1.2.2.3.4.4l10.5 7c.2.1.4.2.7.2s.5-.1.7-.2l10.5-7c.2-.1.3-.3.4-.4.1-.2.1-.4.1-.7V8.7c.1-.3.1-.5 0-.7zM12 15.9l-3.3-2.2 3.3-2.2 3.3 2.2-3.3 2.2zm1-8.1V3.4l7.4 4.9-3.3 2.2-4.1-2.7zm-2 0l-4.1 2.7-3.3-2.2 7.4-4.9v4.4zM3.6 10.1l2.9 1.9-2.9 1.9V10.1zm7.4 6.5v4.4L3.6 16.1l3.3-2.2 4.1 2.7zm2 0l4.1-2.7 3.3 2.2-7.4 4.9v-4.4zm7.4-4.6l-2.9-1.9 2.9-1.9v3.8z"/> }
  ];

  return (
    <section className="relative bg-[#030014] py-32 px-4 text-white overflow-hidden flex flex-col items-center">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-5xl font-bold tracking-tight mb-4">
          Let's <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <div className="mx-auto h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"></div>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        {/* Main Contact Card */}
        <div className="relative rounded-[40px] bg-white/[0.03] border border-white/10 p-12 backdrop-blur-xl shadow-2xl">
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-[40px] shadow-[0_0_50px_rgba(168,85,247,0.15)] -z-10"></div>

          <h3 className="text-xl font-semibold mb-10">Get In Touch</h3>

          {/* Social Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {socials.map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
              >
                <svg className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <span className="text-xs font-medium text-gray-400 group-hover:text-white">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-bold text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-500/25"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
           Longtg.ce191181@gmail.com
          </a>
        </div>

        {/* Footer Text */}
        <footer className="mt-20 text-gray-500 text-xs tracking-widest uppercase">
          © 2026 Front-end Developer Portfolio. Built with React & Tailwind CSS.
        </footer>
      </div>
    </section>
  );
};

export default ContactComponent;