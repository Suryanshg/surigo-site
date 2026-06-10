import './style.css'
import { bioText, experienceData, skillsData, educationData, projectsData } from './data.js';

// --- Populate Content Dynamically ---

// Bio Text
const bioTextContainer = document.getElementById('bio-text-container');
bioTextContainer.innerHTML += `<p>${bioText}</p>`

// Experience
const experienceContainer = document.getElementById('experience-container');
experienceData.forEach(exp => {
    experienceContainer.innerHTML += `
        <div class="experience-item">
            <div class="experience-header">
                <span><strong>${exp.title}</strong> | <strong>${exp.company}</strong></span>
                <span><em>${exp.date}</em></span>
            </div>
            <p>${exp.description}</p>
        </div>
    `;
});

// Education
const educationContainer = document.getElementById('education-container');
educationData.forEach(edu => {
    educationContainer.innerHTML += `
        <div class="education-item">
            <h3>${edu.institution}</h3>
            <p><strong>${edu.degree}</strong> | <em>${edu.date}</em></p>
            <p>Relevant Coursework: ${edu.coursework}</p>
        </div>
    `;
});

// Projects
const projectsGrid = document.getElementById('projects-grid');
projectsData.forEach(proj => {
    projectsGrid.innerHTML += `
        <div class="project-card">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
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
