//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');


btn.addEventListener("click", function () {
	const selected  = document.getElementById("colorSelect");

	selected .remove(selected.selectedIndex);
})