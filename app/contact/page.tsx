"use client";

import emailjs from '@emailjs/browser';

export default function Contact() {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_dgkk5q8', 'template_hkgstwc', e.currentTarget, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                alert("Mesajın başarıyla gönderildi!");
            }, (error) => {
                alert("Bir hata oluştu, tekrar dene.");
            });
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-30"></div>
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
                        className="bg-primary text-white text-xs font-bold py-2.5 px-6 rounded-full transition-all shadow-[0_0_15px_rgba(127,6,249,0.3)] hover:shadow-[0_0_20px_rgba(127,6,249,0.5)] flex items-center gap-2"
                        href="/contact"
                    >
                        <span className="material-symbols-outlined text-[16px]">
                            send
                        </span>
                        <span>Contact</span>
                    </a>
                </div>
            </nav>

            <main className="min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col items-center">
                <div className="max-w-[1200px] w-full mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Available for hire
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                        Let's build{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            something
                        </span>{" "}
                        great
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        Have a project in mind or just want to say hi? Feel free to reach
                        out through the form or my social channels.
                    </p>
                </div>

                <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-10 col-span-1 md:col-span-2 row-span-2">
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">
                                chat_bubble
                            </span>
                            Send a Message
                        </h2>
                        <form className="space-y-6" onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">
                                        Your Name
                                    </label>
                                    <input
                                        className="input-field"
                                        placeholder="John Doe"
                                        type="text"
                                        name="user_name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        className="input-field"
                                        placeholder="john@example.com"
                                        type="email"
                                        name="user_email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 ml-1">
                                    Message
                                </label>
                                <textarea
                                    className="input-field resize-none"
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    name="message"
                                ></textarea>
                            </div>
                            <button
                                className="neon-btn w-full py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 group"
                                type="submit"
                            >
                                <span>Send Message</span>
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </button>
                        </form>
                    </div>

                    <div className="glass-card rounded-[2rem] p-6 flex flex-col justify-between group">
                        <div className="flex justify-between items-start">
                            <div className="size-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                <span className="material-symbols-outlined">share</span>
                            </div>
                            <span className="text-xs text-gray-500 font-mono">Connect</span>
                        </div>
                        <div className="mt-6 flex flex-col gap-3">
                            <a
                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link"
                                href="https://www.linkedin.com/in/ibrahim-furkan-yilmaz-7645a8209/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm font-medium">LinkedIn</span>
                                <span className="material-symbols-outlined text-sm text-gray-600 group-hover/link:text-white transition-colors">
                                    arrow_outward
                                </span>
                            </a>
                            <a
                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link"
                                href="https://github.com/IF-ies"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm font-medium">GitHub</span>
                                <span className="material-symbols-outlined text-sm text-gray-600 group-hover/link:text-white transition-colors">
                                    arrow_outward
                                </span>
                            </a>
                            <a
                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link"
                                href="https://x.com/i_furkan_yilmaz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm font-medium">Twitter (X)</span>
                                <span className="material-symbols-outlined text-sm text-gray-600 group-hover/link:text-white transition-colors">
                                    arrow_outward
                                </span>
                            </a>
                            <a
                                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link"
                                href="https://www.instagram.com/i_furkanyilmaz/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="text-sm font-medium">Instagram</span>
                                <span className="material-symbols-outlined text-sm text-gray-600 group-hover/link:text-white transition-colors">
                                    arrow_outward
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden group">
                        <div
                            className="absolute inset-0 opacity-10 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByKGRcsyjncCuVO2z7AGlxWmIxv_B7JvkcdscTzmBInsYLUYHAiZ0t1cEKt_0scJYsgUH66S_fq8agbxjYiEICWvcmH2EZPiDTLL8dErayx4SL97j4EPXjdSwg1OyXg4cK4cTrGHtosSKWFU3N-7HMM5XNw-pEPt81zE3SxnSGy3FsWqf8SMTgBwxHzmqNd7Em_VH8KlnCiF06gbEtT256rzrYqQuhc13F9DYiui61qBaAxN6yDkr20cbq86jqsOTq-JBV6dxaORJI')",
                            }}
                        ></div>
                        <div className="relative z-10">
                            <div className="size-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                                <span className="material-symbols-outlined">
                                    location_on
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                Kayseri, TR
                            </h3>
                            <p className="text-sm text-gray-400">
                                Available for remote work worldwide and on-site projects in
                                Turkey.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                                <span className="material-symbols-outlined text-sm">
                                    schedule
                                </span>
                                <span>Local Time: GMT+3</span>
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