import { data } from '../data.js';

const sidebar = (() => {
  const aside = document.createElement('aside');

  function formatProject(rawData) {
    const result = rawData
      .map((item) => {
        return `<li class="project">
      <h2 class="project-title">${item.project}</h2>
      <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
    </li>`;
      })
      .join(' ');
    return result;
  }

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
  ${formatProject(data)}
  </ul>
    `;
  return aside;
})();

export { sidebar };
