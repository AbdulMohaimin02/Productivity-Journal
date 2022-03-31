const form = document.querySelector("form");

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
  const { method, action } = form;

  const headers = { "Content-Type": "application/json" };

  try {
    await fetch(action, { method, headers, body });
    window.location.href = "../main_screen/index.html"
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", handleSubmit);


