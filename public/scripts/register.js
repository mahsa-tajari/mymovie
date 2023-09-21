import { register} from "./funcs/auth.js";

const registerBtn = document.getElementById('register-btn');


const usernameElem = document.getElementById('username');
const emailElem = document.getElementById('email');
const passwordElem = document.getElementById('password');

const preloaderWrapper = document.querySelector('.pre-loader');
window.addEventListener('load',() => {
    preloaderWrapper.classList.remove('flex');
    preloaderWrapper.classList.add('hidden');
})
//form validation 
function formValidation(){
    let validateResult = null;

    const emailRegex = new RegExp('^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-]+@gmail\.com$');
    const emailTestResult = emailRegex.test(emailElem.value);
    if(passwordElem.value.trim().length < 6 || !emailTestResult || usernameElem.value.trim().length < 3) validateResult = false;
    else if(passwordElem.value.trim().length >= 6 && emailTestResult && usernameElem.value.trim().length >= 3) validateResult = true;
    if(validateResult === false) registerBtn.disabled = true;
    if(validateResult === true) registerBtn.disabled = false;
};

usernameElem.addEventListener('keyup',formValidation)
emailElem.addEventListener('keyup',formValidation)
passwordElem.addEventListener('keyup',formValidation)

registerBtn.addEventListener('click',async(event)=>{
    event.preventDefault();
    register();
})