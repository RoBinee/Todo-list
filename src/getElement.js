function getElement(className, idName) {
  let element;
  if (className) {
    element = document.querySelector(className);
  } else if (idName) {
    element = document.getElementById(idName);
  }
  if (element) return element;
}

function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
}

export { getElement, createElement };
