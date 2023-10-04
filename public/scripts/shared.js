import { getMe } from "./funcs/auth.js";
import { icons,aside,nav,header,footer} from "./funcs/utitlities.js";
const preloaderWrapper = document.querySelector('.pre-loader');
window.addEventListener('load',()=>{
    preloaderWrapper.classList.remove('flex');
    preloaderWrapper.classList.add('hidden');
    icons();
    header();
    nav();
    aside();
    footer();
    getMe();
});