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

document.getElementById("lang").onchange = function () {
	if (this.selectedIndex !== 0) {
		window.location.href = this.value;
	}
};
