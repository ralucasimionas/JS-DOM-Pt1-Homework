const dropdownButton = document.querySelector('.menu-icon');
const dropdownList = document.querySelector('nav ul');

function dropdown() {
    dropdownList.classList.toggle("show-dropdown");
}
dropdownButton.addEventListener('click', dropdown); 

