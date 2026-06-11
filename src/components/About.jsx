import React from 'react';
import vivekImg from '../assets/about/vivekBitmoji.png';

const About = () => {
  return (
    <section id="about" className="bg-[#00d4ff] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[320px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#0a0a2e] transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            {/* Badge */}
            <div className="bg-[#0a0a2e] w-full max-w-[260px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#0a0a2e] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Photo */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={vivekImg}
                  alt="Gaggula Vivek"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-2 px-2 pb-1 text-center">
                <p className="text-white font-black text-sm tracking-wide">Gaggula Vivek</p>
                <p className="text-[#00d4ff] text-xs font-medium">ECE Student · SR University</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-[#0a0a2e] mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-8 leading-relaxed max-w-2xl text-[#0a0a2e]/80">
            I'm <span className="text-[#0a0a2e] text-xl font-black uppercase tracking-wide">Gaggula Vivek</span>, a B.Tech Electronics & Communication student at SR University, Manuguru. I'm passionate about applying Python, Deep Learning, and IoT to solve real-world problems — from disease prediction models to Arduino-powered automation.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { num: '97.5%', label: 'Model Accuracy' },
              { num: '3+', label: 'Projects Built' },
              { num: '2027', label: 'Graduating' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-[#0a0a2e]/10 backdrop-blur-sm rounded-xl px-5 py-4 text-center min-w-[90px]">
                <div className="text-2xl font-black text-[#0a0a2e]">{num}</div>
                <div className="text-xs font-bold text-[#0a0a2e]/60 uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-3">
            {['Python', 'Deep Learning', 'Arduino', 'SQL', 'IoT', 'Git'].map(skill => (
              <span key={skill}
                className="px-4 py-1.5 rounded-full bg-[#0a0a2e] text-[#00d4ff] text-xs font-bold tracking-wide shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-10 right-10 text-[#0a0a2e] opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
