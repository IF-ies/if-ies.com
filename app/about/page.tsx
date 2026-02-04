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
                        <div className="size-8 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain drop-shadow-sm" />
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
                                <div className="mt-6 grid grid-cols-2 gap-2 w-fit mx-auto md:mx-0">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400 text-center">
                                        Engineer
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400 text-center">
                                        Founder
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400 text-center">
                                        Maker
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-gray-400 text-center">
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
                    <div className="glass-card rounded-[2rem] p-4 col-span-1 md:col-span-2 row-span-1 flex flex-col justify-center relative overflow-hidden group">
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
                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="size-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-400 text-xl">
                                        history_edu
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none mb-0.5">
                                        University
                                    </p>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2 leading-none">
                                        Abdullah Gül University <span className="text-xs font-normal text-gray-300 ml-1">2022 - Continued</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Faculty</p>
                                    <p className="font-medium text-white text-sm">
                                        Formal Education Computer Engineering
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Focus Areas</p>
                                    <p className="font-medium text-white text-xs">
                                        Software Architecture, Mobile programming, Technology, Web
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-[2rem] p-4 col-span-1 md:col-span-2 row-span-1 flex flex-col justify-center relative overflow-hidden group">
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
                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="size-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-purple-400 text-xl">
                                        history_edu
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-purple-400 font-bold uppercase tracking-widest leading-none mb-0.5">
                                        University
                                    </p>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2 leading-none">
                                        Anadolu University <span className="text-xs font-normal text-gray-300 ml-1">2024 - Continued</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Faculty</p>
                                    <p className="font-medium text-white text-sm">
                                        Open Education Faculty Business Administration
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">Focus Areas</p>
                                    <p className="font-medium text-white text-xs">
                                        Business, Commerce, E-commerce, Accounting
                                    </p>
                                </div>
                            </div>
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
