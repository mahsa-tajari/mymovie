import { getMe } from "./funcs/auth.js";
import { icons,header,nav,addDataToMoviePage, footer,path } from "./funcs/utitlities.js";
const mainElem = document.querySelector('main');
let pathText = 'اطلاعات فیلم';
    const preloaderWrapper = document.querySelector('.pre-loader');
window.addEventListener('load',()=>{
    preloaderWrapper.classList.remove('flex');
    preloaderWrapper.classList.add('hidden'); 
    icons();
    header();
    nav();
    addDataToMoviePage(mainElem);
    path(pathText);
    footer();
    getMe();
})