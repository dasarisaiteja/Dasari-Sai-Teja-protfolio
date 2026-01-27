const data = {
    mern: {
        title: "MERN Stack Developer",
        desc: "Crafting seamless web experiences with React, Node.js, and modern JavaScript",
        skills: [
            { name: "React", icon: "fab fa-react", desc: "Frontend Framework" },
            { name: "Node.js", icon: "fab fa-node-js", desc: "Backend Runtime" },
            { name: "Express", icon: "fas fa-server", desc: "Backend Framework" },
            { name: "MongoDB", icon: "fas fa-database", desc: "NoSQL Database" },
            { name: "JavaScript", icon: "fab fa-js", desc: "Programming Language" },
            { name: "Tailwind CSS", icon: "fas fa-paint-brush", desc: "CSS Framework" }
        ],
        projects: [
            { 
                name: "Weather Forecast App", 
                detail: "Real-time weather updates using async APIs with responsive design, interactive charts, and location-based forecasting.",
                tags: ["ReactJS", "CSS3", "HTML5"]
            },
            { 
                name: "Personal Portfolio", 
                detail: "Modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations.",
                tags: ["HTML5", "CSS3", "jQuery"]
            },
            { 
                name: "E-Commerce Platform", 
                detail: "Full-stack shopping application with cart management, payment integration, and inventory tracking.",
                tags: ["ReactJS", "Ruby on Rails"]
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