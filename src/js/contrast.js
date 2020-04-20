import { maria } from "./alert";

maria();


const typeOfContrast = (dataContrast) => {
  const type = Number(dataContrast);
  switch (type) {
    case 1:
      return 'white'
    case 2:
      return 'black'
    case 3:
      return 'blue'
    default:
      return ''
  }
}

const getContrast = () => localStorage.getItem('contrast');

const setContrast = (contrast = getContrast()) => document.querySelector('body').setAttribute("class", contrast);

const changeContrast = (e) => {
  const clickedContrast = e.target.getAttribute('data-contrast');
  const currentContrast = typeOfContrast(clickedContrast);
  setContrast(currentContrast);
  localStorage.setItem('contrast', currentContrast);
};

document.querySelector('.js-top-bar').addEventListener('click', changeContrast);


setContrast();
