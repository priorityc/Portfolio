"use strict";

const nav = document.querySelector('.sidenav');
const header = document.querySelector('.hero');
const dotContainer = document.querySelector('.dots');

// Accessibility
 function handleKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
}

// the hamburger icon show
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "flex") {
//     x.style.display = "none";
//     x.classList.toggle("change");
//   } else {
//     x.style.display = "flex";
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("myLinks");

  // function toggleMenu() {
  //   const isOpen = menu.style.display === "block"; //the menu links
  //   menu.classList.toggle("open");
  //   hamburger.classList.toggle("change", !isOpen);
  // }

  function toggleMenu() {
  const isOpen = menu.style.display === "block";

  menu.style.display = isOpen ? "none" : "block";

  // This toggles the hamburger animation correctly
  hamburger.classList.toggle("change", !isOpen);
}

  hamburger.addEventListener("click", toggleMenu);
  
  hamburger.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });
});

//Download CV
//  function downloadCV() {
//     document.getElementById('cvLink').click();
//   }

  
// FADING navigation
// This code makes the navigation menu fade other links + the logo when hover over one link.
//  When you move mouse away, everything returns to full opacity.
const handleHover = function (e) {
  // console.log(this, e.target);

// 1. Ensures the function only runs when a user hovers over a navigation link.
  //we dont need to use closest method here  becouse there is no children elements
  if(e.target.classList.contains('nav__link')) {

  //Identify Elements to Fade
//The current link huvered 
  const link = e.target;
  // console.log(link)

  // 2. siblings finds all other .nav__link elements in the nav
  //select the sibling elements(links) by going to the parent and select a children from there
  const siblings = link.closest('.arrange-manu').querySelectorAll('.nav__link');
   
  //select the logo-move  to the closest which is nav and search for the image
  const logo = link.closest('.sidenav').querySelector('.logo');
    
  //change the opasity of the siblings of the selected link like first
  siblings.forEach(el=> {

    //If the link is not the one being hovered, change its opacity.

    if (el !== link) el.style.opacity = this;
  });//exit than do the same with the logo
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
// 1.select the header-already selected above

// nav.getBoundingClientRect() returns an object with the size and position of the nav element.
//Example of what it returns:
//{
//   width: 1200,
//   height: 120, ///this is the extracted height in px
//   top: 0,
//   left: 0,
//   ...
// }

// 2. calc the height of the nav 
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);//the height of the nav

//3.create the func
// This function is designed to work with the Intersection Observer API.
//Its job is to add or remove a “sticky” class on the navigation bar depending on whether a certain element is visible on the screen.

//The Intersection Observer always gives you an array of “entries”.
const stickyNav = function(entries) {
  const [entry] = entries;//get the first entry only

//if false(not intersecting)
//if - entry.isIntersecting is true when the observed element is visible on the screen.
  if (!entry.isIntersecting)
    //- If the element is not visible, the nav becomes sticky (fixed at the top).
    nav.classList.add('sticky');

//- If the element is visible again, the nav stops being sticky.
  else nav.classList.remove('sticky');
}

//4.create the header observer when header will enter the viewport
//- It will run every time the header enters or leaves the viewport.

const headerObserver =  new IntersectionObserver(stickyNav, {
  root: null,//Use the entire browser viewport as the area to observe.
  //As soon as the header touches the top of the screen, the observer triggers.
  threshold: 0, //- The callback fires when 0% of the header is visible
//- It shifts the observer’s trigger point upward by the height of the nav.
//- So the nav becomes sticky a little earlier, exactly when the header scrolls behind the nav.

  rootMargin: `-${navHeight}px`,
})
//observe for the header(Watch the header. Let me know when it enters or leaves the viewport.)
headerObserver.observe(header);



// MODAL
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('hireModal');
const closeBtn = modal.querySelector('.close-modal');

if (openBtn) {
  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
}

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close when clicking outside modal content
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

// Fading sections

//This ensures the script runs after the DOM is ready, so all .fade-in-section elements exist.

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.fade-in-section');
    const hero = document.querySelector('.hero-content');
//This observer watches each section and tells you when it becomes visible.
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => { 
//- entry.isIntersecting → true when the section enters the viewport.
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      });
    }, {
      threshold: 0.02,
      rootMargin: "0px 0px -10% 0px"

    });
//Every .fade-in-section is now being watched.

    sections.forEach(section => {
      observer.observe(section);
    });
       observer.observe(hero); 

  });

// The tab Gallery 


function expandImage(img) {
  const modal = document.getElementById("uiModal");
  const modalImg = document.getElementById("uiModalImg");
  const caption = document.getElementById("uiModalCaption");

  modal.style.display = "flex";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("uiModal").style.display = "none";
}

// The slideshow 
// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px"
// });

// // Select the slides
// const slides = document.querySelectorAll(".slide");
// const slider = document.querySelector('.slider');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');

// let currentSlide = 0;
// // define the max slide and when we reach we stop this is the lenght of the slides
// const maxSlide = slides.length;

// // slider.style.transform = 'scale(0.5) translateX(-500px)';
// slider.style.overflow = 'visible';


// const goToSlide = function (slide) {
// slides.forEach((s, index) => {
//   //0% , 100% , 200% will move the sides to the right
//  s.style.transform=`translateX(${100 * (index- slide)}%)`;//0*100=0
// })
// }

// goToSlide (0);

// const prevSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = maxSlide -1;
//   }else {
//     currentSlide --;
//   }
  
//   goToSlide(currentSlide);
//   activateDot(currentSlide);//activate dot for the current slide

// }

// const nextSlide  = function () {
//    if (currentSlide===maxSlide-1) {
//     currentSlide=0;// going back into the begining of the slides
//   } else {
//     currentSlide++;
//   }
 
//   goToSlide(currentSlide);
//   activateDot(currentSlide);//activate dot for the current slide
// }

// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', prevSlide);

//  //0*100=0

//    //-100% , 0% , 100% will move the sides to the right
//   // if current slide is 1 
//   //slide at position 0 is 0-1 = -1 than -1 * 100 =-100
//   //next slide is 1 so 1-1 = 0 * 100 = 0
//   //next slide is 2 -1 = 1 * 100 = 100

//   const createDots = function () {
//     //loop over the slides /throw away variable that we dont need
//     slider.forEach(function(_, i) {
//       //adding el as a last child always
//       dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot data-slide="${i}"></button>`)

//     })
//   }

//   // Show the current slide style active
//   const activateDot = function (slide) {
//     //select all of the dots
//     document.querySelectorAll('.dots__dot').forEach((dot)=> {
//       //deactivate all of the dots
//       dot.classList.remove('dots__dot--active');

//       //add only this class to the one we are intrested in
//       //select the element with this class and with this data atribute set to 2
//       document.querySelector(`.dots__dot[data-slide = "${slide}"]`)
//       .classList.add('dots__dot--active');
      
//     })
    
//   }

//   activateDot(0); //activates the first slide
  
// // The dot logic implementation
// document.addEventListener('keydown', function (e) {

 
//   if (e.key === "ArrowLeft") prevSlide();
//   e.key==="ArrowRight" && nextSlide();

// })

// // Event delegation attaching the event to the parent where event will happen
// dotContainer.addEventListener('click', function (e) {
//   //if the event targed contains this class
//   if (e.target.classList.contains('dots__dot')) {
//     currentSlide = Number(e.target.dataset.slide);
//     goToSlide(currentSlide);
//     activateDot(currentSlide);
//   }
// })





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