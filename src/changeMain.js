import { data } from './data.js';
import { main } from './component/main.js';
import { getElement } from './getElement.js';

function changeMain(projectTitle) {
  //get clicked project title
  //find that project in data
  const index = data.findIndex((item) => {
    return item.project === projectTitle;
  });
  //if find the data, it will not return -1
  if (index !== -1) {
    //make the object into main element
    const formattedMain = main(index);
    //get main to replace
    const currentMain = getElement('main');
    //load different main
    currentMain.replaceWith(formattedMain);
  } else if (index === -1) {
    console.log('error!');
  }
}

export { changeMain };
