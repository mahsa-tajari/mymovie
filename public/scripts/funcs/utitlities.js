import { searchMovie,movies,searchMovieByID,searchGenres,searchByGenres } from "./search.js"
import { navigation,theme } from "../app.js";

const icons = () =>{
  const iconsElem = document.querySelector('.icons-wrapper');
  const icons = `
  <symbol id="location" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </symbol>
  <symbol id="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
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
  </symbol>
  <symbol id="writer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </symbol>
  <symbol id="reward" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="1 -35 512 511" id="telegram"> <path d="M121.453 253.172l63.555 158.887 82.75-82.754 141.535 112.504L512 .5 0 205.98zm-39.933-47.64l244.046-97.946-194.074 117.363zm287.535-89.25l-161.98 148.187-19.485 73.426-36.035-90.086zm-149.852 219.23l9.817-36.996 15.144 12.035zm171.656 53.394L243.473 271.754 465.375 68.746zm0 0"></path> </symbol>
  <symbol viewBox="0 0 48 48" id="github" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#eb8307" stroke="#000000" stroke-width="2.4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;}</style></defs><path class="cls-1" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"></path></g></symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" id="chat"> <g xmlns="http://www.w3.org/2000/svg"> <path d="M48 19.929V41.07A4.93 4.93 0 0143.071 46H22L12 57V46H4.929A4.93 4.93 0 010 41.071V19.93A4.93 4.93 0 014.929 15H43.07A4.93 4.93 0 0148 19.929z" fill="#eb8307" data-original="#0391fd"></path> <path d="M53.071 1H14.929A4.93 4.93 0 0010 5.93V15h33.071A4.93 4.93 0 0148 19.93V32h5.071A4.93 4.93 0 0058 27.07V5.93A4.93 4.93 0 0053.071 1z" data-original="#4362a5"></path> <circle cx="11" cy="31" r="3" fill="#fff" data-original="#ffffff"></circle> <circle cx="24" cy="31" r="3" fill="#fff" data-original="#ffffff"></circle> <circle cx="37" cy="31" r="3" fill="#fff" data-original="#ffffff"></circle> </g>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" id="arrow"> <path fill-rule="evenodd" fill="#EB8307" d="M9.894 5.147L5.007 8.75.119 5.147v3.056l4.888 3.603 4.887-3.603V5.147z"></path> <path fill-rule="evenodd" d="M9.894.665L5.007 4.268.119.665v3.056l4.888 3.603 4.887-3.603V.665z"></path> </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" id="like" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" id="dislike" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" id="reply" fill="#EB8307"> <path d="M149.333 117.333V32L0 181.333l149.333 149.333V243.2C256 243.2 330.667 277.333 384 352c-21.333-106.667-85.333-213.333-234.667-234.667z"></path> </symbol>
  `
  iconsElem.insertAdjacentHTML('beforeend',icons);
};
const nav = () => {
  const navElem = document.getElementById('nav');
  const navData = `
  <div class="flex justify-end ml-4 mt-4 pb-8">
    <svg id="close-icon" class="cursor-pointer w-7 h-7 dark:text-white hover:text-orange-1 dark:hover:text-orange-1">
      <use href="#close"></use>
    </svg>
  </div>
  <div class="flex flex-col items-center mb-16 leading-[.75] font-extrabold text-3xl tracking-wider italic">
    <h3 class="font-hayat text-yellow-600">
      <a href="#">مای‌مووی</a>
    </h3>
    <span class="font-lotus tracking-tighter text-xs text-gray-400">مرجع اصلی برترین فیلم‌های تاریخ سینمای جهان</span>
  </div>
  <ul class="child:block child:cursor-pointer dark:child:text-white child:text-lg child:pr-4 child:border-b child:border-b-gray-400/40 dark:child:border-b-dark-gray dark:child-hover:text-orange-1 child:py-2">
    <li id="1" class="nav--item">خانه</li>
    <li id="2" class="nav--item">فیلم</li>
    <li id="3" class="nav--item">هنرمندان</li>
    <li id="4" class="nav--item">تماس با ما</li>
  </ul>`
  navElem.insertAdjacentHTML('beforeend',navData);
  navigation();
  navRouting();
};
const header = () => {
  const headerElem = document.getElementById('header');
  const headerData = `
  <div class="container flex flex-col justify-between gap-y-12 pt-4 md:flex-row-reverse bg-dark-lines">
    <div class="flex items-center justify-between md:flex-row md:gap-x-7">
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
      <div class="flex flex-col leading-[.75] font-extrabold text-3xl tracking-wider italic">
        <h3 class="font-hayat text-yellow-600">
          <a href="index.html">مای‌مووی</a>
        </h3>
        <span class="font-lotus tracking-tighter text-xs text-gray-400">مرجع اصلی برترین فیلم‌های تاریخ سینمای جهان</span>
      </div>
    </div>
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
    <div id="profile" class="hidden justify-center">
      <div class="flex items-center py-1 px-3 gap-x-3 bg-gray-300 dark:bg-dark-gray rounded-lg">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <img src="./images/user profile/avatar.jpg" alt="user profil" class="w-full h-full">
        </div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <span id="user-name" class="text-gray-700 dark:text-white w-40 truncate"></span>
            <span class="text-gray-500 font-hayat text-lg">خوش آمدید!</span>
          </div>
          <div id="exit-user" title="خروج" class="rotate-180"><svg class="w-6 h-6 cursor-pointer"><use href="#enter"></use></svg></div>
        </div>
    </div>
    </div>
  </div>  
  <div class="flex items-center justify-center gap-x-12 py-1 px-12 bg-white dark:bg-dark-gray shadow-sm tablet:py-5 ">
    <div id="menu-icon" class="bg-gray-300 dark:bg-black p-2 rounded-md cursor-pointer sm:hidden">
      <svg class="w-6 h-6 text-gray-500 dark:text-white">
        <use href="#bors"></use>
      </svg>
    </div>
    <div class="flex flex-col justify-center items-center gap-x-10 w-10/12 sm:gap-y-4 tablet:flex-row tablet:w-full lg:gap-x-20 xl:gap-x-28 2xl:justify-between">
      <ul class="hidden justify-between child:flex child:items-center child:gap-2 child:cursor-pointer w-full sm:flex tablet:w-1/2">
        <li id="1" class="group nav--item">
          <div class="w-8 h-8 flex items-center justify-center">
            <svg class="w-7 h-7 text-orange-1  transition-all group-hover:w-8 group-hover:h-8">
              <use href="#home"></use>
            </svg>
          </div>
          <div class="flex flex-col leading-5">
            <span class="text-gray-600 dark:text-white">خانه</span>
            <span class="text-orange-1 font-roboto-light font-light">HOME</span>
          </div>
        </li>
        <li id="2" class="group nav--item">
          <div class="w-8 h-8 flex items-center justify-center">
            <svg class="w-7 h-7 text-orange-1 transition-all group-hover:w-8 group-hover:h-8">
              <use href="#movie"></use>
            </svg>
          </div>
          <div class="flex flex-col leading-5">
            <span class="text-gray-600 dark:text-white">دانلود فیلم</span>
            <span class="text-orange-1 font-roboto-light text-sm">MOVIES</span>
          </div>
        </li>
        <li id="3" class="group nav--item">
          <div class="w-8 h-8 flex items-center justify-center">
            <svg class="w-7 h-7 transition-all group-hover:w-8 group-hover:h-8">
              <use href="#theatre"></use>
            </svg>
          </div>
          <div class="flex flex-col leading-5">
            <span class="text-gray-600 dark:text-white">هنرمندان</span>
            <span class="text-orange-1 font-roboto-light text-sm">ARTISTS</span>
          </div>
        </li>
        <li id="4" class="group nav--item">
          <div class="w-8 h-8 flex items-center justify-center">
            <svg class="w-7 h-7 text-orange-1  transition-all group-hover:w-8 group-hover:h-8">
              <use href="#contact"></use>
            </svg>
          </div>
          <div class="flex flex-col leading-5">
            <span class="text-gray-600 dark:text-white">تماس با ما</span>
            <span class="text-orange-1 font-roboto-light text-sm">CONTACT</span>
          </div>
        </li>
      </ul>
      <div class="relative w-full tablet:w-80">
        <input id="search" type="text" placeholder="جستجو کنید ..." class="w-full outline-none py-2.5 pr-3 rounded-3xl text-sm text-gray-500 bg-gray-300 dark:bg-black placeholder-gray-500 dark:placeholder-slate-200">
        <svg class="search-icon absolute w-5 h-5 text-orange-1 top-2.5 left-2.5 cursor-pointer">
          <use href="#search-icon"></use>
        </svg>
        <div id="result-wrapper" class="hidden max-w-xs z-50 flex-col justify-center border-t border-gray-400 divide-y divide-gray-400 px-4 py-2 absolute top-12 left-0 rounded-lg bg-white dark:text-white dark:bg-dark-gray">
        </div>
      </div>
    </div>
  </div>`;
  headerElem.insertAdjacentHTML('beforeend',headerData);
  theme();
  const inputElem = document.getElementById('search');
  inputElem.addEventListener('keyup',async (event)=>{
    let inputValue = event.target.value.trim();
    renderSearchResult(inputValue);
    if(event.keyCode === 13) routing('searchedName',inputValue,'allResult.html');
  });
  const searchIcon = document.querySelector('.search-icon');
  searchIcon.addEventListener('click',() => {
    let inputValue = inputElem.value;
      routing('searchedName',inputValue,'allResult.html');
  });
  // exit user
  const exitElm = document.getElementById('exit-user');
  exitElm.addEventListener('click',exitUserFunc);
};
const exitUserFunc = () => {
  exitSwall('خروج از حساب کاربری','آیا مطمئن هستید که می‌خواهید خارج شوید؟','بله','انصراف',()=>{
  })
};
function deleteFromLocalStorage(key) {
  localStorage.removeItem(key);
}
const path = (string) =>{
  const mainElm = document.getElementById('main');
  const data = `
  <div class="w-full px-2 mb md:pr-20 flex items-center text-sm gap-x-2">
    <svg class="text-orange-1 w-5 h-5"><use href="#location"></use></svg>
    <a href = "index.html" class="home whitespace-nowrap ">مای مویی</a>
    <span>&gt</span>
    <span class="flex gap-x-2">${string}<span dir="ltr" class="path"></span></span>
  </div>`
  mainElm.insertAdjacentHTML('afterbegin',data);
};
const footer = ()=>{
  const footerElem = document.getElementById('footer');
  const data = `
  <div class="flex flex-col items-center p-4 gap-y-8 dark:text-white bg-gray-300 dark:bg-dark-gray sm:flex-row sm:gap-x-12 sm:items-start sm:justify-center md:gap-x-[20%]">
    <div class=" flex flex-col gap-y-4 child:flex [&>*:not(:first-child)]:bg-gray-200 [&>*:not(:first-child)]:rounded-md [&>*:not(:first-child)]:px-2 [&>*:not(:first-child)]:py-2 dark:[&>*:not(:first-child)]:text-dark-gray">
      <div class="w-ful justify-center">
        <h6>همراه ما باشید!</h6>
      </div>
      <div class="divide-x-2 divide-gray-400 child:px-2" dir="ltr">
        <div>  
          <svg class="w-6 h-6">
            <use href="#telegram"></use>
          </svg>
        </div>
        <a href="https://t.me/khodemahsatjr" class="block hover:text-orange-1 dark:hover:text-orange-1"><span>khodemahsatjr</span></a>
      </div>
      <div class="divide-x-2 divide-gray-400 child:px-2" dir="ltr">
      <div>
        <svg class="w-6 h-6">
          <use href="#github"></use>
        </svg>
      </div> 
        <a href="https://github.com/mahsa-tajari/" class="block hover:text-orange-1 dark:hover:text-orange-1"><span>Mahsa-tajari</span></a>
      </div>
    </div>
    <div>
      <P class="flex flex-col gap-x-2 sm:gap-y-4 child:text-orange-1 md:w-96">
      <span>
        درباره مای مووی   
      </span>
      وبسایت مای فیلم (مای مووی) بهترین مرجع برای مشاهده اطلاعات کامل 250 فیلم برتر IMDB می‌باشد.
      می‌توانید تمام اطلاعات مربوط به فیلم موردنظر خود را با جستجو در این وب سایت مشاهده کنید.
      </p>
    </div>
  </div>
  <div class="w-full flex justify-center gap-x-2 bg-white py-1 dark:bg-black"> توسعه داده‌ شده با 💖 توسط <a href="https://github.com/mahsa-tajari/" class="hover:text-orange-1 dark:hover:text-orange-1">Mahsa Tajari</a></div>
  `
  footerElem.insertAdjacentHTML('beforeend',data);
};
const navRouting = ()=> {
  const menuliItem = document.querySelectorAll('.nav--item');
  menuliItem.forEach(item => {
    item.addEventListener('click',(event)=>{
      const itemId = event.currentTarget.id;
      switch (itemId) {
        case '1':{
          location.href = 'index.html';
          break;
        };
        case '2':{
          location.href = 'repair.html';
          break;
        };
        case '3':{
          location.href = 'repair.html';
          break;
        };
        case '4':{
          location.href = 'connection.html';
          break;
        };
      }
    })
  });
};
let resultWrapperElem  = null;
const renderSearchResult = async (inputSearchValue) => {
  let searchedMovies = null;
  resultWrapperElem = document.getElementById('result-wrapper');
  if(inputSearchValue.length >= 3){
    searchedMovies = await searchMovie(inputSearchValue);
    const moviesArray = Object.entries(searchedMovies.data);
    // show the result box
    resultWrapperElem.classList.remove('hidden');
    resultWrapperElem.classList.add('flex');
    if(moviesArray.length > 0){
      addDataToSearchResultBox(moviesArray);
      resultWrapperElem.insertAdjacentHTML('beforeend',`<span class="text-center py-2"><span class="showAllResult cursor-pointer">مشاهده همه نتایج</a></span>`);
    }
    else{
      resultWrapperElem.innerHTML = 'متاسفانه نتیجه‌ای برای این جستجو یافت نشد!';
    };
  }
  else if(!inputSearchValue.length){
    resultWrapperElem.classList.add('hidden');
    resultWrapperElem.classList.remove('flex');
  };
  const seeAllResultBtn = document.querySelector('.showAllResult');
  if(seeAllResultBtn) {
    seeAllResultBtn.addEventListener('click',()=>{
      routing('searchedName',inputSearchValue,'allResult.html');
    })
  }
};
const allResults = async(index) =>{
  const movieName = getFromLocalStorage('searchedName');
  const allResult = await searchMovie(movieName,index);
  loadMoviesToBody(allResult);
};
const showPaginationElem = () => {
  let elem = document.querySelector('.change-page');
  elem.classList.remove('hidden');
  elem.classList.add('flex');
}
// Introduction every movie
const addDataToMoviePage = async (wrapperElem) =>{
  let movieId = getFromLocalStorage('movieId');
  let details = await searchMovieByID(movieId);
  document.querySelector('title').innerHTML = `مای مووی | ${details.title}`
  createPath(details.title);
  let image = '';
  details.images === undefined ? image = '': image = details.images[0];
  repairValues(details);
  details.plot = await translate(details.plot);
  details.country = await translate(details.country);
  details.genres = await translate(details.genres);
  details.awards = await translate(details.awards);
  let data = `
  <div class="relative flex pb-4 flex-col gap-y-4 items-center">
    <div class="w-full flex flex-col justify-start items-center gap-y-4 md:flex-row md:justify-evenly md:gap-x-4 md:gap-y-2 md:pt-8">
      <div class="w-52 rounded-lg border-4 border-orange-1 overflow-hidden tablet:w-60 lg">
        <img class="lazy w-full" data-src="${details.poster}" alt="${details.title}">
      </div>
      <div class="w-full flex flex-col gap-y-4 md:w-8/12">
        <div class="flex flex-col gap-y-4 md:flex-row-reverse">
          <div class="flex flex-col items-center gap-y-1">
            <span class="text-gray-500"><span id="movie-rate" class="text-xl text-green-600 font-bold tracking-tighter">${details.imdb_rating}</span>/10</span>
            <span class="flex flex-row-reverse font-sans whitespace-nowrap font-semibold pt-2 border-t-2 border-t-orange-1 dark:border-gray-400 dark:text-white">${details.imdb_votes} Votes</span>
            <a href="https://www.imdb.com/title/${details.imdb_id}/" target="_blank" class="w-14 flex justify-center rounded-md mt-2 font-semibold text-white bg-orange-1">IMDB</a>
          </div>
          <div class="w-full flex justify-center"> 
            <h1 class="text-xl dark:text-white">${details.title} ${details.year}</h1>
          </div>
        </div>
        <ul class="grid grid-cols-2 w-full gap-y-4 text-xs dark:text-white child:flex child:gap-x-1 md:text-sm">
          <li>
            <svg class="w-5 h-5 text-orange-1">
              <use href="#clock"></use>
            </svg>
            <span>مدت زمان: </span>
            <span>${details.runtime}</span>
          </li>
          <li>
            <svg class="w-5 h-5 text-orange-1">
              <use href="#doc"></use>
            </svg>
            <span>ژانر:  </span>
            <span>${details.genres}</span>
          </li>
          <li>
            <svg class="w-5 h-5 text-orange-1">
              <use href="#earth"></use>
            </svg>
            <span>محصول کشور:  </span>
            <span>${details.country}</span>
          </li>
          <li>
            <svg class="w-5 h-5 text-orange-1">
              <use href="#clock"></use>
            </svg>
            <span>کارگردان: </span>
            <span>${details.director}</span>
          </li>
          <li class="w-full col-span-2">
            <svg class="w-5 h-5 text-orange-1">
              <use href="#writer"></use>
            </svg>
            <span>نویسندگان :  </span>
            <span dir="ltr" class="w-3/4 truncate">${details.writer}</span>
          </li>
          <li class="w-full">
            <svg class="w-5 h-5 text-orange-1 pl-px">
              <use href="#theatre"></use>
            </svg>
            <span>ستارگان:  </span>
            <span dir="ltr" class="w-3/4 truncate">${details.actors}</span>
          </li>
          <li class="flex-col col-span-2">
            <span class="text-orange-1">داستان</span>
            <p>${details.plot}</p>
          </li>
          <li class="w-full">
            <span class=" flex items-center justify-center w-6 h-6 rounded-md text-lg text-white bg-green-800">${details.metascore}</span>
            <span class="flex items-center justify-center w-5 h-5 pb-1 rounded-full border-2 border-yellow-500 bg-dark-gray text-white -rotate-45">m</span>
            <span>امتیاز منتقدین</span>
          </li>
          <li class="w-full">
            <svg class="w-6 h-6 text-orange-1">
              <use href="#reward"></use>
            </svg>
            <span>جوایز :  </span>
            <span>${details.awards}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex relative flex-col gap-y-4 w-10/12 z-30 rounded-md overflow-hidden">
      <div class="bg-gray-200 dark:bg-white/20 flex flex-col gap-y-4 rounded-md">
      <div id="comments" class="movie-option w-full flex justify-between items-center rounded-md border-r-8 border-r-orange-1 py-3 px-4 text-lg cursor-pointer bg-white dark:bg-dark-gray">
      <span>نظرات</span>
      <div class="flex text-lg transition-transform duration-500 rotate-90">
        <svg class="w-4 h-4"><use href="#arrow"></use></svg>
      </div>
    </div>
    <div class="w-full hidden pr-4 pb-4 rounded-md">
      <div class="bg-white dark:bg-dark-gray relative overflow-hidden rounded-md rounded-ee-none rounded-se-none py-6 px-6 shadow-md space-y-6">
        <div class="w-36 h-36 rounded-3xl bg-gray-100 dark:bg-white/20 absolute top-0 -left-9 rotate-45">
          <div class="w-full h-full flex flex-col justify-center -rotate-45">
            <span id="cm-count" class="flex w-full justify-center text-xl text-orange-1"></span>
            <span>COMMENTS</span>
          </div>
        </div>
          <div class="flex items-center gap-x-4">
            <svg class="w-12 h-12"><use href="#chat"></use></svg>
            <span>نظرات کاربران</span>
          </div>
          <div id="form-wrapper" class="hidden flex-col gap-y-4">
            <p class="text-sm leading-6 tablet:text-base tablet:leading-8">کامنت خود را بصورت فارسی تایپ نمایید. از به کار بردن کلمات رکیک یا توهین آمیز خودداری نمایید. <br>
              با اعلام نظر خود، به سایر کاربران برای انتخاب فیلم، کمک کنید.
            </p>
            <div id="send-cm-alert" class="w-full hidden justify-center py-2 bg-green-300/30 text-lg text-green-500">
              <span>ارسال دیدگاه با موفقیت انجام شد.</span>
            </div>
            <div id="unsuccess-send-cm-alert" class="w-full hidden justify-center py-2 bg-red-300/30 text-red-500">
              <span>محتوای دیدگاه نمی‌تواند خالی باشد!</span>
            </div>
            <form id="cm-form" class="space-y-2">
              <textarea maxlength="500" name="cm-message" class="w-full resize h-40 py-2 px-4 outline-none bg-gray-300 dark:bg-black rounded-md placeholder-gray-500" placeholder="متن دیدگاه را وارد کنید."></textarea>
              <div class="w-full flex justify-end">
                <button id="send-cm" type="submit" class="bg-orange-1 text-white rounded-2xl py-1 px-3">ارسال دیدگاه</button>
              </div>
            </form>
          </div>
        <div id="cm-conditions" class="flex justify-center">
          <p class="flex items-center gap-x-2 child:shadow-md dark:child:shadow-gray-950 child:border-t border-gray-200 dark:border-black child:rounded-2xl child:py-2 child:px-4 child:flex child:justify-center child:items-center child:gap-x-1 child:w-48">
            برای انتشار دیدگاه 
            <a href="login.html">
              <svg class="w-5 h-5"><use href="#enter"</use></svg>
              <span>وارد حساب خود شوید</span>
            </a>
            یا 
            <a href="signup.html">
              <svg class="w-5 h-5 dark:hidden"><use href="#add-user"></use></svg>
              <span>در سایت عضو شوید</span>
            </a>
          </p>
        </div>
        <ul id="comments-wrapper" class="child:bg-gray-100 dark:child:bg-black child:w-full child:rounded-md child:py-4 child:px-6 child:flex child:flex-col child:items-center child:gap-6 sm:child:flex-row flex flex-col items-center gap-y-2">
        </ul>
        <div class="show-more-cm w-full text-orange-1 p-1 hidden justify-center">
          <span class="cursor-pointer">نمایش بیشتر</span
        </div>
      </div>
    </div>
      </div>
    </div>
    <div class="flex flex-col gap-y-4 w-full z-30 rounded-md bg-gray-200 dark:bg-white/20 overflow-hidden">
      <div id="related-movies" class="movie-option w-full flex justify-between items-center rounded-md border-r-8 border-r-orange-1 py-3 px-4 text-lg cursor-pointer bg-white dark:bg-dark-gray">
        <span>فیلم‌های مرتبط</span>
        <div class="flex text-lg transition-transform duration-500 rotate-90">
          <svg class="w-4 h-4"><use href="#arrow"></use></svg>
        </div>
      </div>
      <div class="w-full hidden pr-4 pb-4 rounded-md">
        <ul class="related-movies-wrapper bg-white dark:bg-dark-gray p-4 rounded-md flex flex-wrap gap-8 child:flex child:flex-col child:items-center child:cursor-pointer">
        </ul>
        <span class="text-orange-1 w-full flex justify-center waiting">در حال بارگزاری...</span>
      </div>
    </div>
  </div>`;
  wrapperElem.insertAdjacentHTML('beforeend',data);
  let images = document.querySelectorAll('.lazy');
  images.forEach(img => {
  observer.observe(img);
  });
  let dotLoader = document.querySelector('.dot-loader');
  dotLoader.classList.remove('flex');
  dotLoader.classList.add('hidden');
  const options = document.querySelectorAll('.movie-option');
  options.forEach(option => {
    option.addEventListener('click',(e) => {
      openOptionSubmenu(e.currentTarget);
    });
  });
};
const openOptionSubmenu = (menu) => {
  const subMenu = menu.nextElementSibling;
  const subMenuIcon = menu.firstElementChild.nextElementSibling;
  subMenu.classList.toggle('hidden');
  subMenuIcon.classList.toggle('rotate-90');
  if(menu.id === 'comments') comments();
  if(menu.id === 'related-movies') findRelatedMovies();
};
// related movies
let relatedMoviesWrapper = null;
const findRelatedMovies = async() => {
  const movieId = getFromLocalStorage('movieId');
  const res = await searchMovieByID(movieId);
  const genresMovie = res.genres;
  const allGenres = await searchGenres();
  const result = allGenres.find((element) => element.name === genresMovie[0]);
  const moviesOfGenre = await searchByGenres(result.id);
  relatedMoviesWrapper = document.querySelector('.related-movies-wrapper');
  relatedMoviesWrapper.innerHTML ='';
  moviesOfGenre.data.forEach(movie => {
    if(movie.id == JSON.parse(movieId)) return
    renderRelatedMovies(movie);
  });
}
const renderRelatedMovies = (movie) => {
  let data = `
    <li id="${movie.id}" class="relate-movie">
      <div class="w-40 rounded-md overflow-hidden">
        <img class="w-full h-full" src="${movie.poster}">
      </div>
      <h4 class="w-40 flex justify-center truncate">${movie.title}</h4>
    </li>
  `
  const waitingElem = document.querySelector('.waiting');
  waitingElem.classList.add('hidden')
  relatedMoviesWrapper.insertAdjacentHTML('afterbegin',data);
  const movies = document.querySelectorAll('.relate-movie');
  movies.forEach(movie => {
    movie.addEventListener('click',(event)=>{
      const id = event.currentTarget.id;
      routing('movieId',id,'movie.html');
    })
  });
}
// comments
const manageCommentFunction = () => {
  const commentBtn = document.getElementById('send-cm');
  commentBtn.innerHTML = 'در حال ارسال...';
  const sendCommentAlert = document.getElementById('send-cm-alert');
  const unsendCommentAlert = document.getElementById('unsuccess-send-cm-alert');
  const userCmElem = document.querySelector('textarea');
  const userCmText = userCmElem.value.trim();
  sendCommentAlert.classList.remove('flex');
  sendCommentAlert.classList.add('hidden');
  unsendCommentAlert.classList.remove('flex');
  unsendCommentAlert.classList.add('hidden');
  const currentDate =  getDate();
  if(userCmText.length > 0){
    const userCm = {
      'movieId' : getFromLocalStorage('movieId'),
      'userId' : getFromLocalStorage('userId'),
      'comment' : userCmText,
      'like': 0,
      'dislike' : 0,
      'date': currentDate
    };
    // send cm to database
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
        commentBtn.innerHTML = 'ارسال دیدگاه';
        sendCommentAlert.classList.remove('hidden');
        sendCommentAlert.classList.add('flex');
        addCommentToCmList(JSON.parse(request.response));
      }
    }
    request.open('POST','http://localhost:3000/comments');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(userCm));
    userCmElem.value = '';
  }
  else {
    commentBtn.innerHTML = 'ارسال دیدگاه';
    unsendCommentAlert.classList.remove('hidden');
    unsendCommentAlert.classList.add('flex');
  }
};
let cmProceed = 0;
const getDate = () => {
  const date = new Date();
  const currentDate = {
    'year': date.getFullYear(),
    'month': date.getMonth(),
    'day': date.getDate(),
    'hours':date.getHours(),
    'minutes':date.getMinutes(),
    'seconds':date.getSeconds()
  }
  return currentDate;
}
const addCommentToCmList = (info,lengthArray) => {
  const commentsWrapper = document.getElementById('comments-wrapper');
  fetch(`http://localhost:3000/users?id=${info.userId}`)
  .then((response) => response.json())
  .then((res) => {
    const date = manageCmDate(info.date);
    let data = `<li id="${info.id}">
    <div class="w-full sm:w-auto flex justify-between sm:flex-col sm:gap-y-4 items-center xl:flex-row xl:gap-x-4">
      <div class="flex gap-x-3 child:cursor-pointer child:flex child:flex-col child:items-center child:px-2 child:py-2 child:bg-gray-200 dark:child:bg-dark-gray child:rounded-md">
        <div>
          <svg class="cm-like-dislike like text-green-600 w-6 h-6"><use href="#like"></use></svg>
          <span>${info.like}</span>
        </div>
        <div>
          <svg class="cm-like-dislike dislike text-red-600 w-6 h-6"><use href="#dislike"></use></svg>
          <span>${info.dislike}</span>
        </div>
      </div>
      <div class="cursor-pointer">
        <span class="w-12 h-12 flex justify-center items-center rounded-2xl border-2 border-dark-gray rotate-45">
          <svg class="w-6 h-6 text-orange-1 -rotate-45"><use href="#person"</use></svg>
        </span>
      </div>
    </div>
    <div class="flex flex-col w-full gap-y-2">
      <div class="flex justify-between font-roboto-light sm:justify-between">
        <span class="text-orange-1">${res[0].name}</span>
        <span class="text-gray-500 dark:text-white">(<span>${date}</span>)</span>
      </div>
      <p>${info.comment}</p>
    </div>
    </li>`
    commentsWrapper.insertAdjacentHTML('beforeend',data);
    cmProceed++;
    if(cmProceed === lengthArray) {
      // like or dislike comments
      const likeCmElms = document.querySelectorAll('.cm-like-dislike');
      likeCmElms.forEach(likeCm => {
        likeCm.addEventListener('click', (e) => {
          manageLikeCms(e.currentTarget);
        })
      });
    }
  });
};
let moreCmBtn = null;
const comments = async() => {
  const isUserIn = isUserRegistered();
  const cmForm = document.getElementById('cm-form');
  const formWrapper = document.getElementById('form-wrapper');
  const formConditionsWrapper = document.getElementById('cm-conditions');
  console.log(isUserIn);
  if(isUserIn === true) {
    formWrapper.classList.remove('hidden');
    formWrapper.classList.add('flex');
    formConditionsWrapper.classList.add('hidden');
    cmForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      manageCommentFunction();
    });
  }
  else {
    formWrapper.classList.add('hidden');
    formWrapper.classList.remove('flex');
    formConditionsWrapper.classList.remove('hidden');
  }
  const movieId = getFromLocalStorage('movieId');
  const request = await fetch(`http://localhost:3000/comments?movieId=${movieId}`);
  const commentsArray = await request.json();
  const cmCount = commentsArray.length;
  let counter = 0;
  const countOfCmsElem = document.getElementById('cm-count');
  countOfCmsElem.innerHTML = cmCount;
  commentsArray.reverse().forEach(comment => {
    counter++;
    if(counter > 10) {
      showMoreCm(commentsArray,cmCount)
      return
    }
    addCommentToCmList(comment,cmCount);
  });
};
const isUserRegistered = () => {
  const userId = getFromLocalStorage('userId');
  if(userId) return true
  else return false

}
const showMoreCm = (array,total) => {
  const pageCount = Math.ceil(total/10);
  let currentPage = 1;
  showMoreCmHndler(currentPage,pageCount);
  moreCmBtn.addEventListener('click',() => {
    ++currentPage;
    for(let i = (currentPage * 10) - 9; i<= currentPage * 10; i++){
      if(array[i-1]){
        addCommentToCmList(array[i-1],total);
      }
    }
    showMoreCmHndler(currentPage,pageCount);
  });
}
const showMoreCmHndler = (pageNumber,totalPages) => {
  moreCmBtn = document.querySelector('.show-more-cm');
  if(pageNumber !== totalPages){
    moreCmBtn.classList.remove('hidden');
    moreCmBtn.classList.add('flex');
  }
  else {
    moreCmBtn.classList.remove('flex');
    moreCmBtn.classList.add('hidden');
  }
}
const manageCmDate = (cmDate) => {
  const rtf1 = new Intl.RelativeTimeFormat('fa', { style: 'short' });
  const currentDate = getDate();
  const yearDifference = cmDate.year - currentDate.year  ;
  const monthDifference = cmDate.month - currentDate.month ;
  const dayDifference = cmDate.day - currentDate.day;
  const hoursDifference = cmDate.hours - currentDate.hours;
  const minutesDifference = cmDate.minutes - currentDate.minutes;
  const secondsDifference = cmDate.seconds - currentDate.seconds;
  if(yearDifference < 0){
    return rtf1.format(yearDifference, 'second')
  }
  else if(monthDifference < 0){
    return rtf1.format(monthDifference, 'month')
  }
  else if(dayDifference < 0){
    return rtf1.format(dayDifference, 'day')
  }
  else if(hoursDifference < 0){
    return rtf1.format(hoursDifference, 'hour')
  }
  else if(minutesDifference < 0){
    return rtf1.format(minutesDifference, 'minute')
  }
  else if(secondsDifference < 0){
    return rtf1.format(secondsDifference, 'second')
  }
  else return 'همین الان'
}
const manageLikeCms = (elem) => {
  const countOfLikesElm = elem.nextElementSibling;
  let countOfLikes = countOfLikesElm.innerHTML;
  let likeCmObj = null; 
    if(elem.classList.contains('like')){
      likeCmObj = {
      'like' : ++countOfLikes
    }}
    else likeCmObj = {
      'dislike' : ++countOfLikes
    };
  let cmElem = elem.parentElement.parentElement.parentElement.parentElement;
  const cmId = cmElem.id;
  fetch(`http://localhost:3000/comments/${cmId}`,{
    method:'PATCH',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(likeCmObj)
  })
  .then((res) => res.json())
  .then((result) => {
    if(elem.classList.contains('like')) countOfLikesElm.innerHTML = result.like
    if(elem.classList.contains('dislike')) countOfLikesElm.innerHTML = result.dislike
  })
};
const genresMovies = async(index) =>{
  let genreId = getFromLocalStorage('genreId');
  let movies = await searchByGenres(genreId,index);
  loadMoviesToBody(movies);
};
const repairValues = async(data) =>{
  if(!!data.title === false) data.title = '-';
  if(!!data.year === false) data.imdb_year = '-';
  if(!!data.genres === false) data.imdb_genres = '-';
  if(!!data.imdb_votes === false) data.imdb_votes = '-';
  else data.imdb_votes = formatNumber(data.imdb_votes,1);
  if(!!data.released === false) data.imdb_year = '-';
  if(!!data.runtime === false) data.runtime = '-';
  else {
    data.runtime = data.runtime.replace('min','دقیقه');
  }
  if(!!data.director === false) data.director = '-';
  if(!!data.actors === false) data.actors = '-';
  if(!!data.writer === false) data.writer = '-';
  if(!!data.metascore === false || data.metascore === 'N/A') data.metascore ='-';
  else data.metascore = new Intl.NumberFormat('fa').format(data.metascore);
  if(!!data.genres === false) data.genres = '-';
  if(!!data.awards === false) data.awards ='-';
  if(!!data.country === false) data.country = '-';
  if(!!data.plot === false) data.plot = '-';
};
const addDataToSearchResultBox = (moviesArray) =>{
  resultWrapperElem.innerHTML = "";
  let shortArr = [];
  [shortArr[0],shortArr[1],shortArr[2],shortArr[3]] = moviesArray;
  shortArr.forEach(async(movie) => {
    if(movie){
      movie[1].genres = await translate(movie[1].genres);
      resultWrapperElem.insertAdjacentHTML('afterbegin',
      `<div id="${movie[1].id}" class="movie py-3 cursor-pointer font-roboto-regular">
        <div class="flex justify-end gap-x-3">
          <div class="flex flex-col justify-center items-end overflow-hidden">
            <span class="whitespace-nowrap">${movie[1].title} ${movie[1].year}</span>
            <span class="text-xs font-iran-yekan">${movie[1].genres}</span>
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
      </div>`);
    }
    else return
  });
  const movies = document.querySelectorAll('.movie');
  movies.forEach(movie => {
    movie.addEventListener('click',() => {
      routing('movieId',movie.id,'movie.html');
    });
  });
};
const Toast = Swal.mixin({
    position:'top-end',
    toast:true,
    // timer:2500,
    confirmButtonColor:'#eb8307' 
});
const showSwall = (title,icon,confirmButtonText,callback)=>{
  Toast.fire({
    title:title,
    icon:icon,
    confirmButtonText:confirmButtonText,
  }).then(result => callback(result))
};
const exitSwall = (title,text,confirmText,cancelText) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: 'rgb(22,101,52)',
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
  }).then((result) => {
    if (result.isConfirmed) {
      deleteFromLocalStorage('userId');
      location.reload();
    }
  })
}
const saveIntoLocalStorage = (key,value) =>{
  return localStorage.setItem(key,value)
};
const getFromLocalStorage = (key) =>{
  const value = localStorage.getItem(key);
  return value ? value : null;
};
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
};
const translate = async (data) =>{
  const myToken = '199909:64dca52456732';
  const translateReq = await fetch(`https://one-api.ir/translate/?token=${myToken}&action=microsoft&lang=fa&q=${data}`);
  const translatedData = await translateReq.json();
  return translatedData.result;
};
function routing(key,value,page) {
  saveIntoLocalStorage(key,value);
  location.href = page;
};
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
      `<img id="${movie.id}" class="slider-slide deskSlide w-full rounded-md hidden" src="${movie.images[1]}">`);
    sliderWrapper.insertAdjacentHTML('beforeend',
      `<img id="${movie.id}" class="slider-slide slide z-20 w-96 rounded-lg border-2 border-white" src="${movie.poster}">`
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
    movieTitleElem.innerHTML = `${moviesArray[slideIndex].title}  ${moviesArray[slideIndex].year}`;
    imdbLink.href = `https://www.imdb.com/title/${moviesArray[slideIndex].imdb_id}`;
  }
  let slideIndex = 0;
  changeImage(slideIndex);
  // change imgs automaticly
  setInterval(() => {
        slideIndex++;
        changeImage(slideIndex);
  }, 10000);
  // show btns after loading images
  const sliderBtns = document.querySelector('.btns');
  sliderBtns.classList.remove('hidden');
  sliderBtns.classList.add('flex');
  // next/previous slide btn
  sliderBtns.addEventListener('click',(event)=>{
    event.preventDefault();
    if(event.target.id == 'next-slide'){
      changeImage(++slideIndex);
    }
    if(event.target.id == 'prev-slide'){
      changeImage(--slideIndex);
    }
  });
  // click on every movie
  const slides = document.querySelectorAll('.slider-slide');
  slides.forEach(slide => {
    slide.addEventListener('click',(event)=>{
      const slideId = event.currentTarget.id;
      routing('movieId',slideId,'movie.html');
    })
  });
};
// pagination
const paginationWrapper = document.querySelector('.pagination-numbers');
let pageIndex = 1;
let totalMovies = null;
let singlePageMoviesCount = null;
let pageCount = null;
const nextBtn = document.getElementById('next-page');
const prevBtn = document.getElementById('previous-page');
let baseArray = null;
const paginationCalc = (total,number) =>{
  totalMovies = total;
  singlePageMoviesCount = number; //تعداد فیلم نمایشی در هر صفحه
  pageCount = Math.ceil(totalMovies/singlePageMoviesCount);
};
const pagination = (index) =>{
  if(index <= 3){
    if(pageCount > 4) baseArray = [1,2,3,4,'...',pageCount];
    if(pageCount == 1) baseArray = [pageCount];
    if(pageCount == 2) baseArray = [1,pageCount];
    if(pageCount == 3) baseArray = [1,2,pageCount];
    if(pageCount == 4) baseArray = [1,2,3,pageCount];
    loopOfAddDataToPagination(baseArray);
    activePage(paginationWrapper.children[index-1].children[0]);
    if(window.location.pathname.includes('index.html')) allMovies(index);
    if(window.location.pathname.includes('allResult.html')) allResults(index);
    if(window.location.pathname.includes('genrePage.html')) genresMovies(index);
  };
  if(index > 3 && index < pageCount) {
    if(index === pageCount-1){
      baseArray = [1,'...',index-2,index-1,index,pageCount];
    }
    else{
      baseArray = [1,'...',index-2,index-1,index,index+1,'...',pageCount];
    }
    const isEqual = (number)=> number == index; //find active page number
    loopOfAddDataToPagination(baseArray);
    let activePageNum = baseArray.findIndex(isEqual);
    activePage(paginationWrapper.children[activePageNum].firstElementChild);
    if(window.location.pathname.includes('index.html')) allMovies(index);
    if((window.location.pathname.includes('allResult.html'))) allResults(index);
    if((window.location.pathname.includes('genrePage.html'))) genresMovies(index);
  };
  if(index >= pageCount && index > 4){
    baseArray = [1,'...',index-3,pageCount-2,pageCount-1,pageCount];
    loopOfAddDataToPagination(baseArray);
    activePage(paginationWrapper.lastElementChild.firstElementChild);
    if(window.location.pathname.includes('index.html')) allMovies(index);
    if(window.location.pathname.includes('allResult.html')) allResults(index);
    if(window.location.pathname.includes('genrePage.html')) genresMovies(index);
  };
  pageIndex = index;
};
function loopOfAddDataToPagination (array) {
  for (let index = 0; index < array.length; index++) {
    addDataToPagination(array[index]);
  }
};
const addDataToPagination = (data) =>{
  paginationWrapper.insertAdjacentHTML('beforeend',`
    <button id="${data}" class="relative group w-7 h-7 flex justify-center items-center transition-opacity">
      <div class="absolute top-0 w-full h-full block -z-10 rounded-md group-hover:bg-gray-300 dark:group-hover:bg-orange-1 rotate-45"></div>
      ${data}
    </button>
  `)
  if(data == '...') unclickableElem();
};
const unclickableElem = () => {
  const spaceElem = paginationWrapper.lastElementChild;
  const bgSpaceElem = spaceElem.firstElementChild;
  spaceElem.disabled = true;
  spaceElem.classList.add('cursor-text');
  bgSpaceElem.classList.remove('group-hover:bg-gray-300','dark:group-hover:bg-orange-1');
};
const activePage = (activePage) =>{
  scrollToTop();
  activePage.classList.add('bg-gray-300');
  activePage.classList.add('dark:bg-orange-1');
  activePage.classList.remove('group-hover:bg-gray-300');
  activePage.classList.remove('dark:group-hover:bg-orange-1');
  if(activePage.parentElement == paginationWrapper.firstElementChild) disableBtn(prevBtn);
  else enableBtn(prevBtn); 
  if(activePage.parentElement == paginationWrapper.children[baseArray.length-1]) disableBtn(nextBtn);
  else enableBtn(nextBtn);
};
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
const disableBtn = (btn)=> {
  btn.classList.remove('opacity-full');
  btn.classList.add('opacity-0');
  btn.classList.add('flex');
};
const enableBtn = (btn) => {
  btn.classList.remove('opacity-0');
  btn.classList.remove('hidden');
  btn.classList.add('opacity-full');
  btn.classList.add('flex');
};
const nextPage = () => {
  paginationWrapper.innerHTML = '';
  pageIndex++;
  pagination(pageIndex);
};
const previousPage = () => {
  --pageIndex;
  paginationWrapper.innerHTML = '';
  pagination(pageIndex);
};
const allMovies = async(index) => {
// loading movies to DOM;
const moviesForShow = await movies(index);
loadMoviesToBody(moviesForShow);
};
const loadMoviesToBody = async(data) =>{
  const allMoviesWrapper = document.querySelector('.movie-boxes-wrapper');
  allMoviesWrapper.innerHTML ='';
  const moviesArray = [];
  for (let i = 0; i < data.data.length; i++) {
    moviesArray[i] = await searchMovieByID(data.data[i].id);
  }
  for (let i = 0; i < moviesArray.length; i++) {
    addMoviesToPage(moviesArray[i],allMoviesWrapper);
  }
};
const addMoviesToPage = async(data,wrapper) =>{
  repairValues(data);
  data.plot = await translate(data.plot);
  data.country = await translate(data.country);
  data.genres = await translate(data.genres);
  let elem = `<div class="bg-white w-full pt-4 mb-10 rounded-lg relative dark:bg-dark-gray sm:flex sm:px-4 sm:text-sm">
  <!-- img/trailer -->
    <div class="flex flex-col items-center rounded-md py-2 gap-y-4 justify-center">
      <div class="flex flex-col items-center space-y-4">
        <div class="flex justify-center w-11/12 -mt-4 md:w-44">
         <img class="lazy w-full rounded-md font-roboto-regular" data-src="${data.poster}" alt="${data.title}">
        </div>
        <div class="flex justify-center py-2 rounded-md bg-gray-300 w-11/12 hover:text-orange-1 transition-colors dark:bg-black/30 dark:text-white dark:hover:text-orange-1">
         <a href= "https://www.imdb.com/title/${data.imdb_id}" target="__blank">مشاهده تریلر</a>
        </div>
      </div>
    </div>
  <!--rating/title  -->
  <div class="flex flex-col items-center gap-y-4 sm:flex-row-reverse sm:items-start">
    <!-- rate -->
    <div class="flex flex-col items-center gap-y-1">
      <span class="text-gray-400"><span id="data-rate" class="text-xl text-orange-1 tracking-tighter">${data.imdb_rating}</span>/10</span>
      <span class="flex flex-row-reverse font-sans whitespace-nowrap pt-2 border-t dark:border-gray-400 dark:text-white">${data.imdb_votes} Votes</span>
      <a href="https://www.imdb.com/title/${data.imdb_id}/" target="_blank" class="w-14 flex justify-center rounded-md mt-2 font-semibold text-white bg-orange-1">IMDB</a>
    </div>
    <!-- more details -->
    <div class="pr-5 pb-16 space-y-3 child:flex child:gap-x-1 dark:text-white">
    <!-- title -->
    <div class="w-full flex justify-center cursor-pointer"><h1 dir="ltr" class= text-lg dark:text-white">${data.title} <span>${data.year}</span></h1></div>
      <div>
        <svg class="w-6 h-6 text-orange-1">
          <use href="#calender"></use>
        </svg>
        <span>زمان انتشار: </span>
        <span class="font-roboto-regular">${data.released}</span>
      </div>
      <div>
        <svg class="w-6 h-6 text-orange-1">
          <use href="#clock"></use>
        </svg>
        <span>زمان: </span>
        <span>${data.runtime}</span>
      </div>
      <div>
        <svg class="w-6 h-6 text-orange-1">
          <use href="#doc"></use>
        </svg>
        <span>ژانر:  </span>
        <span>${data.genres}</span>
      </div>
      <div>
        <svg class="w-6 h-6 text-orange-1">
          <use href="#person"></use>
        </svg>
        <span>کارگردان:  </span>
        <span dir="ltr" class="font-roboto-regular">${data.director}</span>
      </div>
      <div>
        <svg class="w-6 h-6 text-orange-1">
          <use href="#theatre"></use>
        </svg>
        <span>ستارگان:  </span>
        <span dir="ltr" class="w-80 font-roboto-regular truncate">${data.actors}</span>
      </div>
      <div>
        <svg class="w-6 h-6 text-orange-1">
          <use href="#earth"></use>
        </svg>
        <span>محصول کشور:  </span>
        <span>${data.country}</span>
      </div>
      <div class="flex items-center">
        <span class=" flex items-center justify-center w-6 h-6 p-4 rounded-md text-white text-lg bg-green-800">${data.metascore}</span>
        <span class="flex items-center justify-center w-5 h-5 pb-1 rounded-full border-2 border-yellow-500 bg-dark-gray text-white -rotate-45">m</span>
        <span>امتیاز منتقدین</span>
      </div>
      <div class="flex flex-col">
        <p>${data.plot}</p>
      </div>
    </div>
    <div id="${data.id}" class="showDetail-btn flex flex-col items-center justify-center w-8 h-8 space-y-2 absolute z-20 right-[calc(50%_-_.9rem)] bottom-3">
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
  </div>`
  wrapper.insertAdjacentHTML('beforeend',elem);
  let images = document.querySelectorAll('.lazy');
  images.forEach(img => {
    observer.observe(img);
  });
  showPaginationElem();
  let dotLoader = document.querySelector('.dot-loader');
  dotLoader.classList.remove('flex');
  dotLoader.classList.add('hidden');
  // select every movie and going to movie page
  const allMoviesBtns = document.querySelectorAll('.showDetail-btn');
  allMoviesBtns.forEach(btn => {
  btn.addEventListener('click',(event)=>{
    const movieId = event.currentTarget.id;
    routing('movieId',movieId,'movie.html');
  })
  }); 
}
const aside = async() => {
  const genresWrapperElem = document.querySelector('.genres');
  const allGenres = await searchGenres();
  // all genres
  let page = 1;
  allGenres.forEach(async genre => {
    let countOfMovie = await countMoviesOfGenres(genre,page);
    let genreName = await translate(genre.name);
    genresWrapperElem.insertAdjacentHTML('beforeend',`
      <div class="flex justify-between dark:text-gray-300">
        <div id="${genre.id}" class="genre-item flex gap-x-1 cursor-pointer">
          <span>></span>
          <span class="hover:text-orange-1
          dark:hover:text-orange-1">${genreName}</span>
        </div>
        <span>(${countOfMovie})</span>
      </div>`);
  });
  // برترین ها
  let categories = [
    {
      wrapper:'sci-fi',
      genreId : 10,
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
    
  ];
  
  let itemsProceed = 0;
  categories.forEach(async category => {
    const wrapper = document.querySelector(`.${category.wrapper}`);
    const data = await searchByGenres(category.genreId,1);
    addDataToAside(wrapper,data);
    itemsProceed++;
    if(itemsProceed === categories.length){
      asideSliderManage();
      genresPageManage();
    }
  });
};
const genresPageManage = () =>{
  const genresItemElem = document.querySelectorAll('.genre-item');
  genresItemElem.forEach(elem => {
    elem.addEventListener('click',(e)=>{
      const genreId = e.currentTarget.id;
      saveIntoLocalStorage('genreName',elem.firstElementChild.nextElementSibling.innerHTML);
      routing('genreId',genreId,'genrePage.html');
      createPath(genreName);
    })
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
        <div id="${data.data[i].id}" class="aside-item flex w-full justify-center"><a href="#" class="dark:text-gray-300 font-roboto-regular hover:text-orange-1 dark:hover:text-orange-1">${data.data[i].title} ${data.data[i].year}</a></div>
      </div>
    `);
  };
  // show first image
  const firstSliderImg = wrapper.children[0];
  firstSliderImg.classList.remove('hidden');
  firstSliderImg.classList.add('slider--active');
  // routing
  const asideItems = document.querySelectorAll('.aside-item');
  asideItems.forEach(item => {
    item.addEventListener('click',(event)=>{
      let itemId = event.currentTarget.id;
      routing('movieId',itemId,'movie.html');
    })
  });
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
function createPath(value) {
  const pathWrapper = document.querySelector('.path');
  pathWrapper.innerHTML = value
};
async function countMoviesOfGenres(genre,pageCounter){
  let moviesOfGenre = await searchByGenres(genre.id,pageCounter);
  let countOfGenre = new Intl.NumberFormat('fa').format(moviesOfGenre.metadata.total_count);
  return countOfGenre;
};
const showProfile = (userinformation) =>{
  // insert user info on profile elems
  const userNameElem = document.getElementById('user-name');
  userNameElem.innerHTML = userinformation.name;
  // show profile
  const profileWrapper = document.getElementById('profile');
  profileWrapper.classList.remove('hidden');
  profileWrapper.classList.add('flex');
  //hide signup/login btn
  const btnsWrapper = document.getElementById('buttons');
  btnsWrapper.classList.remove('flex');
  btnsWrapper.classList.add('hidden');
};
const sendUserMessage = () => {
  const userName = document.getElementById('name');
  const userEmail = document.getElementById('email');
  const usermessage = document.getElementById('message');
  const errorElem = document.getElementById('error');
  if(usermessage.value.length <= 0) {
    errorElem.classList.remove('hidden');
    errorElem.classList.add('flex');
    errorElem.innerHTML = 'لطفا پیام خود را بنویسید!'
  }
  else{
    let data = {
      'name': userName.value,
      'email': userEmail.value,
      'message': usermessage.value
    }
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
        if(request.responseText) {
          errorElem.innerHTML = 'پیام شما با موفقیت ارسال شد. سپاسگزاریم!';
          errorElem.classList.remove('hidden');
          errorElem.classList.add('flex');
          userName.value ="";
          userEmail.value ="";
          usermessage.value ="";
        }
      }
    }
  request.open('POST', 'http://localhost:3000/messages');
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send(JSON.stringify(data));

  }
};
export{icons,header,nav,footer,addDataToMoviePage,showSwall,showProfile,saveIntoLocalStorage,sendUserMessage,getFromLocalStorage,renderSearchResult,slider,paginationCalc,pagination,nextPage,previousPage,aside,genresMovies,path,createPath};