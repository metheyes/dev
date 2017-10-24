$.get("/map/village.txt", function(data) {
	let points = parseInt(prompt("Minimum poäng på barbarbyarna (standard: 1000)", "1000")) || 1000;
	console.log(points);
	let lista = [];
	let b = data.split("\n");
	$.each(b, (i) => {
		let inf = b[i].split(",");
		if(inf[1] === "Barbarby" && inf[5] >= points) {
			lista.push("<tr><td>" + inf[1] + "</td><td>" + inf[5] + "p</td><td><a href=\"/game.php?screen=info_village&id=" + inf[0] + "#" + inf[2] + ";" + inf[3] + "\">" + inf[2] + "|" + inf[3] + "</a></td></tr>");
		}
	});
	$("table[class=content-border]").before("<table style=\"width:100%\"><tbody><tr><th>Bynamn</th><th>Poäng</th><th>Kordinater</th></tr>" + lista + "</tbody></table>");
}, "text");