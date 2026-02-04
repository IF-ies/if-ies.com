export default function About() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
                <div className="glass-card !bg-black/40 rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-lg">
                    <a className="flex items-center gap-2 group" href="/">
                        <div className="size-8 rounded-full bg-black/20 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
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
                            className="text-sm text-white font-bold transition-colors"
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

            <main className="min-h-screen pt-28 pb-20 px-4 md:px-8 flex justify-center">
                <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 md:gap-6 grid-flow-dense">
                    <div className="glass-card rounded-[2rem] p-6 md:p-10 col-span-1 md:col-span-2 row-span-2 flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10 h-full">
                            <div className="w-full md:w-auto flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 overflow-hidden shadow-2xl mx-auto md:mx-0">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        data-alt="Professional portrait of Ibrahim Furkan Yılmaz"
                                        style={{
                                            backgroundImage: "url('/profile.jpg')",
                                        }}
                                    ></div>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                        Engineer
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                        Founder
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                        Maker
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400">
                                        Student
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="/cv.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black/40 border border-primary/30 text-white font-bold text-sm tracking-widest hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(127,6,249,0.3)] transition-all duration-300 group"
                                    >
                                        <span className="material-symbols-outlined text-lg text-primary group-hover:text-white transition-colors">
                                            download
                                        </span>
                                        DOWNLOAD CV
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center h-full space-y-4">
                                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                    Driven by{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                        Curiosity
                                    </span>
                                    ,<br />
                                    Defined by Impact.
                                </h1>
                                <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
                                    <p>
                                        My journey began with a simple curiosity about how things
                                        work, which quickly evolved into a passion for engineering
                                        complex systems. As a Computer Engineer, I don't just write
                                        code; I architect solutions that bridge the digital and
                                        physical worlds.
                                    </p>
                                    <p>
                                        I believe in the power of entrepreneurship to solve
                                        real-world problems. Whether it's optimizing hardware with
                                        FPGA or building scalable e-commerce platforms, my goal
                                        remains the same: to create value through technology.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <a
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
                                        href="/journey"
                                    >
                                        <span>Read full story</span>
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-6 col-span-1 md:col-span-2 row-span-1 flex flex-col justify-center relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                            style={{
                                backgroundImage: "url('/agu-aerial.jpg')",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-primary/80 opacity-90"></div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-10 right-10 opacity-10">
                            <span className="material-symbols-outlined text-9xl">school</span>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="size-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-400">
                                        history_edu
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">
                                        University
                                    </p>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        Abdullah Gül University <span className="text-sm font-normal text-gray-300 ml-1">2022 - Continued</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Faculty</p>
                                    <p className="font-medium text-white">
                                        Formal Education Computer Engineering
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Focus Areas</p>
                                    <p className="font-medium text-white text-sm">
                                        Hardware Acceleration, FPGA, Software Architecture
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-[2rem] p-6 col-span-1 md:col-span-2 row-span-1 flex flex-col justify-center relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                            style={{
                                backgroundImage: "url('/agu-aerial.jpg')",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80 opacity-90"></div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-10 right-10 opacity-10">
                            <span className="material-symbols-outlined text-9xl">school</span>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="size-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-purple-400">
                                        history_edu
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-purple-400 font-bold uppercase tracking-widest">
                                        University
                                    </p>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        Anadolu University <span className="text-sm font-normal text-gray-300 ml-1">2024 - Continued</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Faculty</p>
                                    <p className="font-medium text-white">
                                        Open Education Faculty Business Administration
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Focus Areas</p>
                                    <p className="font-medium text-white text-sm">
                                        Business, Commerce, E-commerce, Accounting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-6 col-span-1 row-span-1 flex flex-col justify-between group min-h-[260px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
                        <div className="relative z-10">
                            <div className="size-12 rounded-full bg-[#1a1a1a] border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(127,6,249,0.2)]">
                                <span className="material-symbols-outlined text-primary">
                                    rocket_launch
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                The Entrepreneurial Spirit
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Building isn't just about the tech; it's about the vision. I
                                thrive in the chaos of zero-to-one, turning abstract concepts
                                into viable products.
                            </p>
                        </div>
                        <div className="relative z-10 mt-4 pt-4 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white">Ventures</span>
                                <span className="text-xs text-gray-400">3 Launched</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-6 col-span-1 row-span-1 flex flex-col justify-between group min-h-[260px] relative overflow-hidden bg-[#0a0a0a]">
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                                backgroundSize: "20px 20px",
                            }}
                        ></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">
                                    Active
                                </span>
                            </div>
                        </div>
                        <div className="relative z-10 mt-2">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
                                Currently
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-1">
                                Building New Ventures
                            </h3>
                            <p className="text-sm text-gray-400">
                                Exploring AI agents &amp; SaaS solutions.
                            </p>
                        </div>
                        <div className="relative z-10 mt-4">
                            <button className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-colors">
                                Ask me about it
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-8 text-center text-gray-600 text-sm">
                <p>© 2026 İbrahim Furkan YILMAZ. Crafted with precision.</p>
            </footer>
        </>
    );
}
