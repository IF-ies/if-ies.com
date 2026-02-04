export default function Stack() {
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
                            className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
                            href="/about"
                        >
                            About
                        </a>
                        <a
                            className="text-sm text-white transition-colors font-medium bg-white/10 px-3 py-1 rounded-full"
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

            <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex justify-center">
                <div className="max-w-[1100px] w-full">
                    <div className="mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Tech Arsenal
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                            Tools that power my <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-500 text-glow">
                                Engineering Craft
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                            A curated selection of the software, hardware, and design tools I
                            use to build scalable applications and robust physical systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
                        {/* Development */}
                        <div className="glass-card rounded-[2rem] p-8 col-span-1 md:col-span-2 row-span-2 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-500"></div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-primary/20 border border-white/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-blue-400 text-2xl">
                                            code_blocks
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            Development
                                        </h3>
                                        <p className="text-sm text-gray-400">Core Software Stack</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group/item">
                                        <div className="size-10 flex items-center justify-center bg-[#61DAFB]/10 rounded-lg text-[#61DAFB]">
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                                <circle cx="12" cy="12" r="2"></circle>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover/item:text-[#61DAFB] transition-colors">
                                                React
                                            </h4>
                                            <p className="text-xs text-gray-500">
                                                Frontend Framework
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group/item">
                                        <div className="size-10 flex items-center justify-center bg-[#339933]/10 rounded-lg text-[#339933]">
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover/item:text-[#339933] transition-colors">
                                                Node.js
                                            </h4>
                                            <p className="text-xs text-gray-500">Backend Runtime</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group/item">
                                        <div className="size-10 flex items-center justify-center bg-[#3178C6]/10 rounded-lg text-[#3178C6]">
                                            <span className="font-bold text-lg">TS</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover/item:text-[#3178C6] transition-colors">
                                                TypeScript
                                            </h4>
                                            <p className="text-xs text-gray-500">Type Safety</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group/item">
                                        <div className="size-10 flex items-center justify-center bg-[#3776AB]/10 rounded-lg text-[#3776AB]">
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover/item:text-[#3776AB] transition-colors">
                                                Python
                                            </h4>
                                            <p className="text-xs text-gray-500">Data &amp; AI</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group/item sm:col-span-2">
                                        <div className="size-10 flex items-center justify-center bg-[#06B6D4]/10 rounded-lg text-[#06B6D4]">
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover/item:text-[#06B6D4] transition-colors">
                                                Tailwind CSS
                                            </h4>
                                            <p className="text-xs text-gray-500">Styling Framework</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hardware */}
                        <div className="glass-card rounded-[2rem] p-8 col-span-1 md:col-span-2 row-span-1 relative overflow-hidden group border-green-500/20">
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-green-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-green-500/30 transition-colors duration-500"></div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 h-full">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-[#0f1f15] border border-green-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                        <span className="material-symbols-outlined text-green-400 text-2xl">
                                            memory
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Hardware</h3>
                                        <p className="text-sm text-gray-400">
                                            FPGA &amp; Embedded Systems
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono">
                                        Verilog
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono">
                                        Vivado
                                    </span>
                                    <span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono">
                                        VHDL
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Design */}
                        <div className="glass-card rounded-[2rem] p-6 col-span-1 row-span-1 relative group hover:border-pink-500/40 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="size-10 rounded-lg bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-pink-500">
                                        <span className="material-symbols-outlined">palette</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                                        UI/UX
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Design</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <div className="flex items-center gap-1.5 bg-pink-500/10 px-2 py-1 rounded text-xs text-pink-400 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>{" "}
                                            Figma
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-purple-500/10 px-2 py-1 rounded text-xs text-purple-400 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                                            Spline
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Productivity */}
                        <div className="glass-card rounded-[2rem] p-6 col-span-1 row-span-1 relative group hover:border-orange-500/40 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="size-10 rounded-lg bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-orange-500">
                                        <span className="material-symbols-outlined">
                                            rocket_launch
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">
                                        Workflow
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Productivity
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300">
                                            Git
                                        </span>
                                        <span className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300">
                                            Notion
                                        </span>
                                        <span className="bg-white/5 px-2 py-1 rounded text-xs text-gray-300">
                                            Jira
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
                        <p className="text-gray-500 text-sm">
                            Always exploring new technologies.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-xs text-gray-400">Proficient</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-xs text-gray-400">Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm relative z-10">
                <p>© 2026 İbrahim Furkan YILMAZ. Crafted with precision.</p>
            </footer>
        </>
    );
}
