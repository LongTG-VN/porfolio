import React from 'react';
import { Clock, BarChart3, Globe, Play } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, value, subtext }) => (
  <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-8 flex items-start space-x-6 hover:border-gray-700 transition-colors">
    <div className="mt-1">
      <Icon className="text-white w-8 h-8" strokeWidth={1.5} />
    </div>
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</span>
      <span className="text-white text-2xl font-semibold mt-1">{value}</span>
      <span className="text-gray-500 text-sm mt-1">{subtext}</span>
    </div>
  </div>
);

const InformationComponent = () => {
  return (
    <div className="bg-black min-h-screen p-10 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Info Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <InfoCard 
            icon={Clock} 
            title="Duration" 
            value="12 Weeks" 
            subtext="Full-time immersive" 
          />
          <InfoCard 
            icon={BarChart3} 
            title="Level" 
            value="Advanced" 
            subtext="3+ years exp recommended" 
          />
          <InfoCard 
            icon={Globe} 
            title="Language" 
            value="English" 
            subtext="Vietnamese subtitles" 
          />
        </div>

        {/* Right Column - Video Preview */}
        <div className="lg:col-span-8 relative group cursor-pointer">
          <div className="w-full h-full min-h-[400px] bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl flex items-center justify-center overflow-hidden">
            {/* Play Button Overlay */}
            <div className="relative z-10 w-20 h-20 bg-[#5842FF] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(88,66,255,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Play className="text-white fill-white w-8 h-8 ml-1" />
            </div>
            
            {/* Background Decoration (Optional - Subtle Gradient) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5842FF]/5 to-transparent opacity-50"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InformationComponent;