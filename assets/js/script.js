const preloader = document.querySelectorAll("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove")
})