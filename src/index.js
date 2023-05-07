import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import { addNewProject } from './addNewProject.js';
import { changeMain } from './changeMain.js';
import { loadInitialPage } from './loadInitialPage.js';
import { elementFunc } from './elementFunc';

loadInitialPage();

const sidebarForm = elementFunc.getElement('#project-form');
const mainForm = elementFunc.getElement('#task-form');
const projectsContainer = elementFunc.getElement('.projects-container');

projectsContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.className === 'project-title') {
    changeMain(target.textContent);
  }
});

sidebarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewProject();
});

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
