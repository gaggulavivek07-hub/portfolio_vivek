import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const projects = [
  {
    number: "01",
    title: "Smart Healthcare Disease Prediction",
    text: "Deep learning ANN trained on 1,300+ patient entries with 132 binary symptom features. Achieved 97.5% accuracy, 96% precision, 95% recall. Built preprocessing pipeline with normalization and label encoding.",
    tags: ["Python", "Deep Learning", "ANN", "Kaggle"],
    year: "2025",
    aosType: "fade-left",
    pos: "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
  },
  {
    number: "02",
    title: "Automatic Car Parking Toll Gate",
    text: "Automated vehicle entry/exit system using Arduino + ultrasonic sensors for presence detection and a servo motor for barrier control. Suitable for smart parking and toll applications.",
    tags: ["Arduino", "Ultrasonic Sensor", "Servo Motor"],
    year: "2025",
    aosType: "fade-right",
    pos: "md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
  },
  {
    number: "03",
    title: "WiFi-Controlled Robot Car",
    text: "Wireless robot car controlled via WiFi through a mobile/web interface using Arduino/ESP8266. Demonstrated practical IoT in robotics — real-time remote control within WiFi range.",
    tags: ["Arduino", "ESP8266", "IoT", "WiFi"],
    year: "2024",
    aosType: "fade-left",
    pos: "md:absolute md:top-[750px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
  },
];

const ProjectCard = ({ number, title, text, tags, year, pos, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const triggerY = (cardRect.top - containerRect.top) + 50;
    const lineTipY = latest * containerRect.height;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div ref={ref} data-aos={aosType} className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${pos} ${
      isActive ? 'bg-[#00d4ff] border-cyan-300 shadow-[0_20px_50px_rgba(0,212,255,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
    }`}>
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 flex flex-col min-h-[240px] transition-colors duration-700 ${
        isActive ? 'bg-[#00b8d9]/50' : 'bg-[#f4f4f4]'
      }`}>
        <div className="flex justify-between items-center mb-3">
          <span className={`text-xl font-bold font-serif italic ${isActive ? 'text-cyan-900/60' : 'text-gray-400'}`}>{number}</span>
          <span className={`text-xs font-bold tracking-widest ${isActive ? 'text-cyan-900/60' : 'text-gray-400'}`}>{year}</span>
        </div>
        <h3 className={`text-xl font-black mb-3 leading-tight tracking-tight ${isActive ? 'text-[#0a0a2e]' : 'text-gray-900'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed font-medium mb-4 flex-1 ${isActive ? 'text-[#0a0a2e]/80' : 'text-gray-500'}`}>{text}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isActive ? 'bg-[#0a0a2e] text-[#00d4ff]' : 'bg-gray-200 text-gray-600'}`}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section id="projects" ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto relative md:h-[1200px]">

        {/* Header */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[420px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Things I've built that actually work
          </h2>
          <p className="text-gray-500 text-base leading-relaxed font-medium max-w-sm">
            From neural networks predicting diseases to IoT robots — hands-on engineering from concept to deployment.
          </p>
        </div>

        {/* Desktop SVG line */}
        <svg className="hidden md:block absolute top-0 left-0 w-full h-[1200px] pointer-events-none z-0"
          viewBox="0 0 1000 1200" preserveAspectRatio="none">
          <path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1100 400,1100 300,1150"
            fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10"/>
          <mask id="path-mask">
            <motion.path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1100 400,1100 300,1150"
              fill="none" stroke="white" strokeWidth="20" style={{ pathLength }}/>
          </mask>
          <path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1100 400,1100 300,1150"
            fill="none" stroke="#0a0a2e" strokeWidth="2" strokeDasharray="8 10" mask="url(#path-mask)"/>
        </svg>

        {/* Mobile line */}
        <svg className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100" preserveAspectRatio="none">
          <path d="M 2,0 L 2,100" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke"/>
          <mask id="path-mask-mobile">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke"/>
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="#0a0a2e" strokeWidth="4" strokeDasharray="4 6" mask="url(#path-mask-mobile)" vectorEffect="non-scaling-stroke"/>
        </svg>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} pathLength={pathLength} containerRef={containerRef}/>
          ))}
          <div data-aos="fade-in" data-aos-delay="600"
            className="hidden md:block absolute top-[1080px] left-[55%] font-['Caveat',cursive] text-2xl text-gray-500 rotate-6">
            More coming soon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
