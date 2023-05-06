import { getElement } from './getElement.js';
import { data } from './data.js';

const dataCreator = (title) => {
  return { project: title, todos: [] };
};

function addNewProject() {
  //add new project on the screen
  const container = getElement('.projects-container');
  const formInput = getElement('.project-input');
  const projectName = formInput.value;

  function showNewProject(title) {
    //show new project on the screen
    //make element using input.value
    const element = document.createElement('li');
    element.classList.add('project');
    element.innerHTML = `<h2 class="project-title">${title}</h2>
        <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>`;
    //append in projects-container
    container.append(element);
  }

  function saveNewProject(title) {
    //save new project in data
    //1. make data object structure of a new added project
    const newData = dataCreator(title);
    //2. push it to data
    data.push(newData);
    console.log(data);
  }

  if (projectName.length === 0) {
    alert('Write down new project name');
    return;
  } else if (projectName.length > 0) {
    saveNewProject(projectName);
    showNewProject(projectName);
    // clean input value
    formInput.value = '';
  }
}

export { addNewProject };
