import {showSwall,saveIntoLocalStorage,getFromLocalStorage,showProfile} from './utitlities.js';
const register = async() => {
    const usernameElem = document.getElementById('username');
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');
    
    const newUserInfo = {
        "email" : emailElem.value.trim(),
        "password" : passwordElem.value.trim(),
        "name" : usernameElem.value.trim()
    };
    let response = await checkLogin(newUserInfo.email);
    if(response.length > 0) {
        showSwall('این ایمیل قبلا ثبت شده است!','error','ویرایش اطلاعات',()=>{})
    }
    else {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == XMLHttpRequest.DONE) {
                if(request.responseText) {
                    showSwall('ثبت‌نام شما با موفقیت انجام شد!','success','ورود به سایت',()=>{
                        location.href = 'index.html';
                        saveIntoLocalStorage('userId',JSON.parse(request.responseText).id);
                    });
                }
            }
        }
        request.open('POST', 'http://localhost:3000/users');
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(newUserInfo));
    }
};
const checkLogin = async(userEmail) =>{
    let searchUser = await fetch(`http://localhost:3000/users?email=${userEmail}`)
    let response = await searchUser.json();
    return response;
}
const login = async() => {
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');

    const emailValue = emailElem.value.trim();
    const passwordValue = passwordElem.value.trim();
    const userInfo = await checkLogin(emailValue);
    if(userInfo.length > 0 && userInfo[0].password === passwordValue) {
        showSwall('شما با موفقیت وارد پنل کاربری خود شدید.','success','ورود به سایت',()=>{
            location.href = 'index.html';
            saveIntoLocalStorage('userId',userInfo[0].id);
        });
    }
    else showSwall('اطلاعات واردشده نامعتبر است!','error','ویرایش اطلاعات',()=>{});
}
const getMe = async() => {
    const userId = getFromLocalStorage('userId');
    if(userId) {
        const user = await fetch(`http://localhost:3000/users?id=${userId}`);
        const userInfo = await user.json();
        console.log(userInfo);
        showProfile(userInfo[0]);
    }
}
export {register,login,getMe}