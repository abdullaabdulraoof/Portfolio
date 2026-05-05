import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Whyme = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const points = [
        {
            title: "Real-World Experience",
            description: "Built and deployed ERP/CRM systems used in actual business operations."
        },
        {
            title: "Real-Time Systems",
            description: "Socket.IO-based applications for live updates and multi-user systems."
        },
        {
            title: "AI + Modern Tech",
            description: "AI-powered solutions using RAG, FAISS, and LLMs for automation."
        },
        {
            title: "Production Deployment",
            description: "Scalable AWS EC2 deployment with Nginx and optimized performance."
        }
    ];

    return (
        <section ref={containerRef} className="py-24 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-extrabold mb-12 tracking-tight text-white">
                        Why Me?
                    </h2>
                    <p className="text-xl md:text-2xl font-semibold text-gray-300 max-w-3xl leading-relaxed">
                        I build <span className="text-blue-400">production-ready systems</span> that solve real business problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {points.map((point, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="mt-1 text-blue-500">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">{point.title}</h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Whyme

