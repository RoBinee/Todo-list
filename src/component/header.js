import { elementFunc } from '../elementFunc.js';
const header = () => {
  const header = elementFunc.createElement('header');
  header.innerHTML = `<h1 class="header-title">My plan</h1>`;
  return header;
};

export { header };
