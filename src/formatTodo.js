function formatTodoArticle(title, dueDate) {
  const article = document.createElement('article');
  article.classList.add('task');
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
}

export { formatTodoArticle };
