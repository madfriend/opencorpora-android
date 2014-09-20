function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onOnline() {
	window.online = true;
	$('.is-online').removeClass('hidden');
	$('.btn-login').attr('disabled', false);
}

function onOffline() {
	window.online = false;
	$('.is-online').addClass('hidden');
	$('.btn-login').attr('disabled', true);

}

function isLoggedIn() {
	return true;
	var token = window.localStorage.getItem("auth_token");
	if (token) return true;
}

function onDeviceReady() {
	document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);

	if (checkConnection()) onOnline();
	else onOffline();

	if (isLoggedIn() && $('body').hasClass('index'))
		window.location = "tasks.html";
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = false;
    states[Connection.ETHERNET] = true;
    states[Connection.WIFI]     = true;
    states[Connection.CELL_2G]  = true;
    states[Connection.CELL_3G]  = true;
    states[Connection.CELL_4G]  = true;
    states[Connection.CELL]     = true;
    states[Connection.NONE]     = false;

    return states[networkState];
}
