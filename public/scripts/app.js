const $ = document;
// darkmode
const theme = () =>{
    const toggleThemeBtn = $.querySelector('#theme')

toggleThemeBtn.addEventListener('click',()=>{
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
    else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme','dark')
    }
})
}
// /////
const navigation = () => {
    // open/close nav
    const navOpenBtn = $.getElementById('menu-icon');
    const navElem = $.getElementById('nav');
    const overlayElem = $.querySelector('.overlay');
    const navCloseBtn = $.getElementById('close-icon');
    function openNav(){
        overlayElem.classList.remove('hidden');
        overlayElem.classList.add('block');
        navElem.classList.remove('-right-[67%]');
        navElem.classList.add('nav--acvtive');
    };
    function closeNav(){
        overlayElem.classList.add('hidden');
        overlayElem.classList.remove('block');
        navElem.classList.add('-right-[67%]');
        navElem.classList.remove('nav--acvtive');
        
    };
    navOpenBtn.addEventListener('click',openNav);
    navCloseBtn.addEventListener('click',closeNav);
    overlayElem.addEventListener('click',closeNav);
};
export {navigation,theme};