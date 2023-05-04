function getElement(className, idName) {
  let element;
  if (className) {
    element = document.querySelector(className);
  } else if (idName) {
    element = document.getElementById(idName);
  }
  if (element) return element;
}

export { getElement };
