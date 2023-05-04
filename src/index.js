import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import { loadPage } from './loadPage.js';
import { getElement } from './getElement.js';
import { addNewProject } from './addNewProject.js';
// temporary
import { data } from './data.js';
import { main } from './component/main.js';

loadPage();

const sidebarForm = getElement(undefined, 'project-form');
const mainForm = getElement(undefined, 'task-form');
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  project.addEventListener('click', (e) => {
    const projectTitle = e.currentTarget.querySelector('.project-title');
    //find that project in data
    const index = data.findIndex((item) => {
      return item.project === projectTitle.textContent;
    });
    //if find the data, it will not return -1

    //make the object into main element
    const formattedMain = main(index);
    //get main to replace
    const currentMain = getElement('main');
    //load different main
    currentMain.replaceWith(formattedMain);
  });
});

sidebarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewProject();
});

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
