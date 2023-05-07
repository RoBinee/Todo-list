import { data } from '../data.js';
import { formatTodoArticle } from '../formatTodo.js';
import { createElement } from '../getElement.js';

const main = (index) => {
  const { title, todos } = data[index];
  //create main element
  const main = document.createElement('main');

  //create container
  const container = createElement('div', 'container');

  //create h2 main-title
  const mainTitle = createElement('h2', 'main-title');
  mainTitle.textContent = title;

  //create div task-container
  const taskContainer = createElement('div', 'task-container');
  //todoElement is an array. add each element into taskContainer
  const todoElements = todos.map((todo) => formatTodoArticle(todo));
  todoElements.forEach((todo) => {
    taskContainer.append(todo);
  });

  //create div form-container
  const formContainer = createElement('div', 'form-container');
  formContainer.innerHTML = `<button class="add-btn">+ Add Task</button>
  <form action="" id="task-form" novalidate>
    <input
      type="text"
      class="task-form-input"
      autocomplete="off"
      id="title"
      placeholder="title"
      required
    />
    <select name="" id="priority" class="task-form-input">
      <option value="urgent" selected>urgent</option>
      <option value="not urgent">not urgent</option>
    </select>
    <input type="date" id="dueDate" class="task-form-input" />
    <div class="btn-container">
      <button type="button" class="task-form-btn cancel">Cancel</button>
      <button type="submit" class="task-form-btn add">Add</button>
    </div>
  </form>`;

  //append main-title, task-container, form-container into container
  container.append(mainTitle, taskContainer, formContainer);

  main.append(container);

  return main;
};

export { main };
