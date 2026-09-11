function removecolor() {
    const select = document.getElementById("colorSelect");

    select.options[select.selectedIndex].remove();
}