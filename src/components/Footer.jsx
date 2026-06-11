import React from 'react';

const Footer = () => (
  <footer className="bg-[#060614] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
      <div className="flex flex-col gap-1">
        <p>ECE Student · SR University</p>
        <p>Python · Deep Learning · IoT</p>
        <p>Manuguru, Telangana</p>
      </div>
      <div className="flex flex-col gap-1 md:items-center">
        <p>B.Tech 2023 – 2027</p>
        <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
      </div>
      <div className="flex flex-col gap-1 md:items-end">
        <p>Open to Internships</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </div>

    <div className="w-full flex justify-center items-center py-20 overflow-hidden">
      <h2 className="text-[15vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-white/10 w-full text-center">
        vivek
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
      <div className="flex flex-col gap-6">
        <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
        <p className="text-white/40 font-mono text-[9px]">
          &copy; {new Date().getFullYear()} Gaggula Vivek · Built with React
        </p>
      </div>
      <div className="flex flex-col gap-1 md:items-center">
        <a href="mailto:gaggulavivek07@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">gaggulavivek07@gmail.com</a>
      </div>
      <div className="flex flex-col gap-1 md:items-end">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
