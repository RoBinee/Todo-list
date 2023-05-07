import { displayElement, hideElement } from './displayElement.js';

function controllForm(main, currentMain) {
  const addBtn = main.querySelector('.add-btn');
  const taskForm = main.querySelector('#task-form');
  const cancelBtn = main.querySelector('.cancel');

  function getFormValues(e) {
    e.preventDefault();
    const title = taskForm.querySelector('#title');
    const priority = taskForm.querySelector('#priority');
    const priorityValue = getSelectedOptionValue(priority);
    const dueDate = taskForm.querySelector('#dueDate');

    //format formdata into article
    const article = document.createElement('article');
    article.classList.add('task');
    article.innerHTML = `<div>
     <input type="checkbox" class="checkbox" />
     <p class="task-title">${title.value}</p>
   </div>
   <div>
     <p class="task-dueDate">${dueDate.value}</p>
     <button class="task-btn edit">
       <i class="fa-solid fa-pen"></i>
     </button>
     <button class="task-btn delete">
       <i class="fa-solid fa-trash"></i>
     </button>
   </div>`;
    //add it into the container
    const taskContainer = main.querySelector('.task-container');
    taskContainer.append(article);
    //clean the inputs
  }
  function getSelectedOptionValue(input) {
    return input.options[input.selectedIndex].value;
  }

  if (currentMain) {
    //remove eventListeners in currentMain
    const addBtn = currentMain.querySelector('.add-btn');
    const taskForm = currentMain.querySelector('#task-form');
    const cancelBtn = currentMain.querySelector('.cancel');

    addBtn.removeEventListener('click', () => {
      hideElement(addBtn);
      displayElement(taskForm, 'grid');
    });
    cancelBtn.removeEventListener('click', () => {
      hideElement(taskForm);
      displayElement(addBtn);
    });
    taskForm.removeEventListener('submit', getFormValues);
  }

  //set eventListeners in new main
  addBtn.addEventListener('click', () => {
    hideElement(addBtn);
    displayElement(taskForm, 'grid');
  });

  cancelBtn.addEventListener('click', () => {
    hideElement(taskForm);
    displayElement(addBtn);
  });

  taskForm.addEventListener('submit', getFormValues);
}
export { controllForm };
