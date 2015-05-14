function ninjaClicked() {
	console.log(this);
	alert("Beware the Ninja!");
}

function onGenderChange(e) {
	var select = document.getElementById("gender-select");
	alert(select.options[select.selectedIndex].value)
}