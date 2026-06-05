const data = {
    mern: {
        title: "MERN Stack Developer",
        desc: "Crafting seamless web experiences with React, Node.js, and modern JavaScript",
        skills: [
            { name: "React", icon: "fab fa-react", desc: "Frontend Framework" },
            { name: "Node.js", icon: "fab fa-node-js", desc: "Backend Runtime" },
            { name: "Express", icon: "fas fa-server", desc: "Backend Framework" },
            { name: "MongoDB", icon: "fas fa-database", desc: "NoSQL Database" },
            { name: "Redux", icon: "fas fa-layer-group", desc: "State Management" },
            { name: "JWT", icon: "fas fa-shield-alt", desc: "Authentication" },
            { name: "REST API", icon: "fas fa-plug", desc: "API Development" },
            { name: "JavaScript", icon: "fab fa-js", desc: "Programming Language" },
            { name: "Tailwind CSS", icon: "fas fa-paint-brush", desc: "CSS Framework" }
        ],
        projects: [
    {
        name: "ShoppyGlobe E-Commerce Application",
        detail: "Built a responsive e-commerce platform using React, Redux, React Router, and API integration. Features include product browsing, cart management, and seamless shopping experience.",
        tags: ["React", "Redux", "JavaScript", "API"]
    },
    {
        name: "ShoppyGlobe REST API",
        detail: "Developed scalable REST APIs using Node.js, Express.js, and MongoDB. Implemented JWT authentication, user management, and persistent shopping cart functionality.",
        tags: ["Node.js", "Express.js", "MongoDB", "JWT"]
    },
    {
        name: "YouTube-Inspired Platform",
        detail: "Built a full-stack video-sharing platform using the MERN stack with secure authentication, video uploads, likes, comments, and sharing features.",
        tags: ["MERN", "MongoDB", "React", "JWT"]
    },
    {
        name: "Weather Forecast Application",
        detail: "Interactive weather application providing real-time weather updates using external APIs with responsive UI and dynamic data rendering.",
        tags: ["JavaScript", "API", "HTML", "CSS"]
    },
    {
        name: "Personal Portfolio Website",
        detail: "Responsive portfolio website showcasing projects, skills, certifications, and professional achievements with modern UI design.",
        tags: ["HTML", "CSS", "JavaScript"]
    }
]
    },
    python: {
        title: "Python & AI Developer",
        desc: "Building intelligent systems with Machine Learning, NLP, and data-driven solutions",
        skills: [
            { name: "Python", icon: "fab fa-python", desc: "Backend Language" },
            { name: "Machine Learning", icon: "fas fa-brain", desc: "AI/ML" },
            { name: "NLP", icon: "fas fa-language", desc: "Text Processing" },
            { name: "SQL", icon: "fas fa-database", desc: "Database" },
            { name: "Azure", icon: "fab fa-microsoft", desc: "Cloud Platform" },
            { name: "TensorFlow", icon: "fas fa-project-diagram", desc: "ML Framework" }
        ],
        projects: [
            { 
                name: "Movie Recommendation System", 
                detail: "Advanced sentiment analysis on micro-blogging data using NLP and collaborative filtering algorithms.",
                tags: ["Python", "Machine Learning"]
            },
            { 
                name: "Agri-Crop Analysis System", 
                detail: "ML-driven soil and mineral analysis platform for precision agriculture with predictive modeling.",
                tags: ["Python", "TensorFlow", "Azure"]
            },
            { 
                name: "Fastag Fuel Automation", 
                detail: "Automated petrol pump solution using Python, IoT sensors, and real-time payment processing.",
                tags: ["Python", "IoT"]
            },
            { 
                name: "AI Chatbot Assistant", 
                detail: "Intelligent conversational agent powered by NLP with context awareness and multi-language support.",
                tags: ["Python", "NLP", "TensorFlow"]
            }
        ]
    }
};

function loadProfile(type) {
    const profile = data[type];
    document.getElementById('profile-selector').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    document.getElementById('dynamic-title').innerText = profile.title;
    document.getElementById('hero-desc').innerText = profile.desc;
    document.getElementById('contact-title').innerText = profile.title;
    
    const descText = type === 'mern' 
        ? "With expertise in modern web technologies, skilled in React, Node.js, Express, and MongoDB. Passionate about building scalable web applications."
        : "With expertise in Python, Machine Learning, and AI/ML technologies. Skilled in building intelligent systems and data-driven solutions.";
    document.getElementById('contact-desc').innerText = descText;

    // Load Skills with horizontal scroll
    const skillGrid = document.getElementById('skills-grid');
    skillGrid.innerHTML = profile.skills.map(s => `
        <div class="skill-card">
            <i class="${s.icon}"></i>
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
        </div>
    `).join('');

    // Load Projects with new design
    const projectGrid = document.getElementById('projects-grid');
    projectGrid.innerHTML = profile.projects.map(p => `
        <div class="project-card">
            <div class="project-image">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231a1a1a' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23444' font-size='60' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3E${p.name.split(' ')[0]}%3C/text%3E%3C/svg%3E" alt="${p.name}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${p.name}</h3>
                <p class="project-description">${p.detail}</p>
                <div class="project-tags">
                    ${p.tags.map(tag => `<span class="tag"><i class="fas fa-code"></i> ${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function exitProfile() {
    document.getElementById('profile-selector').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
    window.scrollTo(0, 0);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// background: linear-gradient(135deg, rgba(229, 9, 20, 0.05), transparent);