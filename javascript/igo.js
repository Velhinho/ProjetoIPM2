function bigbutton(){
	window.location.assign("../main/mainmenu.html");
}

function getTime(){
	var date = new Date();
	var hours = date.getHours();
	var mins = date.getMinutes();
	if (mins < 10) {
		mins = "0" + mins;
	}

	return hours + ":" + mins;
}


function lockTime() {
	var time = getTime();
	document.getElementById("time").innerHTML = time;
}


function putTime() {
	var time = getTime();
	document.getElementById("toptime").innerHTML = time;
}


function undo() {
	window.history.back();
}
