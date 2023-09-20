import { login } from "./funcs/auth.js";

const loginBtn = document.getElementById('login-btn');
const preloaderWrapper = document.querySelector('.pre-loader');
window.addEventListener('load',() => {
    preloaderWrapper.classList.remove('flex');
    preloaderWrapper.classList.add('hidden');
})
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    login();
});