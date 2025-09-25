const openContent = document.querySelectorAll(".image-item");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

openContent.forEach(item => {
  item.addEventListener("click", () => {
    modalBody.innerHTML = item.innerHTML; // copy clicked card content
    modal.style.display = "flex"; // show modal
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // close modal
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; // click outside closes
  }
  else if(e.target === closeBtn){
    modal.style.display = "none"; // click close button closes
  }
});
