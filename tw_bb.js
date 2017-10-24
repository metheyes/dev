$.get("/map/village.txt", function(data) {
	let points = parseInt(prompt("Minimum poäng på barbarbyarna (standard: 1000)", "1000")) || 1000;
	let lista = [];
	let b = data.split("\n");
	$.each(b, (i) => {
		let inf = b[i].split(",");
		if(inf[4] == 0 && inf[5] >= points) {
			//console.log(inf);
			lista.push("<tr><td>" + inf[1] + "</td><td>" + inf[5] + "p</td><td><a href=\"/game.php?screen=info_village&id=" + inf[0] + "#" + inf[2] + ";" + inf[3] + "\">" + inf[2] + "|" + inf[3] + "</a></td></tr>");
		}
	});
	$("table[class=content-border]").append("<table class=\"vis\" style=\"width:50%\"><tbody><tr><th style=\"width:33%\">Bynamn</th><th style=\"width:33%\">Poäng</th><th style=\"width:33%\">Kordinater</th></tr>" + lista + "</tbody></table>");
}, "text");