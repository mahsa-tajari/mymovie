import { pagination,getFromLocalStorage, paginationCalc,path,createPath } from "./funcs/utitlities.js";
import { searchByGenres } from "./funcs/search.js";
const pathText = 'ژانر';
const pathName = getFromLocalStorage('genreName');
window.addEventListener('load',async()=>{
    document.querySelector('title').innerHTML = `مای مووی | ${pathName}`;
    const genreId = getFromLocalStorage('genreId');
    const movies = await searchByGenres(genreId);
    paginationCalc(movies.metadata.total_count,10);
    pagination(1);
    path(pathText);
    createPath(pathName);
});
const pageBtns = document.querySelectorAll('.page-btn');
pageBtns.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        if(event.target.id === 'next-page') nextPage();
        else previousPage();
    })
});
const pageNumbers = document.querySelector('.pagination-numbers');
pageNumbers.addEventListener('click',(event)=>{
    pageNumbers.innerHTML ='';
    pagination(+event.target.id);
});