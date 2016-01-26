function TheClock(){
	setInterval(function(){
		var d, h, m, s; 
		d = new Date();
		h = d.getHours(); 
		m = d.getMinutes();
		s = d.getSeconds();
		$(".sec").text(s);
		$(".min").text(m);
		$(".hour").text(h);
  	},100)
} 