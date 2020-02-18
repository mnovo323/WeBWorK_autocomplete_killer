if (window.location.hostname.indexOf("webwork") !== -1) {
	let inputs = document.getElementsByTagName("input");
	for(i=0; i<inputs.length; i++) {
		inputs[i].setAttribute("autocomplete", "off");
	};
};
