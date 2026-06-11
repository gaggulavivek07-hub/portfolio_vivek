import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a2e] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/5">
      {/* Big background text */}
      <motion.div style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16">
        <h1 className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
          Contact
        </h1>
      </motion.div>

      {/* Form card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div data-aos="fade-up"
          className="bg-[#00d4ff] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-[#0a0a2e] flex flex-col justify-between">

          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-70">
            Reach Out
          </div>

          <form className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-10">
                <input type="text" placeholder="First Name"
                  className="w-full bg-transparent border-b border-[#0a0a2e]/40 pb-3 text-lg focus:outline-none focus:border-[#0a0a2e] transition-colors placeholder-[#0a0a2e]/60 font-medium rounded-none" />
                <input type="text" placeholder="Last Name"
                  className="w-full bg-transparent border-b border-[#0a0a2e]/40 pb-3 text-lg focus:outline-none focus:border-[#0a0a2e] transition-colors placeholder-[#0a0a2e]/60 font-medium rounded-none" />
                <input type="email" placeholder="Email"
                  className="w-full bg-transparent border-b border-[#0a0a2e]/40 pb-3 text-lg focus:outline-none focus:border-[#0a0a2e] transition-colors placeholder-[#0a0a2e]/60 font-medium rounded-none" />
              </div>
              <div className="flex-1">
                <textarea placeholder="Tell me about your project or opportunity"
                  className="w-full min-h-[160px] bg-transparent border-b border-[#0a0a2e]/40 pb-3 text-lg focus:outline-none focus:border-[#0a0a2e] transition-colors placeholder-[#0a0a2e]/60 font-medium resize-none rounded-none" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-4 items-start md:items-end justify-between">
              <div className="flex items-start gap-3 text-sm font-medium">
                <input type="checkbox" id="permission"
                  className="mt-1 w-4 h-4 cursor-pointer" style={{ accentColor: "#0a0a2e" }} />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <p className="text-xs text-[#0a0a2e]/60 max-w-[200px] leading-relaxed">
                  gaggulavivek07@gmail.com · +91-9346255747
                </p>
                <button type="submit"
                  className="px-8 py-3 rounded-full border border-[#0a0a2e]/40 text-[#0a0a2e] font-black flex items-center gap-3 hover:bg-[#0a0a2e] hover:text-[#00d4ff] transition-all duration-300 group whitespace-nowrap">
                  Send Message
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
