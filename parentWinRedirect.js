function parentWinRedirect(win, location, time) {

	var interval = window.setInterval(function() {
	
		if(win) {
			
			if(win.closed) {
				console.log(location);
				window.location = location;
				window.clearInterval(interval);
				interval = null;
				win = null;
			}
		} else {
			interval = null;
		}
		
	}, time);
}