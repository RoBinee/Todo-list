const main = () => {
  return `<main>
        <div class="container">
          <h2 class="main-title">Project Name</h2>
          <div class="task-container">
            <!-- single task start -->
            <article class="task">
              <div>
                <input type="checkbox" class="checkbox" />
                <p class="task-title">task title</p>
              </div>
              <div>
                <p class="task-dueDate">2023-05-01</p>
                <button class="task-btn edit">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button class="task-btn delete">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>
            <!-- single task end -->
          </div>
          <div class="btn-form-container">
            <button class="add-btn">+ Add Task</button>
            <form action="" id="task-form">
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
                <button class="task-form-btn">Cancel</button>
                <button class="task-form-btn">Add</button>
              </div>
            </form>
          </div>
        </div>
      </main>`;
};

export { main };
