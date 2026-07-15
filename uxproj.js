const uxModal = document.querySelector(".ux-button");

uxModal.addEventListener("click", openModal);

function openModal() {
  document.getElementById("southendModal").style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
