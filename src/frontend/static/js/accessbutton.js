import { aBuildModal } from './lib/modal.js'
import {  loginForm, registrationForm,  emailNotFoundForm, successLoginForm,
    errorRegistrationForm, successRegistrationForm, errorLoginFormWrongPassword,
    logOutForm } from './lib/form.js';
import {formLoginValidator, isValidLong, valdatorInputRegistration} from "./lib/validators.js";

import {requestToServer} from "./lib/requests.js";
import {addUserMenu} from "./profile.js";

const currentPathname = window.location.pathname

/////----------------------------logout----------------------------------

const modalBtnOut = document.getElementById('modal-btn-out');
if(modalBtnOut){
    const modalBtnOutForUsers = document.getElementById('modal-btn-out-for-users');

    modalBtnOut.addEventListener('click', async (event) => {
        event.preventDefault();
        await requestToServer('/api/post/logout', {})
        await aBuildModal(logOutForm)
        setTimeout(function(){
            location=currentPathname;
        }, 1000);
    })
}




/////////------------------------end logout------------------------------

/////////-----кнопка входа-----------/////////////////////////////
export async function setModalBtn(){
    //const submitBtn = document.getElementById('submitBtn');
    const modalBtn = document.getElementById('modal-btn');

    modalBtn.addEventListener('click', async () => {
        //await aBuildModal(testForm, setModalHtmlSuccessLogin(userName));
        await aBuildModal(loginForm)
        await setLoginBtn() // если неверно, то...

        await setRegistrationBtn()

    })
}
////----------/кнопка входа-----------/////////////////////////////

///-----------кнопка войти-----------------------------------------//
export async function setLoginBtn(){
    const btnLogin = document.getElementById('login-btn')

    btnLogin.addEventListener('click', async () => {
        console.log('Hello from btnLogin')
        await loginHandler()
    })

}
///-----------/кнопка войти-----------------------------------------//

///----------кнопка регистрация-------------------------------------//
async function setRegistrationBtn(timer=null){
    const registrationBtn = document.getElementById('registration');

    registrationBtn.addEventListener('click', async () => {
        console.log('Hello from registrationBtn')
        if(timer){
            clearTimeout(timer)
        }
        await aBuildModal(registrationForm);
        //надо  sendRegistrationForm()
        await setSendRegistrationBtn();
    })
}
///----------/кнопка регистрация-------------------------------------//

///----------кнопка зарагестрироваться---------------------------------//
async function setSendRegistrationBtn(){
    const sendRegistrationBtn = document.getElementById('send-registration');
    valdatorInputRegistration();
    sendRegistrationBtn.addEventListener('click', async () => {
        console.log('hello from sendRegistrationBtn')

        await sendRegistrationFormHandler ()
    })
}
///----------/кнопка зарагестрироваться---------------------------------//

async function loginHandler(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const answerFromServer = await requestToServer('/api/post/login', { email, password })

    console.log('49 accessbutton:',answerFromServer)
    if(answerFromServer === 'wrong user data'){
        console.log('51 WRONG USER DATA EMAIL')
        await aBuildModal(emailNotFoundForm);
        ///////////////////////////////////////////////////////////////////
        const registrationBtn = document.getElementById('registration')
        registrationBtn.addEventListener('click', async ()=>{
            clearTimeout(timer)
            await aBuildModal(registrationForm);
            /////////////////////////////////////////////////////
            await setSendRegistrationBtn();
            ////////////////////////////////////////////////////////
        })
        await setRegistrationBtn()
        const timer = setTimeout(function(){
            location=currentPathname;
        }, 2000)
    }

    else if(answerFromServer === 'wrong password'){
        await aBuildModal(errorLoginFormWrongPassword)
        setTimeout(function(){
            location=currentPathname;
        }, 1000);
    }
    else{
        const nickname = answerFromServer.nickname;
        await aBuildModal(successLoginForm, nickname)
        setTimeout(async function(){
            location=currentPathname;
        }, 1000);
    }
}

export async function sendRegistrationFormHandler (){

    const yourName = document.getElementById('your-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkPassword = document.getElementById('check-password').value;

    const data = { yourName, email, password, checkPassword };

    const answerFromServer = await requestToServer('/api/post/registration', data)

    const errors = answerFromServer.error;

    if(errors){
        const keys = Object.keys(errors);
        const errorType = {
            uniqueEmail: 'такой email уже существует.',
            uniqueNickname: 'такой nickname уже существует.'
        }
        const errorMessage = errorType[keys[0]]
        await aBuildModal(errorRegistrationForm, '', errorMessage)
    }else {
        const user = answerFromServer.yourName;
        await aBuildModal(successRegistrationForm, user);
        setTimeout(function(){
            location=currentPathname;
        }, 1000)
    }
}

//---------------userBtn-from blocks-------------------------------------------//
 async function setUserMenu(){
 
 }


//---------------//userBtn-from blocks-------------------------------------------//

//-------------------------/handlers--------------------------------------------//

(async ()=>{
    await setModalBtn();
})()


