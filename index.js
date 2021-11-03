let getLink = document.querySelector('.copy__link');
let input = document.querySelector('.input');
let alarm = document.querySelector('.alarm');

const elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let myNum = 10; // how many elements in our code
let password;

// Load function which create a random string
window.onload = (event) => {
  ranElem();
};

const ranElem = () => {
  let result = '';
  for (let i = 0; i < myNum; i++) {
    let ranNum = Math.floor(Math.random() * elements.length);
    result += elements[ranNum];
  }
  input.value = result; //display my value in input
  password = result; //saved it globally in case if you want to use it later
};

getLink.addEventListener('click', () => {
  input.select();
  document.execCommand('copy');

  let par = document.createElement('p');
  alarm.appendChild(par);
  par.innerHTML = 'your unique code was copied ';

  getLink.disabled = true; // to avoid multiple clicking

  setTimeout(() => {
    alarm.removeChild(par);
    getLink.disabled = false;
  }, 3000);
});
