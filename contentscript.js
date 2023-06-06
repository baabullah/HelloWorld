function loadInject() {
	var s = document.createElement('script');
	s.src = chrome.runtime.getURL("inject.js");
	s.onload = function() {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
}

var s2 = document.createElement('script');
s2.src = chrome.runtime.getURL('jquery-3.6.0.min.js');
s2.onload = function() {
	loadInject();
	this.remove();
};
(document.head || document.documentElement).appendChild(s2);
