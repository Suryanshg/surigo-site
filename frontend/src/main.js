import './style.css'
import { funFacts, experienceData, skillsData, educationData, projectsData } from './data.js';

// --- Populate Content Dynamically ---

// Fun Section
const funSectionContainer = document.getElementById('fun-section-container');
const funItems = funFacts.items.map(item => `
    <div class="fun-item">
        <span class="fun-emoji">${item.emoji}</span>
        <span>${item.label}</span>
    </div>
`).join('');
funSectionContainer.innerHTML = `
    <h3>${funFacts.title}</h3>
    <p class="fun-intro">${funFacts.intro}</p>
    <div class="fun-grid">${funItems}</div>
`;

// Experience
const experienceContainer = document.getElementById('experience-container');
experienceData.forEach((exp, index) => {
    // allow either a FontAwesome class (`logoClass`) or an image path (`logoPath`)
    let logoHTML = '';
    if (exp.logoClass) {
        logoHTML = `<i class="${exp.logoClass} experience-logo" aria-hidden="true"></i>`;
    } else if (exp.logoPath) {
        logoHTML = `<img src="${exp.logoPath}" alt="${exp.company} logo" class="experience-logo">`;
    }

    const expSkillBadges = (exp.skills || []).map(s => `<span class="exp-skill-badge">${s}</span>`).join('');
    
    // First item is open by default
    const isOpen = index === 0;

    const expItem = document.createElement('div');
    expItem.className = `experience-item ${isOpen ? 'open' : ''}`;
    expItem.innerHTML = `
        <div class="experience-header" tabindex="0" role="button" aria-expanded="${isOpen}">
            <div class="exp-left">
                ${logoHTML}
                <div class="exp-title-group">
                    <span class="exp-title"><strong>${exp.title}</strong></span>
                    <span class="exp-company">${exp.company}</span>
                </div>
            </div>
            <div class="exp-right">
                <span class="exp-date"><em>${exp.date}</em></span>
                <i class="fa-solid fa-chevron-down exp-chevron"></i>
            </div>
        </div>
        <div class="exp-body" style="display: ${isOpen ? 'block' : 'none'};">
            <p>${exp.description}</p>
            ${expSkillBadges ? `<div class="exp-skills">${expSkillBadges}</div>` : ''}
        </div>
    `;

    // Add click listener for accordion toggle
    const header = expItem.querySelector('.experience-header');
    const body = expItem.querySelector('.exp-body');
    
    header.addEventListener('click', () => {
        const currentlyOpen = expItem.classList.contains('open');
        
        if (currentlyOpen) {
            expItem.classList.remove('open');
            body.style.display = 'none';
            header.setAttribute('aria-expanded', 'false');
        } else {
            expItem.classList.add('open');
            body.style.display = 'block';
            header.setAttribute('aria-expanded', 'true');
        }
    });

    // Keyboard support (Enter/Space)
    header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            header.click();
        }
    });

    experienceContainer.appendChild(expItem);
});

// Education
const educationContainer = document.getElementById('education-container');
educationData.forEach(edu => {
    const awardBadges = edu.awards
        .split(', ')
        .map(a => `<span class="edu-award-badge">${a.trim()}</span>`)
        .join('');

    const courseTags = edu.coursework
        .split(', ')
        .map(c => `<span class="edu-course-tag">${c.trim()}</span>`)
        .join('');

    educationContainer.innerHTML += `
        <div class="education-item">
            <div class="edu-header">
                <div class="edu-header-left">
                    <h3>${edu.institution}</h3>
                    <div class="edu-meta">
                        <span class="edu-degree">${edu.degree}</span>
                        <span class="edu-date">${edu.date}</span>
                    </div>
                </div>
                <div class="edu-gpa-badge">GPA: ${edu.gpa}</div>
            </div>
            <div class="edu-section-label">Awards</div>
            <div class="edu-awards">${awardBadges}</div>
            <div class="edu-section-label">Coursework</div>
            <div class="edu-coursework">${courseTags}</div>
        </div>
    `;
});

// Projects
const projectsGrid = document.getElementById('projects-grid');
projectsData.forEach(proj => {
    const githubBtn = proj.link
        ? `<a href="${proj.link}" target="_blank" class="project-github-link" aria-label="GitHub">
               <i class="fa-brands fa-github"></i>
           </a>`
        : '';

    const pdfBtn = proj.pdfLink
        ? `<a href="${proj.pdfLink}" target="_blank" class="project-github-link" aria-label="PDF Document">
               <i class="fa-solid fa-file-pdf"></i>
           </a>`
        : '';

    const badges = proj.skills.map(s => `<span class="project-badge">${s}</span>`).join('');

    const initials = proj.title.split(' ').slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
    const screenshotHTML = proj.screenshot
        ? `<img src="${proj.screenshot}" alt="${proj.title} screenshot">`
        : `<div class="project-screenshot-placeholder">${initials}</div>`;

    projectsGrid.innerHTML += `
        <div class="project-card">
            <div class="project-screenshot">${screenshotHTML}</div>
            <div class="project-body">
                <div class="project-header">
                    <h3>${proj.title}</h3>
                    <div class="project-links">
                        ${pdfBtn}
                        ${githubBtn}
                    </div>
                </div>
                <p>${proj.description}</p>
                <div class="project-badges">${badges}</div>
            </div>
        </div>
    `;
});


// Skills — tabbed interface
const skillsContainer = document.getElementById('skills-grid');

const tabsHTML = skillsData.map((category, i) =>
    `<button class="skill-tab${i === 0 ? ' active' : ''}" data-index="${i}">${category.skillType}</button>`
).join('');

const panelsHTML = skillsData.map((category, i) => {
    const badges = category.skillsList.map(s => `<span class="skill-badge">${s}</span>`).join('');
    return `<div class="skills-panel${i === 0 ? ' active' : ''}" data-index="${i}">${badges}</div>`;
}).join('');

skillsContainer.innerHTML = `
    <div class="skills-tabs">${tabsHTML}</div>
    <div class="skills-display">${panelsHTML}</div>
`;

skillsContainer.querySelectorAll('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const idx = tab.dataset.index;
        skillsContainer.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
        skillsContainer.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        skillsContainer.querySelector(`.skills-panel[data-index="${idx}"]`).classList.add('active');
    });
});

// --- Chat Logic ---
const chatToggleBtn = document.getElementById('chat-toggle-btn');
const chatCloseBtn = document.getElementById('chat-close-btn');
const chatSidebar = document.getElementById('chat-sidebar');


chatToggleBtn.addEventListener('click', () => {
  if (chatSidebar.classList.contains('hidden')) {
    chatSidebar.classList.remove('hidden');
  } else {
    chatSidebar.classList.add('hidden');
  }    
});

chatCloseBtn.addEventListener('click', () => {
    chatSidebar.classList.add('hidden');
});

// --- Hamburger Menu Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    const isOpen = hamburgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// Contact links in the drawer — just close the menu on click
mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
    });
});

// Section nav links — manual scroll on mobile to account for sticky header
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return; // About — scrolls to top naturally
        if (window.innerWidth > 768) return; // desktop uses scroll-margin-top CSS

        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;

        requestAnimationFrame(() => {
            const headerH = document.querySelector('header').offsetHeight;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerH;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        });
    });
});


