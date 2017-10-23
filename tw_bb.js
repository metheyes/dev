$.ajax({
	//method: "GET",
	url: "/map/village.txt"
}).done(function(data) {
	console.log(data);
});/*
let lista = [];
let b = $('body').html().split("\n");
$.each(b, (i) => { let inf = b[i].split(","); if(inf[1] === "Barbarby"){ lista.push(inf[2] + "|" + inf[3] + "<br />"); } });
$('body').html(lista);*/