const menuIcon = document.querySelector('.menu-icon');
console.log(menuIcon);      
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-acon__active');
    console.log(menuIcon); 
})