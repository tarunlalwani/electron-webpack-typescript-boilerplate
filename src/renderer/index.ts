import NAME from '../common/common';

export function init() {
  document.write(`<h1>The name is ${NAME}</h1>`);
}

$(document).ready(() => {
  console.log('page is loaded and ready');
  init();
});
