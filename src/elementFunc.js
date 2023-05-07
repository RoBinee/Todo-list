const elementFunc = (() => {
  const getElement = (name) => {
    let element = document.querySelector(name);
    if (element) return element;
  };

  const createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  };

  return { getElement, createElement };
})();

export { elementFunc };
