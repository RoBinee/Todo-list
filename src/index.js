import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import { loadPage } from './loadPage.js';
import { getElement } from './getElement.js';
import { addNewProject } from './addNewProject';

loadPage();

const sidebarForm = getElement(undefined, 'project-form');

sidebarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewProject();
});
