import { header } from './component/header.js';
import { sidebar } from './component/sidebar.js';
import { main } from './component/main.js';
import { elementFunc } from './elementFunc.js';

const initialPage = (() => {
  const load = () => {
    const initialIndex = 0;
    const content = elementFunc.getElement('#content');
    // load header, sidebar, main
    const section = elementFunc.createElement('section');
    const mainElement = main.createMain(initialIndex);
    section.append(sidebar.createSidebar(), mainElement);
    content.append(header(), section);
    main.toggleFormEvents(mainElement, undefined, initialIndex);
    sidebar.setEvent();
  };
  return { load };
})();

export { initialPage };
