import {showSwall,saveIntoLocalStorage,getToken} from './utitlities.js';
const register = () => {
    const usernameElem = document.getElementById('username');
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');

    const newUserInfo = {
        "email" : emailElem.value.trim(),
        "password" : passwordElem.value.trim(),
        "name" : usernameElem.value.trim()
    };

    fetch('http://moviesapi.ir/api/v1/register',{
        method:"POST",
        headers:{
            "Content-Type":"aplication/json"
        },
        body:JSON.stringify(newUserInfo)
    }).then(res=> res.json())
    .then(result =>{
        if(result.name){
            showSwall('ثبت‌نام شما با موفقیت انجام شد!','success','ورود به پنل',()=>{
                location.href = 'index.html';
            });
        }
        else if(result.errors === 'The email has already been taken.;'){
            showSwall('این ایمیل قبلا ثبت شده است!','error','ویرایش اطلاعات',()=>{});
        }
        else if(result.errors === 'The password must be at least 6 characters.;'){
            showSwall('رمز عبور حداقل باید 6 کاراکتر باشد!','error','ویرایش اطلاعات',()=>{});
        }
        else if(result.errors === 'The email must be a valid email address.;'){
            showSwall('ایمیل واردشده، نامعتبر است!','error','ویرایش اطلاعات',()=>{});
        };
    });
};
const login = () => {
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');
    
    var formdata = new FormData();
    formdata.append("grant_type", "password");
    formdata.append("username", emailElem.value.trim());
    formdata.append("password", passwordElem.value.trim());

fetch("http://moviesapi.ir/oauth/token",{
    method:'POST',
    body: formdata
})
  .then(res => res.json())
  .then(result => {
    if (result.error){
        showSwall('اطلاعات واردشده نامعتبر است!','error','ویرایش اطلاعات',()=>{})
    }
    else {
        showSwall('شما با موفقیت وارد پنل کاربری خود شدید.','success','ورود به پنل',()=>{
            console.log(result);
            saveIntoLocalStorage('accessToken', result.access_token);
            location.href = 'index.html';
        })
    }
  })
};
const getMe = () => {
    const token = getToken()
    var myHeaders = new Headers();
    myHeaders.append("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlhM2Q2NzkwM2E3MzgyZTRiNzZmYmJjMjY5ODlmNGE3Y2M4ZmM1NDJlMTZlNzQ4YzJiZmJhM2Q0NzBmZDI5ZDM3YjQzNjljMDQ3YTliNzA0In0.eyJhdWQiOiI0IiwianRpIjoiOWEzZDY3OTAzYTczODJlNGI3NmZiYmMyNjk4OWY0YTdjYzhmYzU0MmUxNmU3NDhjMmJmYmEzZDQ3MGZkMjlkMzdiNDM2OWMwNDdhOWI3MDQiLCJpYXQiOjE2OTEyMTQ2MzcsIm5iZiI6MTY5MTIxNDYzNywiZXhwIjoxNjkxMjE0OTM3LCJzdWIiOiIxNzc5Iiwic2NvcGVzIjpbXX0.g6XcSb8AzSc26gdS6dC0Ar7x99lMWHmtoPY4ryja86rkcbADDEJ-2JyqnDKzgRJv6y_3BEH2KKhbEckg-NYo2Pf2sGANoSGKxFENV9e6NYB-Ww6Ei_N0KQNm22EwssX4c3b4hvayhSXoBuSqJ7m0Bx8G320ncs_R2cGHW9EL4ejAdQF1ytS_gXfW6q_j0cJ12Xae0S3AxRy_TiDHubmyv7APX7ODyp-_o5LP1t8Qwtv2eonb7qfPn_DkjBerlp7wUILqBr7VFJtJf-8zZoMeZ1tBWRHzJAkwQD9VCIKi6zeBYU6ukXoXoGq87oSwV5ttGsaQDozklXsbyB-TWlCuXL2-FSRrc5_pEbu2sAo3xEJ-kvp6yewPznlQ1FGINM6P0TaGkA093PqU5u6cHH4ZZcdamJRRdYHz_ql45eUQYU7CX9sadFJ0fs54K3vWWg9eWrEO6wRttOBqAScH7yoMtwTbtEGRw4i1LzygZWevS_mPBxIOHbMqH2eukDE0OJr0TPm92MdHfrw_iH9xVHgtHc2oqvFdEM8Ew4V23msRvi3Tb3qDoCndI9WBc2jt3YsuCEhiB5vYMJ7WHZCMbcTp_sLAcrIB9uOZPfiEHmDzGogOHzCuNxWsW9wic_jdgV3hbZOBkKBzQLO1TadaIViFOjB-P7pAhgfciCe6Tk_ia-I")
    myHeaders.append("Accept", "application/json");
    if(!token){
        console.log('false');
    }
    fetch("http://moviesapi.ir/api/user",{
        method:'GET',
        mode:'no-cors',
        headers: myHeaders
    }).then(res => res.text())
    .then(response => console.log(response))
}
export {register,login,getMe}