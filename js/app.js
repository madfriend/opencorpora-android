function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function isLoggedIn() {
	return true;
}

function onDeviceReady() {
	if (isLoggedIn()) window.location = "tasks.html";
}