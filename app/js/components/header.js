let navigation = document.getElementById('navigation');

let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

closeMenu.addEventListener('click', function() {
    navigation.style.right = '-300px';
});

openMenu.addEventListener('click', function() {
    navigation.style.right = '0';
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