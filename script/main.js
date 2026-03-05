const yachtList = document.querySelector('.yacht-rent-card-list');

const checkerWindow = () => {
  if (window.innerWidth < 768) {
    console.log('width < 768');
    yachtList.children[1].setAttribute('style', 'display: none');
    yachtList.lastElementChild.setAttribute('style', 'display: none');
  } else if (window.innerWidth < 1280) {
    console.log('width < 1280');
    yachtList.children[1].setAttribute('style', 'display: flex');
    yachtList.lastElementChild.setAttribute('style', 'display: none');
  } else {
    Array.from(yachtList.children).forEach((child) => {
      child.setAttribute('style', 'display: flex;');
    });
  }
};

window.addEventListener('resize', checkerWindow);
checkerWindow();
