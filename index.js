
function handleMenu(event) {
    let button = event.target
    let isOpen = button.getAttribute("data-isopen") === "true"

    button.setAttribute("data-isopen", !isOpen)
    button.setAttribute("aria-label", `Click to ${isOpen ? 'close' : 'open'} menu`)
}

let menuButton = document.getElementsByClassName("menu__button")[0]
menuButton.addEventListener("click", handleMenu)
