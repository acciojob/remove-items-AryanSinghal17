function removecolor() {
    const select = document.getElementById("colorSelect");

    select.options[select.selectedIndex].remove();
}

document
    .querySelector('input[type="button"]')
    .addEventListener("click", removecolor);