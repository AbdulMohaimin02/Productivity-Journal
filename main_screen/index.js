import "../nav.js";

const grid = document.querySelector("#myNotes");

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;

  const isCloseButton = event.target.hasAttribute("data-close");

  if (isCloseButton) {
    card.classList.remove("open");
  } else {
    card.classList.add("open");
  }
});

document.documentElement.addEventListener("mousedown", (event) => {
  const isInsideGrid = grid.contains(event.target);
  if (isInsideGrid) return;

  const openNote = document.querySelector(".card.open");
  if (!openNote) return;

  const card = openNote.closest(".card");
  card.classList.remove("open");
});
