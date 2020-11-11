randomNumber = Math.floor(Math.random()*8+1);

const header1 = ['Battle']
const header2 = ['War']
const header3 = ['Fight']
const header4 = ['Clash']

function refresh() {
	window.location.reload();
}

window.onload = function() { 
	if (randomNumber == 1) {
		document.getElementById('header').innerHTML = `The ${header1[0]} of Hogwarts`
		document.getElementById("content1").style.display = "inline";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById('header').innerHTML = `The ${header2[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "inline";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById('header').innerHTML = `The ${header3[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "inline";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById('header').innerHTML = `The ${header4[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "inline";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "none";
    }
    if (randomNumber == 5) {
		document.getElementById('header').innerHTML = `The ${header1[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "inline";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "none";
    }
    if (randomNumber == 6) {
		document.getElementById('header').innerHTML = `The ${header2[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "inline";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "none";
    }
    if (randomNumber == 7) {
		document.getElementById('header').innerHTML = `The ${header3[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "inline";
		document.getElementById("content8").style.display = "none";
    }
    if (randomNumber == 8) {
		document.getElementById('header').innerHTML = `The ${header4[0]} of Hogwarts`
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
		document.getElementById("content5").style.display = "none";
		document.getElementById("content6").style.display = "none";
		document.getElementById("content7").style.display = "none";
		document.getElementById("content8").style.display = "inline";
	}
}
