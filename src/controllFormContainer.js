function controllForm(main, currentMain) {
  const addBtn = main.querySelector('.add-btn');
  const taskForm = main.querySelector('#task-form');
  const cancelBtn = main.querySelector('.cancel');

  function displayElement(element, display) {
    if (display) {
      element.style.display = display;
    } else {
      element.style.display = 'block';
    }
  }
  function hideElement(element) {
    element.style.display = 'none';
  }

  function test(e) {
    e.preventDefault();
    console.log(e);
  }

  if (currentMain) {
    //remove eventListener from currentMain
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
    taskForm.removeEventListener('submit', test);
  }

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
    console.log(e);
  });
}
export { controllForm };
