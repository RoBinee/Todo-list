import { displayElement, hideElement } from './displayElement.js';
import { formatTodoArticle } from './formatTodo.js';
import { Todo } from './dataCreator.js';
import { data } from './data.js';

function controllForm(main, currentMain, index) {
  const addBtn = main.querySelector('.add-btn');
  const taskForm = main.querySelector('#task-form');
  const cancelBtn = main.querySelector('.cancel');

  function getFormValues(e) {
    e.preventDefault();
    const title = taskForm.querySelector('#title');
    const priority = taskForm.querySelector('#priority');
    const priorityValue = getSelectedOptionValue(priority);
    const dueDate = taskForm.querySelector('#dueDate');

    //save form data into data.js
    //1. make structure of Todo object
    const singleTodo = Todo(title.value, dueDate.value);

    //2. push that object into Todos Array
    data[index].todos.push(singleTodo);

    //format formdata into article
    const article = formatTodoArticle(singleTodo);
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
