
let login=document.querySelector('#signup')
let signup=document.querySelector('#signin')
let logincont=document.querySelector('.login-container')
let registercont=document.querySelector('.Signup-container')
// let cont=document.querySelector('.container')
// const closebtn=document.querySelector('.close-btn')
// closebtn.addEventListener('click', ()=>{
//     registercont.style.display='none'
//     logincont.style.display='flex'
// })
login.addEventListener('click', ()=>{
    logincont.style.display='none'
    registercont.style.display='flex'
    

})
signup.addEventListener('click', ()=>{
    logincont.style.display='flex'
    registercont.style.display='none'

})