import React from 'react'
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="w-full bg-black/10 backdrop-blur-md pt-20 border-t border-white/5">
            <div className="max-w-[70rem] mx-auto px-6 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Left side: Name */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            Abdulla Abdul Raoof
                        </h2>
                    </div>

                    {/* Right side: Contact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {/* Gmail */}
                        <a 
                            href="mailto:abdullaabdulraoof@mail.com" 
                            className="flex items-center gap-4 text-[#9CA3AF] hover:text-white transition-colors group"
                        >
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-red-500/10 transition-colors">
                                <Mail size={22} className="text-red-500" />
                            </div>
                            <span className="text-base font-medium">abdullaabdulraoof@mail.com</span>
                        </a>

                        {/* GitHub */}
                        <a 
                            href="https://github.com/abdullaabdulraoof" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-[#9CA3AF] hover:text-white transition-colors group"
                        >
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-white/10 transition-colors">
                                <Github size={22} className="text-white" />
                            </div>
                            <span className="text-base font-medium">https://github.com/abdullaabdulraoof</span>
                        </a>

                        {/* WhatsApp */}
                        <a 
                            href="https://wa.me/87148896195" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-[#9CA3AF] hover:text-white transition-colors group"
                        >
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-green-500/10 transition-colors">
                                <MessageCircle size={22} className="text-green-500" />
                            </div>
                            <span className="text-base font-medium">87148896195</span>
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/in/abdullaabdulraoof/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-[#9CA3AF] hover:text-white transition-colors group"
                        >
                            <div className="bg-white/5 p-2 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                                <Linkedin size={22} className="text-blue-500" />
                            </div>
                            <span className="text-base font-medium">https://www.linkedin.com/in/abdullaabdulraoof/</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-white/5 backdrop-blur-lg py-8 px-6 border-t border-white/5">
                <div className="max-w-[70rem] mx-auto flex justify-between items-center text-white/50 text-sm font-medium tracking-wide">
                    <p>2026</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer