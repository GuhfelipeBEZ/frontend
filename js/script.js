const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

 /* moda o tema de claro para escuro*/
function changTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-Theme", "dark"); /* codigo que controla o tema claro e escuro */

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

    toggleTheme.addEventListener("click", changTheme);
 // fim função mudar tema do site

 accordionHeaders.forEach(header => {
    header.addEventListener("click", () => { 
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active"); 
        
        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
        
    })
 })
 // fim da função de click no accordion 

 menuLinks.forEach(item => {
    item.addEventListener("click", () =>{
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
 })
 //fim da função menu link