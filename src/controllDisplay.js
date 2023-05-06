function controllDisplay(main, currentMain) {
  if (currentMain) {
    //remove eventListener from currentMain
    const addBtn = currentMain.querySelector('.add-btn');
    const cancelBtn = currentMain.querySelector('.cancel');

    addBtn.removeEventListener('click', displayForm);
    cancelBtn.removeEventListener('click', hideForm);
  }
  const addBtn = main.querySelector('.add-btn');
  const taskForm = main.querySelector('#task-form');
  const cancelBtn = main.querySelector('.cancel');

  function displayForm() {
    taskForm.style.display = 'grid';
    addBtn.style.display = 'none';
  }
  function hideForm() {
    taskForm.style.display = 'none';
    addBtn.style.display = 'block';
  }

  addBtn.addEventListener('click', displayForm);
  cancelBtn.addEventListener('click', hideForm);
}

export { controllDisplay };
