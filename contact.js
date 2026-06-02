document.addEventListener("DOMContentLoaded", () => {
  const formWrapper = document.getElementById("project-form");

  // Slide down the whole form
  setTimeout(() => {
    formWrapper.classList.add("visible");
  }, 100); // small delay makes animation smoother
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Toggle visual "selected" state
//1.Selects all the inputs
document.querySelectorAll(".chip input").forEach((input) => {
  //listen if each of them change
  input.addEventListener("change", () => {
    const chip = input.closest(".chip");
    //Is this checkbox currently checked?
    if (input.checked) {
      //if true add the class -selected
      chip.classList.add("selected");
    } else {
      chip.classList.remove("selected");
    }
  });
});

// Testing
const selectedFeatures = [
  ...document.querySelectorAll('input[name="features"]:checked'),
].map((input) => input.value);

console.log(selectedFeatures);

// Form validation
// const projectForm = document.getElementById("project-form"); //select the modal

function validateProjectInput(inputElement) {
  // If element has no ID, skip it
  if (!inputElement || !inputElement.id) {
    return true;
  }
  const feedback = document.getElementById("feedback_" + inputElement.id);
  let pattern, message;
  if (!pattern) {
    return true; // do NOT block the form for fields without patterns
  }

  if (
    inputElement.id === "starter-timeline" ||
    inputElement.id === "starter-budget" ||
    inputElement.id === "business-timeline" ||
    inputElement.id === "business-budget" ||
    inputElement.id === "redesign-timeline" ||
    inputElement.id === "redesign-budget"
  ) {
    const isValid = inputElement.value.trim() !== "";
    feedback.innerText = isValid ? "✓ Valid" : "✗ Please select a timeline.";
    feedback.className = isValid ? "valid" : "invalid";
    return isValid;
  }

  if (
    inputElement.id === "project_fname" ||
    inputElement.id === "business_text"
  ) {
    pattern = /^.{2,}$/;
    message = "At least two characters required.";
  }

  if (inputElement.id === "form_email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    message = "Enter a valid email address.";
  }

  if (inputElement.id === "form_phone") {
    pattern = /^(07\d{9}|(\+44\s?\d{10}))$/;
    message = "Enter a valid UK phone number (07… or +44…).";
  }

  if (inputElement.id === "form_url") {
    pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/.*)?$/;
    message = "Enter a valid website URL.";
  }

  const value = inputElement.value.trim();

  if (!pattern) {
    console.warn("No pattern matched for input:", inputElement.id);
    return false;
  }

  const isValid = pattern.test(value);
  feedback.innerText = isValid ? "✓ Valid" : "✗ " + message;
  feedback.className = isValid ? "valid" : "invalid";

  return isValid;
}

function validateProjectForm(e) {
  e.preventDefault();

  const fnameInput = document.getElementById("project_fname");
  const businessNameInput = document.getElementById("business_text");
  const emailInput = document.getElementById("form_email");
  const phoneInput = document.getElementById("form_phone");
  const urlInput = document.getElementById("form_url");

  const isFNameValid = validateProjectInput(fnameInput);
  const isBNameValid = validateProjectInput(businessNameInput);
  const isEmailValid = validateProjectInput(emailInput);
  const isPhoneValid = validateProjectInput(phoneInput);
  const isurlValid = validateProjectInput(urlInput);

  const timelineInput = document.getElementById("starter-timeline");
  const timelineInputB = document.getElementById("business-timeline");
  const timelineInputR = document.getElementById("redesign-timeline");
  const timelineInputRB = document.getElementById("redesign-budget");
  const timelineInputBud = document.getElementById("starter-budget");
  const timelineInputBis = document.getElementById("business-budget");

  const isTimelineValid = validateProjectInput(timelineInput);
  const isTimelineBValid = validateProjectInput(timelineInputB);
  const isTimelineRValid = validateProjectInput(timelineInputR);
  const isTimelineBudValid = validateProjectInput(timelineInputBud);
  const isTimelineBisValid = validateProjectInput(timelineInputBis);
  const isTimelineRBValid = validateProjectInput(timelineInputRB);

  const formIsValid =
    isFNameValid &&
    isBNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isurlValid &&
    isTimelineValid &&
    isTimelineBValid &&
    isTimelineRValid &&
    isTimelineBudValid &&
    isTimelineBisValid &&
    isTimelineRBValid;

  if (!formIsValid) {
    alert("Please correct the errors before submitting.");
    return;
  }

  const formData = new FormData(e.target);

  fetch("https://formspree.io/f/xgvnebbb", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        const successMessage = document.querySelector(".success-message");
        successMessage.innerText =
          "Thank you! Your request has been submitted successfully.";

        e.target.reset();
      } else {
        alert("Formspree error. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Submission error:", error);
      alert("Network error. Please try again later.");
    });
}
