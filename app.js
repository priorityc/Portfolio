"use strict";

const nav = document.querySelector(".sidenav");
const header = document.querySelector(".hero");
const dotContainer = document.querySelector(".dots");

// Project Modal DATA
const projects = {
  ecom: {
    title: "React E‑Commerce Store",
    overview:
      "A full e‑commerce store with Stripe checkout and product filtering.",
    // descr:
    //   "CosmicCare is a fully‑functional React e‑commerce store built with a mobile‑first UI, dynamic product loading, and a complete cart + checkout flow. The project runs in two modes — a real mode with live product data from Supabase, and a demo mode for safe portfolio browsing. It includes a simulated backend using Express.js, automatic product syncing, global cart state, and a responsive, modern UI. The store is deployed on Netlify with environment‑based configuration for switching between demo and live data.",
    problem: [
      "I wanted to challenge myself to build a complete, production‑ready product — not just a small demo or isolated feature. My goal was to create an e‑commerce experience that feels real, includes essential functionality, and follows a clean, intuitive user flow that anyone can understand.",
    ],
    tech: [
      "I designed and built CosmicCare as a full end‑to‑end e‑commerce system: dynamic product loading, global cart state, checkout flow, backend simulation, and responsive UI. I implemented both real and demo modes so users and recruiters can explore the store safely while still experiencing a realistic shopping flow.",
    ],
    features: [
      "Dynamic product loading from Supabase",
      "Stripe Payment Integration",
      "Email subscription form with database‑driven storage",
      "demo and real live integration",
      "Customer service inquery form",
    ],
    techstack: ["React", "JavaScript", "Supababase", "GitHub"],
    tools: ["Netlify", "Render", "Supabase", "Express.js"],
    images: [
      "./media/homeCosmic.png",
      "./media/mobileCC.png",
      "./media/tabletCC.png",
      "./media/mobileCosmic.png",
      "./media/basketCare.png",
      "./media/basketCosmic.png",
    ],
    live: "https://cosmiccare.netlify.app/?demo=false",
    demo: "https://cosmiccare.netlify.app/?demo=true",
    github: "https://github.com/priorityc/cosmic-care-site",
  },
  // Landing page
  lanp: {
    title: "Black Hole Event-Landing page",
    overview: "An immersive stargasing Landing page",
    // descr:
    //   "CosmicCare is a fully‑functional React e‑commerce store built with a mobile‑first UI, dynamic product loading, and a complete cart + checkout flow. The project runs in two modes — a real mode with live product data from Supabase, and a demo mode for safe portfolio browsing. It includes a simulated backend using Express.js, automatic product syncing, global cart state, and a responsive, modern UI. The store is deployed on Netlify with environment‑based configuration for switching between demo and live data.",
    problem: [
      "Museum websites struggle to attract subscriptions because they are often designed for logistical planning rather than digital engagement. Sites act as digital brochures rather than conversion hubs, hiding event and membership pages behind confusing naming conventions and fragmented booking flows, while failing to clearly articulate the value of subscribing.",
    ],
    tech: [
      "I designed and built an Immersive Black hole event-Landing page as a full visual experience: real black hole experience inside the hero with clear CTA section, event form subscription that simulate event horizont, clear section event information, workshop gallery, dark and navy UI mode switch. The Landing page quickly graps user attention and guides to subscription and save a seet actions with closer cosmic visual experiene.",
    ],
    features: [
      "Hero-Black hole simulation animation and clear CTA ",
      "Fade in sections for smooth scroll.",
      "Event subscription form that drives more subscriptions.",
      "Dark and navy background",
      "Interactive experience",
    ],
    techstack: ["HTML", "JavaScript", "GitHub"],
    tools: ["GitHub"],
    images: [
      "./media/BHform.png",
      "./media/dualModeBh.png",
      "./media/mobileBh.png",
    ],

    demo: "https://priorityc.github.io/stargazing-landing-page/",
    github: "https://github.com/priorityc/stargazing-landing-page",
  },

  serviceq: {
    title: "Service Quote Calculator",
    overview: "A tool for automating construction service quotes.",
    problem: [
      "A mobile‑first service quote calculator prototype designed for a newly established construction business willing to enter the market quickly.",
    ],
    tech: [
      "I created mobile interface prototype that calculates services for plastering, painting and flooring. The process I followed was user-centered with 3 fiteration, analysing the user charachteristics, environment and activities, than progressed to interview and gathering data with requirements engeenering.",
    ],
    features: [
      "Step by step interactions",
      "Instant quote calculation",
      "Clean UI for industry non‑technical users",
      "Supports one-hand use",
      "Clear visual feedback for noisy environments",
      "reduced cognitive load",
    ],
    // features: [
    //   "Investigating design context(user-activity-environment)",
    //   "Storyboards",
    //   "Interviews with the company owner",
    //   "Paper Interfaces",
    //   "PowerPoint interactive presentation ",
    //   "Evaluation",
    //   "User-centered design",
    //   "Iteration process",
    //   "PowerPoint",
    //   "Figma",
    // ],
    // challenges: [
    //   "Selecting the right question for the interview → Different interview questions used structured and semi-structured",
    //   "Understanding what users want  → Field study observation with initial conversations",
    // ],
    techstack: ["Figma"],
    tools: ["PowerPoint"],
    images: [
      "./media/screen2sq.png",
      "./media/screen3sq.png",
      "./media/screen123.png",
      "./media/screen45.png",
    ],

    demo: "https://www.figma.com/proto/SgRRZDyqNeDNhb5lmZo3aX/ServicePaintingCalculator?node-id=1025-2&t=GROR9anNnS82szvj-1&starting-point-node-id=1025%3A2",
    github: "#",
  },

  foodapp: {
    title: "Food App-Wep Aplication API",
    overview: "Food App-Wep Aplication API-Sponacular for recipe discovery.",
    problem: [
      "A mobile‑first service quote calculator prototype designed for a newly established construction business willing to enter the market quickly.",
    ],
    tech: "I builded Web app for filtering receipes",
    // role: "FoodApp is a mobile‑first recipe discovery application that allows users to search for meals, explore ingredients, and view cooking instructions in a clean, intuitive interface. The app fetches real recipe data from an external API, displays dynamic results, and provides a smooth browsing experience with responsive layouts and interactive UI elements. Built using HTML, CSS, and JavaScript, the project demonstrates API integration, async data handling, and modern front‑end design principles.",
    features: [
      "Live Recipe Search (API Integration)",
      "Dynamic Meal Cards",
      "Detailed Recipe View",
      "Responsive layout",
    ],

    techstack: ["React", "JavaScript", "GitHub", "API"],
    images: ["./media/FoodApp-Tablet.png", "./media/FoodApp-mobile.png"],
    demo: "https://priorityc.github.io/FoodApp/",
    github: "#",
  },
};

// Accessibility
function handleKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleMenu();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("myLinks");

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
  if (e.target.classList.contains("nav__link")) {
    //Identify Elements to Fade
    //The current link huvered
    const link = e.target;
    // console.log(link)

    // 2. siblings finds all other .nav__link elements in the nav
    //select the sibling elements(links) by going to the parent and select a children from there
    const siblings = link
      .closest(".arrange-manu")
      .querySelectorAll(".nav__link");

    //select the logo-move  to the closest which is nav and search for the image
    const logo = link.closest(".sidenav").querySelector(".logo");

    //change the opasity of the siblings of the selected link like first
    siblings.forEach((el) => {
      //If the link is not the one being hovered, change its opacity.

      if (el !== link) el.style.opacity = this;
    }); //exit than do the same with the logo
    logo.style.opacity = this;
  }
};

//Add active class on links
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
//keep active class when navigating to another page
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Reveal more section
const revealBtns = document.querySelectorAll(".reveal-more");

revealBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const section = document.getElementById(targetId);

    if (!section) {
      console.log("Section not found:", targetId);
      return;
    }

    section.classList.toggle("hidden");
  });
});

// const sections = document.querySelector(".sidenav");
// const navLinks = document.querySelectorAll(".nav__link");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         navLinks.forEach((link) => {
//           link.classList.remove("active");

//           const sectionId = entry.target.id;
//           const linkHref = link.getAttribute("href").replace("#", "");

//           if (sectionId === linkHref) {
//             link.classList.add("active");
//           }
//         });
//       }
//     });
//   },
//   { threshold: 0.6 },
// );

// sections.forEach((section) => observer.observe(section));

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         navLinks.forEach((link) => {
//           link.classList.remove("active");
//           if (link.getAttribute("href").replace("#", "") === entry.target.id) {
//             link.classList.add("active");
//           }
//         });
//       }
//     });
//   },
//   { threshold: 0.6 },
// );

// sections.forEach((section) => observer.observe(section));

// Passing an argument into handler
//select the parent el. of all the links and logo navigation
//atach the event listener (mouse enter event does not buble)
nav.addEventListener("mouseover", handleHover.bind(0.5));
//oposite of mouseover(remove the opacity)
nav.addEventListener("mouseout", handleHover.bind(1));

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
console.log(navHeight); //the height of the nav

//3.create the func
// This function is designed to work with the Intersection Observer API.
//Its job is to add or remove a “sticky” class on the navigation bar depending on whether a certain element is visible on the screen.

//The Intersection Observer always gives you an array of “entries”.
const stickyNav = function (entries) {
  const [entry] = entries; //get the first entry only

  //if false(not intersecting)
  //if - entry.isIntersecting is true when the observed element is visible on the screen.
  if (!entry.isIntersecting)
    //- If the element is not visible, the nav becomes sticky (fixed at the top).
    nav.classList.add("sticky");
  //- If the element is visible again, the nav stops being sticky.
  else nav.classList.remove("sticky");
};

//4.create the header observer when header will enter the viewport
//- It will run every time the header enters or leaves the viewport.

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, //Use the entire browser viewport as the area to observe.
  //As soon as the header touches the top of the screen, the observer triggers.
  threshold: 0, //- The callback fires when 0% of the header is visible
  //- It shifts the observer’s trigger point upward by the height of the nav.
  //- So the nav becomes sticky a little earlier, exactly when the header scrolls behind the nav.

  rootMargin: `-${navHeight}px`,
});
//observe for the header(Watch the header. Let me know when it enters or leaves the viewport.)
headerObserver.observe(header);

// On load show the skill bar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    //Every HTML element can have custom attributes that start with data-
    // The browser automatically collects all types of data-*
    // attributes into a special JavaScript object called dataset.
    // level becomes property on the dataset object defined as property inside data-level in the HTML
    const level = bar.dataset.level;
    //--level is CSS property that will be used in the CSS like width: var(--level);
    // - Takes the value from HTML ("90")
    // - Adds a % → "90%"
    // - Stores it in the CSS variable --level
    // - CSS uses that value to animate the bar width

    bar.style.setProperty("--level", level + "%");
    bar.querySelector("span").textContent += ` — ${level}%`;
    // bar.classList.add("animate");
  });
});

//Colapsable sidebar
// Take all projects
const projectItems = document.querySelectorAll(".project-item");
//for ech of the projects take the header div with "cosmic care"
projectItems.forEach((item) => {
  const header = item.querySelector(".project-link");
  //add event listener "click on the headers"
  header.addEventListener("click", () => {
    //ctate that it is open
    const isOpen = item.classList.contains("active");
    //for each projects remove the active class
    // Close all others
    projectItems.forEach((i) => i.classList.remove("active"));

    // Toggle this one if it does NOT has class active(close)
    //add the class active(open)
    if (!isOpen) {
      item.classList.add("active");
    }
  });
});

// SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
console.log(slides);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length; //0+1%4=1%4
  showSlide(currentSlide);
}, 12000);
// MODAL
const openBtn = document.getElementById("openModal");
const openM = document.getElementById("openM");
const modal = document.getElementById("hireModal");
const closeBtn = modal.querySelector(".close-modal");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

if (openM) {
  openM.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close when clicking outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
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
    message: messageInput.value.trim(),
  };

  fetch("https://formspree.io/f/xgvnebbb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thanks! Your message was sent.");
        e.target.reset(); // Optional: clear the form
        alertShown = false; // Reset alert flag
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch((error) => {
      console.error("Submission error:", error);
      alert("Network error. Please try again later.");
    });
}

const modalPr = document.getElementById("projectModal");
const closeBtnPr = modalPr.querySelector(".project-close-modal");
console.log(closeBtnPr);

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectKey = btn.dataset.project;
    const data = projects[projectKey];

    // Fill modal content
    modalPr.querySelector(".modal__title").textContent = data.title;
    modalPr.querySelector(".modal__overview").textContent = data.overview;
    // modalPr.querySelector(".modal__role").textContent = data.descr;
    // modalPr.querySelector("modal__inons").textContent = data.icons;
    modalPr.querySelector(".modal__lists").innerHTML = data.problem
      .map(
        (f) => ` <li class="modal-problem-item">
      <i class="bi bi-exclamation-circle"></i></li>
      <li><h3 class="card-title">Problem</h3></li>
      <li><p>${f}</p></li>`,
      )
      .join("");

    modalPr.querySelector(".modal__tags").innerHTML = data.tech
      .map(
        (t) => ` <li class="modal-problem-item">
      <i class="bi bi-bricks"></i></li>
      <li><h3 class="card-title">Solution</h3></li>
      <li><i class="fa-brands fa-node-js"></i></li>
      <li><p>${t}</p></li>`,
      )
      .join("");

    modalPr.querySelector(".modal__challenges").innerHTML = data.features
      .map(
        (c) =>
          `
          <li class="skills__item">${c}</li><li><i class="bi bi-arrow-right"></i></li>`,
      )
      .join("");
    // Icons rendering
    // if the object is projects.lanp

    modalPr.querySelector(".modal__techstack").innerHTML = `
  <li>
    <i class="fa-brands fa-react tech-icons"></i></li>
    <li><i class="fa-brands fa-square-js tech-icons"></i></li>
    <li><i class="fa-solid fa-database tech-icons"></i></li>
    <li><i class="fa-brands fa-github tech-icons"></i>
  </li>
`;

    // modal.querySelector(".modal__icons").innerHTML = data.techstack
    //   .map((icon) => `<i class="${icon}"></i>`)
    //   .join("");

    modalPr.querySelector(".modal__tools").innerHTML = data.tools
      .map((c) => `<li class="skills__item">${c}</li>`)
      .join("");

    modalPr.querySelector(".modal__images").innerHTML = data.images
      .map((img, index) => {
        return `
      <div>
        <img src="${img}" data-index="${index}" alt="Project screenshot">
      </div>
    `;
      })
      .join("");

    // These MUST be inside the click handler
    modalPr.querySelector(".modal__demo").href = data.demo;
    modalPr.querySelector(".modal__live").href = data.live;
    modalPr.querySelector(".modal__github").href = data.github;

    modalPr.classList.add("active");
  });
});

// Close modal
closeBtnPr.addEventListener("click", () => {
  modalPr.classList.remove("active");
});

// Close on background click
modalPr.addEventListener("click", (e) => {
  if (e.target === modalPr) modalPr.classList.remove("active");
});

// AUTO hide the indicater after users scroll
const modalContent = document.querySelector(".modal__content");
const scrollIndicator = document.querySelector(".scroll-indicator");

modalContent.addEventListener("scroll", () => {
  if (modalContent.scrollTop > 20) {
    scrollIndicator.style.opacity = "0";
  } else {
    scrollIndicator.style.opacity = "1";
  }
});

// Show the up arrow when user scrow down
const scrollTopIndicator = document.querySelector(".scroll-top-indicator");

modalContent.addEventListener("scroll", () => {
  if (modalContent.scrollTop > 200) {
    scrollTopIndicator.style.opacity = "1";
    scrollTopIndicator.style.pointerEvents = "auto";
  } else {
    scrollTopIndicator.style.opacity = "0";
    scrollTopIndicator.style.pointerEvents = "none";
  }
});

scrollTopIndicator.addEventListener("click", () => {
  modalContent.scrollTo(0, 0);
});

// Fading sections

//This ensures the script runs after the DOM is ready, so all .fade-in-section elements exist.

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in-section");
  const hero = document.querySelector(".hero-content");
  //This observer watches each section and tells you when it becomes visible.
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        //- entry.isIntersecting → true when the section enters the viewport.
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      });
    },
    {
      threshold: 0.02,
      rootMargin: "0px 0px -10% 0px",
    },
  );
  //Every .fade-in-section is now being watched.

  sections.forEach((section) => {
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

const tabs = document.querySelectorAll(".service-tab");
const panels = document.querySelectorAll(".service-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1. Remove active from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // 2. Remove active from all panels
    panels.forEach((p) => p.classList.remove("active"));

    // 3. Activate clicked tab
    tab.classList.add("active");

    // 4. Activate matching panel
    const target = tab.dataset.tab; // "webdev", "uiux", "branding"
    document.getElementById(target).classList.add("active");
  });
});

// THE TAB FILTER
// Remove .active from all tab buttons

// Add .active to the clicked button

// Show the matching tab content
const tabsProjects = document.querySelectorAll(".tablinks");

document.addEventListener("DOMContentLoaded", function () {
  // Hide all tabcontent
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show only London tab
  document.getElementById("London").style.display = "grid";

  // Make the first tab active
  const firstTab = document.querySelector(".tablinks");
  firstTab.classList.add("active");
});

tabsProjects.forEach((tab) => {
  tab.addEventListener("click", function (evt) {
    const cityName = this.dataset.city;
    openCity(evt, cityName);
  });
});

// Hide all other tab contents
function openCity(evt, cityName) {
  // Hide all tab content
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all buttons
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show ONLY the selected tab content
  const selectedTab = document.getElementById(cityName);
  selectedTab.style.display = "grid";

  // Add active class to clicked button
  evt.currentTarget.classList.add("active");
}

//
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

// Floating NAV`s
const floatingNav = document.querySelector(".floating-nav");
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    floatingNav.classList.add("visible");
  } else {
    floatingNav.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Footer form validation
//1
// Footer validation

const contactForm = document.getElementById("contact-form"); //select the modal

function validateFooterInput(inputElement) {
  const feedback = document.getElementById("feedback_" + inputElement.id);
  let pattern, message;

  if (
    inputElement.id === "footer_fname" ||
    inputElement.id === "footer_lname"
  ) {
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

function validateFooterForm(event) {
  event.preventDefault();

  const fnameInput = document.getElementById("footer_fname");
  const lnameInput = document.getElementById("footer_lname");
  const emailInput = document.getElementById("footer_email");
  const messageInput = document.getElementById("footer_message");

  const isFNameValid = validateFooterInput(fnameInput);
  const isLNameValid = validateFooterInput(lnameInput);
  const isEmailValid = validateFooterInput(emailInput);
  const isMessageValid = validateFooterInput(messageInput);

  const formIsValid =
    isFNameValid && isLNameValid && isEmailValid && isMessageValid;

  if (!formIsValid) {
    alert("Please correct the errors before submitting.");
    return;
  }

  // Submit via fetch or native form submission
  const formData = {
    fname: fnameInput.value.trim(),
    lname: lnameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  fetch("https://formspree.io/f/xgvnebbb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thanks! Your message was sent.");
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
