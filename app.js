const connexion = document.querySelector('.connexion');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    connexion.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    connexion.classList.remove('active');
});
btnpopup.addEventListener('click', ()=> {
    connexion.classList.add('active-popup');
});
iconclose.addEventListener('click', ()=> {
    connexion.classList.remove('active-popup');
});
