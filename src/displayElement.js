function displayElement(element, display) {
  if (display) {
    element.style.display = display;
  } else {
    element.style.display = 'block';
  }
}
function hideElement(element) {
  element.style.display = 'none';
}

export { displayElement, hideElement };
