import { data } from '../data.js';

const main = (index) => {
  const main = document.createElement('main');

  function formatTodo(obj) {
    const { todos } = obj;
    //todos are array, so we need to use map func
    const result = todos
      .map((todo) => {
        return `<article class="task">
      <div>
        <input type="checkbox" class="checkbox" />
        <p class="task-title">${todo.title}</p>
      </div>
      <div>
        <p class="task-dueDate">${todo.dueDate}</p>
        <button class="task-btn edit">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="task-btn delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </article>`;
      })
      .join(' ');
    return result;
  }

  main.innerHTML = `<div class="container">
          <h2 class="main-title">${data[index].title}</h2>
          <div class="task-container">
          ${formatTodo(data[index])}
          </div>
          <div class="btn-form-container">
            <button class="add-btn">+ Add Task</button>
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
            </form>
          </div>
        </div>`;

  return main;
};

export { main };
