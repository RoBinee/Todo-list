function controllDisplay() {
  const addBtn = document.querySelector('.add-btn');
  const taskForm = document.getElementById('task-form');
  addBtn.addEventListener('click', () => {
    taskForm.style.display = 'grid';
    addBtn.style.display = 'none';
  });
}
export { controllDisplay };
