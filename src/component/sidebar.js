const sidebar = (() => {
  const aside = document.createElement('aside');
  aside.innerHTML = `<form action="" id="project-form">
    <input
      class="project-input"
      type="text"
      placeholder="Add Project"
      autocomplete="off"
      id="project"
    />
    <button class="create-btn" type="submit">create</button>
  </form>
  <ul class="projects-container">
    <li class="project">
      <h2 class="project-title">Project1</h2>
    </li>
    <li class="project">
      <h2 class="project-title">Project2</h2>
    </li>
  </ul>
    `;
  return aside;
})();

export { sidebar };
