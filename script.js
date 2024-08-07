const nameDayText = document.querySelector("#day");
const today = new Date();
let currentDay = today.toLocaleDateString('ru', { weekday: 'long' });
currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1).toLocaleLowerCase();
nameDayText.textContent = currentDay;

const dateMonthText = document.querySelector("#date");
let dateMonth = today.toLocaleDateString('ru', {day: 'numeric', month: 'long' });
dateMonthText.textContent = dateMonth;