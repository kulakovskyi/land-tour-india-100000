const rulesBtn = document.querySelector('.bonus__rules');
const overlay = document.querySelector('.bonus__overlay');
const overlayWrapper = document.querySelector('.bonus__overlay-wrapper');
const rulesClose = document.querySelector('.rules__close');
rulesBtn.addEventListener('click', ()=>{
    overlay.classList.remove('opacity-overlay');
    overlayWrapper.classList.remove('hide');
});

rulesClose.addEventListener('click', ()=>{
    overlay.classList.add('opacity-overlay');
    overlayWrapper.classList.add('hide');
})