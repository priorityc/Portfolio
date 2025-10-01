// NAVIGATION FADING 
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector('.desktop-header');
  const header = document.querySelector('.hero');


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
})
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

 

   