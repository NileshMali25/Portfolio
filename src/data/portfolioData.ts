// Portfolio Data Definitions

export interface MarqueeItem {
  id: string;
  title: string;
  subtitle: string;
  gradientStart: string;
  gradientEnd: string;
  iconPath: string;
}

export const MARQUEE_ROW_1: MarqueeItem[] = [
  {
    id: 'm1',
    title: 'Python / Data Science',
    subtitle: 'Data Analysis & Workflows',
    gradientStart: '#3B82F6',
    gradientEnd: '#F59E0B',
    iconPath: 'M12 2v20M2 12h20'
  },
  {
    id: 'm2',
    title: 'Machine Learning',
    subtitle: 'Predictive Modeling & Tuning',
    gradientStart: '#8B5CF6',
    gradientEnd: '#EC4899',
    iconPath: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2'
  },
  {
    id: 'm3',
    title: 'Artificial Intelligence',
    subtitle: 'Neural Nets & AI Apps',
    gradientStart: '#EC4899',
    gradientEnd: '#38BDF8',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    id: 'm4',
    title: 'React Development',
    subtitle: 'Interactive UI & Components',
    gradientStart: '#06B6D4',
    gradientEnd: '#3B82F6',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  },
  {
    id: 'm5',
    title: 'Full Stack Development',
    subtitle: 'MERN Stack Applications',
    gradientStart: '#10B981',
    gradientEnd: '#6366F1',
    iconPath: 'M4 6h16M4 12h16M4 18h16'
  },
  {
    id: 'm6',
    title: 'Node.js / Express.js',
    subtitle: 'REST APIs & Backend Engines',
    gradientStart: '#22C55E',
    gradientEnd: '#14B8A6',
    iconPath: 'M5 12h14M12 5l7 7-7 7'
  },
  {
    id: 'm7',
    title: 'MongoDB',
    subtitle: 'NoSQL Database & Schemas',
    gradientStart: '#10B981',
    gradientEnd: '#059669',
    iconPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'
  },
  {
    id: 'm8',
    title: 'MySQL',
    subtitle: 'Relational Database Queries',
    gradientStart: '#0284C7',
    gradientEnd: '#38BDF8',
    iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
  },
  {
    id: 'm9',
    title: 'Pandas / NumPy',
    subtitle: 'Array & Data Manipulation',
    gradientStart: '#F59E0B',
    gradientEnd: '#EF4444',
    iconPath: 'M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18'
  },
  {
    id: 'm10',
    title: 'Scikit-learn',
    subtitle: 'Classification & Evaluation',
    gradientStart: '#F97316',
    gradientEnd: '#8B5CF6',
    iconPath: 'M18 20V10M12 20V4M6 20v-6'
  },
  {
    id: 'm11',
    title: 'JavaScript / TypeScript',
    subtitle: 'Modern Web Scripting',
    gradientStart: '#FACC15',
    gradientEnd: '#3B82F6',
    iconPath: 'M16 18l6-6-6-6M8 6l-6 6 6 6'
  }
];

export const MARQUEE_ROW_2: MarqueeItem[] = [
  {
    id: 'm12',
    title: 'Tailwind CSS',
    subtitle: 'Utility-First Styling',
    gradientStart: '#38BDF8',
    gradientEnd: '#06B6D4',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'
  },
  {
    id: 'm13',
    title: 'Emergency Alert System',
    subtitle: 'Real-time Disaster Response',
    gradientStart: '#EF4444',
    gradientEnd: '#F97316',
    iconPath: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01'
  },
  {
    id: 'm14',
    title: 'PizzaGo — MERN Delivery',
    subtitle: 'E-Commerce Pizza Ordering',
    gradientStart: '#F59E0B',
    gradientEnd: '#EF4444',
    iconPath: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0'
  },
  {
    id: 'm14_2',
    title: 'MindScore AI — Mental Health',
    subtitle: 'Lifestyle & Wellness Predictor',
    gradientStart: '#10B981',
    gradientEnd: '#06B6D4',
    iconPath: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2'
  },
  {
    id: 'm15',
    title: 'Heart Stroke Prediction',
    subtitle: 'Healthcare ML Prediction',
    gradientStart: '#EC4899',
    gradientEnd: '#9333EA',
    iconPath: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z'
  },
  {
    id: 'm17',
    title: 'Real-Time Tracking',
    subtitle: 'Live Geospatial Telemetry',
    gradientStart: '#3B82F6',
    gradientEnd: '#10B981',
    iconPath: 'M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zM12 11a1 1 0 110-2 1 1 0 010 2z'
  },
  {
    id: 'm18',
    title: 'Web Development',
    subtitle: 'Clean & Scalable Web Apps',
    gradientStart: '#6366F1',
    gradientEnd: '#A855F7',
    iconPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z'
  },
  {
    id: 'm19',
    title: 'Data Visualization',
    subtitle: 'Charts & Exploratory Analysis',
    gradientStart: '#14B8A6',
    gradientEnd: '#3B82F6',
    iconPath: 'M18 20V10M12 20V4M6 20v-6'
  },
  {
    id: 'm20',
    title: 'AI-powered Applications',
    subtitle: 'Intelligent Machine Logic',
    gradientStart: '#8B5CF6',
    gradientEnd: '#F472B6',
    iconPath: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 8v8M8 12h8'
  },
  {
    id: 'm21',
    title: 'Developer Portfolio',
    subtitle: '3D Creator Experience',
    gradientStart: '#B600A8',
    gradientEnd: '#BE4C00',
    iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  }
];

export interface ProjectGalleryImage {
  url: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  mainImage: string;
  galleryImages?: ProjectGalleryImage[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'PizzaGo — MERN Pizza Delivery',
    category: 'Personal Project',
    description: 'A modern e-commerce pizza ordering platform with interactive menu customizing, cart management, seamless Razorpay payment gateway integration, and JWT secured user authentication.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Razorpay'],
    githubUrl: 'https://github.com/NileshMali25',
    liveUrl: 'https://pizzadelivary.vercel.app/',
    mainImage: '/pizzago_mern.jpg'
  },
  {
    id: 'proj-mindscore',
    number: '02',
    title: 'MindScore AI — Mental Health Predictor',
    category: 'Personal Project',
    description: 'An AI-powered mental well-being and lifestyle prediction platform featuring an interactive Speedometer Arc Gauge, personalized health recommendations, a voice & text AI Wellness Coach, and instant PDF report generation.',
    tags: ['FastAPI', 'Python', 'Scikit-Learn', 'Machine Learning', 'NLP', 'Speech-to-Text', 'Render'],
    githubUrl: 'https://github.com/NileshMali25/MindScore-AI',
    liveUrl: 'https://mindscore-ai-c1yl.onrender.com/',
    mainImage: '/mindscore_showcase.jpg',
    galleryImages: [
      { url: '/mindscore_showcase.jpg', label: 'Showcase' },
      { url: '/mindscore_dashboard_clean.png', label: 'Dashboard' },
      { url: '/mindscore_score.png', label: 'AI Score' },
      { url: '/mindscore_coach.png', label: 'Voice Coach' }
    ]
  },
  {
    id: 'proj-2',
    number: '03',
    title: 'Heart Stroke Prediction',
    category: 'Personal Project',
    description: 'An AI healthcare classification system evaluating patient medical metrics using K-Nearest Neighbors and Decision Tree models, served via an interactive Streamlit web dashboard.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'KNN', 'Decision Tree', 'Streamlit', 'Joblib'],
    githubUrl: 'https://github.com/NileshMali25',
    liveUrl: 'https://heart-strokepredictiongit-ebzbnpfjuqghjb7tdubznv.streamlit.app/',
    mainImage: '/heart_disease.jpg'
  },
  {
    id: 'proj-3',
    number: '04',
    title: 'Emergency Alert System',
    category: 'Personal Project',
    description: 'A real-time disaster response and alert dispatch system integrating Leaflet map visualization, live Socket.io communication, Twilio SMS emergency dispatch, and secure JWT authentication.',
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Socket.io', 'Leaflet', 'Twilio', 'JWT'],
    githubUrl: 'https://github.com/NileshMali25/Emergency-Alert-System',
    mainImage: '/emergency_alert.jpg'
  }
];

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Data Science',
    description: 'Working with data using Python, Pandas, NumPy, data preprocessing, exploratory data analysis, feature engineering, visualization, and machine learning workflows.'
  },
  {
    number: '02',
    title: 'Machine Learning',
    description: 'Building classification, regression, prediction, evaluation, and hyperparameter-tuned machine learning models using Scikit-learn.'
  },
  {
    number: '03',
    title: 'Full Stack Development',
    description: 'Creating modern responsive web applications using React, Node.js, Express.js, databases, REST APIs, authentication, and real-time technologies.'
  },
  {
    number: '04',
    title: 'Web Development',
    description: 'Designing and developing clean, modern, responsive websites and web applications using React, JavaScript, TypeScript, Tailwind CSS, Node.js, and Express.js.'
  }
];
