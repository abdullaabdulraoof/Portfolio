import React from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const skillsData = [
    {
        category: "Fullstack Development",
        skills: ["React", "Angular", "Tailwind CSS", "Node.js", "MongoDB"],
        icons: [
            "/logos/🙃 Logos_ react.svg", 
            "/logos/🙃 Logos_ angular.svg", 
            "/logos/🙃 Logos_ tailwind css.svg", 
            "/logos/🙃 Logos_ node js.svg"
        ]
    },
    {
        category: "AI Integration",
        skills: ["Python", "Computer Vision", "RAG", "Model Integration"],
        icons: ["/logos/🙃 Logos_ python.svg"]
    },
    {
        category: "IOT Integration",
        skills: ["Raspberry Pi", "ESP32", "PiCamera", "Buzzer Systems"],
        icons: ["/logos/🙃 Logos_ raspberry pi.svg"]
    },
    {
        category: "Cloud & Deployment",
        skills: ["AWS EC2", "Vercel", "Render", "Server Deployment"],
        icons: [
            "/logos/🙃 Logos_ aws.svg", 
            "/logos/🙃 Logos_ vercel.svg", 
            "/logos/Render logo - Black 1.svg"
        ]
    },
    {
        category: "Tools & Workflow",
        skills: ["Git & GitHub", "REST APIs", "Real-time Systems", "Nginx"],
        icons: ["/logos/Group.svg"]
    }
];

const SkillCard = ({ category, index }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useTransform(x, [-100, 100], isMobile ? [0, 0] : [10, -10]);
    const mouseY = useTransform(y, [-100, 100], isMobile ? [0, 0] : [-10, 10]);

    function handleMouseMove(event) {
        if (isMobile) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseXVal = event.clientX - rect.left - rect.width / 2;
        const mouseYVal = event.clientY - rect.top - rect.height / 2;
        x.set(mouseXVal);
        y.set(mouseYVal);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: mouseY, rotateY: mouseX, perspective: 1000 }}
            className="group relative flex flex-col rounded-3xl p-[2px] overflow-hidden transition-all duration-500"
        >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ margin: '-100%' }}></div>
            
            <div className="relative flex flex-col h-full rounded-[22px] bg-[#020617]/90 backdrop-blur-3xl overflow-hidden p-6">
                {/* Mouse Shine Effect */}
                <motion.div 
                    style={{ x, y }}
                    className="absolute -inset-24 bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                            {category.category}
                        </h3>
                    </div>

                    {/* Logo Cluster */}
                    <div className="flex gap-4 mb-8">
                        {category.icons.map((icon, i) => (
                            <div key={i} className="w-10 h-10 p-2 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <img src={icon} alt="tech icon" className="w-full h-full object-contain filter drop-shadow-lg" />
                            </div>
                        ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {category.skills.map((skill, i) => (
                            <span 
                                key={i} 
                                className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/5 rounded-lg group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-white transition-all duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section py-20 bg-transparent relative z-10 px-6">
            <div className="max-w-[70rem] mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-4xl font-extrabold text-white tracking-tight mb-16 uppercase"
                >
                    Technical Strengths
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;