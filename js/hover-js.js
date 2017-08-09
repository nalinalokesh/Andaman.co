function show() {
		var welcome = document.getElementById('sub1');
		welcome.style.display = 'block';
		var arr = document.getElementById('sub11');
		arr.style.display = 'block';
	}

	function hide() {
		var welcome = document.getElementById('sub1');
		welcome.style.display = 'none';
		var arr = document.getElementById('sub11');
		arr.style.display = 'none';

	}
	
	function init() {
		var surround = document.getElementById('surroundDiv');
		surround.onmouseover = show;
		surround.onmouseout=hide;
			var round = document.getElementById('surroundDiv11');
		round.onmouseover = show;
		round.onmouseout=hide;    
	}

	window.onload = init;


	

