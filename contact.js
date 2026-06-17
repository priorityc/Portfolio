document.addEventListener("DOMContentLoaded", () => {
  const formWrapper = document.getElementById("starterForm");

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

// function validateCurrentStep(stepIndex) {
//   const step = steps[stepIndex];
//   const inputs = step.querySelectorAll("input, select, textarea");
//   let valid = true;

//   inputs.forEach((input) => {
//     // Reuse your existing validation function
//     const result = validateProjectInput(input);
//     if (!result) valid = false;
//   });

//   return valid;
// }

// ===============================
// SLIDING MULTI-STEP FORM LOGIC
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".form-slider");
  const steps = document.querySelectorAll(".form-step");
  const form = document.getElementById("starterForm");

  let currentStep = 0;

  const progressFill = document.querySelector(".progress-fill");
  const stepLabel = document.querySelector(".step-label");

  function updateProgress() {
    const totalSteps = steps.length;
    const percent = ((currentStep + 1) / totalSteps) * 100;
    progressFill.style.width = `${percent}%`;
    stepLabel.textContent = `Step ${currentStep + 1} of ${totalSteps}`;
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${currentStep * 100}%)`;
    updateProgress();
  }

  updateProgress();

  // ⭐ VALIDATE ONLY THE CURRENT STEP
  function validateCurrentStep(stepIndex) {
    const step = steps[stepIndex]; //all the steps with their index as array
    const inputs = step.querySelectorAll("input, select, textarea"); //all elements
    let valid = true; //valid state

    inputs.forEach((input) => {
      //for all elements
      const result = validateProjectInput(input); //validate the current input of the below function
      console.log(result);
      if (!result) valid = false; //if result is false-> valid
    });

    return valid;
  }

  // ⭐ NEXT BUTTONS
  document.querySelectorAll(".next-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!validateCurrentStep(currentStep)) {
        console.log("Step", currentStep, "is invalid");
        return;
      }

      if (currentStep < steps.length - 1) {
        currentStep++;
        updateSlider();
      }
    });
  });

  // ⭐ BACK BUTTONS
  document.querySelectorAll(".back-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateSlider();
      }
    });
  });

  // ⭐ SUBMIT HANDLER
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate last step
    if (!validateCurrentStep(currentStep)) {
      console.log("Final step invalid");
      return;
    }

    // Move to success slide
    currentStep = steps.length - 1;
    updateSlider();

    // Send to Formspree using your existing function
    validateProjectForm(e);
  });
});

//Form validation
// Auto flag fill
const countries = [
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  // You can add more if you want
];

const phoneRules = {
  "+44": /^(\+44\d{10}|07\d{9})$/, // UK
  "+1": /^\+1\d{10}$/, // USA & Canada
  "+359": /^\+359\d{9}$/, // Bulgaria
  "+49": /^\+49\d{10,11}$/, // Germany
  "+33": /^\+33\d{9}$/, // France
  "+34": /^\+34\d{9}$/, // Spain
  "+39": /^\+39\d{9,10}$/, // Italy
  "+61": /^\+61\d{9}$/, // Australia
  "+91": /^\+91\d{10}$/, // India
};

const select = document.getElementById("country-code");
const phoneInput = document.getElementById("form-phone");

function validatePhone() {
  const code = select.value;
  const rule = phoneRules[code];
  const fullNumber = code + phoneInput.value.trim();

  return rule.test(fullNumber);
}

const projectForm = document.getElementById("starterForm"); //select the form

function updateFeedback(feedback, isValid, message) {
  if (!feedback) return;

  feedback.innerText = isValid ? "✓ Valid" : "✗ " + message;
  feedback.className = isValid ? "valid" : "invalid";
}

function validateProjectInput(inputElement) {
  const feedback = document.getElementById("feedback_" + inputElement.id);
  let pattern, message;

  if (!inputElement || (!inputElement.id && inputElement.type !== "radio")) {
    return true;
  }

  // ⭐ RADIO GROUP VALIDATION
  if (inputElement.type === "radio" && inputElement.name === "project-radio") {
    const groupName = inputElement.name;
    const group = document.querySelectorAll(`input[name="${groupName}"]`);
    const feedback = document.getElementById("feedback_" + groupName);

    if (inputElement !== group[0]) return true;

    const isValid = [...group].some((r) => r.checked);
    message = "Please select an option.";

    updateFeedback(feedback, isValid, message);
    return isValid;
  }
  // ⭐ SELECT VALIDATION
  if (inputElement.id === "total-pages") {
    const isValid = inputElement.value !== "";
    const message = "Please select a page number.";

    updateFeedback(feedback, isValid, message);
    return isValid;
  }

  // ⭐ RADIO GROUP VALIDATION
  if (inputElement.type === "radio" && inputElement.name === "timeline") {
    const groupNameR = inputElement.name;
    const group = document.querySelectorAll(`input[name="${groupNameR}"]`);
    const feedback = document.getElementById("feedback_" + groupNameR);

    if (inputElement !== group[0]) return true;

    const isValid = [...group].some((r) => r.checked);
    message = "Please select an option.";

    updateFeedback(feedback, isValid, message);
    return isValid;
  }

  // ⭐ SELECT VALIDATION
  if (inputElement.id === "budget") {
    const isValid = inputElement.value !== "";
    const message = "Please select a page number.";

    updateFeedback(feedback, isValid, message);
    return isValid;
  }
  // CHECKBOXES
  //1/Find all checkboxes that belong to this group.starter-features[]

  if (inputElement.id === "other-type") {
    pattern = /^.{2,}$/;
    message = "At least two characters required.";
  }

  if (inputElement.id === "project-desc") {
    pattern = /^.{2,}$/;
    message = "At least two characters required.";
  }

  // Optional fields: skip if empty
  if (
    inputElement.value.trim() === "" &&
    inputElement.hasAttribute("optional")
  ) {
    return true;
  }

  // NAME
  if (inputElement.id === "project-fname") {
    pattern = /^.{2,}$/;
    message = "At least two characters required.";
  }

  // EMAIL
  if (inputElement.id === "form-email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    message = "Enter a valid email address.";
  }

  if (inputElement.id === "form-phone") {
    const isValid = validatePhone();
    message = "Enter a valid phone number for the selected country.";

    updateFeedback(feedback, isValid, message);
    return isValid;
  }

  // URL
  if (inputElement.id === "form-url") {
    pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/.*)?$/;
    message = "Enter a valid website URL.";
  }

  // If no pattern defined for this field → skip
  if (!pattern) {
    return true;
  }

  const value = inputElement.value.trim();
  const isValid = pattern.test(value);

  updateFeedback(feedback, isValid, message);
  return isValid;
}

function validateProjectForm(e) {
  e.preventDefault();

  console.log("SUBMIT FIRED");

  const fnameInput = document.getElementById("project-fname");
  const emailInput = document.getElementById("form-email");
  const phoneInput = document.getElementById("form-phone");
  const urlInput = document.getElementById("form-url");

  const isFNameValid = validateProjectInput(fnameInput);
  const isEmailValid = validateProjectInput(emailInput);
  const isPhoneValid = validateProjectInput(phoneInput);
  const isurlValid = validateProjectInput(urlInput);

  const formIsValid =
    isFNameValid && isEmailValid && isPhoneValid && isurlValid;

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

countries.forEach((c) => {
  const option = document.createElement("option");
  option.value = c.code;
  option.textContent = `${c.flag} ${c.code}`;
  select.appendChild(option);
});
