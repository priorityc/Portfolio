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

