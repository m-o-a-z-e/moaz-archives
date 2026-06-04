"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen text-vintage-text font-serif overflow-hidden selection:bg-seal-red selection:text-vintage-bg">
      
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
        <span className="text-[10rem] md:text-[15rem] font-bold tracking-tighter rotate-[-30deg] uppercase text-center leading-none whitespace-nowrap">Top Secret</span>
      </div>

      {/* Ink and Scratch Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Random Ink Blots */}
          <circle cx="12%" cy="18%" r="8" fill="#2c1e16" filter="blur(1.5px)" opacity="0.9" />
          <circle cx="12.5%" cy="18.5%" r="3" fill="#2c1e16" opacity="0.95" />
          
          <circle cx="85%" cy="75%" r="12" fill="#2c1e16" filter="blur(2px)" opacity="0.8" />
          <circle cx="84%" cy="74%" r="4" fill="#2c1e16" opacity="0.9" />
          
          <circle cx="45%" cy="88%" r="6" fill="#2c1e16" filter="blur(1px)" opacity="0.8" />
          <circle cx="46%" cy="89%" r="2" fill="#2c1e16" />
          
          <circle cx="75%" cy="12%" r="5" fill="#2c1e16" filter="blur(0.5px)" opacity="0.7" />

          {/* Random Scratches */}
          <path d="M 5vw 20vh Q 15vw 25vh 10vw 35vh" stroke="#2c1e16" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M 80vw 40vh Q 85vw 50vh 78vw 60vh" stroke="#2c1e16" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M 30vw 85vh Q 35vw 82vh 40vw 88vh" stroke="#2c1e16" strokeWidth="1" fill="none" opacity="0.7" />
          <path d="M 60vw 10vh Q 62vw 15vh 65vw 12vh" stroke="#2c1e16" strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* --- Hero Section --- */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-12 z-10 border-b-4 border-double border-vintage-border">
        
        {/* Header Details */}
        <div className="absolute top-4 w-[95%] border-y-2 border-vintage-border py-2 flex justify-between items-center text-xs md:text-sm uppercase tracking-widest font-mono">
          <span className="border-r border-vintage-border pr-4">Vol. I — No. 01</span>
          <span className="font-bold tracking-[0.4em] text-letterpress">The Moaz Archives</span>
          <span className="border-l border-vintage-border pl-4 text-seal-red font-bold">Top Secret</span>
        </div>

        <div className="text-center max-w-4xl px-4 mt-8 relative z-10">
          {/* Decorative Lines */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-1 border-t-2 border-b-2 border-vintage-border"></div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-letterpress animate-fade-in-up opacity-0"
            dir="ltr"
            style={{ animationDelay: '0.2s' }}
          >
            I cook up stories that stick<br />and run up the numbers brands are chasing
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-12 h-[1px] bg-vintage-border"></div>
            <p 
              className="text-lg md:text-xl font-mono tracking-wide max-w-2xl text-center"
              dir="ltr"
            >
              Digital Vibe Architect: Where raw human connection links up with razor sharp data.
            </p>
            <div className="w-12 h-[1px] bg-vintage-border"></div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            
            {/* Archive Button */}
            <motion.button 
              onClick={() => document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-10 py-4 bg-seal-red text-[#e2d8b4] uppercase tracking-[0.2em] font-bold border-2 border-seal-dark shadow-[2px_4px_10px_rgba(90,10,10,0.5)] transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 font-mono">Open the Archives</span>
              <span className="absolute inset-0 bg-seal-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="absolute -right-4 -bottom-4 opacity-20 w-16 h-16 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </motion.button>

            {/* Contact Button */}
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-10 py-4 bg-transparent text-vintage-text uppercase tracking-[0.2em] font-bold border-2 border-vintage-text hover:bg-vintage-text hover:text-vintage-bg transition-all duration-300 group"
            >
              <span className="relative z-10 font-mono">Tap in</span>
            </motion.button>

          </div>
        </div>
      </section>

      {/* --- Archives Section --- */}
      <section id="archives" className="relative w-full py-24 px-8 z-10 max-w-7xl mx-auto border-b-4 border-double border-vintage-border">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-[0.3em] text-letterpress inline-block border-b-2 border-vintage-border pb-4">The Archives</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case 1 */}
            <div className="p-10 border-2 border-vintage-border bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[4px_4px_0px_var(--vintage-border)] relative group transition-transform hover:-translate-y-1">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-seal-red rounded-full flex items-center justify-center text-[#e2d8b4] text-[10px] font-bold rotate-12 border-2 border-vintage-border shadow-md">SEALED</div>
              <p className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Case No. 001</p>
              <h3 className="text-3xl font-bold mb-4 font-serif border-b border-dashed border-vintage-border pb-2">Operation AICO</h3>
              <p className="mb-8 font-mono text-sm leading-relaxed text-left" dir="ltr">
                When the station went dark, this wasn't just another campaign it was a straight-up rescue op. We cooked up 'AICO' a little bot with one job: bring back the "uplink protocol".
              </p>
              <div className="bg-[rgba(0,0,0,0.03)] p-4 border-l-4 border-seal-red font-mono text-sm font-bold">
                <p className="mb-2 flex justify-between"><span>Target: 500 Sign-ups</span> <span>Achieved: <span className="text-seal-red text-lg">900</span></span></p>
                <p className="flex justify-between"><span>Target: 400 Attendees</span> <span>Achieved: <span className="text-seal-red text-lg">600</span></span></p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-10 border-2 border-vintage-border bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[4px_4px_0px_var(--vintage-border)] relative group transition-transform hover:-translate-y-1">
              <div className="absolute top-4 right-4 text-seal-red font-bold text-2xl opacity-50 group-hover:opacity-100 transition-opacity border-4 border-seal-red p-1 rotate-[-5deg]">CONFIDENTIAL</div>
              <p className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Case No. 002</p>
              <h3 className="text-3xl font-bold mb-4 font-serif border-b border-dashed border-vintage-border pb-2">The Cube Cipher</h3>
              <p className="mb-8 font-mono text-sm leading-relaxed text-left" dir="ltr">
                A student’s come-up ain’t a straight line it’s a Rubik’s Cube. The whole campaign was about building the ultimate, well rounded powerhouse, and flipping every wrong twist into a lesson.
              </p>
              <div className="bg-[rgba(0,0,0,0.03)] p-4 border-l-4 border-seal-red font-mono text-sm font-bold">
                <p className="mb-2 flex justify-between"><span>Registered: 1000</span> <span>Converted: <span className="text-seal-red text-lg">700</span></span></p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="p-10 border-2 border-vintage-border bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[4px_4px_0px_var(--vintage-border)] relative group transition-transform hover:-translate-y-1 md:col-span-2">
              <div className="absolute -top-4 left-4 w-20 h-8 bg-vintage-border flex items-center justify-center text-letterpress text-[10px] font-bold -rotate-3 border-2 border-dashed border-gray-600 shadow-sm">EVIDENCE</div>
              <p className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Case No. 003</p>
              <h3 className="text-3xl font-bold mb-4 font-serif border-b border-dashed border-vintage-border pb-2">The Mystery Stack</h3>
              <p className="mb-8 font-mono text-sm leading-relaxed text-left w-full md:w-3/4" dir="ltr">
                The tech landscape was a haunted house AI, Web, and Flutter were just spooky shadows. We didn't just drop an agenda; we launched a full on Mystery Inc. operation. Attendees became the detectives, hunting clues and unmasking the right tech stack to lock in their career path.
              </p>
              <div className="bg-[rgba(0,0,0,0.03)] p-4 border-l-4 border-gray-600 font-mono text-sm font-bold flex flex-col md:flex-row justify-between md:w-3/4">
                <p className="mb-2 md:mb-0 flex justify-between md:gap-4"><span>Detectives Recruited:</span> <span className="text-seal-red text-lg">850</span></p>
                <p className="flex justify-between md:gap-4"><span>Mysteries Solved:</span> <span className="text-seal-red text-lg">100%</span></p>
              </div>
            </div>

            {/* Case 4 */}
            <div className="p-10 border-2 border-vintage-border bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[4px_4px_0px_var(--vintage-border)] relative md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 font-serif">The Classified Files</h3>
              <p className="mb-6 font-mono text-base leading-loose" dir="ltr">
                Top secret plays for Egyptian heavy hitters brands, top docs, and the suits. The mission: a total visual facelift and an absolute takeover of the digital streets. The names are <span className="bg-seal-red text-seal-red select-none hover:bg-transparent hover:text-seal-red transition-all duration-500 cursor-not-allowed px-2">strictly encrypted and heavily redacted</span> for legal reasons. We don't drop names, we just drop results.
              </p>
            </div>
          </div>
        </section>

      {/* --- Operational History Section --- */}
      <section className="relative w-full py-24 px-8 z-10 max-w-5xl mx-auto border-b-4 border-double border-vintage-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-[0.3em] text-letterpress inline-block border-b-2 border-vintage-border pb-4">Operational History</h2>
          <p className="mt-6 font-mono text-sm text-gray-700 tracking-wider">Declassified service records and field deployments.</p>
        </div>
        
        {/* Timeline */}
        <div className="relative border-l-2 border-dashed border-vintage-border ml-2 md:ml-8">
          {/* Role 1 */}
          <div className="mb-12 pl-10 relative group">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-vintage-bg border-2 border-vintage-border rounded-full group-hover:bg-seal-red group-hover:border-seal-red transition-all duration-300 shadow-[0_0_0_4px_transparent] group-hover:shadow-[0_0_0_4px_rgba(158,27,27,0.2)]"></div>
            
            <p className="text-xs font-mono text-seal-red mb-2 font-bold tracking-[0.2em]">2025 — Present</p>
            <h3 className="text-2xl font-serif font-bold mb-1 group-hover:text-seal-red transition-colors">Marketing Committee Head</h3>
            <p className="text-sm font-mono text-gray-600 mb-4 uppercase tracking-widest border-b border-vintage-border inline-block pb-1">NASA & AIEC</p>
            <p className="font-mono text-sm leading-relaxed max-w-2xl text-left" dir="ltr">
              Mission Brief: Commanded a squad of marketers to execute high-impact tech events. Bridged the gap between complex AI concepts and mainstream audience engagement.
            </p>
          </div>

          {/* Role 2 */}
          <div className="pl-10 relative group">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-vintage-bg border-2 border-vintage-border rounded-full group-hover:bg-seal-red group-hover:border-seal-red transition-all duration-300 shadow-[0_0_0_4px_transparent] group-hover:shadow-[0_0_0_4px_rgba(158,27,27,0.2)]"></div>
            
            <p className="text-xs font-mono text-seal-red mb-2 font-bold tracking-[0.2em]">2025 — Present</p>
            <h3 className="text-2xl font-serif font-bold mb-1 group-hover:text-seal-red transition-colors">Freelance Digital Architect</h3>
            <p className="text-sm font-mono text-gray-600 mb-4 uppercase tracking-widest border-b border-vintage-border inline-block pb-1">Independent Operations</p>
            <p className="font-mono text-sm leading-relaxed max-w-2xl text-left" dir="ltr">
              Mission Brief: Deployed customized social media strategies and visual identities for top-tier local brands and public figures. Names remain heavily classified.
            </p>
          </div>

        </div>
      </section>

      {/* --- Methodology Section --- */}
      <section className="relative w-full py-24 px-8 z-10 max-w-4xl mx-auto border-b-4 border-double border-vintage-border text-center">
        <div className="inline-block p-2 border border-vintage-border mb-8 rotate-1">
          <h2 className="text-lg font-bold uppercase tracking-widest font-mono text-seal-red bg-[rgba(158,27,27,0.1)] px-4 py-2">Doc No. 3: Engineering Mindset</h2>
        </div>
        <p className="text-xl md:text-2xl leading-relaxed font-serif text-left italic relative before:content-[''] before:block before:w-12 before:h-12 before:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] before:absolute before:-top-4 before:-left-4 before:opacity-30" dir="ltr">
          "Winning marketing ain't a magic trick; it's precision-engineered human behavior. Behind every killer campaign that stops the scroll, there’s a heavy data architecture running the show in the back."
        </p>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="relative w-full py-24 px-8 z-10 max-w-5xl mx-auto mb-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-[0.3em] text-letterpress inline-block border-b-2 border-vintage-border pb-4">Drop a Wire</h2>
          <p className="mt-6 font-mono text-sm text-gray-700 tracking-wider">Secure lines are open for brands ready to stop playing and start scaling.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <form 
            action="https://formspree.io/f/xnjynvqr" 
            method="POST" 
            className="flex flex-col gap-8 font-mono bg-[rgba(255,255,255,0.05)] p-8 border-2 border-vintage-border shadow-[4px_4px_0px_var(--vintage-border)]"
          >
            <div className="relative">
              <input 
                type="text" 
                id="alias" 
                name="name" 
                required 
                placeholder=" " 
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent border-0 border-b-2 border-vintage-border appearance-none focus:outline-none focus:ring-0 focus:border-seal-red peer" 
              />
              <label htmlFor="alias" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-seal-red peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 uppercase tracking-widest">Name / Alias</label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder=" " 
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent border-0 border-b-2 border-vintage-border appearance-none focus:outline-none focus:ring-0 focus:border-seal-red peer" 
              />
              <label htmlFor="email" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-seal-red peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 uppercase tracking-widest">Return Frequency (Email)</label>
            </div>

            <div className="relative">
              <textarea 
                id="cipher" 
                name="message" 
                rows={4} 
                required 
                placeholder=" " 
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent border-0 border-b-2 border-vintage-border appearance-none focus:outline-none focus:ring-0 focus:border-seal-red peer resize-none"
              ></textarea>
              <label htmlFor="cipher" className="absolute text-sm text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-seal-red peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 uppercase tracking-widest">The Cipher (Message)</label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit" 
              className="self-start px-8 py-3 bg-vintage-text text-vintage-bg uppercase tracking-[0.2em] font-bold hover:bg-seal-red transition-colors border-2 border-transparent hover:border-seal-dark"
            >
              Transmit
            </motion.button>
          </form>

          {/* Direct Contact Channels */}
          <div className="flex flex-col justify-center gap-10 font-mono border-l-4 border-double border-vintage-border pl-10">
            <div className="relative group">
              <div className="absolute -left-[54px] top-1 w-6 h-6 bg-vintage-bg border-2 border-vintage-border rounded-full flex items-center justify-center group-hover:border-seal-red transition-colors">
                <div className="w-2 h-2 bg-vintage-text rounded-full group-hover:bg-seal-red transition-colors"></div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Secure Line</p>
              <a href="tel:+201023106296" className="text-xl md:text-2xl font-bold hover:text-seal-red transition-colors">+20 10 2310 6296</a>
            </div>
            
            <div className="relative group">
              <div className="absolute -left-[54px] top-1 w-6 h-6 bg-vintage-bg border-2 border-vintage-border rounded-full flex items-center justify-center group-hover:border-seal-red transition-colors">
                <div className="w-2 h-2 bg-vintage-text rounded-full group-hover:bg-seal-red transition-colors"></div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Confidential Drop</p>
              <a href="mailto:moazhany145@gmail.com" className="text-lg md:text-xl font-bold hover:text-seal-red transition-colors">moazhany145@gmail.com</a>
            </div>
            
            <div className="relative group">
              <div className="absolute -left-[54px] top-1 w-6 h-6 bg-vintage-bg border-2 border-vintage-border rounded-full flex items-center justify-center group-hover:border-seal-red transition-colors">
                <div className="w-2 h-2 bg-vintage-text rounded-full group-hover:bg-seal-red transition-colors"></div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Professional Dossier</p>
              <a href="https://www.linkedin.com/in/moaz-hany-ab5172324/" className="text-xl md:text-2xl font-bold hover:text-seal-red transition-colors">LinkedIn Profile</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="relative w-full py-6 border-t-2 border-vintage-border text-center z-10 bg-[rgba(0,0,0,0.02)]">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
          © {new Date().getFullYear()} The Moaz Archives. All operations classified.
        </p>
      </footer>
    </main>
  );
}