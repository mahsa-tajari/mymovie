import { icons,header,nav,addDataToMoviePage, footer,path } from "./funcs/utitlities.js";
const mainElem = document.querySelector('main');
let pathText = 'اطلاعات فیلم';
window.addEventListener('load',()=>{
    icons();
    header();
    nav();
    addDataToMoviePage(mainElem);
    path(pathText);
    footer();
})