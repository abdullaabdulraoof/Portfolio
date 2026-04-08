export const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Work', href: '#work' },
  { id: 4, name: 'Contact', href: '#contact' },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review: 'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform.'
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review: 'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site.'
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review: 'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless website.'
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review: 'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations.'
  },
];

export const myProjects = [
  {
    title: 'RAG Knowledge Assistant (CLI)',
    desc: 'Local RAG CLI assistant querying multiple documents (PDFs, text) with intelligent contextual retrieval.',
    subdesc: 'Built with Python, LangChain, FAISS, and LLM Integration for enterprise-grade semantic search.',
    href: 'https://github.com/abdullaabdulraoof/rag-knowledge-assistant-cli',
    texture: '/projects/RAG.png',
    logo: '/assets/project-logo1.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#1E293B', border: '0.2px solid #334155', boxShadow: '0px 0px 60px 0px rgba(59, 130, 246, 0.3)' },
    spotlight: '/projects/RAG.png',
    tags: [
      { id: 1, name: 'Python', path: '/logos/🙃 Logos_ python.svg' },
      { id: 2, name: 'LangChain', path: '/logos/🙃 Logos_ python.svg' },
      { id: 3, name: 'FAISS', path: '/logos/🙃 Logos_ python.svg' },
    ],
  },
  {
    title: 'Vision Aid – Edge AI IoT System',
    desc: 'Smart walking stick for visually impaired users using Edge AI + IoT for real-time navigation assistance.',
    subdesc: 'Combines Raspberry Pi, Python, OpenCV, and TensorFlow for object detection and GPS tracking.',
    href: 'https://github.com/abdullaabdulraoof/vision-aid-edge-ai-iot-system',
    texture: '/projects/vision-aid.jpeg',
    logo: '/assets/project-logo2.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#0F172A', border: '0.2px solid #1E293B', boxShadow: '0px 0px 60px 0px rgba(139, 92, 246, 0.3)' },
    spotlight: '/projects/vision-aid.jpeg',
    tags: [
      { id: 1, name: 'Raspberry Pi', path: '/logos/🙃 Logos_ raspberry pi.svg' },
      { id: 2, name: 'OpenCV', path: '/logos/🙃 Logos_ python.svg' },
      { id: 3, name: 'TensorFlow', path: '/logos/🙃 Logos_ python.svg' },
    ],
  },
  {
    title: 'AI Pest & Insect Detection',
    desc: 'AI-driven agricultural system detecting pests using computer vision to prevent crop damage.',
    subdesc: 'Implemented with Python, TensorFlow/CNN, and OpenCV for offline edge deployment.',
    href: 'https://github.com/abdullaabdulraoof/ai-pest-insect-detection-edge-ai-iot',
    texture: '/projects/coolpex-img2.png', // Fallback
    logo: '/assets/project-logo3.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#064e3b', border: '0.2px solid #065f46', boxShadow: '0px 0px 60px 0px rgba(16, 185, 129, 0.3)' },
    spotlight: '/projects/coolpex-img2.png',
    tags: [
      { id: 1, name: 'Python', path: '/logos/🙃 Logos_ python.svg' },
      { id: 2, name: 'CNN', path: '/logos/🙃 Logos_ python.svg' },
    ],
  },
  {
    title: 'AI Traffic Sign Detection',
    desc: 'Driving assistance AI system that classifies traffic signs in real time using deep learning.',
    subdesc: 'Leverages CNN and OpenCV to improve smart vehicle safety and autonomous navigation.',
    href: 'https://github.com/abdullaabdulraoof/ai-traffic-sign-detection-driving-assistant',
    texture: '/projects/traffic.png',
    logo: '/assets/project-logo4.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#4c1d95', border: '0.2px solid #5b21b6', boxShadow: '0px 0px 60px 0px rgba(167, 139, 250, 0.3)' },
    spotlight: '/projects/traffic.png',
    tags: [
      { id: 1, name: 'Deep Learning', path: '/logos/🙃 Logos_ python.svg' },
      { id: 2, name: 'OpenCV', path: '/logos/🙃 Logos_ python.svg' },
    ],
  },
  {
    title: 'Tekzo Full-Stack Platform',
    desc: 'Scalable web application demonstrating modern UI/UX and full-stack architecture.',
    subdesc: 'Built with React, Node.js, and MongoDB featuring a robust REST API and authentication.',
    href: 'https://github.com/abdullaabdulraoof/Tekzo',
    texture: '/projects/tekzo-img2.png',
    logo: '/assets/project-logo5.png',
    category: 'webapp',
    logoStyle: { backgroundColor: '#1e1b4b', border: '0.2px solid #312e81', boxShadow: '0px 0px 60px 0px rgba(99, 102, 241, 0.3)' },
    spotlight: '/projects/tekzo-img2.png',
    tags: [
      { id: 1, name: 'React', path: '/logos/🙃 Logos_ react.svg' },
      { id: 2, name: 'Node.js', path: '/logos/🙃 Logos_ node js.svg' },
      { id: 3, name: 'MongoDB', path: '/logos/Group.svg' },
    ],
  },
  {
    title: 'Coolpex (System Design)',
    desc: 'Comprehensive case study on scalable architecture, load handling, and performance optimization.',
    subdesc: 'Focuses on backend strategy, system architecture design, and deployment optimization.',
    href: 'https://github.com/abdullaabdulraoof/coolpex-system-case-study',
    texture: '/projects/coolpex-img2.png',
    logo: '/assets/project-logo1.png',
    category: 'webapp',
    logoStyle: { backgroundColor: '#111827', border: '0.2px solid #374151', boxShadow: '0px 0px 60px 0px rgba(209, 213, 219, 0.2)' },
    spotlight: '/projects/coolpex-img2.png',
    tags: [
      { id: 1, name: 'Angular', path: '/logos/🙃 Logos_ angular.svg' },
      { id: 2, name: 'Node.js', path: '/logos/🙃 Logos_ node js.svg' },
      { id: 3, name: 'MongoDB', path: '/logos/Group.svg' },
    ],
  },
  {
    title: 'Grace Ride Management',
    desc: 'Scalable software project focused on efficient ride management and modular backend solutions.',
    subdesc: 'Features a clean UI and scalable approach for multi-user transport logistics.',
    href: 'https://github.com/abdullaabdulraoof/grace',
    texture: '/projects/grace-img2.png',
    logo: '/assets/project-logo2.png',
    category: 'webapp',
    logoStyle: { backgroundColor: '#701a75', border: '0.2px solid #86198f', boxShadow: '0px 0px 60px 0px rgba(232, 121, 249, 0.3)' },
    spotlight: '/projects/grace-img2.png',
    tags: [
      { id: 1, name: 'Angular', path: '/logos/🙃 Logos_ angular.svg' },
      { id: 2, name: 'Node.js', path: '/logos/🙃 Logos_ node js.svg' },
      { id: 3, name: 'MongoDB', path: '/logos/Group.svg' },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.045 : isMobile ? 0.055 : isTablet ? 0.065 : 0.08,
    deskPosition: isSmall ? [-0.5, -3, -15] : isMobile ? [0, -3, -15] : isTablet ? [5, -2, -18] : [10, -1.5, -18],
    deskRotation: [1.2, -0.6, 0.4], 
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'CarvingSoft (Startup)',
    pos: 'Junior Software Engineer',
    duration: '2025 - Present',
    title: [
      "Developed ERP & CRM using MEAN/MERN stack",
      "Built Grace – Ride Management System",
      "Engineered Coolpex – Enterprise System",
      "Developed AI Pest Insect Detection System"
    ],
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Infosys Springboard',
    pos: 'Intern',
    duration: 'Nov 2024 - Jan 2025',
    title: [
      "Developed Courier Dashboard System using Flask",
      "Implemented order tracking and analytics"
    ],
    icon: '/assets/figma.svg',
    animation: 'clapping',
  }
];
