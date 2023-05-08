import { obj } from '../data.js';
import { elementFunc } from '../elementFunc.js';
import { main } from './main.js';

const sidebar = (() => {
  const createSidebar = () => {
    const aside = elementFunc.createElement('aside');

    function formatProject(rawData) {
      const result = rawData
        .map((item) => {
          return `<li class="project">
        <h2 class="project-title">${item.title}</h2>
        <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
      </li>`;
        })
        .join(' ');
      return result;
    }

    aside.innerHTML = `<form action="" id="project-form">
      <input
        class="project-input"
        type="text"
        placeholder="Add Project"
        autocomplete="off"
        id="project"
      />
      <button class="create-btn" type="submit">create</button>
    </form>
    <ul class="projects-container">
    ${formatProject(obj.projects)}
    </ul>`;

    return aside;
  };
  const addNewProject = () => {
    //add new project on the screen
    const container = elementFunc.getElement('.projects-container');
    const formInput = elementFunc.getElement('.project-input');
    const projectName = formInput.value;

    function showNewProject(title) {
      //show new project on the screen
      //make element using input.value
      const element = elementFunc.createElement('li', 'project');
      element.innerHTML = `<h2 class="project-title">${title}</h2>
       <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>`;
      //append in projects-container
      container.append(element);
    }

    function saveNewProject(title) {
      const Project = (title) => {
        return { title, todos: [] };
      };
      //save new project in data
      //1. make data object structure of a new added project
      const newData = Project(title);
      //2. push it to data
      obj.projects.push(newData);
    }

    if (projectName.length === 0) {
      alert('Write down new project name');
      return;
    } else if (projectName.length > 0) {
      saveNewProject(projectName);
      showNewProject(projectName);
      //change the main to new project main
      main.changeMain(projectName);
      // clean input value
      formInput.value = '';
    }
  };
  const removeProject = (target, projectsContainer) => {
    const projectTitle = target.previousElementSibling.textContent;
    //remove that project-title from the screen and data
    const index = obj.projects.findIndex((item) => {
      return item.title === projectTitle;
    });
    if (index !== -1) {
      //find the index
      //remove that project data from the data.js
      const newData = obj.projects.filter((item) => {
        if (item.title !== projectTitle) {
          return item;
        }
      });
      //assign newData into data.js
      obj.projects = newData;
      //remove project-title on the screen
      const projectElement = target.parentElement;
      projectsContainer.removeChild(projectElement);
    } else if (index === -1) {
      console.log('error');
    }
  };
  //setEvent?
  const setEvent = () => {
    const sidebarForm = elementFunc.getElement('#project-form');
    const projectsContainer = elementFunc.getElement('.projects-container');

    projectsContainer.addEventListener('click', (e) => {
      const target = e.target;
      if (target.className === 'project-title') {
        main.changeMain(target.textContent);
      } else if (target.className === 'remove-btn') {
        removeProject(target, projectsContainer);
      }
    });

    sidebarForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sidebar.addNewProject();
    });
  };

  return { createSidebar, addNewProject, setEvent };
})();

export { sidebar };
