import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, Float } from "@react-three/drei"
import ComputerRoom from "../Components/ComputerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '500px',
        triggerOnce: false,
    });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* The Galaxy background is now handled globally in GlobalBackground.jsx */}
            
            <div className="max-w-[70rem] w-full mx-auto px-6 relative z-10">
                <div className="card max-w-sm w-full p-0 overflow-hidden shadow-2xl transition-all duration-500">
                    {/* ... (hey header code) */}
                    <div className="bg-main-gradient px-4 py-3 md:px-6 md:py-4">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase">
                            HEY!
                        </h2>
                    </div>

                    {/* Intro body */}
                    <div className="p-5 md:p-8 bg-card backdrop-blur-md">
                        <p className="text-base md:text-xl text-gray-300 leading-relaxed font-medium">
                            You've reached the portfolio of {" "}
                            <span className="text-blue-400 font-bold inline-block">
                                Abdulla Abdul Raoof
                            </span>{" "}
                            — building intelligent systems, scalable web apps, and IoT-driven solutions.
                        </p>
                    </div>
                </div>
            </div>
            
            <div 
                className={`absolute inset-0 z-[5] pointer-events-none transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
            >
                <Canvas dpr={[1, 1.5]} className="w-full h-full">
                    <Suspense fallback={null}>
                        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                        
                        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                            <ComputerRoom 
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={sizes.deskRotation}
                            />
                        </Float>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;