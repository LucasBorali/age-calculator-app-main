'use strict';

// variables
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const parentEl = document.getElementById('display-age');

/////////////////FUNCTIONS//////////////////////////////

const isExistingDate = function (year, month, day) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

const render = function (html) {
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', html);
};

const calcLivedTime = function () {
  const date = new Date();

  const livedYears =
    +month.value < date.getMonth() && +day.value < date.getDate()
      ? date.getFullYear() - year.value
      : date.getFullYear() - year.value - 1;

  const livedMonths = date.getMonth() + 1 - 1;

  const livedDays = date.getDate() - 1;

  const html = `
        <p><span>${livedYears}</span> years</p>
        <p><span>${livedMonths}</span> months</p>
        <p><span>${livedDays}</span> days</p>
 `;
  const timeTraveler = `<div id="message"><p>You must be a Time Traveler XD :)</p></div>`;

  day.value = '';
  month.value = '';
  year.value = '';
  day.focus();

  if (livedYears <= 0 || livedMonths <= 0 || livedDays <= 0) {
    return timeTraveler;
  } else {
    return html;
  }
};

const displayAge = function () {
  const validDate = isExistingDate(+year.value, +month.value, +day.value);

  const notValidDateHTML = `<div id="message"><p>Invalid date! Please try again :)</p></div>`;

  if (validDate === true) {
    render(calcLivedTime());
  } else {
    render(notValidDateHTML);
  }
};

//////////////EVENTS///////////////////

btn.addEventListener('click', displayAge);
