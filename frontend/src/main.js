import './style.css'
import { experienceData, skillsData, educationData, projectsData } from './data.js';

// --- Populate Content Dynamically ---

// Experience
const experienceContainer = document.getElementById('experience-container');
experienceData.forEach(exp => {
    experienceContainer.innerHTML += `
        <div class="experience-item">
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong> | <em>${exp.date}</em></p>
            <p>${exp.description}</p>
        </div>
    `;
});

// Skills
const skillsList = document.getElementById('skills-list');
skillsData.forEach(skill => {
    skillsList.innerHTML += `<li>${skill}</li>`;
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
