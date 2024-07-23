
const dropdownLinks = document.querySelectorAll('.dropdown');
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const dropdownMenu = querySelector('.dropdown-menu');

menuIcon.addEventListener('click', function () {
    navList.classList.toggle('open');
});

dropdownLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        if (dropdownMenu) {
            dropdownMenu.style.display = 'block';
        }
    });

    link.addEventListener('mouseout', function () {
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    });
});

