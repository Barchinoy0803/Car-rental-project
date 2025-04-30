const hamburgerMenuEl = document.querySelector(".hamburger__menu")
const menuElements = document.querySelector(".menu__elements")

hamburgerMenuEl.addEventListener("click", () => {
    menuElements.classList.toggle("show__ham__menu")
})