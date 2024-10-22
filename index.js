function toggleMenu() {
    const icon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//     document.addEventListener('click', function(event) {
//         const icon = document.querySelector('.hamburger-icon');
//         if (!icon.contains(event.target)) {
//             icon.classList.remove;
//         }
//     });

// function toggleMenu() {
//     const icon = document.querySelector('.hamburger-icon');
//     const menu = document.querySelector('.nav-links');
//     const closeIcon = icon.querySelector('.close-icon');
//     // const hamburgerIcon = icon.querySelector('.fa-bars');

//     icon.classList.toggle('open');
//     menu.classList.toggle('open');

//     if (icon.classList.contains('open')) {
//         hamburgerIcon.style.display = 'none';
//         closeIcon.style.display = 'block';
//     } else {
//         hamburgerIcon.style.display = 'block';
//         closeIcon.style.display = 'none';
//     }
// }
// document.addEventListener('click', function (event) {
//     const icon = document.querySelector('.hamburger-icon');
//     if (!icon.contains(event.target) && !document.querySelector('.nav-links').contains(event.target)) {
//         icon.classList.remove('open');
//         document.querySelector('.nav-links').classList.remove('open');
//         icon.querySelector('.fa-bars').style.display = 'block';
//         icon.querySelector('.close-icon').style.display = 'none';
//     }
// });
