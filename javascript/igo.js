function bigbutton(){
	window.location.assign("../main/mainmenu.html");
}


function getTime() {
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	if (mins < 10) {
		mins = "0" + mins;
	}

	sessionStorage.time = hours + ":" + mins;
	document.getElementById("time").innerHTML = sessionStorage.time;
}


function putTime() {
	document.getElementById("toptime").innerHTML = sessionStorage.time;
}


function undo() {
	window.history.back();
}
