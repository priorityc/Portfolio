const tabs = document.querySelectorAll(".service-tab");
console.log(tabs);
const panels = document.querySelectorAll(".service-panel");
console.log(panels);

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
