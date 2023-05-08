import { data } from '../data.js';
import { elementFunc } from '../elementFunc.js';
// import { Todo } from '../dataCreator.js';

const main = (() => {
  const formatTodoArticle = ({ title, dueDate }) => {
    const article = elementFunc.createElement('article', 'task');
    article.innerHTML = `<div>
       <input type="checkbox" class="checkbox" />
       <p class="task-title">${title}</p>
     </div>
     <div>
       <p class="task-dueDate">${dueDate}</p>
       <button class="task-btn edit">
         <i class="fa-solid fa-pen"></i>
       </button>
       <button class="task-btn delete">
         <i class="fa-solid fa-trash"></i>
       </button>
     </div>`;
    return article;
  };
  const createMain = (index) => {
    //find the data and use it to create main
    const { title, todos } = data[index];
    //create main element
    const main = elementFunc.createElement('main');
    //create container
    const container = elementFunc.createElement('div', 'container');
    //create h2 main-title
    const mainTitle = elementFunc.createElement('h2', 'main-title');
    mainTitle.textContent = title;
    //create div task-container
    const taskContainer = elementFunc.createElement('div', 'task-container');
    //todoElement is an array. add each element into taskContainer
    const todoElements = todos.map((todo) => formatTodoArticle(todo));
    todoElements.forEach((todo) => {
      taskContainer.append(todo);
    });
    //create div form-container
    const formContainer = elementFunc.createElement('div', 'form-container');
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
  const addArticle = (taskForm, index) => {
    const Todo = (title, dueDate) => {
      return { title, dueDate };
    };
    /*Get values and add to data.js*/
    /**1. get form values */
    const title = taskForm.querySelector('#title');
    const priority = taskForm.querySelector('#priority');
    const priorityValue = priority.options[priority.selectedIndex].value;
    const dueDate = taskForm.querySelector('#dueDate');

    //2. save form data into data.js
    //2-1. make structure of Todo object
    const singleTodo = Todo(title.value, dueDate.value);

    //2-2. push that object into Todos Array
    data[index].todos.push(singleTodo);

    /*Show new article on the screen */
    //format form data into article
    const article = formatTodoArticle(singleTodo);

    //add it into the container
    const taskContainer = document.querySelector('.task-container');
    taskContainer.append(article);

    //clean the inputs
    title.value = '';
    dueDate.value = '';
  };
  const displayElement = (element, display) => {
    if (display) {
      element.style.display = display;
    } else {
      element.style.display = 'block';
    }
  };
  const hideElement = (element) => {
    element.style.display = 'none';
  };
  //event after submit form
  const toggleFormEvents = (main, currentMain, index) => {
    //set
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
      taskForm.removeEventListener('submit', addArticle);
    }
    //set eventListeners in article
    const addBtn = main.querySelector('.add-btn');
    const taskForm = main.querySelector('#task-form');
    const cancelBtn = main.querySelector('.cancel');

    addBtn.addEventListener('click', () => {
      hideElement(addBtn);
      displayElement(taskForm, 'grid');
    });

    cancelBtn.addEventListener('click', () => {
      hideElement(taskForm);
      displayElement(addBtn);
    });

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addArticle(taskForm, index);
      //add new article on the screen
      //save new article in the data
    });
  };

  const changeMain = (projectTitle) => {
    //get clicked project title
    //find that project in data
    const index = data.findIndex((item) => {
      return item.title === projectTitle;
    });
    //if find the data, it will not return -1
    if (index !== -1) {
      //?remove addEventListener in form btn
      //make the object into main element
      const formattedMain = main.createMain(index);
      //get main to replace
      const currentMain = elementFunc.getElement('main');
      //add and remove eventListener
      main.toggleFormEvents(formattedMain, currentMain, index);

      //load different main
      currentMain.replaceWith(formattedMain);
    } else if (index === -1) {
      console.log('error!');
    }
  };

  return { createMain, toggleFormEvents, changeMain };
})();

export { main };
