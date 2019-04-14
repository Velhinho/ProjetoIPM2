var citylist = ["Lisboa", "Tomar", "Chaves"];

function loadcities() {
	if(sessionStorage.saved){
		setcity()
	}

	else {
		sessionStorage.currentcity = 0;
		var currentcity = Number(sessionStorage.currentcity);
		document.getElementById("selectedcity").innerHTML = citylist[currentcity];
		document.getElementById("nextcity").innerHTML = citylist[currentcity+1];
		sessionStorage.saved = true;
	}
}

function setcity() {
	var currentcity = Number(sessionStorage.currentcity);

	if (currentcity == 0) {
		document.getElementById("previouscity").innerHTML = "";
	}
	else {
		document.getElementById("previouscity").innerHTML = citylist[currentcity-1];
	}

	if (currentcity+1 == citylist.length) {
		document.getElementById("nextcity").innerHTML = "";
	}
	else {
		document.getElementById("nextcity").innerHTML = citylist[currentcity+1];
	}

	document.getElementById("selectedcity").innerHTML = citylist[currentcity];
}


function previouscity() {
	var currentcity = Number(sessionStorage.currentcity);

	if (currentcity == 0) {
		return;
	}
	currentcity -= 1;
	sessionStorage.currentcity = currentcity;
	setcity();
}


function nextcity() {
	var currentcity = Number(sessionStorage.currentcity);

	if (currentcity == citylist.length-1) {
		return;
	}
	currentcity += 1;
	sessionStorage.currentcity = currentcity;
	setcity();
}

function getMeta(metaName) {
  var metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}

function getWeather() {
	var currentcity = Number(sessionStorage.currentcity);
	var currentday = getMeta("currentday");
	var cityname = citylist[currentcity].toLowerCase();
	var weatherfile = "../images/final/" + currentday + cityname + ".png";
	document.getElementById("frameimage").src = weatherfile;
}

function fillText() {
	document.getElementById("backtext").innerHTML = "<"
	document.getElementById("nexttext").innerHTML = ">"
}