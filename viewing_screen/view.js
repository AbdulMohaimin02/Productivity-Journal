import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@2/dist/purify.es.min.js";
import { getJSON, serialize, stringToHTML } from "../data/utils.js";
import restaurants, { API } from "../data/data.js";



const menu_toggle = document.querySelector('.menu-toggle')
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})



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



