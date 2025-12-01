"use strict";
// selecting el
  const nav = document.querySelector('.desktop-header');
  const header = document.querySelector('.hero-header');

// Hamburger
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("myLinks");

  function toggleMenu() {
    const isOpen = menu.style.display === "block";
    menu.style.display = isOpen ? "none" : "block";
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

// NAVIGATION FADING 
document.addEventListener("DOMContentLoaded", function () {



const handleHover = function (e) {

// 1. Ensures the function only runs when a user hovers over a navigation link.
  //we dont need to use closest method here  becouse there is no children elements
  if(e.target.classList.contains('nav__link')) {

  //Identify Elements to Fade

  const link = e.target;
 

 const siblings = link.closest('.arrange-manu').querySelectorAll('.nav__link');
      const logo = link.closest('.sidenav').querySelector('#logo');

      siblings.forEach(el => {
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
});
console.log(headerObserver);
//observe for the header
headerObserver.observe(header);
});





   
   document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector(".play-button");
    const video = document.querySelector(".project-video");
//play video on button click
    playButton.addEventListener("click", function () {
      video.controls = true; // Show native controls
      video.play();
      // Hide button once video starts
      playButton.style.display = "none"; 
 });

      //Reset video when it ends
       // Reset video when it ends
    video.addEventListener("ended", function () {
      video.currentTime = 0; // Rewind to start
      playButton.style.display = "block"; // Show play button again
    });
  });

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

 

  document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".project-video");
    const playButton = document.querySelector(".play-button");

    playButton.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playButton.textContent = "⏸"; // change icon to pause
      } else {
        video.pause();
        playButton.textContent = "▶"; // change icon back to play
      }
    });
  });

  // TOggle project description

// select all primary buttons aand for each btn attach click event
document.querySelectorAll(".btn.btn-primary").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const section = card.nextElementSibling; // hidden content right after card
    if (section && section.classList.contains("case-content")) {
      section.classList.toggle("hidden");
    }
  });
});




 
  

  

  // Pull out projects from usecase,json
  // Load JSON file
// Load JSON file
// fetch('./usecase.json')
//   .then(response => response.json())
//   .then(data => {
//     const project = data.projects.find(p => p.id === "yorvik-parking-app");
// console.log(project);
//     // Title & subtitle
//     document.querySelector('.hero-header h2').textContent = project.title;
//     document.querySelector('.hero-header .subtitle').textContent = project.subtitle;

//     // Video
//     document.querySelector('.project-video source').src = project.videoDemo;

//     // Context
//     const contextContainer = document.querySelector('.case-text');
//     project.context.forEach(text => {
//       const p = document.createElement('p');
//       p.textContent = text;
//       contextContainer.appendChild(p);
//     });

//     // Process list
//     const processList = document.createElement('ul');
//     project.process.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = item;
//       processList.appendChild(li);
//     });
//     contextContainer.appendChild(processList);

//     // Features
//     const featuresList = document.querySelector('.case-content ul');
//     project.features.forEach(feature => {
//       const li = document.createElement('li');
//       li.textContent = feature;
//       featuresList.appendChild(li);
//     });

//     // Outcome
//     const outcomeContainer = document.querySelector('.case-content');
//     project.outcome.forEach(text => {
//       const p = document.createElement('p');
//       p.textContent = text;
//       outcomeContainer.appendChild(p);
//     });

//     // Reflection
//     const reflection = document.createElement('p');
//     reflection.textContent = project.reflection;
//     outcomeContainer.appendChild(reflection);

//     // Prototype link
//     document.querySelector('.demo-button').href = project.prototypeLink;
//   });

  

   