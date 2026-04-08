import React, { useState, useRef, useEffect } from 'react'
import Globe from 'react-globe.gl'
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import * as THREE from 'three';

const Contact = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const globeRef = useRef();

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '500px',
        triggerOnce: false,
    });

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 4;

            // Add clouds
            const cloudsImgUrl = 'https://unpkg.com/three-globe@2.45.2/example/img/earth-clouds.png';
            const cloudsAlt = 0.005;
            const cloudsRotationSpeed = -0.01; // deg/frame

            // Prevent duplicate clouds on re-renders
            if (globeRef.current.scene().children.find(obj => obj.name === 'clouds')) return;

            const textureLoader = new THREE.TextureLoader();
            textureLoader.setCrossOrigin('anonymous');
            textureLoader.load(cloudsImgUrl, clouds => {
                const cloudsMesh = new THREE.Mesh(
                    new THREE.SphereGeometry(globeRef.current.getGlobeRadius() * (1 + cloudsAlt), 75, 75),
                    new THREE.MeshPhongMaterial({ map: clouds, transparent: true, opacity: 0.8 })
                );
                cloudsMesh.name = 'clouds';
                globeRef.current.scene().add(cloudsMesh);

                const rotateClouds = () => {
                    if (cloudsMesh) cloudsMesh.rotation.y += cloudsRotationSpeed * Math.PI / 180;
                    requestAnimationFrame(rotateClouds);
                };
                rotateClouds();
            });
        }
    }, [inView]);

    const pointsData = [...Array(30).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: Math.random() / 3,
        color: ['#3b82f6', '#60a5fa', '#ffffff'][Math.round(Math.random() * 2)]
    }));

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.name || !form.email || !form.message) {
            toast.error('Please fill out all fields.');
            return;
        }

        setLoading(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Abdulla',
                from_email: form.email,
                to_email: 'abdullaabdulraoof@mail.com',
                message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            toast.success('Thank you for connecting! I will get back to you soon.');
            setForm({ name: '', email: '', message: '' });
        }).catch((error) => {
            setLoading(false);
            console.error(error);
            toast.error('Something went wrong. Please try again.');
        });
    };

    return (
        <section ref={ref} id="contact" className="section py-10 relative flex items-center justify-center overflow-hidden bg-transparent">
            {/* The Galaxy background is now handled globally in GlobalBackground.jsx */}

            <div className="max-w-[70rem] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                {/* Left Side: Form */}
                <div className="space-y-6 backdrop-blur-md bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white inline-block relative">
                            Let’s Get Started
                            <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-main-gradient rounded-full"></div>
                        </h2>
                    </div>

                    <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white">How can I help?</h3>
                        <p className="text-gray-400 text-sm md:text-base">I would love to hear more about you.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-md">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Abdulla"
                                className="w-full bg-white/5 border-b border-white/10 py-2 px-1 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 focus:bg-white/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="abdullaabdulraoof@mail.com"
                                className="w-full bg-white/5 border-b border-white/10 py-2 px-1 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 focus:bg-white/10"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hi..."
                                rows="2"
                                className="w-full bg-white/5 border-b border-white/10 py-2 px-1 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700 resize-none focus:bg-white/10"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 mt-2 rounded-xl bg-main-gradient text-white font-bold text-lg shadow-lg hover:brightness-110 hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative z-20"
                        >
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>

                {/* Right Side: Visual Graphic */}
                <div className="hidden lg:flex relative items-center justify-center w-full h-[400px] xl:h-[500px]">
                    <div 
                        className={`w-full h-full flex items-center justify-center transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Globe
                            ref={globeRef}
                            height={isMobile ? 350 : 500}
                            width={isMobile ? 350 : 500}
                            backgroundColor="#00000000"
                            showAtmosphere
                            atmosphereColor="#3b82f6"
                            atmosphereAltitude={0.15}
                            globeImageUrl="https://unpkg.com/three-globe@2.45.2/example/img/earth-night.jpg"
                            bumpImageUrl="https://unpkg.com/three-globe@2.45.2/example/img/earth-topology.jpg"
                            labelsData={[{ lat: 9.9312, lng: 76.2673, text: 'Kerala, India', color: 'white', size: 15 }]}
                            pointsData={pointsData}
                            pointColor="color"
                            pointRadius={(d) => d.size * 0.5}
                            pointAltitude={0}
                            pointsMerge={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact