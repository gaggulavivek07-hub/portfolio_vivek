import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import vivekImg from '../assets/about/vivekBitmoji.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#0a0a2e] flex items-end">

      {/* Animated grid background */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#00d4ff]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl pointer-events-none z-0" />

      {/* ── Animated video ── */}
      <div className="absolute right-0 bottom-0 h-[95%] w-[42%] hidden md:flex items-end justify-center z-10 pointer-events-none overflow-hidden">
        {/* Soft feather mask on left & bottom edges */}
        <div className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(to right, #0a0a2e 0%, transparent 30%, transparent 80%, #0a0a2e 100%)'
          }}
        />
        <div className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(to top, #0a0a2e 0%, transparent 25%)'
          }}
        />
        {/* Cyan rim glow on right side */}
        <div className="absolute right-0 top-0 h-full w-[3px] z-20"
          style={{background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.6), transparent)'}}
        />
        <img
          src={vivekImg}
          alt="Vivek"
          className="h-full w-auto object-cover object-top"
          style={{ filter: 'brightness(1.05) contrast(1.05)' }}
        />
      </div>

      {/* Mobile video strip */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img src={vivekImg} 
          className="w-full h-full object-cover object-top opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e]/70 via-transparent to-[#0a0a2e]" />
      </div>

      {/* Text content */}
      <div className="relative z-20 px-6 pb-20 md:pb-[8%] md:px-16 max-w-7xl mx-auto w-full flex flex-col items-start">

        <div data-aos="fade-up"
          className="inline-flex items-center gap-2 border border-[#00d4ff]/30 rounded-full px-4 py-1.5 text-xs text-[#00d4ff] font-bold tracking-widest uppercase mb-6 bg-[#00d4ff]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse"></span>
          Available for Internships &amp; Projects
        </div>

        <h1 data-aos="fade-up" data-aos-delay="100"
          className="text-white text-4xl md:text-7xl font-black mb-4 tracking-tight leading-[1.05]">
          Hi, I'm<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #00d4ff' }}>
            Gaggula Vivek
          </span>
        </h1>

        <p data-aos="fade-up" data-aos-delay="200"
          className="text-white/60 text-base md:text-xl font-medium mb-10 max-w-lg leading-relaxed">
          Electronics &amp; Communication student passionate about{' '}
          <span className="text-[#00d4ff]">Python</span>,{' '}
          <span className="text-[#00d4ff]">Deep Learning</span>, and{' '}
          <span className="text-[#00d4ff]">IoT systems</span>.
        </p>

        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-row flex-wrap gap-3">
          <a href="#projects"
            className="px-6 py-3 text-sm md:text-base rounded-full bg-[#00d4ff] text-[#0a0a2e] font-black hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)]">
            View Projects
          </a>
          <a href="#contact"
            className="px-6 py-3 text-sm md:text-base rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Contact Me
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce">
        <svg className="w-6 h-6 text-[#00d4ff]/50" fill="none" strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
