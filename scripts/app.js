let showMenu = document.getElementById('show-menu');
let menuClosed = true;

function slide() {
    if (window.matchMedia('screen and (max-width: 1100px)').matches) {
        if (menuClosed == true) {
            menuClosed = false;
            showMenu.checked = false;
        } else {
            menuClosed = true;
            showMenu.checked = false;
        }
    } else {
        console.log('mobile nav not active');
    }
}

link1.addEventListener('click', function () {
    slide();
});

link2.addEventListener('click', function () {
    slide();
});

link3.addEventListener('click', function () {
    slide();
});

link4.addEventListener('click', function () {
    slide();
});

link5.addEventListener('click', function () {
    slide();
});

link6.addEventListener('click', function () {
    slide();
});

link7.addEventListener('click', function () {
    slide();
});


document.getElementById("lang").onchange = function () {
	if (this.selectedIndex !== 0) {
		window.location.href = this.value;
	}
};
