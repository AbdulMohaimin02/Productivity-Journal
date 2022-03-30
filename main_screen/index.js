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


// Commented out as we will deal with adding stuff to database on the update screen
// function addNewNote() {
//   const node = document.createElement("div");
//   node.innerHTML =
//     '<div class="card"><h4> summer trip </h4> <p>Lorem Ipsum.....</p> </div>';
//   document.getElementById("myNotes").prepend(node);
// }

const menu_toggle = document.querySelector('.menu-toggle')
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})
