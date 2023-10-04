import { getMe } from "./funcs/auth.js";
import { icons,header,nav, footer,path,sendUserMessage } from "./funcs/utitlities.js";
const mainElem = document.querySelector('main');
let pathText = 'تماس با ما';
window.addEventListener('load',()=>{
    icons();
    header();
    nav();
    path(pathText);
    footer();
    getMe();
});
const connectionForm = document.getElementById('connection-form');
connectionForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendUserMessage();
})