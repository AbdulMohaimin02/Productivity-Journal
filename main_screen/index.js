const divs = document.querySelectorAll(".card");
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    if (el !== event.target) return;
    if (event.target.getAttribute("dataOpen") === "false") {
      event.target.setAttribute("dataOpen", "true");
      event.target.style.top = "20px";
      event.target.style.bottom = "20px";
      event.target.style.left = "20px";
      event.target.style.right = "20px";
      event.target.style.height = "100%";
      event.target.style.position = "fixed";
      event.target.style.zIndex = "1";
    } else {
      event.target.setAttribute("dataOpen", "false");
      event.target.style.top = "0px";
      event.target.style.bottom = "0px";
      event.target.style.left = "0px";
      event.target.style.right = "0px";
      event.target.style.height = "250px";
      event.target.style.position = "relative";
      event.target.style.zIndex = "0";
    }
  })
);

function addNewNote() {
  const node = document.createElement("div");
  node.innerHTML =
    '<div class="card"><h4> summer trip </h4> <p>Lorem Ipsum.....</p> </div>';
  document.getElementById("myNotes").prepend(node);
}

const menu_toggle = document.querySelector('.menu-toggle')
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})
