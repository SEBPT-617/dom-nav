
const dropdownLinks = document.querySelectorAll('.dropdown');
const ddMenu = querySelector('.dropdown-menu')

dropdownLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        ddMenu.style.display = 'block';
    });

    link.addEventListener('mouseout', function () {
        ddMenu.style.display = 'none';
    });
});

