import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { myProjects } from '../constants';
import { ExternalLink, Github, Monitor,Cpu } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState(myProjects);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredProjects(myProjects);
        } else {
            setFilteredProjects(myProjects.filter(p => p.category === filter));
        }
    }, [filter]);

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

                {/* Filter Navigation */}
                <div className="flex justify-center mb-10 md:mb-12 overflow-x-auto no-scrollbar pb-4 md:pb-0">
                    <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 min-w-max">
                        {['all', 'webapp', 'ai-iot'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                                    filter === cat 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {cat === 'all' ? 'All Projets' : cat === 'webapp' ? 'WebApps' : 'AI & IoT'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-colors flex flex-col md:flex-row h-full"
                            >
                                {/* Left Side: Thumbnail */}
                                <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ 
                                            backgroundImage: `url(${project.spotlight})`,
                                            backgroundColor: project.logoStyle.backgroundColor 
                                        }}
                                    />
                                </div>

                                {/* Right Side: Content */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            {project.category === 'webapp' ? <Monitor className="w-4 h-4 text-blue-400" /> : <Cpu className="w-4 h-4 text-purple-400" />}
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{project.category}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                                            {project.desc}
                                        </p>
                                        
                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {project.tags.map((tag) => (
                                                <div key={tag.id} className="w-8 h-8 p-1.5 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center" title={tag.name}>
                                                    <img src={tag.path} alt={tag.name} className="w-full h-full object-contain" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                        <a href={project.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-blue-400 transition-colors">
                                            <ExternalLink className="w-4 h-4" /> LIVE PREVIEW
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors ml-auto">
                                            <Github className="w-4 h-4" /> SOURCE
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;