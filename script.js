let menuCheckbox = document.querySelector('.menu-checkbox');
let menu = document.querySelector('.header-wrapper');
let header = document.querySelector('header');
let menuList = document.querySelector('.nav-list');

menuCheckbox.addEventListener('change', () => {
    menu.classList.toggle('unhidden');
})

document.addEventListener('click', function(event) {
    //console.log(event.target); console.log(' was clicked');
    if (!header.contains(event.target) || menuList.contains(event.target)) {
        menu.classList.remove('unhidden');
        menuCheckbox.checked = false;
    }
});


