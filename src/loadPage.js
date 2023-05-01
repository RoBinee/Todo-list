import { header } from './component/header.js';
import { sidebar } from './component/sidebar.js';
import { main } from './component/main.js';

function loadPage() {
  const content = document.getElementById('content');
  // load header, sidebar, main
  const section = document.createElement('section');
  section.append(sidebar, main);
  content.append(header, section);
}

export { loadPage };
