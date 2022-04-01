import "../nav.js";

const content = document.querySelector(".content");
const noteId = getNoteId();

function render() {
  fetch(`http://localhost:3000/notes/${noteId}`)
    .then((response) => response.json())
    .then(({ name, info }) => {
      content.innerHTML = `
        <h1>${name}</h1>
        <p>${info}</p>
      `;
    });
}

function getNoteId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function getErrorHTML(error) {
  console.error(error);
  document.title = "Error - Personal Journal";

  return `
      <h1>Error - Personal Journal</h1>
      <p>There was a problem. Try again later.</p>
    `;
}

render();
