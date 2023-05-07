const Project = (title) => {
  return { title, todos: [] };
};
const Todo = (title, dueDate) => {
  return { title, dueDate };
};

export { Project, Todo };
