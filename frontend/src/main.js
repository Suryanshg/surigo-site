import './style.css'
import { bioSections, funFacts, experienceData, skillsData, educationData, projectsData } from './data.js';

// --- Populate Content Dynamically ---

// Bio Sections
const bioSectionsContainer = document.getElementById('bio-sections');
bioSections.forEach(section => {
    bioSectionsContainer.innerHTML += `
        <div class="bio-card">
            <div class="bio-card-header">
                <i class="${section.icon}"></i>
                <h3>${section.title}</h3>
            </div>
            <p>${section.content}</p>
        </div>
    `;
});

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
experienceData.forEach(exp => {
    // allow either a FontAwesome class (`logoClass`) or an image path (`logoPath`)
    let logoHTML = '';
    if (exp.logoClass) {
        logoHTML = `<i class="${exp.logoClass} experience-logo" aria-hidden="true"></i>`;
    } else if (exp.logoPath) {
        logoHTML = `<img src="${exp.logoPath}" alt="${exp.company} logo" class="experience-logo">`;
    }

    const expSkillBadges = (exp.skills || []).map(s => `<span class="exp-skill-badge">${s}</span>`).join('');

    experienceContainer.innerHTML += `
        <div class="experience-item">
            <div class="experience-header">
                <div class="exp-left">
                    ${logoHTML}
                    <span class="exp-title"><strong>${exp.title}</strong> | <strong>${exp.company}</strong></span>
                </div>
                <span><em>${exp.date}</em></span>
            </div>
            <p>${exp.description}</p>
            ${expSkillBadges ? `<div class="exp-skills">${expSkillBadges}</div>` : ''}
        </div>
    `;
});

// Education
const educationContainer = document.getElementById('education-container');
educationData.forEach(edu => {
    educationContainer.innerHTML += `
        <div class="education-item">
            <h3>${edu.institution}</h3>
            <p><strong>${edu.degree}</strong> | <b>GPA</b>: ${edu.gpa} | <b>Graduation: </b>${edu.date} </p>
            <p><u>Relevant Coursework</u>: ${edu.coursework}</p>
            <p><u>Awards</u>: ${edu.awards}</p>
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

    const badges = proj.skills.map(s => `<span class="project-badge">${s}</span>`).join('');

    projectsGrid.innerHTML += `
        <div class="project-card">
            <div class="project-header">
                <h3>${proj.title}</h3>
                ${githubBtn}
            </div>
            <p>${proj.description}</p>
            <div class="project-badges">${badges}</div>
        </div>
    `;
});

// Skills
const skillsContainer = document.getElementById('skills-grid');
skillsData.forEach(category => {
    const listItems = category.skillsList.map(skill => `<li>${skill}</li>`).join('');
    skillsContainer.innerHTML += `
        <div class="skill-card">
            <h3>${category.skillType}</h3>
            <ul class="skills-list">
                ${listItems}
            </ul>
        </div>
    `;
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
