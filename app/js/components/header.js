// open/close side nav

let sideNav = document.getElementById('sideNav');
let closeSideNav = document.getElementById('closeSideNav');

openSideNav.addEventListener('click', function() {
    sideNav.style.right = '0px';
});

closeSideNav.addEventListener('click', function() {
    sideNav.style.right = '-500px';
});

// listens for if window is scrolled past Y level 0

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $(".header").addClass("header-sticky");
    } else {
        $(".header").removeClass("header-sticky");
    }
});

// let header = document.getElementById('header');

// generates header on page for a main page or about page

// if (header.dataset.pagetype == 'main') {
    
// }