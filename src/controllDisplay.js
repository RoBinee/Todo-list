function controllDisplay(main) {
  const addBtn = main.querySelector('.add-btn');
  const taskForm = main.querySelector('#task-form');

  addBtn.addEventListener('click', () => {
    taskForm.style.display = 'grid';
    addBtn.style.display = 'none';
  });
}
export { controllDisplay };
