// Quand on scroll, on vérifie la position
window.addEventListener('scroll', () => {
  const histoire2 = document.getElementById('histoire-2').offsetTop;
  const histoire3 = document.getElementById('histoire-3').offsetTop;
  const histoire4 = document.getElementById('histoire-4').offsetTop;
  const fin = document.getElementById('fin').offsetTop;
  const scrollPos = window.scrollY;

  if (scrollPos >= fin) {
	document.body.style.backgroundImage = "url('./images/TQFO/TQFO.jpg')";
  } else if (scrollPos >= histoire4) {
	document.body.style.backgroundImage = "url('./images/TQFO/arriere_04.jpg')";
  } else if (scrollPos >= histoire3) {
	document.body.style.backgroundImage = "url('./images/TQFO/arriere_03.jpg')";
  } else if (scrollPos >= histoire2) {
	document.body.style.backgroundImage = "url('./images/TQFO/arriere_02.jpg')";
  } else {
	document.body.style.backgroundImage = "url('./images/TQFO/arriere_01.jpg')";
  }
});

const boutonConfig = document.querySelector(".bouton-config");
const boutonTable = document.querySelector(".bouton-table-des-matieres");
const menuConfig = document.querySelector(".menu-config");
const tableDesMatieres = document.querySelector(".table-des-matiere");

boutonConfig.onclick = function () {
	if(menuConfig.style.display != "block") {
		menuConfig.style.display = "block";
	} else {
		menuConfig.style.display = "none";
	}
	
	if(menuConfig.style.display == "block") {
		tableDesMatieres.style.display = "none";
	}
}

boutonTable.onclick = function () {
	if(tableDesMatieres.style.display != "block") {
		tableDesMatieres.style.display = "block";
	} else {
		tableDesMatieres.style.display = "none";
	}

	if(tableDesMatieres.style.display == "block") {
		menuConfig.style.display = "none";
	}}

const themeClaire = document.querySelector("#commande-clair");
const themeFonce = document.querySelector("#commande-fonce");

themeClaire.onclick = function() {
	document.body.classList.remove("theme-fonce");
	document.body.classList.add("theme-clair");

	document.querySelectorAll(".scribe")
	.forEach(elem => {
		elem.style.borderLeft = "10px solid #000000"; 
	});

	document.querySelectorAll("h2, h3, h4")
	.forEach(elem => {
		elem.style.borderBottom = "1px solid #000000"; 
	});
};

themeFonce.onclick = function() {
	document.body.classList.remove("theme-clair");
	document.body.classList.add("theme-fonce");

	document.querySelectorAll(".scribe")
	.forEach(elem => {
		elem.style.borderLeft = "10px solid #ffffff"; 
	});

	document.querySelectorAll("h2, h3, h4")
	.forEach(elem => {
		elem.style.borderBottom = "1px solid #ffffff"; 
	});
};

const choixPolice = document.querySelector("#choix-police");
const principal = document.querySelector(".principal");

choixPolice.addEventListener("keydown", function() {
	const police = choixPolice.value;
	changePolice(police);
});

const changePolice = function(police) {
	const principal = document.querySelector(".principal");
	const projet = document.querySelector(".projet");
	const narrateur = document.querySelector(".narrateur");
	const legal = document.querySelector(".legal");
	const menuC = document.querySelector(".menu-config");
	const TDM = document.querySelector(".table-des-matiere");
	const chanson = document.querySelector(".chanson");
	
	principal.style.fontFamily = police + ", TeXGyreSchola, serif";
	projet.style.fontFamily = police + ", TeXGyreSchola, serif";
	narrateur.style.fontFamily = police + ", TeXGyreSchola, serif";
	legal.style.fontFamily = police + ", TeXGyreSchola, serif";
	menuC.style.fontFamily = police + ", TeXGyreSchola, serif";
	TDM.style.fontFamily = police + ", TeXGyreSchola, serif";
	chanson.style.fontFamily = police + ", TeXGyreSchola, serif";
}

let grandeurPolice = null;   // valeur de départ
const radioControl = document.querySelector(".radio-controls");
if(window.innerWidth <= 1000 ) {
	grandeurPolice = 3;
	radioControl.style.height = "9rem";
	radioControl.style.width = "98%";
} else {
	grandeurPolice = 1.5;
	radioControl.style.height = "3rem";
	radioControl.style.width = "99%";
}

window.addEventListener("resize", () => {
  grandeurPolice = window.innerWidth <= 1000 ? 3 : 1.5;
  appliquerPolice();
  
  radioControl.style.height = window.innerWidth <= 1000 ? "9rem" : "3rem";
  radioControl.style.width = window.innerWidth <= 1000 ? "98%" : "99%";
});

const ecart = 0.25;          // incrément/décrément

const policeMoins = document.querySelector("#police-moins");
const policePlus = document.querySelector("#police-plus");

// fonction pour appliquer la taille de police
function appliquerPolice() {
	document.querySelectorAll(
	"div, button, span, input"
	).forEach(elem => {
		elem.style.fontSize = grandeurPolice + "rem";
	});
	
	document.querySelectorAll(
	".petit"
	).forEach(elem => {
		elem.style.fontSize = grandeurPolice * 0.66 + "rem";
	});
	

	if(window.innerWidth <= 1000 ) {
		document.querySelector(".bouton-table-des-matieres").style.fontSize = (grandeurPolice * 1.1) + "rem";
		document.querySelector(".bouton-config").style.fontSize = (grandeurPolice * 1.1) + "rem";
	} else {
		document.querySelector(".bouton-table-des-matieres").style.fontSize = (grandeurPolice * 2) + "rem";
		document.querySelector(".bouton-config").style.fontSize = (grandeurPolice * 2) + "rem";
	}

  // titres avec une proportion différente
  document.querySelectorAll("h1, h2, h3, h4")
    .forEach(elem => {
      elem.style.fontSize = (grandeurPolice + 1.25) + "rem"; 
      // ici 1.25 de plus que grandeurPolice pour garder l’écart
    });
}

// bouton moins
policeMoins.addEventListener("click", () => {
  grandeurPolice -= ecart;
  appliquerPolice();
});

// bouton plus
policePlus.addEventListener("click", () => {
  grandeurPolice += ecart;
  appliquerPolice();
});

// appliquer au chargement
appliquerPolice();

const policeScapholene = document.querySelector("#police-scapholene");
policeScapholene.onclick = function () {
	const police = "Scapholene";
	changePolice(police);
}

const fermerConfig = document.querySelector("#fermer-config");
fermerConfig.onclick = function () {
	menuConfig.style.display = "none";
}

const fermerTable = document.querySelector("#fermer-table");
fermerTable.onclick = function () {
	tableDesMatieres.style.display = "none";
}

/* Radio */
let player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('radio-TQFO', {
  height: '0',
  width: '0',
  videoId: 'WtclsyCPcp8',
  playerVars: { 'controls': 0 },
  events: {
	'onReady': onPlayerReady
  }
});
}

function onPlayerReady() {
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('time');

// Met à jour la barre toutes les 500ms
setInterval(() => {
  const duration = player.getDuration();
  const current = player.getCurrentTime();
  if (duration > 0) {
	progress.value = (current / duration) * 100;
	timeDisplay.textContent = formatTime(current) + " / " + formatTime(duration);
  }
}, 500);

// Quand l’utilisateur déplace le slider
progress.addEventListener('input', (e) => {
  const duration = player.getDuration();
  const seekTime = (e.target.value / 100) * duration;
  player.seekTo(seekTime, true);
});
}

function formatTime(sec) {
const m = Math.floor(sec / 60);
const s = Math.floor(sec % 60);
return m + ":" + (s < 10 ? "0" + s : s);
}

function allerA(seconds) {
  if (player && player.seekTo) {
    player.seekTo(seconds, true);
    player.playVideo();
  }
}
