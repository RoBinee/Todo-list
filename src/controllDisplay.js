function controllDisplay(main) {
  const addBtn = main.querySelector('.add-btn');
  const taskForm = document.getElementById('.task-form');

  addBtn.addEventListener('click', () => {
    // taskForm.style.display = 'grid';
    // addBtn.style.display = 'none';
    console.log('open form');
  });
}
export { controllDisplay };
