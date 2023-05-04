import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import { loadPage } from './loadPage.js';
import { getElement } from './getElement.js';
import { addNewProject } from './addNewProject.js';
import { changeMain } from './changeMain.js';

loadPage();

const sidebarForm = getElement(undefined, 'project-form');
const mainForm = getElement(undefined, 'task-form');
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  project.addEventListener('click', (e) => {
    //if clicked project is already presented in main
    //don't change main
    changeMain(e);
  });
});

sidebarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewProject();
});

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
