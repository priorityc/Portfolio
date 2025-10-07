"use strict";

const nav = document.querySelector('.sidenav');
const header = document.querySelector('.hero-header');

// Accessibility
 function handleKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
}

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

//Download CV
 function downloadCV() {
    document.getElementById('cvLink').click();
  }

  
// FADING navigation
const handleHover = function (e) {
  // console.log(this, e.target);

// 1. Ensures the function only runs when a user hovers over a navigation link.
  //we dont need to use closest method here  becouse there is no children elements
  if(e.target.classList.contains('nav__link')) {

  //Identify Elements to Fade

  const link = e.target;
  // console.log(link)

  // 2. siblings finds all other .nav__link elements in the nav
  //select the sibling elements(links) by going to the parent and select a children from there
  const siblings = link.closest('.arrange-manu').querySelectorAll('.nav__link');
   
  //select the logo-move  to the closest which is nav and search for the image
  const logo = link.closest('.sidenav').querySelector('#logo');
    
  //change the opasity of the siblings of the selected link like first
  //check if the element are not the original link change opacity
  siblings.forEach(el=> {
    if (el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
  }
};

// Passing an argument into handler
//select the parent el. of all the links and logo navigation
//atach the event listener (mouse enter event does not buble)
nav.addEventListener('mouseover', handleHover.bind(0.5));
//oposite of mouseover(remove the opacity)
nav.addEventListener('mouseout', handleHover.bind(1));


// STICKY NAVIGATION
// 1.select the header-already selected
// 2. calc the height of the nav 
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

//3.create the func
const stickyNav = function(entries) {
  const [entry] = entries;//get the first entry
//if false(not intersecting)
  if (!entry.isIntersecting)
    nav.classList.add('sticky');
//if true( intersecting)
  else nav.classList.remove('sticky');
}

//4.create the header observer when header will enter the viewport
const headerObserver =  new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})
//observe for the header
headerObserver.observe(header);


// MODAL
  const openBtn = document.getElementById('openModal');//selects the button
  const modal = document.getElementById('hireModal');//select the modal
  const closeBtn = modal.querySelector('.close-modal');//select the btn that closes the modal

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Optional: close modal when clicking outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  
// MODAL form validation
// Modal validation
function validateModalInput(inputElement) {
  const feedback = document.getElementById("feedback_" + inputElement.id);
  let pattern, message;

  if (inputElement.id === "modal_name") {
    pattern = /^.{2,}$/;
    message = "At least two characters required.";
  }

  if (inputElement.id === "modal_email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    message = "Enter a valid email address.";
  }

  if (inputElement.id === "modal_message") {
    pattern = /^.{10,}$/;
    message = "Message must be at least 10 characters.";
  }

  const value = inputElement.value.trim();
  const isValid = pattern.test(value);

  feedback.innerText = isValid ? "✓ Valid" : "✗ " + message;
  feedback.className = isValid ? "valid" : "invalid";

  return isValid;
}

let alertShown = false; // Global flag


function validateModal(e) {
  e.preventDefault();

  const nameInput = document.getElementById("modal_name");
  const emailInput = document.getElementById("modal_email");
  const messageInput = document.getElementById("modal_message");

  const isNameValid = validateModalInput(nameInput);
  const isEmailValid = validateModalInput(emailInput);
  const isMessageValid = validateModalInput(messageInput);

  const formIsValid = isNameValid && isEmailValid && isMessageValid;

  if (!formIsValid) {
    if (!alertShown) {
      alert("Please correct the errors before submitting.");
      alertShown = true;
    }
    return;
  }

  // ✅ Submit as JSON using fetch
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };

  fetch("https://formspree.io/f/xgvnebbb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert("Thanks! Your message was sent.");
      e.target.reset(); // Optional: clear the form
      alertShown = false; // Reset alert flag
    } else {
      alert("Oops! Something went wrong.");
    }
  })
  .catch(error => {
    console.error("Submission error:", error);
    alert("Network error. Please try again later.");
  });
}


 







  // Footer form validation
//1
// Footer validation

  const contactForm = document.getElementById('contact');//select the modal

function validateFooterInput(inputElement) {
  const feedback = document.getElementById("feedback_" + inputElement.id);
  let pattern, message;

  if (inputElement.id === "footer_fname" || inputElement.id === "footer_lname") {
    pattern = /^.{2,}$/;
    message = "At least two characters required.";
  }

  if (inputElement.id === "footer_email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    message = "Enter a valid email address.";
  }

  if (inputElement.id === "footer_message") {
    pattern = /^.{10,}$/;
    message = "Message must be at least 10 characters.";
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


function validateFooterForm(e) {
  e.preventDefault();

  const fnameInput = document.getElementById("footer_fname");
  const lnameInput = document.getElementById("footer_lname");
  const emailInput = document.getElementById("footer_email");
  const messageInput = document.getElementById("footer_message");

  const isFNameValid = validateFooterInput(fnameInput);
  const isLNameValid = validateFooterInput(lnameInput);
  const isEmailValid = validateFooterInput(emailInput);
  const isMessageValid = validateFooterInput(messageInput);

  const formIsValid = isFNameValid && isLNameValid && isEmailValid && isMessageValid;

  if (!formIsValid) {
    alert("Please correct the errors before submitting.");
    return;
  }

  // Submit via fetch or native form submission
  const formData = {
    fname: fnameInput.value.trim(),
    lname: lnameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };

  fetch("https://formspree.io/f/xgvnebbb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert("Thanks! Your message was sent.");
      e.target.reset();
    } else {
      alert("Formspree error. Please try again.");
    }
  })
  .catch(error => {
    console.error("Submission error:", error);
    alert("Network error. Please try again later.");
  });
}