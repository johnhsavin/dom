// get the h1 header:
const h1 = document.querySelector("h1");
//change the h1 text:
h1.innerText = "Enter your birth year";

function calculateAge(event) {
// when the form is submitted, prevent the default behavior
event.preventDefault();
// don't let the form auto-submit.
// get the birth year that was entered
const birthYear = event.target.birthYear.value;
// subtract from the current year (2023) to get age
const age = 2023 - birthYear;
// display the age in h2 ("In 2023, you will turn xx years old")
const h2 = document.querySelector("h2");
h2.innerText = "In 2023, you will turn age " + age + " years old."
}


// add an onsubmit event to the form
const form = document.querySelector("form");
form.addEventListener("submit", calculateAge);


