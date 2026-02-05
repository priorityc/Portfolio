
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  status.style.color = "#fbbf24";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "#10b981";
    this.reset();
  }, 1000);
});
