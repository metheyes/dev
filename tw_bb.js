$.get("/map/village.txt", function(data) {
	console.log(data);
	let lista = [];
	let b = data.split("\n");
	$.each(b, (i) => { let inf = b[i].split(","); if(inf[1] === "Barbarby"){ lista.push("<a href=\"/game.php?screen=info_village&id=" + inf[0] + "#" + inf[2] + ";" + inf[3] + "\">" + inf[2] + "|" + inf[3] + "</a><br />"); } });
	alert(lista);
}, "text");