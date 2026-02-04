export default function Work() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] opacity-20"></div>
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4">
                <div className="glass-card !bg-black/60 !backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-2xl border-white/10">
                    <a className="flex items-center gap-2 group" href="/">
                        <div className="size-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg group-hover:scale-105 transition-transform">
                            IFY
                        </div>
                        <span className="font-bold text-sm tracking-wide group-hover:text-primary transition-colors">
                            İbrahim Furkan YILMAZ
                        </span>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            className="text-sm text-white font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
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
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-2 group"
                        href="/contact"
                    >
                        <span className="material-symbols-outlined text-[16px] group-hover:text-primary transition-colors">
                            mail
                        </span>
                        <span>Contact</span>
                    </a>
                </div>
            </nav>

            <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
                <div className="max-w-[1200px] w-full mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Portfolio Gallery
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            Selected{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                Works
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                            A curated collection of digital products, hardware engineering,
                            and mobile experiences crafted with precision and passion.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                    </div>
                </div>

                <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-5">
                    {/* Canım Bebem */}
                    <div className="glass-card rounded-[2rem] p-0 col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: "url('/canim-bebem.png')",
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                        <div className="absolute top-6 left-6 z-20 flex gap-2">
                            <span className="tag px-3 py-1.5 rounded-full text-xs font-semibold text-white">
                                E-commerce
                            </span>
                            <span className="tag px-3 py-1.5 rounded-full text-xs font-semibold text-white">
                                Web Platform
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                            <div className="flex justify-between items-end">
                                <div className="space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                        Canım Bebem
                                    </h2>
                                    <p className="text-gray-300 text-base md:text-lg max-w-md line-clamp-2 md:line-clamp-none">
                                        Türkiye's premier baby product marketplace featuring a
                                        custom-built inventory management system and seamless payment
                                        gateway integration.
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="text-xs font-mono text-gray-400">
                                            #React
                                        </span>
                                        <span className="text-xs font-mono text-gray-400">
                                            #NodeJS
                                        </span>
                                        <span className="text-xs font-mono text-gray-400">
                                            #MongoDB
                                        </span>
                                    </div>
                                </div>
                                <div className="size-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl cursor-pointer hover:bg-primary hover:text-white">
                                    <span className="material-symbols-outlined text-2xl">
                                        arrow_outward
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LexiFlow */}
                    <div className="glass-card rounded-[2rem] p-6 col-span-1 md:col-span-1 row-span-2 flex flex-col relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black z-0"></div>
                        <div className="relative z-10 flex justify-between items-start mb-4">
                            <div className="size-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                                <span className="material-symbols-outlined">smartphone</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition-colors">
                                arrow_outward
                            </span>
                        </div>
                        <div className="relative z-10 flex-1 flex items-center justify-center">
                            <div
                                className="w-40 h-64 bg-gray-900 rounded-2xl border-[6px] border-gray-800 shadow-2xl rotate-[-6deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 relative overflow-hidden ring-1 ring-white/10"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqF-VoEqwmxfE5wN2Lf7jyQZkuk9xzy2v0jS6WwceNz3rq9L4u83LvR3iCnG1uQyT6uqJMBsdhDOlj0m5w4s5JUKaWik6n-jHFmui6c2alhhyxdJP-KjVzDHRt4KtfpkUuVEWdMfltPkYgHaWQCd23YOWk4JEWd2H844yLn4-IiYu_Fb0WdoeDSdjGD-ORrvN1aEfu3lq_GhzLukhc8y5CcHO1jXwexpM5jUkhQB8CeZJrK1msEnjoKqOeUwpd-s_XER206uwDwkGb')",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                        </div>
                        <div className="relative z-10 mt-6">
                            <div className="flex gap-2 mb-2">
                                <span className="tag px-2 py-0.5 rounded-md text-[10px] font-bold uppercase text-indigo-300">
                                    iOS
                                </span>
                                <span className="tag px-2 py-0.5 rounded-md text-[10px] font-bold uppercase text-purple-300">
                                    SwiftUI
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">LexiFlow</h3>
                            <p className="text-sm text-gray-400 line-clamp-2">
                                An intuitive reading assistant app designed to help users
                                improve focus and retention.
                            </p>
                        </div>
                    </div>



                    {/* Digi Garden */}
                    <div className="glass-card rounded-[2rem] p-6 col-span-1 flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1025] to-black z-0"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="size-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <span className="material-symbols-outlined">psychiatry</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition-colors">
                                arrow_outward
                            </span>
                        </div>
                        <div className="relative z-10 flex-1 flex items-center justify-center my-2">
                            <span className="material-symbols-outlined text-5xl text-purple-500/20 group-hover:text-purple-400 transition-all duration-500 scale-90 group-hover:scale-110">
                                local_florist
                            </span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                                Digi Garden
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">
                                AI-powered plant monitoring system.
                            </p>
                        </div>
                    </div>



                    {/* SecureChain */}
                    <div className="glass-card rounded-[2rem] p-6 col-span-1 flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <div className="size-10 rounded-lg bg-red-900/20 border border-red-500/30 flex items-center justify-center text-red-400">
                                <span className="material-symbols-outlined">security</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-white transition-colors">
                                arrow_outward
                            </span>
                        </div>
                        <div className="relative z-10 mt-auto pt-6">
                            <span className="tag px-2 py-0.5 rounded-md text-[10px] font-bold uppercase text-red-200 mb-2 inline-block">
                                Cybersecurity
                            </span>
                            <h3 className="text-lg font-bold text-white">SecureChain</h3>
                            <p className="text-xs text-gray-400 mt-1">
                                Blockchain-based identity verification.
                            </p>
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
