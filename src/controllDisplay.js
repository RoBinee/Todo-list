function controllDisplay(main) {
  const addBtn = main.querySelector('.add-btn');
  const taskForm = main.querySelector('#task-form');
  function displayForm() {
    taskForm.style.display = 'grid';
    addBtn.style.display = 'none';
  }

  addBtn.addEventListener('click', displayForm);
}

export { controllDisplay };
