$(document).ready(function(){
	setInterval(function(){
		var date = new Date();
   		var minutes = ("0" + date.getMinutes()).substr(-2);
   		var seconds = ("0" + date.getSeconds()).substr(-2);
    	$("#milliseconds").text(date.getMilliseconds());
    	$("#seconds").text(seconds);
   		$("#minutes").text(minutes);
    	$("#hours").text(date.getHours());
    	var el = document.getElementById('clock');
		var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
		var fontSize = parseFloat(style); 
		console.log(fontSize);
		if (seconds < 20) el.style.fontSize = 15+ (seconds/2) + 'px';
		else el.style.fontSize = (seconds) + 'px';
	},100)

})