const sidebar = document.querySelector(".sidebar");
const sidebarToggeler = document.querySelector(".sidebar-toggler");

sidebarToggeler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
})