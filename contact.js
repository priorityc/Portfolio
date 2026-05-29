var acc = document.getElementsByClassName("accordion");
var i;
//Loop for whole buttons with class acordion
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //toggle the active class
    this.classList.toggle("active");
    //select the next sibling element the expanded panel
    var panel = this.nextElementSibling;
    //if the pannel is expanded (maxheight)
    if (panel.style.maxHeight) {
      //colapse it
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Toggle visual "selected" state
//1.Selects all the inputs
document.querySelectorAll(".chip input").forEach((input) => {
  //listen if each of them change
  input.addEventListener("change", () => {
    const chip = input.closest(".chip");
    //Is this checkbox currently checked?
    if (input.checked) {
      //if true add the class -selected
      chip.classList.add("selected");
    } else {
      chip.classList.remove("selected");
    }
  });
});

// Testing
const selectedFeatures = [
  ...document.querySelectorAll('input[name="features"]:checked'),
].map((input) => input.value);

console.log(selectedFeatures);
