import { projects } from '../data.js';

const sidebar = (() => {
  const aside = document.createElement('aside');

  function formatData(rawData) {
    const result = rawData
      .map((item) => {
        return `<li class="project">
      <h2 class="project-title">${item}</h2>
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
  ${formatData(projects)}
  </ul>
    `;
  return aside;
})();

export { sidebar };
