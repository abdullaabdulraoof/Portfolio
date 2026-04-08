import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { myProjects } from '../constants/index.js';

const ProjectShowcase = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-300, 300], [10, -10]);
    const rotateY = useTransform(x, [-300, 300], [-10, 10]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left - rect.width / 2;
        const mouseY = event.clientY - rect.top - rect.height / 2;
        x.set(mouseX);
        y.set(mouseY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1500 }}
            className="relative w-full aspect-[4/3] max-w-[550px]"
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full h-full rounded-[2.5rem] bg-[#020617]/40 backdrop-blur-2xl border border-white/10 p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden group"
            >
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                
                {/* Project Image Container */}
                <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border border-white/5 bg-[#0a0a0a]">
                    <img 
                        src={project.texture} 
                        className={`w-full h-full object-cover ${project.title.includes('RAG') ? 'object-left' : 'object-center'} transition-transform duration-700 group-hover:scale-110`} 
                        alt={project.title}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x800?text=' + project.title }}
                    />
                    
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Floating Index Node */}
                <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl">
                    <span className="text-blue-500 font-bold text-sm">0{index + 1}</span>
                    <div className="w-px h-3 bg-white/20" />
                    <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Featured Project</span>
                </div>
            </motion.div>

            {/* Orbiting Elements (Visual Flair) */}
            <div className="absolute -z-10 -inset-4 bg-blue-500/5 blur-[120px] rounded-full animate-pulse-slow" />
        </motion.div>
    );
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectCount = myProjects.length;

    const handleNavigation = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === 'next') {
                return (prevIndex + 1) % projectCount;
            } else {
                return (prevIndex - 1 + projectCount) % projectCount;
            }
        });
    };

    const currentProject = myProjects[currentIndex];

    return (
        <section id="work" className="section relative py-20 bg-transparent text-white overflow-hidden">
            <div className="max-w-[70rem] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-20">
                    <div className="space-y-2">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-500 font-bold tracking-[0.3em] text-[9px] md:text-[10px] uppercase"
                        >
                            Curated Selection
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold tracking-tighter"
                        >
                            Featured <span className="text-gray-500">Works.</span>
                        </motion.h2>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/portfolio" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 backdrop-blur-sm">
                            <span className="text-xs md:text-sm font-bold tracking-wide uppercase text-gray-300 group-hover:text-white">View Full Archive</span>
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <span className="text-base md:text-lg">→</span>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side: Original Text Style */}
                    <div className="space-y-6 md:space-y-8 relative order-2 lg:order-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-4 md:space-y-6"
                            >
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold">{currentProject.title}</h3>
                                    <p className="text-blue-400 text-sm md:text-base font-medium">{currentProject.subdesc}</p>
                                </div>

                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                                    {currentProject.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {currentProject.tags.map((tag) => (
                                        <div key={tag.id} className="flex items-center gap-2 bg-white/5 border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full hover:bg-white/10 transition-colors">
                                            <img src={tag.path} alt={tag.name} className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                                            <span className="text-[10px] md:text-sm text-gray-300">{tag.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Traditional Navigation Arrows */}
                        <div className="flex gap-4 pt-4 md:pt-8">
                            <button
                                onClick={() => handleNavigation('prev')}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl md:text-2xl text-gray-400 hover:text-white">←</span>
                            </button>
                            <button
                                onClick={() => handleNavigation('next')}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-main-gradient flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <span className="text-xl md:text-2xl text-white">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Re-using the 3D Showcase Portal */}
                    <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <ProjectShowcase key={currentIndex} project={currentProject} index={currentIndex} />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;