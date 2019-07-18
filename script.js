// let numMonths, numWeeks, numDays, numHours, numMinutes, numSecond, result;
// let countDate = new Date("jan 1, 2020 15:37:25").getTime();
let localStorageValue;
let datePickerValue = localStorage.getItem(localStorageValue); 

const $counter = document.querySelector('.counter');
const $datePicker = document.querySelector('.date-picker');
const $dataParagraphToggle = document.querySelector('.data__pragraph-toggle');
const $bodyTitleToggle = document.querySelector('.body__title-toggle');

// const $years = document.querySelector('.years');
// const $months = document.querySelector('.months');
// const $weeks = document.querySelector('.weeks');
// const $days = document.querySelector('.days');
// const $hours = document.querySelector('.hours')
// const $minutes = document.querySelector('.minutes')
// const $seconds = document.querySelector('.seconds')

$datePicker.setAttribute('value', datePickerValue);

$datePicker.addEventListener('change', function() {
  datePickerValue = $datePicker.value;
  localStorage.setItem(localStorageValue, datePickerValue);
});

setInterval(() => {
  // value =  dateCalculate(countDate, new Date());

  // setData($years, getYears(value));
  // setData($months, getMonths(value));
  // setData($weeks, getWeeks(value));
  // setData($days, getDays(value));
  // setData($hours, getHours(value));
  // setData($minutes, getMinutes(value));
  // setData($seconds, getSeconds(value));
  let counter = moment().countdown(datePickerValue, countdown.YEARS|countdown.MONTHS|
    countdown.WEEKS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

  setData($counter, counter);

  if(counter.value == 0) getMessage();
  $bodyTitleToggle.innerHTML = counter.value > 0
    ? 'By this time, its left:' 
    : 'After that moment it took:';
  if (isNaN(counter.value)) $bodyTitleToggle.innerHTML = 'Pleace,  input full date!!!';

  // if (result <= 0) alert('YoHooooo!!!');
  // if (seconds < 10) seconds = '0' + seconds;
  // if (minutes < 10) minutes = '0' + minutes;
  // if (hours < 10) hours = '0' + hours;
}, 1000);

function getMessage() {
  alert('The time has come!!!');
}

// function dateCalculate(countDate, nowDate) {
//   return countDate - nowDate;  
// }

function setData($node, timeValue) {
  $node.innerHTML = timeValue;
}

// function getSeconds(value) {
//   return Math.floor(value % (1000 * 60) / 1000);
// }

// function getMinutes(value) {
//   return Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
// }

// function getHours(value) {
//   return Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// }

// function getDays(value) {
//   return Math.floor((value / (1000 * 60 * 60 * 24) % 24)% 7);
// }

// function getWeeks(value) {
//   return Math.floor((value / (1000 * 60 * 60 * 24) % 7) / 4);
// }

// function getMonths(value) {
//   return Math.floor(((value / (1000 * 60 * 60 * 24) % 7) / 4) / 4.1);
// }

// function getYears(value) {
//   return Math.floor((value / (1000 * 60 * 60 * 24)) / 365) - 1;
// }
