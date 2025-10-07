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

// document.querySelector('.learn-more-btn').addEventListener('click', function (e) {
//   e.preventDefault(); // Prevent link from jumping

//   const content = document.querySelector('.description');

//   // Toggle visibility
//   content.classList.toggle('hidden');

//   // Toggle animation class
//   content.classList.toggle('section-visible');

//   // Update button text
//   this.textContent = content.classList.contains('hidden') ? 'Learn More' : 'Show Less';
// });








// Scrolling to view my work
// const btnScrollTo = document.querySelector('.btn-primary');
// const portfolio= document.querySelector('#portfolio');

// btnScrollTo.addEventListener('click', function(e) {
//   portfolio.scrollIntoView({behavior: 'smooth'})
// });

// const btnLearnMore=document.querySelector('.show-more');
// const divHidden= document.querySelector('hidden');
// btnLearnMore.addEventListener('click', function() {
//   divHidden.toggle(true);
// })



// MODAL
// Select elements
// document.addEventListener('DOMContentLoaded', () => {
//   const hireBtn = document.querySelector('.hire-btn');
//   console.log(hireBtn)
//   const modal = document.querySelector('#hireModal');
//   console.log(modal)
//   const closeBtn = document.querySelector('.close-modal');

//   console.log(closeBtn)
//   if (!hireBtn || !modal || !closeBtn) {
//     console.warn('Modal elements not found');
//     return;
//   }

//   // Open modal
//   hireBtn.addEventListener('click', () => {
//     console.log("function trigered");
//     modal.classList.add('hidden');
//   });

//   // Close modal via button
//   closeBtn.addEventListener('click', () => {
//     console.log("function trigered");
//     modal.classList.add('hidden');
//   });

//   // Close modal when clicking outside modal-content
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.classList.remove('hidden');
//     }
//   });

//   // Optional: Close on Escape key
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//       modal.classList.add('hidden');
//     }
//   });
// });


// ////////

const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    card.classList.toggle('expanded');
  });
});



//////////

// Lazy loading img
// select the imges
const imgTargets = document.querySelectorAll('img[data-src]');


const loadImg = function(entries, observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function(){
      entry.target.classList.remove('lazy-img');
      entry.target.classList.add('loaded');

    });
    observer.unobserve(entry.target); // prevent future triggers
  });
};



// Create the observer
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img=>imgObserver.observe(img));
///////////

// LEFT RIGHT navigation

  // const track = document.querySelector('.slider-track');
  // const leftArrow = document.querySelector('.nav-arrow.left');
  // const rightArrow = document.querySelector('.nav-arrow.right');
  // let scrollAmount = 0;

  // rightArrow.addEventListener('click', () => {
  //   scrollAmount += 240;
  //   track.style.transform = `translateX(-${scrollAmount}px)`;
  // });

  // leftArrow.addEventListener('click', () => {
  //   scrollAmount = Math.max(scrollAmount - 240, 0);
  //   track.style.transform = `translateX(-${scrollAmount}px)`;
  // });

// 

// Learn more button content expanded
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");

learnMoreBtn.forEach((btn)=> {
btn.addEventListener('click', function (){
  //Take the next element of each learn more btn
  const hiddenContent = this.nextElementSibling;
  hiddenContent.classList.toggle("hidden");
  hiddenContent.classList.toggle("visible");
  

  // Change learn more btm text content
  //The content is with class visible than 
  this.textContent = hiddenContent.classList.contains("visible") ? "Show Less" : "Learn More" ;
});
});

// PLAY VIDEO on button click in video section
//  const playButton = document.querySelector('.play-button');
//   const video = document.querySelector('.project-video');
//   const videoTitle = document.querySelector(".project-title");

//   playButton.addEventListener('click', () => {
//     video.play();
//     video.style.opacity = '1';
//     playButton.style.display = 'none';
//     videoTitle.style.display = 'none';
//   });

// Fade in 
   const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       if (entry.isIntersecting) {
entry.target.classList.add('visible');
      }
    });
  }, {
 threshold: 0.1 // Trigger when 10% of the element is visible
  })
    document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
  });




// MODAL form validation
function validateModal(inputElement) {
  const feedbackModal = document.getElementById("feedback_" + inputElement.id);
  let pattern;
  let feedback;

  if (inputElement.id === "name") {
    pattern = /^.{2,}$/;
    feedback = "At least two characters required.";
  }

  if (inputElement.id === "email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    feedback = "Enter a valid email address.";
  }

  if (inputElement.id === "message") {
    pattern = /^.{10,}$/;
    feedback = "Message must be at least 10 characters.";
  }

  const value = inputElement.value.trim();
  const isValid = pattern.test(value);

  feedbackModal.innerText = isValid
    ? "✓ Valid"
    : "✗ " + feedback;

  feedbackModal.className = isValid ? "valid" : "invalid";

  return isValid;
}


function validateForm(e) {
  e.preventDefault(); // Stop form from submitting

  const isFirstNameModalValid = validate(document.getElementById("name"));
  const isEmailModalValid = validate(document.getElementById("email"));
  const isMessageModalValid = validate(document.getElementById("message"));

  const formIsValid = isFirstNameModalValid && isEmailModalValid && isMessageModalValid;

  if (!formIsValid) {
    alert("Please correct the errors before submitting.");
    return false;
  }

  // If valid, manually submit the form
  e.target.submit();
}
///////////////////////////////
// Footer form validation
//1
function validate(inputElement) {
  const feedbackElement = document.getElementById("feedback_" + inputElement.id);
  let pattern;
  let feedback;

  if (inputElement.id === "fname" || inputElement.id === "lname") {
    pattern = /^.{2,}$/;
    feedback = "At least two characters required.";
  }

  if (inputElement.id === "email") {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    feedback = "Enter a valid email address.";
  }

  if (inputElement.id === "message") {
    pattern = /^.{10,}$/;
    feedback = "Message must be at least 10 characters.";
  }

  const value = inputElement.value.trim();
  const isValid = pattern.test(value);

  feedbackElement.innerText = isValid
    ? "✓ Valid"
    : "✗ " + feedback;

  feedbackElement.className = isValid ? "valid" : "invalid";

  return isValid;
}

function validateForm(e) {
  e.preventDefault(); // Stop form from submitting

  const isFirstNameValid = validate(document.getElementById("fname"));
  const isLastNameValid = validate(document.getElementById("lname"));
  const isEmailValid = validate(document.getElementById("email"));
  const isMessageValid = validate(document.getElementById("message"));

  const formIsValid = isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid;

  if (!formIsValid) {
    alert("Please correct the errors before submitting.");
    return false;
  }

  // If valid, manually submit the form
  e.target.submit();
}