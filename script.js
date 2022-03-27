function showTime(pragmatic) {
	document.getElementById('currentTime').innerHTML = new Date(<object data="" type="">
	  
	</object>).toUTCString();
}
showTime(object);
setInterval(function () {
	showTime(12);
}, 1000);