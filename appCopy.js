"use strict";

// the hamburger icon show
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    x.classList.toggle("change");
  } else {
    x.style.display = "block";
  }
}

// Footer form validation
//1
function preventSubmit(e) {
  e.preventDefault();
}
// this function passes as argument all the input fields
function validate(inputElement) {
  console.log("validate() caled for inputElement:", inputElement);
  // if input is not filled
  if (!inputElement) {
    alert("validate() called with no input element");
    return false;
  }

  //2
  //select the id of every span element as concatenated part of the id with passed argument id from the above function
  const feedbackElement = document.getElementById(
    "feedback_" + inputElement.id //string + id of the input
  );
  //3
  if (!inputElement) {
    alert("validate() called with no input element");
    return false;
  }

  //declare two patterns
  let pattern;
  let feedback;

  // First name
  // select the inputs with the passing argument for every id at this case is = "firstname"
  if (inputElement.id == "fname") {
    // regeclare min 2 charcters
    pattern = /^.{2,}$/;
    // redeclare feedback
    feedback = "First name is required. At least two characters";
  }
  //Last name
  if (inputElement.id == "lname") {
    // ^$ = anchors, . = any character, {2,} = 2 or more of these characters
    pattern = /^.{2,}$/;
    feedback = "Last name is required. At least two characters";
  }

  //Email
  if (inputElement.id == "email") {
    // ^$ = anchors, .+ = 1+ of any character, \@ = one @ symbol
    pattern = /^.+\@.+$/;
    feedback = "name@domain";
  }
  // Read the input value from the input element
  //  this is the reading value from the passinfg argument with every id
  let value = inputElement.value;
  // Start by assuming the input is valid
  var valid = true;

  // Test the input value against the regular expression pattern
  //JavaScript test() method is a Regular expression method that is used to match the pattern of expression with the string.
  if (pattern.test(value)) {
    feedback = "Valid";
    //feedback el is every input span with particular id of it and we set them a class="valid" wehave that call in the css  // Set the class attribute value of the feedback element to change its colour
    //the purpose id to change the colour to lightgreen
    feedbackElement.className = "valid";
  } else {
    // Set the class attribute value of the feedback element to change its colour
    feedbackElement.className = "invalid";
    // The value is invalid change to invalid state
    valid = false;
  }

  // Show the feedback message on the page
  // change the feedback of every coresponding feedback span element with coresponding feedback for every input
  feedbackElement.innerText = "Client feedback: " + feedback;
  if (value != "") {
    // If there is a value of the input, show the value  too
    feedbackElement.innerText += ": " + value;
  }

  return valid;
}

function validateForm() {
  preventSubmit();
  // Start by assuming the form is valid
  var valid = true;

  // Validate each known input
  // TODO: Change these checks according to the inputs you expect
  valid = valid && validate(document.getElementById("fname"));
  valid = valid && validate(document.getElementById("lname"));
  valid = valid && validate(document.getElementById("email"));

  // Feedback if form cannot be submitted
  if (!valid) {
    alert("Client message: Form data is invalid - please check and try again!");
  }

  return valid;
}
