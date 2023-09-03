import { searchMovie,searchMovieByID,searchGenres,searchByGenres } from "./search.js"
import { navigation,theme } from "../app.js";

const icons = () =>{
  const iconsElem = document.querySelector('.icons-wrapper');
  const icons = `<symbol id="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
</symbol>
<symbol id="bors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
</symbol>
<symbol id="moon" xmlns="http://www.w3.org/2000/svg" fill="rgb(234,179,8)" viewBox="0 0 24 24" stroke-width="2" stroke="outline-none">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
</symbol>
<symbol id="sun" xmlns="http://www.w3.org/2000/svg" fill="rgb(202,138,4)" viewBox="0 0 24 24" stroke-width="2" stroke="rgb(202,138,4)">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
</symbol>
<symbol id="add-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g xmlns="http://www.w3.org/2000/svg"><path d="M169.739 135c0-51.123 33.362-94.446 79.5-109.407a114.916 114.916 0 00-35.5-5.593c-63.513 0-115 51.487-115 115s51.487 115 115 115c12.39 0 24.318-1.968 35.5-5.593-46.138-14.961-79.5-58.284-79.5-109.407z"></path><path d="M49.5 512c-11.046 0-20-8.954-20-20 0-100.355 81.645-182 182-182h30c20.537 0 40.703 3.4 59.937 10.105 10.43 3.636 15.938 15.04 12.301 25.469-3.636 10.43-15.04 15.938-25.469 12.301C273.278 352.65 257.543 350 241.5 350h-30c-78.299 0-142 63.701-142 142 0 11.046-8.954 20-20 20zm310-377c0-74.439-60.561-135-135-135s-135 60.561-135 135 60.561 135 135 135 135-60.561 135-135zm-40 0c0 52.383-42.617 95-95 95s-95-42.617-95-95 42.617-95 95-95 95 42.617 95 95z" fill="#4B5563"></path><path d="M462.5 392h-60v-60c0-11.046-8.954-20-20-20s-20 8.954-20 20v60h-60c-11.046 0-20 8.954-20 20s8.954 20 20 20h60v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h60c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill="#eb8307" data-original="#ff5cf3"></path></g>
</symbol>
<symbol id="dark-add-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g xmlns="http://www.w3.org/2000/svg"><path d="M169.739 135c0-51.123 33.362-94.446 79.5-109.407a114.916 114.916 0 00-35.5-5.593c-63.513 0-115 51.487-115 115s51.487 115 115 115c12.39 0 24.318-1.968 35.5-5.593-46.138-14.961-79.5-58.284-79.5-109.407z" fill="#fff"></path><path d="M49.5 512c-11.046 0-20-8.954-20-20 0-100.355 81.645-182 182-182h30c20.537 0 40.703 3.4 59.937 10.105 10.43 3.636 15.938 15.04 12.301 25.469-3.636 10.43-15.04 15.938-25.469 12.301C273.278 352.65 257.543 350 241.5 350h-30c-78.299 0-142 63.701-142 142 0 11.046-8.954 20-20 20zm310-377c0-74.439-60.561-135-135-135s-135 60.561-135 135 60.561 135 135 135 135-60.561 135-135zm-40 0c0 52.383-42.617 95-95 95s-95-42.617-95-95 42.617-95 95-95 95 42.617 95 95z" fill="#fff"></path><path d="M462.5 392h-60v-60c0-11.046-8.954-20-20-20s-20 8.954-20 20v60h-60c-11.046 0-20 8.954-20 20s8.954 20 20 20h60v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h60c11.046 0 20-8.954 20-20s-8.954-20-20-20z" fill="#eb8307" data-original="#ff5cf3"></path></g>
</symbol>
<symbol id="enter" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</symbol>
<symbol id="home" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</symbol>
<symbol id="movie" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
</symbol>
<symbol id="contact" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</symbol>
<symbol id="theatre" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.41 443.41">
 <path d="M112.099 226.069c-15.751 4.637-28.455 10.022-33.983 14.407a8.962 8.962 0 01-5.587
  1.948 9.001 9.001 0 01-5.599-16.052c10.069-7.985 29.437-14.437 40.085-17.571 4.768-1.407 9.771 
  1.323 11.175 6.092a9 9 0 01-6.091 11.176zm121.879 59.266c4.62 23.725.131 45.381-12.981 62.628-11.555 
  15.198-28.949 25.717-48.979 29.617a86.739 86.739 0 01-16.573 1.614c-14.294
   0-28.071-3.638-39.939-10.689-18.625-11.066-30.911-29.457-35.531-53.182l-.09-.465a9 9 0
    015.229-9.946c6.569-2.877 14.041-5.686 22.206-8.349a9.003 9.003 0 017.677.998c31.017
     20.054 58.629 14.676 79.854-15.549a9.002 9.002 0 016.741-3.807c8.564-.595
      16.545-.794 23.72-.593a9 9 0 018.581 7.272l.087.445-.002.006zm-16.648 
      10.216a240.97 240.97 0 00-10.34.354c-15.935 20.994-35.459 31.673-56.695 31.675-13.265.001-27.193-4.163-41.341-12.584a241.974
       241.974 0 00-9.716 3.552c10.232 35.639 42.378 46.613 69.339 41.365 26.964-5.25 52.636-27.48 48.753-64.362zm-46.623-80.895c16.342-1.612 30.14-1.386 36.906.603.848.25 1.702.368 2.543.368a9.002 9.002 0 002.535-17.637c-11.708-3.443-30.256-2.579-43.753-1.246-4.947.487-8.561 4.894-8.073 9.84.489 4.947 4.903 8.561 9.842 8.072zM276.633 99.828a9.003 9.003 0 009.805-8.115 9 9 0 00-8.116-9.805c-16.348-1.541-29.848-4.399-36.111-7.646a8.997 8.997 0 00-12.132 3.849 9 9 0 003.848 12.132c11.408 5.913 31.654 8.544 42.706 9.585zm62.231.041c.283 0 .568-.014.855-.041 13.505-1.272 31.877-3.969 42.709-9.587a9 9 0 10-8.287-15.979c-6.259 3.246-19.758 6.104-36.111 7.646a9 9 0 00.834 17.961zm-48.96 175.585c12.25 62.912-32.318 128.388-105.973 155.686a9.022 9.022 0 01-2.86.557c-1.989.059-3.983.089-5.955.089-75.879 0-138.752-43.317-150.691-104.636L.297 203.244c-2.399-12.318 9.67-23.655 37.983-35.68 22.997-9.767 54.217-18.759 87.911-25.319 33.694-6.561 66.005-9.957 90.988-9.517 30.755.521 46.197 6.502 48.596 18.819l24.129 123.907zm-17.668 3.44l-23.964-123.06c-2.253-1.722-12.124-5.256-36.976-5.137-22.933.153-51.936 3.426-81.664 9.215s-57.84 13.638-79.155 22.101c-23.089 9.168-30.904 16.192-32.347 18.636L42.093 323.71c10.481 53.833 67.971 91.522 136.966 90.032 64.525-24.506 103.659-81.014 93.177-134.848zM399.307 19.675c-24.438-5.191-56.802-8.05-91.129-8.05-34.328 0-66.692 2.858-91.13 8.05-30.089 6.391-44.103 15.213-44.103 27.763v55.21c0 4.971 4.029 9 9 9s9-4.029 9-9V48.3c1.882-2.123 10.895-7.524 35.312-12.11 22.539-4.233 51.633-6.564 81.921-6.564 30.288 0 59.381 2.331 81.921 6.564 24.417 4.586 33.43 9.987 35.312 12.11v125.369c0 50.539-41.096 95.27-102.263 111.308-4.808 1.261-7.684 6.181-6.423 10.988a9.004 9.004 0 008.7 6.72c.755 0 1.523-.096 2.289-.296 33.022-8.659 61.542-25.215 82.476-47.878 21.734-23.529 33.222-51.483 33.222-80.842V47.438c-.002-12.55-14.016-21.372-44.105-27.763zM350.278 229.04c.367 0 .736-.022 1.104-.068 8.523-1.054 16.394-2.383 23.394-3.951a9 9 0 007.032-8.782v-.453c0-23.62-8.223-43.713-23.779-58.105-15.934-14.743-38.334-22.171-61.438-20.366a9 9 0 00-8.274 9.671c.386 4.956 4.71 8.673 9.671 8.274 18.132-1.413 35.554 4.287 47.818 15.634 10.292 9.521 16.344 22.578 17.708 38.046a238.578 238.578 0 01-10.212 1.629c-14.331-12.815-29.478-19.938-45.078-21.183-4.95-.39-9.292 3.302-9.688 8.256a9.001 9.001 0 008.256 9.688c12.517.999 25.048 7.457 37.247 19.196a8.997 8.997 0 006.239 2.514z" fill="#eb8307">
 </path>
 </symbol>
<symbol id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</symbol>
<symbol id="star" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</symbol>
<symbol id="loading" aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</symbol>
<symbol id="trailer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</symbol>
<symbol id="calender" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</symbol>
<symbol id="clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</symbol>
<symbol id="doc" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
</symbol>
<symbol id="person" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</symbol>
<symbol id="earth" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</symbol>
<symbol id="arrow-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</symbol>
<symbol id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 27"> <path d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z" fill-rule="evenodd" fill="rgb(243,244,246)"></path> 
</symbol>
<symbol id="dark_wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 27"> <path d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z" fill-rule="evenodd" fill="#000"></path> 
  </symbol>`
  iconsElem.insertAdjacentHTML('beforeend',icons);
}
const nav = () => {
  const navElem = document.getElementById('nav');
  const navData = `<div id="close-icon" class="flex justify-end ml-4 mt-4 pb-8 cursor-pointer">
  <svg class="w-7 h-7 text-dark-gray dark:text-white hover:text-orange-1 dark:hover:text-orange-1">
    <use href="#close"></use>
  </svg>
</div>
<div class="flex flex-col items-center mb-16 leading-[.75] font-extrabold text-3xl tracking-wider italic">
  <h3 class="font-hayat text-yellow-600">
    <a href="#">مای‌مووی</a>
  </h3>
  <span class="font-lotus tracking-tighter text-xs text-gray-400">مرجع اصلی برترین فیلم‌های تاریخ سینمای جهان</span>
</div>
<div class="child:block child:text-dark-gray dark:child:text-white child:text-lg child:pr-4 child:border-b child:border-b-gray-400/40 dark:child:border-b-dark-gray dark:child-hover:text-orange-1 child:py-2">
  <a href="#">خانه</a>
  <a href="#">فیلم</a>
  <a href="#">هنرمندان</a>
  <a href="#">تماس با ما</a>
</div>`
  navElem.insertAdjacentHTML('beforeend',navData);
  navigation();
}
const header = () => {
  const headerElem = document.getElementById('header');
  const headerData = `<!-- top bar -->
  <div class="container flex flex-col justify-between gap-y-12 pt-4 md:flex-row-reverse bg-dark-lines">
    <!-- logo and theme -->
    <div class="flex items-center justify-between md:flex-row md:gap-x-7">
      <!-- theme -->
      <div id="theme" class="relative w-20 h-9 cursor-pointer flex items-center rounded-3xl bg-gray-300 dark:bg-dark-gray">
        <span class="block absolute left-12 dark:left-1 top-1 transition-all duration-300 bg-white w-7 h-7 rounded-full"></span>
        <div class="w-full flex justify-between px-1">
          <div id="moon-icon" class="flex items-center justify-center rounded-full">
          <svg class="w-7 h-7">
            <use href="#moon"></use>
          </svg>
          </div>
          <div id="sun-icon" class="flex items-center justify-center rounded-full">
          <svg class="w-7 h-7">
            <use href="#sun"></use>
          </svg>
          </div>
        </div>
      </div>
      <!-- logo -->
      <div class="flex flex-col leading-[.75] font-extrabold text-3xl tracking-wider italic">
        <h3 class="font-hayat text-yellow-600">
          <a href="#">مای‌مووی</a>
        </h3>
        <span class="font-lotus tracking-tighter text-xs text-gray-400">مرجع اصلی برترین فیلم‌های تاریخ سینمای جهان</span>
      </div>
    </div>
    <!-- signUp-login btns -->
    <div id="buttons" class="flex justify-center font-medium gap-x-2">
      <a href="signup.html" class="w-28 flex items-center justify-center gap-x-3 py-2 rounded-3xl bg-white dark:bg-dark-gray dark:hover:bg-orange-1">
        <svg class="dark:hidden w-5 h-5">
          <use href="#add-user"></use>
        </svg>
        <svg class="hidden dark:block w-5 h-5">
          <use href="#dark-add-user"></use>
        </svg>
        <span class="text-gray-600 dark:text-white">ثبت‌ نام</span>
      </a>
      <a href="login.html" class="w-28 flex items-center justify-center gap-x-3 py-2 rounded-3xl bg-white dark:bg-dark-gray dark:hover:bg-orange-1">
        <svg class="w-6 h-6 text-gray-600 dark:text-white">
          <use href="#enter"></use>
        </svg>
        <span class="text-gray-600 dark:text-white">ورود</span>
      </a>
    </div>
    <!-- user profile after login -->
    <div id="profile" class="hidden w-full justify-center">
      <div class="flex items-center w-36 py-1 pr-3 gap-x-3 bg-gray-300 rounded-lg">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <img src="./images/user profile/avatar.jpg" alt="user profil" class="w-full h-full">
        </div>
        <div class="flex flex-col">
          <span class="text-gray-700">name</span>
          <span class="text-gray-500 font-hayat text-base">خوش آمدید!</span>
        </div>
    </div>
    </div>
  </div>  
  <!-- searchBar & menu -->
  <div class="flex items-center justify-center gap-x-12 py-1 px-12 bg-white dark:bg-dark-gray shadow-sm tablet:py-5 ">
    <!-- menu icon -->
    <div id="menu-icon" class="bg-gray-300 dark:bg-black p-2 rounded-md cursor-pointer sm:hidden">
      <svg class="w-6 h-6 text-gray-500 dark:text-white">
        <use href="#bors"></use>
      </svg>
    </div>
    <!-- menu -->
    <div class="flex flex-col justify-center items-center gap-x-10 w-10/12 sm:gap-y-4 tablet:flex-row tablet:w-full lg:gap-x-20 xl:gap-x-28 2xl:justify-between">
      <ul class="hidden justify-between w-full sm:flex tablet:w-1/2">
        <li>
          <a href="#" class="flex items-center gap-2 group">
            <div class="w-8 h-8 flex items-center justify-center">
              <svg class="w-7 h-7 text-orange-1  transition-all group-hover:w-8 group-hover:h-8">
                <use href="#home"></use>
              </svg>
            </div>
            <div class="flex flex-col leading-5">
              <span class="text-gray-600 dark:text-white">خانه</span>
              <span class="text-orange-1 font-sans font-thin">HOME</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 group">
            <div class="w-8 h-8 flex items-center justify-center">
              <svg class="w-7 h-7 text-orange-1  transition-all group-hover:w-8 group-hover:h-8">
                <use href="#movie"></use>
              </svg>
            </div>
            <div class="flex flex-col leading-5">
              <span class="text-gray-600 dark:text-white">دانلود فیلم</span>
              <span class="text-orange-1 font-sans font-thin">MOVIES</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 group">
            <div class="w-8 h-8 flex items-center justify-center">
              <svg class="w-7 h-7 transition-all group-hover:w-8 group-hover:h-8">
                <use href="#theatre"></use>
              </svg>
            </div>
            <div class="flex flex-col leading-5">
              <span class="text-gray-600 dark:text-white">هنرمندان</span>
              <span class="text-orange-1 font-sans font-thin">ARTISTS</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 group">
            <div class="w-8 h-8 flex items-center justify-center">
              <svg class="w-7 h-7 text-orange-1  transition-all group-hover:w-8 group-hover:h-8">
                <use href="#contact"></use>
              </svg>
            </div>
            <div class="flex flex-col leading-5">
              <span class="text-gray-600 dark:text-white">تماس با ما</span>
              <span class="text-orange-1 font-sans font-thin">CONTACT</span>
            </div>
          </a>
        </li>
      </ul>
      <!-- search -->
      <div class="relative w-full tablet:w-80">
        <input id="search" type="text" placeholder="جستجو کنید ..." class="w-full outline-none py-2.5 pr-3 rounded-3xl text-sm text-gray-500 bg-gray-300 dark:bg-black placeholder-gray-500 dark:placeholder-slate-200">
        <svg class="absolute w-5 h-5 text-orange-1 top-2.5 left-2.5">
          <use href="#search-icon"></use>
        </svg>
        <!-- result searching box -->
        <div id="result-wrapper" class="hidden max-w-xs z-50 flex-col justify-center border-t border-gray-400 divide-y divide-gray-400 px-4 py-2 absolute top-12 left-0 rounded-lg text-dark-gray bg-white dark:text-white dark:bg-dark-gray">
        </div>
      </div>
    </div>
  </div>`;
  headerElem.insertAdjacentHTML('beforeend',headerData);
  theme();
  const inputElem = document.getElementById('search');
    inputElem.addEventListener('keyup',async (event)=>{
      console.log(event);
      let inputValue = event.target.value.trim();
      renderSearchResult(inputValue);
    });
}
let resultWrapperElem  = null;
const renderSearchResult = async (inputSearchValue) => {
  resultWrapperElem = document.getElementById('result-wrapper');
  if(inputSearchValue.length >= 3){
    let movies = await searchMovie(inputSearchValue);
    let moviesArray = Object.entries(movies.data);
    // show the result box
    resultWrapperElem.classList.remove('hidden');
    resultWrapperElem.classList.add('flex');
    if(moviesArray.length > 0){
      addDataToSearchResultBox(moviesArray);
      resultWrapperElem.insertAdjacentHTML('beforeend',`<span class="text-center py-2"><a href="#">مشاهده همه نتایج</a></span>`);
    }
    else{
      resultWrapperElem.innerHTML = 'متاسفانه نتیجه‌ای برای این جستجو یافت نشد!';
    };
  }
  else if(!inputSearchValue.length){
    resultWrapperElem.classList.add('hidden');
    resultWrapperElem.classList.remove('flex');
  };
  const movies = document.querySelectorAll('.movie');
  movies.forEach(movie => {
    movie.addEventListener('click',() => goToMoviePage(movie));
  });
}
const addDataToSearchResultBox = (moviesArray) =>{
    let totalNumberOfAddedMovies = 0;
    resultWrapperElem.innerHTML = "";
    moviesArray.forEach(movie => {
        totalNumberOfAddedMovies++;
        if(totalNumberOfAddedMovies > 0){
            if(totalNumberOfAddedMovies > 4) return
            else{
                resultWrapperElem.insertAdjacentHTML('beforeend',
                `<div id="${movie[1].id}" class="movie py-3 cursor-pointer">
                    <div class="flex justify-end gap-x-3">
                        <div class="flex flex-col justify-center items-end overflow-hidden">
                          <span class="whitespace-nowrap">${movie[1].title}</span>
                          <span class="text-xs italic">${movie[1].genres}</span>
                        </div>
                        <div class="w-12 h-14 rounded-md overflow-hidden">
                          <img class="h-full w-full" src="${movie[1].poster}" alt="${movie[1].title}">
                        </div>
                        <div class="flex flex-col">
                            <svg class="w-6 h-6 text-orange-1">
                              <use href="#star"></use>
                            </svg>
                            <span>${movie[1].imdb_rating}</span>
                        </div>
                    </div>
                </div>`)
            }
        }
    })
}

const Toast = Swal.mixin({
    position:'top-end',
    toast:true,
    // timer:2500,
    confirmButtonColor:'#eb8307' 
})
const showSwall = (title,icon,confirmButtonText,callback)=>{
    Toast.fire({
        title:title,
        icon:icon,
        confirmButtonText:confirmButtonText,
    }).then(result => callback(result))
}

const saveIntoLocalStorage = (key,value) =>{
    return localStorage.setItem(key,value)
}

const getToken = () =>{
    const userInfos = localStorage.getItem("accessToken")
    return userInfos ? userInfos : null
}

function formatNumber(num, precision = 2) {
  const map = [
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];
  num = +num.replace(/\,/g,'');
  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }
}

const translate = async (data) =>{
  const myToken = '199909:64dca52456731';
  const translateReq = await fetch(`https://one-api.ir/translate/?token=${myToken}&action=google&lang=fa&q=${data}`);
  const translatedData = await translateReq.json();
  return translatedData.result;
}

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const image = entry.target;
      const imageDataSrc = image.dataset.src;
      image.src = imageDataSrc;
      image.classList.remove('lazy');
      observer.unobserve(image);
    }
  }),
  { threshold: .2 }
});
// Introduction every movie
const goToMoviePage = async (movie) =>{
  const movieDetail = await searchMovieByID(movie.id); 
  addMovieDetail(movieDetail);
}
const addMovieDetail = (details) =>{
  location.href = 'movie.html';
}
const adddataToMoviePage = (element) => {
  console.log(element);
  console.log();
}

const slider = async() => {
  let moviesArray = [];
  const sliderItemsID = [4,10,14,22,27]; //movies id that we want to show on slider
  // get movies of api
  for(let index = 0 ; index < sliderItemsID.length ; index++){
    let movie = await searchMovieByID(sliderItemsID[index]);
    moviesArray.push(movie);
  };
  //add images to DOM;
  const sliderWrapper = document.getElementById('slider');
  const deskSlider = document.getElementById('desktop-slider')  
  const rateElem = document.getElementById('movie-rate');
  const movieTitleElem = document.getElementById('movie-title');    
  const imdbLink = document.querySelector('.imdb-link');  

  moviesArray.forEach(movie => {
      deskSlider.insertAdjacentHTML('beforeend',
        `<img class="deskSlide w-full rounded-md hidden" src="${movie.images[1]}">`);
      sliderWrapper.insertAdjacentHTML('beforeend',
        `<img class="slide w-96 rounded-lg border-2 border-white" src="${movie.poster}">`
      )
  });
  const movieDetailWrapper = document.querySelector('.details');
  // imges loaded, show details
  movieDetailWrapper.classList.remove('hidden');
  movieDetailWrapper.classList.add('block');
  // images are loaded and loading must be hidden
  document.querySelector('.loader').style.display = 'none';
  function changeImage(index){
    let slideElem = document.querySelectorAll('.slide');
    let deskSlideElem = document.querySelectorAll('.deskSlide');
    if(index < 0) slideIndex = moviesArray.length-1;
    if(index > moviesArray.length -1) slideIndex = 0;
    // hide all slides
    for (let i = 0; i <= moviesArray.length -1; i++) {
      slideElem[i].classList.add('hidden');
      deskSlideElem[i].classList.add('hidden');
    };
    //show current slide
    slideElem[slideIndex].classList.remove('hidden');
    deskSlideElem[slideIndex].classList.remove('hidden');
    slideElem[slideIndex].classList.add('block');
    deskSlideElem[slideIndex].classList.add('block');
    // set details value
    rateElem.innerHTML = moviesArray[slideIndex].imdb_rating;
    movieTitleElem.innerHTML = moviesArray[slideIndex].title;
    imdbLink.href = `https://www.imdb.com/title/${moviesArray[slideIndex].imdb_id}`;
  }
  let slideIndex = 0;
  changeImage(slideIndex);
  // change imgs automaticly
  setInterval(() => {
        slideIndex++;
        changeImage(slideIndex);
  }, 8000);

  const sliderBtns = document.querySelector('.btns');
  // show btns after loading images
  sliderBtns.classList.remove('hidden');
  sliderBtns.classList.add('flex');
  sliderBtns.addEventListener('click',(event)=>{
    event.preventDefault();
    
    if(event.target.id == 'next-slide'){
            changeImage(++slideIndex);
    }
    if(event.target.id == 'prev-slide'){
            changeImage(--slideIndex);
    }
  });
};
// pagination
const paginationWrapper = document.querySelector('.pagination-numbers');
let pageIndex = 1;
const totalMovies = 250;
const singlePageMoviesCount = 10; //تعداد فیلم نمایشی در هر صفحه
const pageCount = Math.ceil(totalMovies/singlePageMoviesCount);
const nextBtn = document.getElementById('next-page');
const prevBtn = document.getElementById('previous-page');
let baseArray = null;
const pagination = (index) =>{
  if(index <= 3){
    baseArray = [1,2,3,4,'...',pageCount];
    loopOfAddDataToPagination(baseArray);
    const spaceElems = document.querySelectorAll('.space');
    activePage(paginationWrapper.children[index-1].children[0]);
    allMovies(index);
  }
  if(index > 3 && index < pageCount) {
      if(index === pageCount-1){
        console.log('first if');
        baseArray = [1,'...',index-2,index-1,index,pageCount];
      }
      else{
        console.log(index+1);
        baseArray = [1,'...',index-2,index-1,index,index+1,'...',pageCount];
      }
      const isEqual = (number)=> number == index; //find active page number
      loopOfAddDataToPagination(baseArray);
      let activePageNum = baseArray.findIndex(isEqual);
      activePage(paginationWrapper.children[activePageNum].firstElementChild);
      allMovies(index);
  }
  if(index >= pageCount){
    console.log(pageCount);
      baseArray = [1,'...',index-3,pageCount-2,pageCount-1,pageCount];
      loopOfAddDataToPagination(baseArray);
      activePage(paginationWrapper.lastElementChild.firstElementChild);
  }
  pageIndex = index;
}
function loopOfAddDataToPagination (array) {
  for (let index = 0; index < array.length; index++) {
    addDataToPagination(array[index]);
  }
}
const addDataToPagination = (data) =>{
  paginationWrapper.insertAdjacentHTML('beforeend',`
    <button id="${data}" class="relative group w-7 h-7 flex justify-center items-center transition-opacity">
      <div class="absolute top-0 w-full h-full block -z-10 rounded-md group-hover:bg-gray-300 dark:group-hover:bg-orange-1 rotate-45"></div>
      ${data}
    </button>
  `)
  if(data == '...') unclickableElem();
}
const unclickableElem = () => {
  const spaceElem = paginationWrapper.lastElementChild;
  const bgSpaceElem = spaceElem.firstElementChild;
  spaceElem.disabled = true;
  spaceElem.classList.add('cursor-text');
  bgSpaceElem.classList.remove('group-hover:bg-gray-300','dark:group-hover:bg-orange-1');
}
const activePage = (activePage) =>{
  activePage.classList.add('bg-gray-300');
  activePage.classList.add('dark:bg-orange-1');
  activePage.classList.remove('group-hover:bg-gray-300');
  activePage.classList.remove('dark:group-hover:bg-orange-1');
  if(activePage.parentElement == paginationWrapper.firstElementChild) disableBtn(prevBtn);
  else enableBtn(prevBtn); 
  if(activePage.parentElement == paginationWrapper.children[baseArray.length-1]) disableBtn(nextBtn);
  else enableBtn(nextBtn);
}
const disableBtn = (btn)=> {
  btn.classList.remove('opacity-full');
  btn.classList.add('opacity-0');
  btn.classList.add('flex');
}
const enableBtn = (btn) => {
  btn.classList.remove('opacity-0');
  btn.classList.remove('hidden');
  btn.classList.add('opacity-full');
  btn.classList.add('flex');
}
const nextPage = () => {
  paginationWrapper.innerHTML = '';
  pageIndex++;
  pagination(pageIndex);
}
const previousPage = () => {
  --pageIndex;
  paginationWrapper.innerHTML = '';
  pagination(pageIndex);
}
const allMovies = async(index) => {
  const allMoviesWrapper = document.querySelector('.movie-boxes-wrapper');
  allMoviesWrapper.innerHTML ='';
// loading movies to DOM;
for(let i = (index*10)-9 ; i<= index*10 ; i++){
  let movie = await searchMovieByID(i);
  movie.imdb_votes = formatNumber(movie.imdb_votes,1);
  movie.runtime = movie.runtime.replace('min','دقیقه');
  movie.plot = await translate(movie.plot);
  allMoviesWrapper.insertAdjacentHTML('beforeend',`
     <div class="bg-white space-y-4 w-full mb-10 rounded-lg relative dark:bg-dark-gray sm:flex sm:px-4 sm:text-sm">
     <!-- img/trailer -->
       <div class="flex flex-col items-center rounded-md py-2 gap-y-4 justify-center">
         <div class="flex flex-col items-center space-y-4">
           <div class="flex justify-center w-11/12 -mt-4 md:w-44">
            <img class="lazy w-full rounded-md" data-src="${movie.poster}" alt="${movie.title}">
           </div>
           <a href="#" class="flex justify-center py-2 rounded-md bg-gray-300 text-dark-gray w-11/12 hover:text-orange-1 transition-colors dark:bg-black/30 dark:text-white dark:hover:text-orange-1">
            <span>مشاهده تریلر</span>
           </a>
         </div>
       </div>
     <!--rating/title  -->
     <div class="flex flex-col items-center gap-y-4 sm:flex-row-reverse sm:items-start">
       <!-- rate -->
       <div class="flex flex-col items-center gap-y-1">
         <span class="text-gray-400"><span id="movie-rate" class="text-xl text-orange-1 tracking-tighter">${movie.imdb_rating}</span>/10</span>
         <span class="flex flex-row-reverse font-sans whitespace-nowrap text-dark-gray pt-2 border-t dark:border-gray-400 dark:text-white">${movie.imdb_votes} Votes</span>
         <a href="https://www.imdb.com/title/${movie.imdb_id}/" target="_blank" class="w-14 flex justify-center rounded-md mt-2 font-semibold text-white bg-orange-1">IMDB</a>
       </div>
       <!-- more details -->
       <div class="px-5 pb-16 space-y-3 text-dark-gray child:flex child:gap-x-1 dark:text-white">
       <!-- title -->
       <div class="w-full flex justify-center cursor-pointer"><h1 dir="ltr" class="text-dark-gray text-lg dark:text-white">${movie.title} <span>${movie.year}</span></h1></div>
         <div>
           <svg class="w-6 h-6 text-orange-1">
             <use href="#calender"></use>
           </svg>
           <span>زمان انتشار: </span>
           <span>${movie.released}</span>
         </div>
         <div>
           <svg class="w-6 h-6 text-orange-1">
             <use href="#clock"></use>
           </svg>
           <span>زمان: </span>
           <span>${movie.runtime}</span>
         </div>
         <div>
           <svg class="w-6 h-6 text-orange-1">
             <use href="#doc"></use>
           </svg>
           <span>ژانر:  </span>
           <span>${movie.genres}</span>
         </div>
         <div>
           <svg class="w-6 h-6 text-orange-1">
             <use href="#person"></use>
           </svg>
           <span>کارگردان:  </span>
           <span dir="ltr">${movie.director}</span>
         </div>
         <div>
           <svg class="w-6 h-6 text-orange-1">
             <use href="#theatre"></use>
           </svg>
           <span>ستارگان:  </span>
           <span dir="ltr" class="text-xs">${movie.actors}</span>
         </div>
         <div>
           <svg class="w-6 h-6 text-orange-1">
             <use href="#earth"></use>
           </svg>
           <span>محصول کشور:  </span>
           <span>${movie.country}</span>
         </div>
         <div class="flex items-center">
           <span class=" flex items-center justify-center w-6 h-6 p-4 rounded-md text-white bg-green-800">${movie.metascore}</span>
           <span class="flex items-center justify-center w-5 h-5 pb-1 rounded-full border-2 border-yellow-500 bg-dark-gray text-white -rotate-45">m</span>
           <span>امتیاز منتقدین</span>
         </div>
         <div class="flex flex-col">
           <p>${movie.plot}</p>
         </div>
       </div>
       <div class="flex flex-col items-center justify-center w-8 h-8 space-y-2 absolute z-20 right-[calc(50%_-_.9rem)] bottom-3">
         <a href="#" class="text-orange-1">ادامه</a>
         <a href="#" class="w-7 h-7 rounded-md relative">
           <div class="w-7 h-7 rounded-md bg-orange-1 rotate-45"></div>
           <svg class="w-7 h-7 text-white absolute top-0">
             <use href="#arrow-right"></use>
           </svg>
         </a>
       </div>
      <!-- wave -->
      <div class="absolute right-[calc(50%_-_4.5rem)] bottom-0">
         <svg class="w-36 h-9">
           <use href="#wave" class="dark:hidden"></use>
           <use href="#dark_wave" class="hidden dark:block"></use>
         </svg>
       </div>
     </div>
   </div>`);
};
// lazy load
let images = document.querySelectorAll('.lazy');
images.forEach(img => {
  observer.observe(img);
});
};

const aside = async() => {
  const genresWrapperElem = document.querySelector('.genres');
  const allGenres = await searchGenres();
  // all genres
  allGenres.forEach(async genre => {
    let countOfMovie = await countMoviesOfGenres(genre);
    genre.name = await translate(genre.name);
    genresWrapperElem.insertAdjacentHTML('beforeend',`
      <div class="flex justify-between text-dark-gray dark:text-gray-300">
        <a href="#" class="flex gap-x-1">
          <span>></span>
          <span class="hover:text-orange-1
          dark:hover:text-orange-1">${genre.name}</span>
        </a>
        <span>(${countOfMovie})</span>
      </div>`)
  });

  // برترین ها
  let categories = [
    {
      wrapper:'history',
      genreId : 5,
    },
    {
      wrapper:'sci-fi',
      genreId : 10,
    },
    {
      wrapper:'mystery',
      genreId : 11,
    },
    {
      wrapper:'sport',
      genreId : 21,
    },
    {
      wrapper:'family',
      genreId: 13,
    },
    {
      wrapper:'horror',
      genreId: 17,
    },
    {
      wrapper:'animation',
      genreId: 15,
    },
    {
      wrapper:'dramma',
      genreId: 2,
    },
    {
      wrapper:'adventure',
      genreId: 6,
    }
  ];

  let itemsProceed = 0;
  categories.forEach(async category => {
    const wrapper = document.querySelector(`.${category.wrapper}`);
    const data = await searchByGenres(category.genreId);
    addDataToAside(wrapper,data);
    itemsProceed++;
    if(itemsProceed === categories.length){
      asideSliderManage();
    }
  });
};

function addDataToAside(wrapper,data) {
  let id = 0;
  for(let i = 0; i < 5; i++ ){
    wrapper.insertAdjacentHTML('beforeend',`
      <div id="${id++}" class="hidden w-full transition-opacity flex-col space-y-2">
        <div class="flex relative rounded-lg overflow-hidden">
          <img src="${data.data[i].poster}"</img>
          <div class="asideBtns absolute top-1/2 flex justify-between w-full z-20 child:cursor-pointer text-white child:text-sm child:w-7 child:h-7 child:flex child:justify-center child:items-center child:rounded-full child:bg-dark-gray/50">
            <span class="prev"><</span>
            <span class="next">></span>
          </div>
        </div>
        <div class="flex w-full justify-center"><a href="#" class="text-dark-gray dark:text-gray-300 hover:text-orange-1 dark:hover:text-orange-1">${data.data[i].title}</a></div>
      </div>
    `);
  };
  // show first image
  const firstSliderImg = wrapper.children[0];
  firstSliderImg.classList.remove('hidden');
  firstSliderImg.classList.add('slider--active');
}; 

function asideSliderManage(){
  const asideSliderBtns = document.querySelectorAll('.asideBtns');
  asideSliderBtns.forEach(btn => {
    btn.addEventListener('click',(event)=>{
      let currentWrapper = event.target.offsetParent.offsetParent.parentElement.parentElement;
      let currentWrapperChildren = Array.from(currentWrapper.children);
      let activeSlide = currentWrapperChildren.find(findActiveSlider);
      asideSlider(currentWrapper,activeSlide.id,event.target);
    })
  });
};

function findActiveSlider(elem){
  return elem.classList.contains('slider--active');
};

function asideSlider(wrapper,index,target){
  wrapper.children[index].classList.remove('slider--active');
  wrapper.children[index].classList.add('hidden');
  if(target.classList =='next'){
    if(index == 4) index = 0;
    else index++;
  };
  if(target.classList == 'prev') {
    if(index == 0) index = 4;
    else index--;
  };
  wrapper.children[index].classList.remove('hidden');
  wrapper.children[index].classList.add('slider--active');
};

async function countMoviesOfGenres(genre){
  let moviesOfGenre = await searchByGenres(genre.id);
  let countOfGenre = moviesOfGenre.data.length;
  return countOfGenre;
};



export{icons,header,nav,adddataToMoviePage,showSwall,saveIntoLocalStorage,getToken,renderSearchResult,slider,pagination,nextPage,previousPage,aside};