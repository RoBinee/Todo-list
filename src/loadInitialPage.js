import { header } from './component/header.js';
import { sidebar } from './component/sidebar.js';
import { main } from './component/main.js';
import { controllForm } from './controllFormContainer.js';
import { elementFunc } from './elementFunc.js';

const loadInitialPage = () => {
  const initialIndex = 0;
  const content = elementFunc.getElement('#content');
  // load header, sidebar, main
  const section = elementFunc.createElement('section');
  const mainElement = main(initialIndex);
  section.append(sidebar(), mainElement);
  content.append(header(), section);
  controllForm(mainElement, undefined, initialIndex);
};

export { loadInitialPage };
