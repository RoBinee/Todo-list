import { header } from './component/header.js';
import { sidebar } from './component/sidebar.js';
import { main } from './component/main.js';
// why added js at the end of file have an error?
import { toggleEvents } from './controllFormContainer.js';

function loadInitialPage() {
  const content = document.getElementById('content');
  // load header, sidebar, main
  const section = document.createElement('section');
  const mainElement = main(0);
  section.append(sidebar, mainElement);
  content.append(header, section);
  toggleEvents(mainElement);
}

export { loadInitialPage };
