const mainMenuEl = document.querySelector(`.main-menu`);
const menuBgEl = document.querySelector(`.menu-bg`);
// console.log(mainBgEl);
// console.log(mainMenuEl);

mainMenuEl.addEventListener(`mouseover`,function(){
    menuBgEl.classList.add(`on`);
});
mainMenuEl.addEventListener(`mouseout`,function(){
    menuBgEl.classList.remove(`on`);
});
mainMenuEl.addEventListener(`mouseover`,function(){
    menuBgEl.classList.add(`on`);
    mainMenuEl.classList.add(`on`);
});
mainMenuEl.addEventListener(`mouseout`,function(){
    menuBgEl.classList.remove(`on`);
    mainMenuEl.classList.remove(`on`);
});

const mobileMenuEl = document.querySelector(`.mobile-menu`);
const mobileBoxEl = document.querySelector(`.mobile-box`);
const closeMenuEl = document.querySelector(`.close`)
mobileMenuEl.addEventListener(`click`, function(){
    mobileBoxEl.classList.add(`show`);
});
closeMenuEl.addEventListener(`click`, function(){
    mobileBoxEl.classList.remove(`show`);
});