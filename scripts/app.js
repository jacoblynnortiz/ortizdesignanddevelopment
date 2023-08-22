let toggleBtn = document.getElementById('toggleBtn');
let checkBoxDark = document.getElementById('switch');
let body = document.getElementById('body');
let nav = document.getElementById('wrapper');

let sideMenu = document.getElementById('sideMenu');
let hamburger = document.getElementById('hamburger');

let logo = document.getElementById('logo');
let navLink1 = document.getElementById('navLink1');
let navLink2 = document.getElementById('navLink2');
let navLink3 = document.getElementById('navLink3');
let navLink4 = document.getElementById('navLink4');
let navLink5 = document.getElementById('navLink5');
let navLink6 = document.getElementById('navLink6');
let navLink7 = document.getElementById('navLink7');

darkTheme = false;

toggleBtn.addEventListener('click', () => {
	if (darkTheme == true) {
		darkTheme = false;
		applyLightTheme();
	} else {
		darkTheme = true;
		applyDarkTheme();
	}
});

function applyLightTheme() {
	body.classList.toggle('pageDarkTheme');
	nav.classList.toggle('wrapper');
	nav.classList.toggle('darkNav');
	logo.style.color = "black";
	navLink1.style.color = "black";
	navLink2.style.color = "black";
	navLink3.style.color = "black";
	navLink4.style.color = "black";
	navLink5.style.color = "black";
	navLink6.style.color = "black";
	navLink7.style.color = "black";
	if (window.matchMedia('screen and (max-width: 1150px)').matches) {
		sideMenu.style.backgroundColor = "#f1f1f1";
	} else {
		sideMenu.style.backgroundColor = "#fff";
	}
}

function applyDarkTheme() {
	body.classList.toggle('pageDarkTheme');
	nav.classList.toggle('wrapper');
	nav.classList.toggle('darkNav');
	logo.style.color = "white";
	navLink1.style.color = "white";
	navLink2.style.color = "white";
	navLink3.style.color = "white";
	navLink4.style.color = "white";
	navLink5.style.color = "white";
	navLink6.style.color = "white";
	navLink7.style.color = "white";
	if (window.matchMedia('screen and (max-width: 1150px)').matches) {
		sideMenu.style.backgroundColor = "#333";
	} else {
		sideMenu.style.backgroundColor = "#222";
	}
}


document.getElementById("lang").onchange = function () {
	if (this.selectedIndex !== 0) {
		window.location.href = this.value;
	}
};