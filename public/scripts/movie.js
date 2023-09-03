import { icons,header,nav,adddataToMoviePage } from "./funcs/utitlities.js";
const mainElem = document.querySelector('main');
window.addEventListener('load',()=>{
    icons();
    header();
    nav();
    adddataToMoviePage(mainElem);
})