//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');


btn.addEventListener("click", function () {
	const col = document.getElementById("colorSelect");

	col.remove(col.selectedIndex);
})