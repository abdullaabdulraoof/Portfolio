import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { myProjects } from '../constants';
import { ExternalLink, Github, Monitor, Cpu, X, CheckCircle2, Info } from 'lucide-react';

// ── NO-SCROLL MODAL — everything fits in one view ──────────────────────────
const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6" style={{ zIndex: 99999 }}>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal — fixed height, no scroll */}
            <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                transition={{ type: 'spring', damping: 30, stiffness: 280 }}
                className="relative w-full max-w-5xl bg-[#0d0d0d] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                style={{ height: 'min(88vh, 640px)' }}
            >
                {/* ── LAYOUT: Left Image Panel + Right Details ── */}
                <div className="flex h-full">

                    {/* ── LEFT: Image Panel ── */}
                    <div className="hidden md:flex w-[38%] flex-col relative shrink-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.spotlight})` }}
                        />
                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/30" />

                        {/* Title over image */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest border ${
                                    project.isClient
                                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                        : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                                }`}>
                                    {project.isClient ? 'Client' : 'Personal'}
                                </span>
                                <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{project.category}</span>
                            </div>
                            <h2 className="text-xl font-black text-white leading-tight">{project.title}</h2>
                        </div>
                    </div>

                    {/* ── RIGHT: All Details ── */}
                    <div className="flex-1 flex flex-col h-full overflow-hidden">
                        {/* Header bar */}
                        <div className="flex items-start justify-between p-5 border-b border-white/5 shrink-0">
                            {/* Mobile title (hidden on md+) */}
                            <div className="md:hidden">
                                <h2 className="text-lg font-black text-white leading-tight">{project.title}</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest border ${
                                        project.isClient
                                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                            : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                                    }`}>
                                        {project.isClient ? 'Client' : 'Personal'}
                                    </span>
                                </div>
                            </div>
                            <div className="hidden md:block" /> {/* spacer */}
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all shrink-0 ml-auto"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* 3-column detail grid — fits without scroll */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 overflow-hidden">

                            {/* Col 1: Description + Impact */}
                            <div className="p-5 flex flex-col gap-5 overflow-hidden">
                                {/* Description */}
                                <div>
                                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.18em] mb-2">About</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
                                </div>

                                {/* Impact */}
                                <div>
                                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.18em] mb-3">Impact</p>
                                    <div className="flex flex-col gap-2">
                                        {project.details.impact.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs text-gray-400 italic">
                                                <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Note */}
                                {project.details.note && (
                                    <div className="flex gap-2 p-3 rounded-lg bg-amber-500/5 border border-amber-500/10 text-amber-500/70 text-[10px] italic mt-auto">
                                        <Info size={12} className="shrink-0 mt-0.5" />
                                        <p>{project.details.note}</p>
                                    </div>
                                )}
                            </div>

                            {/* Col 2: Key Highlights */}
                            <div className="p-5 overflow-hidden">
                                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.18em] mb-3">Key Highlights</p>
                                <ul className="flex flex-col gap-3">
                                    {project.details.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Col 3: Tech Stack + Links */}
                            <div className="p-5 flex flex-col gap-5 overflow-hidden">
                                {/* Tech Stack */}
                                <div>
                                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.18em] mb-3">Tech Stack</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.details.techStack.split(' | ').map((tech, i) => (
                                            <span key={i} className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags (icons) */}
                                <div>
                                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.18em] mb-3">Built With</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <div key={tag.id} className="w-8 h-8 p-1.5 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center" title={tag.name}>
                                                <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-col gap-2 mt-auto">
                                    {project.href !== '#' && (
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all"
                                        >
                                            <ExternalLink size={15} /> Live Demo
                                        </a>
                                    )}
                                    {project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold transition-all"
                                        >
                                            <Github size={15} /> GitHub Repo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

// ── PORTFOLIO PAGE ──────────────────────────────────────────────────────────
const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(myProjects);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    useEffect(() => {
        setFilteredProjects(filter === 'all' ? myProjects : myProjects.filter(p => p.category === filter));
    }, [filter]);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 relative z-10">
            <div className="max-w-[70rem] mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 tracking-tighter"
                    >
                        Welcome To My <span className="text-blue-500">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4"
                    >
                        An immersive gallery of my technical journey, spanning from intelligent IoT systems to high-performance web applications.
                    </motion.p>
                </div>

                {/* Filter */}
                <div className="flex justify-center mb-10 md:mb-12 overflow-x-auto no-scrollbar pb-4 md:pb-0">
                    <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 min-w-max">
                        {['all', 'webapp', 'ai-iot'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                                    filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {cat === 'all' ? 'All Projects' : cat === 'webapp' ? 'WebApps' : 'AI & IoT'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer flex flex-col md:flex-row h-full"
                            >
                                {/* Thumbnail */}
                                <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${project.spotlight})`,
                                            backgroundColor: project.logoStyle.backgroundColor
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            {project.category === 'webapp'
                                                ? <Monitor className="w-4 h-4 text-blue-400" />
                                                : <Cpu className="w-4 h-4 text-purple-400" />}
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{project.category}</span>
                                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold border ${
                                                project.isClient
                                                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                                    : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                                            }`}>
                                                {project.isClient ? 'Client' : 'Personal'}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">{project.desc}</p>

                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {project.tags.map((tag) => (
                                                <div key={tag.id} className="w-8 h-8 p-1.5 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center" title={tag.name}>
                                                    <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                        <span className="text-[10px] font-bold text-blue-400 tracking-widest">VIEW DETAILS</span>
                                        <div className="flex items-center gap-3 ml-auto">
                                            {project.href !== '#' && (
                                                <a href={project.href} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-500 hover:text-white transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {project.github !== '#' && (
                                                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-500 hover:text-white transition-colors">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Portal Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;