import React from 'react';

const skillGroups = [
  {
    category: "Languages & Core",
    skills: [
      { name: "Python", level: 85 },
      { name: "DSA", level: 75 },
      { name: "SQL", level: 70 },
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Arduino IDE", level: 80 },
      { name: "VS Code", level: 90 },
    ]
  },
  {
    category: "Domain Knowledge",
    skills: [
      { name: "Deep Learning / ANN", level: 75 },
      { name: "IoT & Embedded Systems", level: 80 },
      { name: "Data Preprocessing", level: 80 },
      { name: "Computer Networks", level: 65 },
    ]
  },
];

const certs = [
  { name: "Basic Python Programming", year: "2024" },
  { name: "Data Structures & Algorithms", year: "2025" },
  { name: "Project Management", year: "2025" },
];

const Skills = () => (
  <section id="skills" className="bg-[#0a0a2e] pt-24 pb-32 px-6 md:px-12 w-full">
    <div className="max-w-6xl mx-auto">

      <div data-aos="fade-up" className="mb-16">
        <div className="inline-block border border-[#00d4ff]/30 rounded-full px-5 py-1.5 text-sm text-[#00d4ff] font-bold mb-6">
          Skills
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
          What I work with
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {skillGroups.map(({ category, skills }) => (
          <div key={category} data-aos="fade-up" className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-[#00d4ff] font-bold text-xs tracking-widest uppercase mb-6">{category}</h3>
            <div className="flex flex-col gap-5">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white font-semibold text-sm">{name}</span>
                    <span className="text-white/40 text-xs font-mono">{level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]"
                      style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div data-aos="fade-up">
        <h3 className="text-white/50 text-xs font-bold tracking-widest uppercase mb-6">Certifications</h3>
        <div className="flex flex-wrap gap-4">
          {certs.map(({ name, year }) => (
            <div key={name} className="flex items-center gap-3 bg-white/5 border border-[#00d4ff]/20 rounded-xl px-5 py-3">
              <svg className="w-4 h-4 text-[#00d4ff] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-white font-semibold text-sm">{name}</span>
              <span className="text-white/30 text-xs font-mono ml-1">{year}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Skills;
