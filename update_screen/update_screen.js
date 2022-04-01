import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@2/dist/purify.es.min.js";
// import { getJSON, serialize, stringToHTML } from "../data/utils.js";
import notes, { API } from "../data/data.js";


const app = document.querySelector("#app");

function main() {
  if (notes instanceof Error) {
    app.textContent = "There was a problem. Try again later.";
    console.error(notes);
  } else {

    var currentId = getNotesId()
    var currentNote = notes.find(note => Number(note.id) === Number(currentId))
    var currentArray = [currentNote]
    console.log(currentArray[0])
    // Insert the HTML string
  
    app.innerHTML = `
        ${DOMPurify.sanitize(currentArray.map(getUpdateHTML))}
    `;
  }
}


function getNotesId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}


function getUpdateHTML({ id, name, info, createdAt, updatedAt}) {
    return`
    <form action="https://ad-productivity-app.herokuapp.com/notes/${id}" id ="update">
        <h1>Title</h1>

        <p>
            <input id="name" name="name" type="text" required  value ="${name}"/>
        </p>

        <h1>Note</h1>

        <p>
            <input id="info" name="info" required value = "${info}">
        </p>

        <p>
            <br>
                <div>
                  <button type="submit">Update Note</button>
                  <button type="reset">Delete Note</button>
                </div>
        </p>    

    </form>
    `
}

// const form = document.querySelector("#update");

/**
 * Serialize all form data into a JSON string
 * https://barker.codes/blog/serialize-form-data-into-a-json-string-in-vanilla-js/
 * @param {HTMLFormElement} form The form to serialize
 * @returns {String} The serialized form data
 */

function serialize(form) {
  // Create a new FormData object
  const formData = new FormData(form);

  // Create an object to hold the name/value pairs
  const pairs = {};

  // Add each name/value pair to the object
  for (const [name, value] of formData) {
    pairs[name] = value;
  }

  // Return the JSON string
  return JSON.stringify(pairs, null, 2);
}



async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  
  const body = serialize(form);
  const { action } = form;



  const headers = { "Content-Type": "application/json" };

  try {
    await fetch(action, { method:"put", headers, body });
    window.location.href = "../main_screen/index.html"
  } catch (error) {
    console.error(error);
  }
}

async function handelDelete(event){
  event.preventDefault();

  const form = event.target;

  const { action } = form;
  const headers = { "Content-Type": "application/json" };


  try {
    await fetch(action, { method:"delete"} );
    window.location.href = "../main_screen/index.html"
  } catch (error) {
    console.error(error);
  }


}

app.addEventListener("submit", handleSubmit);
app.addEventListener("reset",handelDelete)

main();


