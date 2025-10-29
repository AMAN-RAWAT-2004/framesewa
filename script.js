let menuOpen=document.querySelector('.open-menu')
let Menu=document.querySelector('.nav-menu .menu')
let menuClose=document.querySelector('.nav-menu .close-menu')
let logo=document.querySelector('.nav-bar .menu-buttons')
menuOpen.addEventListener('click', ()=>{
    Menu.style.display='flex'
    // logo.style.display='flex'
    // menuOpen.style.display='none'
    

})
menuClose.addEventListener('click', ()=>{
    Menu.style.display='none'
    // logo.style.display='none'
    // menuOpen.style.display='flex'
})