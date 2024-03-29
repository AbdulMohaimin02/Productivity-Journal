import "../nav.js"

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
        <div class = "cardButtons">
        
          <button type="button" class="exitButton" aria-label="Close '${name}'"
            data-close="">close</button>

          <a href ="./update_screen/update_screen.html?id=${id}" >
            <button type="button" class="editButton" aria-label="Edit '${name}'"
            data-edit="" >edit</button>
          </a>

        </div>
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




main();
