import React from 'react';
import { Users, CheckCircle, Briefcase, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Junior Developer at Google",
    content: "This course transformed my career. I went from zero coding knowledge to landing my dream job in just 4 months!",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Fullstack Engineer at Stripe",
    content: "The hands-on projects and mentorship were invaluable. Best investment I've made in my career.",
    stars: 5,
  },
  {
    name: "Priya Patel",
    role: "Software Developer at Amazon",
    content: "The curriculum is incredibly comprehensive. I felt prepared for every technical interview I had.",
    stars: 5,
  },
];

const stats = [
  { icon: <Users size={24} />, value: "500+", label: "Students Enrolled" },
  { icon: <CheckCircle size={24} />, value: "95%", label: "Completion Rate" },
  { icon: <Briefcase size={24} />, value: "89%", label: "Got Job Offers" },
  { icon: <Star size={24} />, value: "4.9/5", label: "Average Rating" },
];

const FeedbackComponent = () => {
  return (
    <section className="relative bg-[#030014] py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white italic uppercase">
            Success <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent not-italic">Stories</span>
          </h2>
          <p className="text-gray-400 font-light tracking-wide">
            Join hundreds of students who've transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:bg-white/[0.04]">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px]">
                   <div className="h-full w-full rounded-full bg-[#030014] flex items-center justify-center text-xs font-bold uppercase">
                      {t.name.split(' ').map(n => n[0]).join('')}
                   </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all">
              <div className="text-purple-400 mb-4 opacity-80">
                {s.icon}
              </div>
              <div className="text-3xl font-black text-white mb-2 tracking-tight">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 text-center font-bold leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackComponent;