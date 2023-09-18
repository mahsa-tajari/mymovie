import { login,getMe } from "./funcs/auth.js";

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    login();
});