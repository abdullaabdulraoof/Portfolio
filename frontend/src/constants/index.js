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
    title: 'Tekzo — AI-Powered E-commerce Assistant',
    desc: 'AI-driven e-commerce platform with conversational product discovery using RAG and LLM integration.',
    subdesc: 'Built with React, Node.js, FastAPI, FAISS, and Ollama for intelligent semantic search.',
    href: 'https://tekzo-2j88.vercel.app/',
    github: 'https://github.com/abdullaabdulraoof/Tekzo',
    texture: '/projects/tekzo-img2.png',
    logo: '/assets/project-logo5.png',
    category: 'webapp',
    logoStyle: { backgroundColor: '#1e1b4b', border: '0.2px solid #312e81', boxShadow: '0px 0px 60px 0px rgba(99, 102, 241, 0.3)' },
    spotlight: '/projects/tekzo-img2.png',
    isClient: false,
    tags: [
      { id: 1, name: 'React', path: '/logos/🙃 Logos_ react.svg' },
      { id: 2, name: 'Node.js', path: '/logos/🙃 Logos_ node js.svg' },
      { id: 3, name: 'FastAPI', path: '/logos/🙃 Logos_ python.svg' },
      { id: 4, name: 'FAISS', path: '/logos/🙃 Logos_ python.svg' },
    ],
    details: {
      highlights: [
        'Implemented RAG system using FAISS for intelligent product retrieval',
        'Integrated LLM (Ollama) for personalized recommendations',
        'Designed microservices architecture (FastAPI + MERN)',
        'Enabled AI-based search instead of traditional filters',
        'Improved user experience with conversational interface'
      ],
      techStack: 'React | Node.js | MongoDB | FastAPI | FAISS | Ollama | AWS | Render | Vercel',
      impact: [
        'Reduced search effort using AI recommendations',
        'Enabled contextual product discovery',
        'Built scalable AI-ready architecture'
      ],
      note: 'Personal Project — Focus on AI & RAG integration'
    }
  },
  {
    title: 'Coolpex — ERP/CRM System',
    desc: 'Full-scale ERP/CRM system used for real-world business operations in fumigation and CPC services.',
    subdesc: 'Multi-module platform with real-time updates and automated workflows for multi-user operations.',
    href: '#',
    github: '#',
    texture: '/projects/coolpex-img2.png',
    logo: '/assets/project-logo1.png',
    category: 'webapp',
    logoStyle: { backgroundColor: '#111827', border: '0.2px solid #374151', boxShadow: '0px 0px 60px 0px rgba(209, 213, 219, 0.2)' },
    spotlight: '/projects/coolpex-img2.png',
    isClient: true,
    tags: [
      { id: 1, name: 'Angular', path: '/logos/🙃 Logos_ angular.svg' },
      { id: 2, name: 'Node.js', path: '/logos/🙃 Logos_ node js.svg' },
      { id: 3, name: 'Socket.IO', path: '/logos/🙃 Logos_ node js.svg' },
    ],
    details: {
      highlights: [
        'Built multi-module ERP system (orders, tracking, workflow)',
        'Implemented real-time updates using Socket.IO',
        'Automated manual workflows → improved efficiency',
        'Designed system for multi-user concurrent operations',
        'Deployed on AWS EC2 with Nginx configuration'
      ],
      techStack: 'Angular | Node.js | MongoDB | Socket.IO | AWS EC2 | Nginx',
      impact: [
        'Reduced manual processes significantly',
        'Improved real-time job tracking',
        'Increased operational efficiency'
      ],
      note: 'Client Project (CarvingSoft Technologies) – Details limited due to confidentiality'
    }
  },
  {
    title: 'Driver Management System',
    desc: 'Multi-role coordination platform connecting drivers, customers, and admins with real-time tracking.',
    subdesc: 'Integrated map-based location tracking and real-time communication for transport logistics.',
    href: 'https://github.com/abdullaabdulraoof/grace',
    github: 'https://github.com/abdullaabdulraoof/grace',
    texture: '/projects/grace-img2.png',
    logo: '/assets/project-logo2.png',
    category: 'webapp',
    logoStyle: { backgroundColor: '#701a75', border: '0.2px solid #86198f', boxShadow: '0px 0px 60px 0px rgba(232, 121, 249, 0.3)' },
    spotlight: '/projects/grace-img2.png',
    isClient: true,
    tags: [
      { id: 1, name: 'Angular', path: '/logos/🙃 Logos_ angular.svg' },
      { id: 2, name: 'Node.js', path: '/logos/🙃 Logos_ node js.svg' },
      { id: 3, name: 'Maps API', path: '/logos/Group.svg' },
    ],
    details: {
      highlights: [
        'Multi-role system (Admin / Driver / Customer)',
        'Integrated map-based location tracking',
        'Real-time communication using Socket.IO',
        'Designed scalable architecture for concurrent users'
      ],
      techStack: 'Angular | Node.js | MongoDB | Socket.IO | Maps API',
      impact: [
        'Improved coordination between drivers and customers',
        'Enabled real-time updates without refresh'
      ],
      note: 'Client Project (CarvingSoft Technologies)'
    }
  },
  {
    title: 'AI Traffic Sign Detection System',
    desc: 'Real-time traffic sign detection system using computer vision and deep learning for driver assistance.',
    subdesc: 'Achieved high accuracy and real-time performance using YOLO and OpenCV.',
    href: 'https://github.com/abdullaabdulraoof/ai-traffic-sign-detection-driving-assistant',
    github: 'https://github.com/abdullaabdulraoof/ai-traffic-sign-detection-driving-assistant',
    texture: '/projects/traffic.png',
    logo: '/assets/project-logo4.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#4c1d95', border: '0.2px solid #5b21b6', boxShadow: '0px 0px 60px 0px rgba(167, 139, 250, 0.3)' },
    spotlight: '/projects/traffic.png',
    isClient: false,
    tags: [
      { id: 1, name: 'Python', path: '/logos/🙃 Logos_ python.svg' },
      { id: 2, name: 'YOLO', path: '/logos/🙃 Logos_ python.svg' },
      { id: 3, name: 'OpenCV', path: '/logos/🙃 Logos_ python.svg' },
    ],
    details: {
      highlights: [
        'Used YOLO model for detection',
        'Achieved ~98% accuracy under optimal conditions',
        'Real-time detection at ~30 FPS',
        'Integrated voice alerts for driver assistance'
      ],
      techStack: 'Python | OpenCV | YOLO | Flask',
      impact: [
        'Improved driving awareness',
        'Real-time safety assistance'
      ],
      note: 'Personal AI Project — Focus on Computer Vision'
    }
  },
  {
    title: 'AI Pest & Insect Detection System',
    desc: 'AI-powered IoT system to detect pests and automate environmental control in agricultural settings.',
    subdesc: 'Combines YOLOv8 with Raspberry Pi for automated pest control and gesture control.',
    href: 'https://github.com/abdullaabdulraoof/ai-pest-insect-detection-edge-ai-iot',
    github: 'https://github.com/abdullaabdulraoof/ai-pest-insect-detection-edge-ai-iot',
    texture: '/projects/hardware.jpeg',
    logo: '/assets/project-logo3.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#064e3b', border: '0.2px solid #065f46', boxShadow: '0px 0px 60px 0px rgba(16, 185, 129, 0.3)' },
    spotlight: '/projects/hardware.jpeg',
    isClient: false,
    tags: [
      { id: 1, name: 'Raspberry Pi', path: '/logos/🙃 Logos_ raspberry pi.svg' },
      { id: 2, name: 'YOLOv8', path: '/logos/🙃 Logos_ python.svg' },
      { id: 3, name: 'IoT', path: '/logos/🙃 Logos_ python.svg' },
    ],
    details: {
      highlights: [
        'Used YOLOv8 for insect detection',
        'Integrated Raspberry Pi + Pi Camera',
        'Controlled devices using relay system (fan/light)',
        'Gesture control using APDS sensor'
      ],
      techStack: 'Python | Raspberry Pi | YOLOv8 | OpenCV | IoT Sensors',
      impact: [
        'Automated pest control system',
        'Reduced manual intervention'
      ],
      note: 'Personal AI + IoT Project'
    }
  },
  {
    title: 'Vision Aid — Smart Navigation System',
    desc: 'Assistive system combining sensors and AI for obstacle detection and smart navigation.',
    subdesc: 'Built on Raspberry Pi and Arduino with LiDAR integration for enhanced safety.',
    href: 'https://github.com/abdullaabdulraoof/vision-aid-edge-ai-iot-system',
    github: 'https://github.com/abdullaabdulraoof/vision-aid-edge-ai-iot-system',
    texture: '/projects/vision-aid.jpeg',
    logo: '/assets/project-logo2.png',
    category: 'ai-iot',
    logoStyle: { backgroundColor: '#0F172A', border: '0.2px solid #1E293B', boxShadow: '0px 0px 60px 0px rgba(139, 92, 246, 0.3)' },
    spotlight: '/projects/vision-aid.jpeg',
    isClient: false,
    tags: [
      { id: 1, name: 'Python', path: '/logos/🙃 Logos_ python.svg' },
      { id: 2, name: 'LiDAR', path: '/logos/🙃 Logos_ raspberry pi.svg' },
      { id: 3, name: 'ML', path: '/logos/🙃 Logos_ python.svg' },
    ],
    details: {
      highlights: [
        'Integrated LiDAR + ultrasonic sensors',
        'Object detection using ML',
        'GPS-based location tracking',
        'Built on Raspberry Pi / Arduino'
      ],
      techStack: 'Python | Raspberry Pi | Sensors | ML Models',
      impact: [
        'Enhanced navigation assistance',
        'Real-world hardware + AI integration'
      ],
      note: 'Personal Assistive Tech Project'
    }
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
    name: ' CarvingSoft Technologies Ltd',
    pos: 'Full Stack Developer',
    duration: '2025 - Present',
    title: [
      "Built ERP / CRM systems for real - world business operations",
      "Developed scalable full- stack applications using Node.js, Angular, and MongoDB",
      "Implemented real - time features using Socket.IO, improving responsiveness",
      "Managed deployment on AWS EC2 with Nginx for secure and stable performance",
      "Designed APIs for concurrent multi - user systems and real - time synchronization"
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
            "Built courier tracking dashboard with real-time updates",
            "Applied backend logic using Flask for data processing",
            "Developed analytics features for tracking and reporting",
            "Improved UI responsiveness and user experience"
          ],
            icon: '/assets/figma.svg',
              animation: 'clapping',
  }
];
