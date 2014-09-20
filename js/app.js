function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function isLoggedIn() {
	return true;
}

function onDeviceReady() {
	if (isLoggedIn() && $('body').hasClass('index')) window.location = "tasks.html";
}