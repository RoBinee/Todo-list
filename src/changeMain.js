import { data } from './data.js';
import { main } from './component/main.js';
import { getElement } from './getElement.js';
import { controllDisplay } from './controllDisplay.js';

function changeMain(projectTitle) {
  //get clicked project title
  //find that project in data
  const index = data.findIndex((item) => {
    return item.project === projectTitle;
  });
  //if find the data, it will not return -1
  if (index !== -1) {
    //?remove addEventListener in form btn
    //make the object into main element
    const formattedMain = main(index);
    controllDisplay(formattedMain);
    //get main to replace
    const currentMain = getElement('main');

    //load different main
    currentMain.replaceWith(formattedMain);
  } else if (index === -1) {
    console.log('error!');
  }
}

export { changeMain };
