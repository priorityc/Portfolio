const tabs = document.querySelectorAll(".service-tab");
const panels = document.querySelectorAll(".service-panel");

const faqbtn = document.querySelectorAll(".faq-category__title");
const faqpanels = document.querySelectorAll(".faq-brand");

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

faqbtn.forEach((faq) => {
  faq.addEventListener("click", () => {
    // 1. Remove active from all tabs
    faqbtn.forEach((t) => t.classList.remove("active"));

    // 2. Remove active from all panels
    faqpanels.forEach((p) => p.classList.remove("active"));

    // 3. Activate clicked tab
    faq.classList.add("active");

    // 4. Activate matching panel
    const target = faq.dataset.faq; // "webdev", "uiux", "branding"
    document.getElementById(target).classList.add("active");
  });
});
