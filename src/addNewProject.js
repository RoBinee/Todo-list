import { data } from './data.js';
import { Project } from './dataCreator.js';
import { changeMain } from './changeMain.js';
import { elementFunc } from './elementFunc.js';

function addNewProject() {
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
    //save new project in data
    //1. make data object structure of a new added project
    const newData = Project(title);
    //2. push it to data
    data.push(newData);
  }

  if (projectName.length === 0) {
    alert('Write down new project name');
    return;
  } else if (projectName.length > 0) {
    saveNewProject(projectName);
    showNewProject(projectName);
    //change the main to new project main
    changeMain(projectName);
    // clean input value
    formInput.value = '';
  }
}

export { addNewProject };
