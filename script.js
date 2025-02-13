const sidebar = document.querySelector(".sidebar");
const sidebarToggeler = document.querySelector(".sidebar-toggler");
const projects = document.querySelector("#projects");

sidebarToggeler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

projects.addEventListener("click", () =>{
    console.log("clicked");
});