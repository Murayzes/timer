const $bodyTitleToggle = document.querySelector(".body__title-toggle");
const $datePicker = document.querySelector(".date-picker");
const $counter = document.querySelector(".counter");

let datePickerValue = localStorage.getItem("localStorageDate");

$datePicker.setAttribute("value", datePickerValue);

$datePicker.addEventListener("change", function() {
  datePickerValue = $datePicker.value;
  localStorage.setItem("localStorageDate", datePickerValue);
});

setInterval(() => {
  let counter = moment().countdown(
    datePickerValue,
      countdown.YEARS|
      countdown.MONTHS|
      countdown.WEEKS|
      countdown.DAYS|
      countdown.HOURS|
      countdown.MINUTES|
      countdown.SECONDS
  );

  if (counter.value == 0) getMessage("The time has come!!!");
  $bodyTitleToggle.innerHTML =
    counter.value > 0
      ? setBodyTitleToggle("By this time, its left:")
      : setBodyTitleToggle("After that moment it took:");

  if (isNaN(counter.value)) setBodyTitleToggle("Pleace,  input full date!!!");

  setData($counter, counter);
}, 1000);

const setBodyTitleToggle = toggleStatus => ($bodyTitleToggle.innerHTML = toggleStatus);

function getMessage(message) { alert(message) };


function setData($node, timeValue) {
  $node.innerHTML = timeValue;
}
