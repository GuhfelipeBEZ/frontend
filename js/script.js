const toggleTheme = document.getElementById("toggleTheme");
/* */ 
const rootHtml = document.documentElement;

const accordionHeaders = document.querySelectorAll(".accordion-header");
 
const menuLinks = document.querySelectorAll(".menu-link");
 /* moda o tema de claro para escuro*/
function changTheme() {

    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-Theme", "dark"); /* codigo que controla o tema claro e escuro */

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

    toggleTheme.addEventListener("click", changTheme);

