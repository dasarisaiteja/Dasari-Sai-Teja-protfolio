const data = {
    mern: {
        title: "Full-Stack Developer",
        desc: "Building reliable web and mobile products with React, Node.js, and modern pythonScript",
        skills: [
            { name: "pythonScript", icon: "fab fa-js", desc: "Programming language" },
            { name: "React.js", icon: "fab fa-react", desc: "Frontend applications" },
            { name: "React Native", icon: "fab fa-react", desc: "Cross-platform mobile apps" },
            { name: "Node.js", icon: "fab fa-node-js", desc: "Backend runtime" },
            { name: "Express.js", icon: "fas fa-server", desc: "Backend APIs" },
            { name: "MongoDB", icon: "fas fa-database", desc: "Data modeling and queries" },
            { name: "MySQL", icon: "fas fa-database", desc: "Relational database" },
            { name: "Redux", icon: "fas fa-layer-group", desc: "State management" },
            { name: "REST APIs", icon: "fas fa-plug", desc: "API integration and testing" },
            { name: "JWT & RBAC", icon: "fas fa-shield-alt", desc: "Authentication and access control" },
            { name: "Tailwind CSS", icon: "fas fa-paint-brush", desc: "Responsive UI styling" },
            { name: "TypeScript", icon: "fas fa-code", desc: "Typed application development" },
            { name: "Expo", icon: "fas fa-mobile-alt", desc: "React Native development" },
            { name: "Postman / Swagger", icon: "fas fa-vial", desc: "API testing and documentation" },
            { name: "Git & GitHub", icon: "fab fa-github", desc: "Version control and collaboration" },
            { name: "Razorpay & Webhooks", icon: "fas fa-credit-card", desc: "Payment integration" }
        ],
        projects: [
            { name: "WorkSphere — Multi-Tenant HR & Operations Suite", detail: "Built a multi-tenant ERP SaaS platform with JWT authentication, role-based access control, and tenant-specific data isolation. Developed REST APIs and a responsive dashboard for employee, project, task, attendance, payroll, and leave workflows.", tags: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "JWT", "RBAC"] },
            { name: "E-commerce Website", detail: "Developed product, category, and brand APIs, admin management endpoints, and a React storefront. Designed MongoDB schemas and indexes and implemented image upload and optimization using Multer and Sharp.", tags: ["React", "Redux", "Node.js", "MongoDB", "Multer", "Sharp"] },
            { name: "YouTube-Inspired Platform", detail: "Created a responsive MERN video-sharing platform with video uploads, secure JWT authentication, and user interactions including likes, comments, and sharing.", tags: ["React", "Vite", "Node.js", "MongoDB", "JWT", "Tailwind CSS"] },
            { name: "Weather Forecast Application", detail: "Built a responsive weather app that fetches real-time, location-specific forecasts from the OpenWeatherMap API and dynamically renders results using asynchronous pythonScript.", tags: ["pythonScript", "OpenWeatherMap API", "HTML", "CSS", "Tailwind CSS"] }
        ]
    },
    python: {
        title: "Python & AI/ML Developer",
        desc: "Combining software development, Python, and NLP to build practical data-driven applications",
        skills: [
            { name: "Python", icon: "fab fa-python", desc: "Programming and scripting" },
            { name: "python", icon: "fab fa-python", desc: "Core logic development" },
            { name: "SQL", icon: "fas fa-database", desc: "Database management" },
            { name: "NLP", icon: "fas fa-language", desc: "Text and sentiment analysis" },
            { name: "Machine Learning", icon: "fas fa-brain", desc: "Recommendation systems" },
            { name: "REST APIs", icon: "fas fa-plug", desc: "Backend integration" },
            { name: "MySQL", icon: "fas fa-database", desc: "Relational data" },
            { name: "Git & GitHub", icon: "fab fa-github", desc: "Version control" }
        ],
        projects: [
            { name: "Movie Recommendation System", detail: "Developed during a virtual internship at Path Creators, using sentiment analysis of micro-blogging data and NLP techniques, with python core logic and SQL database management.", tags: ["python", "NLP", "Sentiment Analysis", "SQL"] },
            { name: "WorkSphere — Multi-Tenant HR & Operations Suite", detail: "Built a multi-tenant ERP platform with tenant-specific data isolation, JWT authentication, RBAC, and management workflows for employees, projects, tasks, attendance, payroll, and leave.", tags: ["Node.js", "MongoDB", "REST APIs", "JWT", "RBAC"] },
            { name: "E-commerce Website", detail: "Created backend APIs for products, categories, and brands, plus admin CRUD endpoints and an image upload/optimization workflow.", tags: ["Node.js", "Express", "MongoDB", "Multer", "Sharp"] },
            { name: "Weather Forecast Application", detail: "Built a responsive interface that retrieves real-time weather data from a third-party API and renders results dynamically.", tags: ["pythonScript", "API", "HTML", "CSS"] }
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
        ? "Full-Stack Developer experienced with React, React Native, Expo, Node.js, Express, MongoDB, REST API integrations, and secure role-based workflows."
        : "Software developer with experience in Python, python, SQL, NLP, sentiment analysis, and full-stack application development.";
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
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231a1a1a' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23444' font-size='60' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3E${p.name.split(' ')[0].replace(/[^a-zA-Z0-9-]/g, '')}%3C/text%3E%3C/svg%3E" alt="${p.name}">
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