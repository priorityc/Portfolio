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

// Generate meteors

const container = document.querySelector('.meteor-container');

// Create a div for meteors with class meteor
function createMeteor() {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  // - Math.random() gives a number between 0 and 1.
  // - Multiplying by window.innerWidth spreads meteors across the full screen width.

  meteor.style.left = `${Math.random() * window.innerWidth}px`;
  // container.appendChild(meteor);

  // - Waits 1.5 seconds, then removes the meteor from the DOM.

  setTimeout(() => {
    meteor.remove();
  }, 1500); // Match animation duration
}

setInterval(() => {
  createMeteor();
}, 500); // Adjust frequency as needed



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

// SKILLS section
//1.selecting elements
// const tabs = document.querySelectorAll('.operations__tab');
// const tabContainer = document.querySelector('.operations__tab-container');
// const operationContainer = document.querySelectorAll('.operations__content');

// //attach eventlistener
// tabContainer.addEventListener('click', function(e) {
//   const clicked = event.target.closest('.operations__tab');
//   console.log(clicked);

//   if (!clicked) return;

//   //remove the active classes from tabs
//   tabs.forEach(t => t.classList.remove('operations__tab--active'))
//   //remove active classes from content
// operationContainer.forEach(c => c.classList.remove('operations__content--active'))
  
//   //add the active class to the clicked tab
//   clicked.classList.add('operations__tab--active');

//   //show the content on each click
//   document.querySelector(`.operations__content--${clicked.dataset.tab}`)
//   .classList.add('operations__content--active');

// });

// MODAL
const hireBtn = document.querySelector('.hire-btn');
const modal = document.getElementById('hireModal');
const closeBtn = document.querySelector('.close-modal');

hireBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
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
// console.log(imgTargets);

// The call back func.
//  const loadImg = function(entries, observer){
//   const [entry]=entries;

//  if(!entry.isIntersecting) return;

//   entry.target.src = entry.target.dataset.src;

// entry.target.addEventListener('load', function(){
//   entry.target.classList.remove('lazy-img');
//  entry.target.classList.add('loaded');

//   });
//  }

const loadImg = function(entries, observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function(){
      entry.target.classList.remove('lazy-img');
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
 const playButton = document.querySelector('.play-button');
  const video = document.querySelector('.project-video');
  const videoTitle = document.querySelector(".project-title");

  playButton.addEventListener('click', () => {
    video.play();
    video.style.opacity = '1';
    playButton.style.display = 'none';
    videoTitle.style.display = 'none';
  });

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

// 

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


