export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
        <div className="glass-card !bg-black/40 rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-lg">
          <a className="flex items-center gap-2 group" href="#">
            <div className="size-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
              IFY
            </div>
            <span className="font-bold text-sm tracking-wide group-hover:text-primary transition-colors">
              İbrahim Furkan YILMAZ
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              href="/work"
            >
              Work
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              href="/about"
            >
              About
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              href="/stack"
            >
              Stack
            </a>
          </div>
          <a
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-2"
            href="/contact"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Contact</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen pt-28 pb-20 px-4 md:px-8 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 md:gap-6 grid-flow-dense">
          {/* Hero Section (Span 2x2) */}
          <div className="glass-card rounded-[2rem] p-6 md:p-10 col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Professional portrait of Ibrahim Furkan Yılmaz"
                  style={{
                    backgroundImage: "url('/profile.jpg')",
                  }}
                ></div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
                  Building Digital &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                    E-Commerce
                  </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  A Computer Engineer Student &amp; Entrepreneur based in Türkiye. Building scalable solutions from code to commerce.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 relative z-10">
              <a
                href="/work"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(127,6,249,0.3)]"
              >
                <span>My Projects</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 hover:bg-white/5 text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Location / Status Tile (Span 1x1) */}


          {/* Social Stack (Span 1x1) */}
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <a
              className="glass-card rounded-[1.5rem] p-4 flex items-center justify-between group hover:bg-[#1a1a1a] transition-all"
              href="https://www.linkedin.com/in/ibrahim-furkan-yilmaz-7645a8209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white">
                  <span className="font-bold text-lg">in</span>
                </div>
                <div>
                  <p className="font-bold text-sm">LinkedIn</p>
                  <p className="text-xs text-gray-400">Connect with me</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors -rotate-45">
                arrow_forward
              </span>
            </a>
            <a
              className="glass-card rounded-[1.5rem] p-4 flex items-center justify-between group hover:bg-[#1a1a1a] transition-all"
              href="https://github.com/IF-ies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#24292e] flex items-center justify-center text-white border border-white/10">
                  <span className="material-symbols-outlined text-lg">
                    code
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">GitHub</p>
                  <p className="text-xs text-gray-400">View source code</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors -rotate-45">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Project 1: Canım Bebem (Span 2x1) */}
          <a
            href="https://www.canimbebem.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-[2rem] p-0 col-span-1 md:col-span-2 relative group overflow-hidden min-h-[300px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="High quality baby products arranged aesthetically"
              style={{
                backgroundImage: "url('/canim-bebem.png')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/20 mb-3 inline-block">
                    E-commerce Platform
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Canım Bebem
                  </h3>
                  <p className="text-gray-300 text-sm max-w-sm">
                    High-quality baby products marketplace with seamless
                    checkout experience.
                  </p>
                </div>
                <div className="size-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project 2: LexiFlow (Span 1x1) */}
          <div className="glass-card rounded-[2rem] p-6 col-span-1 md:col-span-1 flex flex-col justify-between group min-h-[300px]">
            <div className="flex justify-between items-start mb-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white">
                  smartphone
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">
                arrow_outward
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center py-4">
              <div
                className="w-32 h-48 bg-gray-800 rounded-xl border-4 border-gray-700 shadow-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300 relative overflow-hidden"
                data-alt="Sleek mobile app interface mockup on a phone screen"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqF-VoEqwmxfE5wN2Lf7jyQZkuk9xzy2v0jS6WwceNz3rq9L4u83LvR3iCnG1uQyT6uqJMBsdhDOlj0m5w4s5JUKaWik6n-jHFmui6c2alhhyxdJP-KjVzDHRt4KtfpkUuVEWdMfltPkYgHaWQCd23YOWk4JEWd2H844yLn4-IiYu_Fb0WdoeDSdjGD-ORrvN1aEfu3lq_GhzLukhc8y5CcHO1jXwexpM5jUkhQB8CeZJrK1msEnjoKqOeUwpd-s_XER206uwDwkGb')",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">LexiFlow</h3>
              <p className="text-sm text-gray-400">Mobile App Development</p>
            </div>
          </div>

          {/* Project 3: FPGA & Vivado (Span 1x1) */}
          <div className="glass-card rounded-[2rem] p-6 col-span-1 md:col-span-1 flex flex-col justify-between group min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className="size-12 rounded-xl bg-[#0f1f15] border border-green-500/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-400">
                  memory
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">
                arrow_outward
              </span>
            </div>
            <div className="relative z-10 flex-1 flex items-center justify-center my-4">
              {/* Abstract Circuit Visualization */}
              <svg
                className="w-24 h-24 text-green-500/50 group-hover:text-green-400 transition-colors duration-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h6v6h-6z M14 4h6v6h-6z M4 14h6v6h-6z M14 14h6v6h-6z"></path>
                <path d="M7 10v4 M17 10v4 M10 7h4 M10 17h4"></path>
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">FPGA &amp; Vivado</h3>
              <p className="text-sm text-gray-400">Hardware Engineering</p>
            </div>
          </div>

          {/* Project 4: Digi Garden (Span 1x1 - Last item desktop) */}
          <div className="glass-card rounded-[2rem] p-6 col-span-1 md:col-span-1 lg:col-span-1 hidden md:flex flex-col justify-between group min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-black z-0"></div>
            {/* Decorative grid */}
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#4b5563 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className="size-12 rounded-xl bg-[#1e1b2e] border border-purple-500/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-400">
                  potted_plant
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">
                arrow_outward
              </span>
            </div>
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="relative">
                <span className="material-symbols-outlined text-6xl text-purple-500/40 group-hover:text-purple-400 transition-colors duration-500">
                  local_florist
                </span>
                <div className="absolute top-0 right-0 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.8)]"></div>
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">Digi Garden</h3>
              <p className="text-sm text-gray-400">AI &amp; Growth Data</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm">
        <p>© 2026 İbrahim Furkan Yılmaz. Crafted with precision.</p>
      </footer>
    </>
  );
}
