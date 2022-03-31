import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@2/dist/purify.es.min.js";
// import { getJSON, serialize, stringToHTML } from "./utils.js";
import notes, { API } from "../data/data.js";


const app = document.querySelector("#myNotes");

function main() {
  if (notes instanceof Error) {
    app.textContent = "There was a problem. Try again later.";
    console.error(notes);
  } else {

    // Insert the HTML string
    app.innerHTML = `
        ${DOMPurify.sanitize(notes.map(getNotesHTML).join(""))}
    `;
  }
}

function getNotesHTML({ id, name, info, createdAt, updatedAt}) {
  return `
  <div class="card">
    <div class="buttonStyle">
      <h4>${name}</h4>
        <button type="button" class="exitButton" aria-label="Close '${name}'"
          data-close="">&times;</button>
    </div>
    <p> ${info}</p>
  </div>
  `;
}





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


main();
