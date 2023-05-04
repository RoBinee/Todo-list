import { data } from './data.js';
import { main } from './component/main.js';
import { getElement } from './getElement.js';

function changeMain(e) {
  //get clicked project title
  const projectTitle = e.currentTarget.querySelector('.project-title');
  //find that project in data
  const index = data.findIndex((item) => {
    return item.project === projectTitle.textContent;
  });
  //if find the data, it will not return -1
  if (index !== -1) {
    //make the object into main element
    const formattedMain = main(index);
    //get main to replace
    const currentMain = getElement('main');
    console.log(formattedMain == currentMain);
    //load different main
    currentMain.replaceWith(formattedMain);
  } else if (index === -1) {
    console.log('error!');
  }
}

export { changeMain };
