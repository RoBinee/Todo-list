import { header } from './component/header.js';
import { sidebar } from './component/sidebar.js';
import { main } from './component/main.js';
// why added js at the end of file have an error?
import { controllForm } from './controllFormContainer.js';

function loadInitialPage() {
  const initialIndex = 0;
  const content = document.getElementById('content');
  // load header, sidebar, main
  const section = document.createElement('section');
  const mainElement = main(initialIndex);
  section.append(sidebar, mainElement);
  content.append(header, section);
  controllForm(mainElement, undefined, initialIndex);
}

export { loadInitialPage };
