import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { workExperiences } from '../constants/index.js'

const Experiance = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="section bg-transparent text-white py-20">
            <div className="max-w-[70rem] mx-auto px-6">
                <h2 className="text-4xl font-extrabold mb-16 tracking-tight">Experience</h2>

                <div className="space-y-8">
                    {workExperiences.map((exp) => (
                        <div key={exp.id} className="border-b border-white/10 pb-8 hover:bg-white/5 transition-colors rounded-xl px-4 py-6 cursor-pointer" onClick={() => toggleExpand(exp.id)}>
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-xl md:text-2xl font-bold">
                                        {exp.pos} <span className="text-gray-500 font-normal mx-1 hidden sm:inline">—</span> 
                                        <span className="block sm:inline text-blue-500 sm:text-white mt-1 sm:mt-0">{exp.name}</span>
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">{exp.duration}</p>
                                </div>
                                <motion.div
                                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                                    className="text-2xl text-gray-500 mt-2"
                                >
                                    {/* Chevron Down Icon */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {expandedId === exp.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="mt-8 space-y-3">
                                            {exp.title.map((line, index) => {
                                                const isBullet = line.startsWith('•');
                                                const isHeader = !isBullet && exp.title[index + 1]?.startsWith('•');
                                                
                                                return (
                                                    <li key={index} className={`text-gray-300 leading-relaxed ${isBullet ? 'ml-6 list-disc list-outside' : 'font-semibold'}`}>
                                                        {isBullet ? line.substring(2) : line}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiance