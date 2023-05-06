import { header } from './component/header.js';
import { sidebar } from './component/sidebar.js';
import { main } from './component/main.js';
import { controllDisplay } from './controllDisplay.js';
// why added js at the end of file have an error?

function loadInitialPage() {
  const content = document.getElementById('content');
  // load header, sidebar, main
  const section = document.createElement('section');
  section.append(sidebar, main(0));
  content.append(header, section);
}

export { loadInitialPage };
