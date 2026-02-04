export default function Contact() {
    return (
        <>
            {/* Atmospheric Glows */}
            <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
            <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Navigation */}
                <header className="w-full flex justify-center pt-6 px-6">
                    <div className="w-full max-w-[1280px] glass-panel rounded-xl px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <a href="/" className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="font-bold text-lg">IF</span>
                            </a>
                            <h2 className="text-white text-base font-bold tracking-tight hidden sm:block">
                                İbrahim Furkan YILMAZ
                            </h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <a
                                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                                href="/"
                            >
                                Home
                            </a>
                            <a
                                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                                href="/work"
                            >
                                Projects
                            </a>
                            <a
                                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                                href="/about"
                            >
                                About
                            </a>
                            <a
                                className="text-white text-sm font-bold border-b-2 border-primary pb-0.5"
                                href="/contact"
                            >
                                Contact
                            </a>
                        </nav>
                        <button className="flex items-center justify-center gap-2 h-9 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm font-medium text-white group">
                            <span>Download CV</span>
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform">
                                download
                            </span>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow flex items-center justify-center p-6 py-10">
                    <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                        {/* Left Column: Contact Form */}
                        <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                            <div className="glass-panel rounded-xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden group">
                                {/* Decorative gradient inside card */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
                                <div className="relative z-10">
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                                        Let's Build Something{" "}
                                        <span className="text-primary">Together</span>
                                    </h1>
                                    <p className="text-gray-400 text-lg mb-10 max-w-xl">
                                        Have a project in mind or just want to chat? Fill out the
                                        form below or reach out directly.
                                    </p>
                                    <form className="space-y-6 max-w-2xl">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 ml-1">
                                                    Name
                                                </label>
                                                <div className="relative group/input">
                                                    <span className="material-symbols-outlined absolute left-4 top-4 text-gray-500 group-focus-within/input:text-primary transition-colors">
                                                        person
                                                    </span>
                                                    <input
                                                        className="w-full bg-black/40 border border-white/10 rounded-lg h-14 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all hover:border-white/20"
                                                        placeholder="John Doe"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 ml-1">
                                                    Email
                                                </label>
                                                <div className="relative group/input">
                                                    <span className="material-symbols-outlined absolute left-4 top-4 text-gray-500 group-focus-within/input:text-primary transition-colors">
                                                        mail
                                                    </span>
                                                    <input
                                                        className="w-full bg-black/40 border border-white/10 rounded-lg h-14 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all hover:border-white/20"
                                                        placeholder="john@example.com"
                                                        type="email"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">
                                                Message
                                            </label>
                                            <div className="relative group/input">
                                                <span className="material-symbols-outlined absolute left-4 top-4 text-gray-500 group-focus-within/input:text-primary transition-colors">
                                                    chat_bubble
                                                </span>
                                                <textarea
                                                    className="w-full bg-black/40 border border-white/10 rounded-lg min-h-[160px] py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none transition-all hover:border-white/20"
                                                    placeholder="Tell me about your project..."
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <button
                                                className="bg-primary hover:bg-[#6d05d6] text-white font-bold py-4 px-8 rounded-xl shadow-neon hover:shadow-neon-hover transition-all duration-300 w-full md:w-auto flex items-center justify-center gap-2 group/btn"
                                                type="button"
                                            >
                                                <span>Send Message</span>
                                                <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">
                                                    send
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Bento Grid Info */}
                        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
                            {/* Socials Row */}
                            <div className="grid grid-cols-3 gap-4">
                                <a
                                    className="bento-card glass-panel aspect-square rounded-xl flex flex-col items-center justify-center gap-3 group"
                                    href="#"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        {/* LinkedIn Icon (SVG approximation) */}
                                        <svg
                                            className="w-5 h-5 fill-white group-hover:fill-primary transition-colors"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-white">
                                        LinkedIn
                                    </span>
                                </a>
                                <a
                                    className="bento-card glass-panel aspect-square rounded-xl flex flex-col items-center justify-center gap-3 group"
                                    href="#"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        {/* GitHub Icon */}
                                        <svg
                                            className="w-5 h-5 fill-white group-hover:fill-primary transition-colors"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-white">
                                        GitHub
                                    </span>
                                </a>
                                <a
                                    className="bento-card glass-panel aspect-square rounded-xl flex flex-col items-center justify-center gap-3 group"
                                    href="#"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        {/* X / Twitter Icon */}
                                        <svg
                                            className="w-5 h-5 fill-white group-hover:fill-primary transition-colors"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-white">
                                        X / Twitter
                                    </span>
                                </a>
                            </div>
                            {/* Email Copy Card */}
                            <div className="glass-panel bento-card rounded-xl p-6 relative overflow-hidden group cursor-pointer">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2 text-primary">
                                        <span className="material-symbols-outlined text-[20px]">
                                            alternate_email
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-wider">
                                            Email
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors">
                                        Click to copy
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-medium text-white break-all">
                                    ibrahim@example.com
                                </h3>
                                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-primary">
                                        content_copy
                                    </span>
                                </div>
                            </div>
                            {/* Location Card */}
                            <div className="glass-panel bento-card rounded-xl flex-grow min-h-[200px] relative overflow-hidden group">
                                {/* Abstract Map Background */}
                                <div className="absolute inset-0 z-0">
                                    {/* Using a CSS radial gradient pattern to simulate a dark tech map */}
                                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-[#0a0a0a] to-black opacity-60"></div>
                                    <img
                                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 mix-blend-overlay"
                                        data-alt="Abstract dark map view of a city grid with street lights"
                                        data-location="Kayseri, Turkey"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuAyCry2u8pwdrX0AAEXoPjVn8z6KDLA91XFAeySLIyUDY_VPuohJm1oRPgBRH9raabGOLmbDiBmuDoO4WmoMjUgXqpcbaxeECVa0AUGxvIPcyPCDohOoY6S8cnIMOaDS24KocQS8izxDvM0Nt4FmjsHEpADe4zQ9kX9gQqTqWe-I1FUs7T8tPFp6IxFnByn1_yPBnoRKasGmUk5P6J3ipJ1UhnpCGNKBRtkygt8qhh7tD_fI5x55QkT7iYX6biNTH2Va3YZrjzXq2"
                                    />
                                </div>
                                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/10">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                        </span>
                                        <span className="text-sm font-medium text-white">
                                            Kayseri, Turkey
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="text-center py-6 text-gray-600 text-sm">
                    <p>© 2026 İbrahim Furkan YILMAZ. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
