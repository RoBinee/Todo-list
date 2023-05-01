const header = (() => {
  const header = document.createElement('header');
  header.innerHTML = `<h1 class="header-title">My plan</h1>`;
  return header;
})();

export { header };
