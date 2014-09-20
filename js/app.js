function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
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
	navigator.network.isReachable("opencorpora.org", isOnlineNow, {});

	if (isLoggedIn() && $('body').hasClass('index'))
		window.location = "tasks.html";
}

function isOnlineNow(reachability) {
    // There is no consistency on the format of reachability
    var networkState = reachability.code || reachability;

    if (networkState == NetworkStatus.NOT_REACHABLE) return onOffline();
    return onOnline();
}
