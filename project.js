// Project Modal DATA
const projects = {
  ecom: {
    title: "Cosmic Care",
    overview:
      "This project is a fully functional e‑commerce prototype designed to study how users browse products, interact with carts, and move through a checkout flow.",
    goal: "The goal was to create a fast, intuitive shopping experience with a clean UI and reusable React components.",
    role: "Front-end Developer/UI Designer",

    timeline: "3 Months",
    features: [
      "Brand identity with logo, colours, and typography",
      "Responsive e‑commerce UI built in React",
      "Dynamic product loading via Supabase",
      "Cart + checkout flow using Stripe",
      "Demo mode for safe portfolio browsing",
    ],
    problem: {
      title:
        "Many beautifully designed e‑commerce websites fail to convert because the design does not match how users actually behave. Businesses often assume their layout is intuitive, but users struggle with:",
      problemlist: [
        "cluttered product cards",
        "slow or confusing cart interactions",
        "inconsistent UI patterns",
        "poor mobile experience",
      ],
      challange:
        "The challenge was to build a prototype that focuses on real UX, not just aesthetics — a system that reveals how users move, click, hesitate, and decide.",
    },
    solution: [
      "I designed and developed CosmicCare as a fully functional, mobile‑first prototype that blends branding, UX design, and real technical behaviour. Created a cosmic‑inspired brand identity with a modern colour palette.",
      "Designed a simple, intuitive product browsing experience. Created a demo mode so stakeholders can safely explore the UX flow without processing real payments.",
    ],

    researchandinsights: [
      {
        title: "Common e‑commerce patterns",
        insight:
          "By analyzing online shops, I identified several consistent UX patterns: predictable layouts, minimal cognitive load, and strong micro‑interactions.",
      },
      {
        title: "User expectations for product cards",
        insight:
          "Users scan product cards in a predictable order: image → title → price → CTA. They expect consistency and immediate clarity.",
      },
      {
        title: "Clarity of pricing and CTA placement",
        insight:
          "Pricing and CTAs must be visually dominant and consistently placed to reduce hesitation and improve conversions.",
      },
      {
        title: "Reducing cognitive load during browsing",
        insight:
          "Clean spacing, predictable layouts, and minimal distractions help users browse faster and make confident decisions.",
      },
    ],
    designgoals: [
      "Create a minimal, frictionless shopping flow",
      "Build reusable UI components",
      "Ensure fast performance and clean state management",
      "Deliver a responsive layout across devices",
      "Keep the interface visually modern and brand‑consistent",
    ],

    architecture: [
      {
        image: "./media/ComponentArchitecture.png",
        component:
          "I structured the UI using a modular component architecture.ProductCard handles product display and interactions, ProductGrid manages layout and responsiveness, Cart controls global cart state and item management, and Header provides navigation and dynamic cart visibility.This separation of concerns makes the application scalable, maintainable, and easy to extend with new features.",
      },
    ],

    techstack: ["React", "JavaScript", "GitHub"],
    tools: ["Netlify", "Render", "Express.js"],
    images: [
      "./media/Heroproj.jpg",
      "./media/palletecc.jpg",
      "./media/CCpresent.jpg",
      "./media/checkoutflow.jpg",
    ],

    finallook: [
      "The final interface deliversclean product cards, consistent spacing, modern color palette, intuitive cart interactions, responsive layout across breakpoints. The UI is intentionally minimal to reduce cognitive load and highlight product information.",
    ],
    live: "https://cosmiccare.netlify.app/?demo=false",
    demo: "https://cosmiccare.netlify.app/?demo=true",
    github: "https://github.com/priorityc/cosmic-care-site",
    learnmore: "https://priorityc.github.io/Portfolio/blog",
    cta: "Let’s build it together.",
  },

  lamp: {
    title: "Black Hole",
    overview:
      "An immersive, space‑themed landing page designed to simulate being pulled into a black hole.",
    goal: "The goal was to create a cinematic, story‑driven experience using motion, gradients, and scroll‑based transitions to engage visitors beyond a static layout.",
    role: "Designer & Front‑end Developer",
    timeline: "1 month",

    features: [
      "Hero animation with gravitational visual effects",
      "Scroll‑based transitions that deepen the “descent” experience",
      "Interactive CTA that visually disappears into the black hole",
      "Responsive layout optimised for all screen sizes",
    ],

    problem: {
      title: "Traditional landing pages for events get lost on the website",
      problemlist: [
        "Low Engagement-Static pages don’t capture imagination",
        "Poor Storytelling - No sense of immersion",
        "Weak Visual Hierarchy - Overloaded with text",
        "No Interactive Elements - Nothing encourages exploration",
      ],
      challange:
        "The challenge was to design a page that felt alive — where every scroll deepens the narrative and reinforces the concept of gravitational pull.",
    },
    solution: [
      "Designed visualy immersive hero section that sparks curiosity and use motion and depth to simulate gravitational attraction whilist eep the narrative clear and intuitive.",
    ],

    researchandinsights: [
      {
        title: "Motions as narative.",
        insight: "Subtle animations can guide emotional tone.",
      },
      {
        title: "Scroll‑based storytelling",
        insight:
          "Users engage longer when motion reinforces story progression.",
      },
      {
        title: "CTA Placement and Structure",
        insight: "dark‑to‑light transitions evoke depth and descent.",
      },
      {
        title: "Reducing cognitive load during browsing",
        insight:
          "The placement and structure of the CTA dramatically affect how users behave.",
      },
    ],

    designgoals: [
      "Create a cinematic, atmospheric landing experience",
      "Use scroll‑based transitions to simulate descent into a black hole",
      "Maintain performance and responsiveness across devices",
      "Build a clear narrative flow from curiosity → immersion → action",
      "Integrate a CTA that feels part of the story, not separate from it",
    ],

    architecture: [
      {
        image: "./media/heroCTA.png",
        component:
          "The HTML is organized into semantic sections that mirror the narrative flow of the experience: Hero Section — the black hole visual, title, and entry CTA than follows by scroll Sections where more imformation reveal at the final is CTA.",
      },
    ],

    techstack: ["HTML", "CSS", "JavaScript"],
    tools: ["GitHub"],
    finallook: [
      "The final landing page delivers: a dramatic hero section with a central black hole, scroll‑based transitions that simulate descent, a CTA section that feels integrated into the narrative, a responsive layout across devices.The experience is intentionally minimal, focusing on motion and storytelling rather than heavy content.",
    ],
    images: [
      "./media/BHhero.jpg",
      "./media/BHform.jpg",

      "./media/BHgallery.jpg",
      "./media/BHhero.jpg",
    ],

    demo: "https://priorityc.github.io/stargazing-landing-page/",
    github: "https://github.com/priorityc/stargazing-landing-page",
    cta: "Let’s build it together.",
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
    cta: "Let’s build it together.",
  },

  foodapp: {
    title: "Food Application",
    overview:
      "FoodApp is a mobile‑first recipe discovery tool that allows users to search for meals, explore ingredients, and view cooking instructions using live API data.",
    gioal:
      "FoodApp is a mobile‑first recipe discovery tool that allows users to search for meals, explore ingredients, and view cooking instructions using live API data.",
    role: "Front-end Developer/UI Designer",
    timeline: "1 week",
    features: [
      "Live recipe search powered by Spoonacular API",
      "Dynamic recipe cards rendered with JavaScript",
      "Ingredients and instructions modal for detailed viewing",
      "Filtering ingredients function",
      "Responsive layout optimised for mobile first",
    ],
    problem: {
      title:
        "Most recipe websites are cluttered, slow, and overwhelming for users who simply want to find a meal quickly. Common issues include:",
      problemlist: [
        "heavy layouts with too much text",
        "slow loading times due to large images",
        "confusing ingredient lists",
        "poor mobile experience",
        "lack of clear hierarchy",
      ],
      challange:
        "The challenge was to design a simple, fast, mobile‑first recipe search experience that gives users exactly what they need — no friction, no clutter.",
    },

    solution: [
      "I designed FoodApp as a minimal, intuitive recipe browser. The result is a lightweight, fast, and user‑friendly recipe discovery tool.",
    ],

    researchandinsights: [
      {
        title: "Users prefer quick scanning",
        insight: "image → title → ingredients → instructions",
      },
      {
        title: "Ingredient lists",
        insight:
          "Ingredient lists must be clean and readable, not buried in long text blocks",
      },
      {
        title: "results and minimal scrolling",
        insight: "Mobile users expect instant results and minimal scrolling",
      },
      {
        title: "Reducing cognitive load during browsing",
        insight: "Clear visual hierarchy reduces cognitive load",
      },
    ],

    designgoals: [
      "Build a mobile‑first interface",
      "Keep the layout clean and minimal",
      "Display recipes in a card‑based format for quick scanning",
      "Fetch real data using an external APIs",
      "Ensure fast performance and smooth interactions",
    ],

    techstack: ["React", "JavaScript", "API"],
    tools: ["GitHub", "vite", "Spoonacular API"],
    images: ["./media/FoodApp-Tablet.png", "./media/FoodApp-mobile.png"],
    finallook: [
      "The final interface delivers a clean search experience, dynamic recipe cards with images, clear ingredient lists, step‑by‑step cooking instructions, responsive layout across devices, smooth transitions and intuitive interactions.",
    ],
    demo: "https://priorityc.github.io/FoodApp/",
    github: "https://github.com/priorityc/FoodApp.git",
    cta: "Let’s build it together.",
  },
};

// -----------------------------
// 1. Get project key from URL
// -----------------------------
// window.location.search gives you the part of the URL after the ?
//URLSearchParams lets you read values from that query string.
// params.get("project") returns the value of project=.

const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project");

// -----------------------------
// 2. Load project data
// -----------------------------
// projectKey = "ecom" js knows which project data to load
// projects[projectKey] selects the correct project.
const data = projects[projectKey];

// If the project doesn’t exist
if (!data) {
  document.querySelector(".project-page").innerHTML =
    "<p>Project not found.</p>";
  throw new Error("Project not found: " + projectKey);
}

// -----------------------------
// 3. Populate content
// -----------------------------

/// HEADER POPULATION
document.querySelector(".project-title").textContent = data.title;
document.querySelector(".project-overview-description").textContent =
  data.overview;
document.querySelector(".project-goal").textContent = data.goal;

const heroImg = document.querySelector(".hero-img");
if (data.images && data.images.length > 0) {
  heroImg.src = data.images[0];
}

// Role and timeline
document.querySelector(".role").textContent = data.role;
document.querySelector(".timeline").textContent = data.timeline;

// FEATURES
document.querySelector(".features-list").innerHTML = (data.features || [])
  .map((item) => `<li>${item}</li>`)
  .join("");

// PROBLEM
document.querySelector(".problem-desc").innerHTML = data.problem.title;
document.querySelector(".project-problem").innerHTML = (
  data.problem.problemlist || []
)
  .map(
    (item) => `<li class="problem-li">
    <i class="bi bi-patch-question"></i>
<p>${item}</p></li>`,
  )
  .join("");

document.querySelector(".project-challange").innerHTML = data.problem.challange;

// SOLUTION
document.querySelector(".project-solution").innerHTML = (data.solution || [])
  .map(
    (item) =>
      `<div class="solution-item"><i class="bi bi-check-circle"></i><p>${item}</p></div>`,
  )
  .join("");

// RESEARCH AND INSIGHTS
const insightsCont = document.querySelector(".insights-container");
insightsCont.innerHTML = (data.researchandinsights || [])
  .map(
    (item) => `
      <div class="insight-item">
        <h3 class="project-sub-title">${item.title}</h3>
        <p class="insight-text">${item.insight}</p>
      </div>
    `,
  )
  .join("");

// DESIGN GOALS

const designGoalsCont = document.querySelector(".designgoals-container");
designGoalsCont.innerHTML = (data.designgoals || [])
  .map((item) => `<li>${item}</li>`)
  .join("");
// ARCHITECTURE
const architectureCont = document.querySelector(".architecture-container");
architectureCont.innerHTML = (data.architecture || []).map(
  (item) => `
      <div class="architecture-item">
        <p class="insight-text">${item.component}</p>
        <img src="${item.image}" alt="Component Architecture Diagram" class="architecture-img" />
      </div>
    `,
);

const techIcons = {
  React: `<i class="devicon-react-original colored"></i>`,
  JavaScript: `<i class="devicon-javascript-plain colored"></i>`,
  Supabase: `<img src="./icons/sb_logo.svg" class="supabase-icon" />`,
  GitHub: `<i class="devicon-github-original"></i>`,
};

const toolIcons = {
  Netlify: `<i class="devicon-netlify-plain colored"></i>`,
  Supabase: `<img> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600"><path fill="#1F1F1F" d="M297.4 273.1c15 0 23.5 11.4 23.5 26.5 0 15.4-9.6 26.7-24 26.7-6.8 0-12-2.6-14.5-6l-.1-.2v24.6h-13.8v-70.5h13.3v6.2c2.3-3.9 8-7.3 15.6-7.3m-120.6-.4c10 0 15.5 4.4 18 9l.3.4.2.4.2.5.2.4.2.4.1.4v.2l.2.5.1.4.1.4v.2l.2.3v.4l.1.4v.4l-11.4 2.6c-.4-3-2.6-6.9-8.4-6.9-3.6 0-6.5 2.2-6.5 5 0 2.5 1.8 4 4.4 4.6h.3l7.2 1.6c10 2 15 8.2 15 15.6 0 8.3-6.3 16.8-19.7 16.8-10 0-15.7-4.3-18.6-8.9l-.3-.4-.2-.5-.3-.4-.3-.7-.2-.4-.2-.4-.2-.5-.1-.4v-.2l-.2-.4-.1-.4-.1-.4-.1-.4v-.4l-.2-.4v-.6l11.8-2.5c.3 4 3.3 7.7 9.2 7.7 4.6 0 6.8-2.4 6.8-5q.2-3.5-5.2-5h-.3l-6.7-1.6c-9.8-2.1-14.3-8-14.3-15.2 0-9 8-16.6 19-16.6m345.5 0c10 0 15.3 4.3 18 8.8l.2.4.6 1.3.2.4.2.4.2.6.1.5v.2l.2.4v.2l.1.3v.2l.1.4v.6l-11.4 2.6v-.4l-.3-.9v-.4c-1-2.6-3.3-5.2-8-5.2-3.7 0-6.6 2.2-6.6 5 0 2.5 1.8 4 4.4 4.6h.3l7.2 1.6c10 2 15 8.2 15 15.6 0 8.3-6.3 16.8-19.6 16.8-10 0-15.6-4.2-18.6-8.7l-.2-.4-.3-.5-.2-.4-.3-.4-.3-.7-.2-.4-.1-.4-.1-.3-.2-.4-.1-.4-.1-.4-.1-.2-.1-.4v-.4l-.2-.4v-.8l-.1-.2 11.8-2.5c.3 4 3.3 7.7 9.3 7.7 4.5 0 6.7-2.4 6.7-5q.2-3.5-5.2-5h-.3l-6.7-1.6c-9.8-2.1-14.3-8-14.3-15.2 0-9 8-16.6 19-16.6m52.6 0c15.7 0 25.1 10 25.1 26.3v2.1l-.1 1.2-.1 1h-36.4c.4 6.7 6 11.6 12.8 11.6 6.3 0 9.8-3.1 11.5-7.5l.1-.3 11.5 3.4c-2.6 8.8-10.7 16.2-23.2 16.2-13.9 0-26.2-10-26.2-27.2 0-16.3 12-26.8 25-26.8m-223.4 0c15.3 0 21.5 8.2 22 17.8v26.9l.1.8v2l.1.8.1.8v.8l.2.7v.7l.1.6v.3l.1.2h-12.6l-.5-4.6V319a17 17 0 0 1-15 7.6c-10.8 0-17.4-7.4-17.4-15.4 0-9 6.5-14 14.8-15.3h.3l12.5-2c3-.3 3.9-1.8 3.9-3.5 0-3.7-2.8-6.7-8.6-6.7-5.9 0-9.2 3.7-9.7 8v.3l-12.2-2.6c.8-8 8.2-16.7 21.8-16.7m118.9 0c15.3 0 21.5 8.2 22 17.8v26.9l.1.8v1.2l.1.8v1.2l.1.8.1.8v.3l.1.7.2.9v.2h-12.6q-.3-1.1-.4-3v-2l-.1-1.1a17 17 0 0 1-15 7.6c-10.8 0-17.4-7.4-17.4-15.4 0-9 6.5-14 14.8-15.3h.3l12.5-2c3-.3 3.9-1.8 3.9-3.5 0-3.7-2.8-6.7-8.6-6.7-5.9 0-9.2 3.7-9.7 8v.3l-12.2-2.6c.8-8 8.2-16.7 21.8-16.7m-249.2 1.5v29.4c0 5.7 3 10.2 9.3 10.2 6 0 9.5-4 9.6-9.7v-29.9H254v46.2l.1.7.1 1v1l.2 1.1v.9h-13v-.2l-.1-.4v-.5l-.2-.5V322l-.1-.7v-1.7c-2.8 4.8-8.7 6.8-14 6.8-12.2 0-19.3-8.8-19.4-19.7v-32.5zm179.8-24v29.6c2.2-3.6 7.8-7 15.3-7 15 0 23.5 11.6 23.5 26.7 0 15.4-9.5 26.8-24 26.8-6.8 0-12.1-3-14.9-7.1l-.1-.3v6.2h-13.4v-74.9zm-40.8 54.3v-2.2l-11.5 1.7c-3.5.5-6.3 2.5-6.3 6.4 0 3 2.2 6 6.6 6 5.7 0 11-2.8 11.2-11.5zm118.9 0v-2.2l-11.5 1.7c-3.5.5-6.3 2.5-6.3 6.4 0 3 2.2 6 6.6 6 5.7 0 11-2.8 11.2-11.5zm-184.3-19.1c-7 0-12.7 5.3-12.7 14.3s5.6 14.3 12.7 14.3 12.6-5.2 12.6-14.3c0-9-5.6-14.3-12.6-14.3m118.7-.2c-7 0-12.7 5-12.7 14.4 0 9.2 5.7 14.4 12.7 14.4s12.5-5 12.5-14.4-5.6-14.4-12.6-14.4m161.6-1.4a11 11 0 0 0-11.3 9.8v.3h22.7c-.2-5-3.5-10-11.4-10"/><path fill="url(#devicon-supabase-2-a)" d="M65.8 356a5 5 0 0 1-9-3.1l-1-69.6h46.7c8.5 0 13.2 9.8 8 16.4z"/><path fill="url(#devicon-supabase-3-b)" fill-opacity=".2" d="M65.8 356a5 5 0 0 1-9-3.1l-1-69.6h46.7c8.5 0 13.2 9.8 8 16.4z"/><path fill="#3ECF8E" d="M46.8 244a5 5 0 0 1 9 3.1l.5 69.6H10.1c-8.4 0-13.2-9.8-7.9-16.5z"/><defs><linearGradient id="devicon-supabase-2-a" x1="1242.4" x2="3922.8" y1="1824.8" y2="2948.9" gradientUnits="userSpaceOnUse"><stop stop-color="#249361"/><stop offset="1" stop-color="#3ECF8E"/></linearGradient><linearGradient id="devicon-supabase-3-b" x1="169" x2="1889.7" y1="-697.1" y2="2542" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>`,
  Node: `<i class="devicon-nodejs-plain colored"></i>`,
};

// TECH STACK
document.querySelector(".tech-list").innerHTML = (data.techstack || [])
  .map((tech) => {
    const icon = techIcons[tech] || "";
    return `<li>${icon} ${tech}</li>`;
  })
  .join("");

// TOOLS
document.querySelector(".tools-list").innerHTML = (data.tools || [])
  .map((tool) => {
    const icon = toolIcons[tool] || "";
    return `<li>${icon} ${tool}</li>`;
  })
  .join("");

// Display the last image in the array
const galleryPar = document.querySelector(".gallery-desc");
galleryPar.innerHTML = data.finallook || [];

const checkoutDiv = document.querySelector(".checkout-flow");
const lastImage = data.images[data.images.length - 1]; // gets the last image
checkoutDiv.innerHTML = `<img src="${lastImage}" alt="Checkout Flow" style="width:100%;">`;
// GALLERY
const gallery = document.querySelector(".gallery");
const galleryImage = data.images[data.images.length - 2]; //get the image before
gallery.innerHTML = `<img src="${galleryImage}" alt="Galery UI" style="width:100%;">`;

// LINKS
if (data.live) document.querySelector(".live").href = data.live;
if (data.demo) document.querySelector(".demo").href = data.demo;
if (data.github) document.querySelector(".github").href = data.github;
if (data.learnmore) document.querySelector(".learn-more").href = data.learnmore;

// CTA
document.querySelector(".cta-text").textContent = data.cta || "";
