import { getElement } from './getElement.js';

function addNewProject() {
  //add new project on the screen
  const formInput = getElement('.project-input');
  const projectName = formInput.value;
  if (projectName.length === 0) {
    alert('Write down new project name');
    return;
  } else if (projectName.length > 0) {
    //make element using input.value
    const element = document.createElement('li');
    element.classList.add('project');
    element.innerHTML = `<h2 class="project-title">${projectName}</h2>
        <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>`;
    //append in projects-container
    const container = getElement('.projects-container');
    container.append(element);
    // clean input value
    formInput.value = '';
  }
  //save new project in data
}

export { addNewProject };
