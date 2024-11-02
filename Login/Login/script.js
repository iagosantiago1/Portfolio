const wrapper = document.querySelector('.wrppr');
const wrapper2 = document.querySelector('.wrppr2');
const wrapper3 = document.querySelector('.wrppr3');
const loginlink = document.querySelector('.login_link');
const registrarlink = document.querySelector('.registrar_link');
const btnPopup = document.querySelector('.bt_login');
const btnPopup2 = document.querySelector('.nav_bar');
const btnPopup3 = document.querySelector('.nav_bar3');
const icone_fechar = document.querySelector('.icone_fechar');
const icone_fechar2 = document.querySelector('.icone_fechar2');
const icone_fechar3 = document.querySelector('.icone_fechar3');

registrarlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active_popup');
});

icone_fechar.addEventListener('click', ()=> {
    wrapper.classList.remove('active_popup');
});

//-----------------------------------------------//

btnPopup2.addEventListener('click', () => {
    wrapper2.classList.add('active_popup2');
});

icone_fechar2.addEventListener('click', () => {
    wrapper2.classList.remove('active_popup2');
});

//-----------------------------------------------//
btnPopup3.addEventListener('click', () => {
    wrapper3.classList.add('active_popup3');
});

icone_fechar3.addEventListener('click', () => {
    wrapper3.classList.remove('active_popup3');
});

