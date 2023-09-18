import { paginationCalc,pagination,nextPage,previousPage } from "./funcs/utitlities.js";
window.addEventListener('load',()=>{
    paginationCalc(250,10)
    pagination(1);
})
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
})