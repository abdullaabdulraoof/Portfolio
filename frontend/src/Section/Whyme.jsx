import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Whyme = () => {
    const text = "I build real-world applications using full-stack development, AI, and IoT, focusing on scalable and efficient solutions from idea to deployment.";
    const words = text.split(" ");
    const sectionRef = useRef(null);
    
    // Pre-calculate character start/end points to ignore text search issues
    let charCounter = 0;
    const formattedWords = words.map((word) => {
        const chars = word.split("").map((char) => {
            const index = charCounter;
            charCounter++;
            return { char, index };
        });
        charCounter++; // accounting for spaces
        return chars;
    });

    const totalChars = charCounter;

    // Get the scroll progress specifically for this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "start 0.2"] 
    });

    return (
        <section ref={sectionRef} className="section bg-transparent py-32 min-h-[70vh] flex flex-col items-center justify-center">
            <div className="max-w-[70rem] mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-20 tracking-tighter">
                    Why Me?
                </h2>
                
                <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
                    {formattedWords.map((wordChars, wordIndex) => (
                        <span key={wordIndex} className="flex overflow-hidden mr-3 mb-3">
                            {wordChars.map(({ char, index }) => {
                                const start = index / totalChars;
                                const end = (index + 1) / totalChars;
                                
                                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
                                const color = useTransform(scrollYProgress, [start, end], ["#4B5563", "#FFFFFF"]);

                                return (
                                    <motion.span
                                        key={index}
                                        style={{ opacity, color }}
                                        className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed"
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Whyme