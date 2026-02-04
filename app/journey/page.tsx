export default function Journey() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
                <div className="glass-card !bg-black/40 rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-lg">
                    <a className="flex items-center gap-2 group" href="/">
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

            <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
                <div className="max-w-[1000px] w-full mb-10 relative">
                    <a
                        className="inline-flex items-center text-gray-500 hover:text-primary transition-colors gap-2 text-sm font-bold mb-8 group"
                        href="/about"
                    >
                        <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                            arrow_back
                        </span>
                        Back to Overview
                    </a>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        My Journey: <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Engineering the Future
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        From dismantling radios to architecting cloud-native systems. This is
                        the story of how curiosity turned into a career, and how engineering
                        became my way of impacting the world.
                    </p>
                </div>
                <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                    <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                <span className="material-symbols-outlined text-blue-400 text-2xl">
                                    memory
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                The Early Days
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                It began with a dusty Pentium 4 and an insatiable curiosity. I
                                wasn't just playing games; I was trying to understand how the
                                pixels moved. My first "Hello World" wasn't just text on a
                                screen—it was a realization that I could speak the language of
                                machines. This sparked a lifelong obsession with the intersection
                                of hardware and software.
                            </p>
                        </div>
                        <div className="relative z-10 mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                                Origins
                            </span>
                            <div className="h-px bg-white/10 flex-grow"></div>
                            <span className="text-xs text-primary font-mono">est. 2010</span>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>
                        <div className="relative z-10">
                            <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                <span className="material-symbols-outlined text-primary text-2xl">
                                    school
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                University Years @ AGÜ
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                At Abdullah Gül University, theory met practice. I dove deep into
                                computer architecture, falling in love with hardware acceleration
                                and FPGA. It was here I learned that efficient code isn't just
                                about speed—it's about elegance, resource management, and
                                understanding the silicon underneath.
                            </p>
                        </div>
                        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold border border-white/5 text-gray-300">
                                FPGA
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold border border-white/5 text-gray-300">
                                Verilog
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold border border-white/5 text-gray-300">
                                Embedded Systems
                            </span>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-8 md:p-12 md:col-span-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-dashed border-white/5 rounded-full opacity-20 animate-[spin_10s_linear_infinite]"></div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-3 mb-6 text-primary">
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                    <span className="text-xs font-bold uppercase tracking-widest">
                                        The Venture
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold mb-6 text-white">
                                    Venturing into Entrepreneurship
                                </h2>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Founding my own companies was a crash course in resilience. From
                                    2 AM debugging sessions to pitching to investors, I learned that
                                    the best code in the world doesn't matter if it doesn't solve a
                                    real human problem. I thrive in the "zero-to-one" phase—taking
                                    an abstract idea and forging it into a tangible product.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-white">3</span>
                                        <span className="text-xs text-gray-500 uppercase">Ventures</span>
                                    </div>
                                    <div className="w-px h-10 bg-white/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-bold text-white">4+</span>
                                        <span className="text-xs text-gray-500 uppercase">Years</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex justify-center">
                                <div className="relative w-32 h-40">
                                    <div className="absolute bottom-0 left-0 w-8 h-16 bg-white/5 rounded-t-lg border border-white/10"></div>
                                    <div className="absolute bottom-0 left-10 w-8 h-24 bg-white/10 rounded-t-lg border border-white/10"></div>
                                    <div className="absolute bottom-0 left-20 w-8 h-36 bg-gradient-to-t from-primary to-blue-500 rounded-t-lg shadow-[0_0_20px_rgba(127,6,249,0.3)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">
                                    psychology
                                </span>
                                The Philosophy
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Technology is a tool, not the destination. My engineering
                                philosophy is simple: build robust, scalable, and meaningful
                                systems. Every line of code should serve a purpose and create
                                impact.
                            </p>
                            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                                <p className="text-xs text-gray-300 font-mono italic">
                                    "Simplicity is the soul of efficiency."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-[2rem] p-0 relative overflow-hidden group min-h-[250px] md:min-h-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('/milestone.png')",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                                    Milestone
                                </span>
                            </div>
                            <p className="text-white font-bold text-lg leading-tight">
                                Representing the vision at key industry summits.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Want to see what I'm building now?
                    </p>
                    <a
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
                        href="/work"
                    >
                        View My Work
                    </a>
                </div>
            </main>
            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 mt-auto w-full">
                <p>© 2026 İbrahim Furkan YILMAZ. Crafted with precision.</p>
            </footer>
        </>
    );
}
