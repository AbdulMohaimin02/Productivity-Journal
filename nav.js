const menu = document.querySelector(".menu");
const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

fetch("http://localhost:3000/notes")
  .then((response) => response.json())
  .then((notes) => {
    console.log(notes);
    menu.innerHTML += notes
      .map(({ id, name }) => {
        return `
        <a class="menu-item" href="/viewing_screen/view.html?id=${id}">
          ${name}
        </a>`;
      })
      .join("");
  });

menu_toggle.addEventListener("click", () => {
  menu_toggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});
