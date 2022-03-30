/**
 * Get the JSON data from a Response object.
 * https://gist.github.com/kieranbarker/50c49f7c4966c4b88d7e21f1657fa924
 * @param {Response} response The Response object.
 * @returns {Promise} The JSON data or an Error.
 */
 async function getJSON(response) {
    if (response.ok) {
      const data = await response.json();
      return Promise.resolve(data);
    }
  
    const { status, statusText } = response;
    const error = new Error(`${status} ${statusText}`);
  
    return Promise.reject(error);
  }
  
  /**
   * Serialize all form data into a JSON string.
   * https://barker.codes/blog/serialize-form-data-into-a-json-string-in-vanilla-js/
   * @param {HTMLFormElement} form The form to serialize.
   * @returns {string} The serialized JSON string.
   */
  function serialize(form) {
    const formData = new FormData(form);
  
    const pairs = {};
  
    for (const [name, value] of formData) {
      pairs[name] = value;
    }
  
    return JSON.stringify(pairs);
  }
  
  /**
   * Parse a template string into real HTML.
   * https://gomakethings.com/converting-a-string-into-markup-with-vanilla-js/
   * @param {string} str The template string.
   * @returns {HTMLElement} The parsed HTML.
   */
  function stringToHTML(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    return doc.body;
  }
  
  export { getJSON, serialize, stringToHTML };