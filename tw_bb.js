$.get("/map/village.txt", function(data) {
	let points = prompt("Minimum poäng på barbarbyarna (standard: 1000)", "1000") || 1000;
	console.log(points);
	let lista = [];
	let b = data.split("\n");
	$.each(b, (i) => { let inf = b[i].split(","); if(inf[1] === "Barbarby" && inf[5] >= points){ lista.push("<a href=\"/game.php?screen=info_village&id=" + inf[0] + "#" + inf[2] + ";" + inf[3] + "\">" + inf[2] + "|" + inf[3] + "</a> " + inf[5] + "p<br />"); } });
	$("table[class=content-border]").before(lista);
}, "text");