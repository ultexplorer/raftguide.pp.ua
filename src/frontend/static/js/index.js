import { pCreateModal, aBuildModal } from './lib/modal.js'
import {  loginForm, registrationForm,  emailNotFoundForm, successLoginForm, 
    errorRegistrationForm, successRegistrationForm, errorLoginFormWrongPassword,
logOutForm } from './lib/form.js';
import { formLoginValidator, isValidLong, valdatorInputRegistration } from './lib/validators.js';
import { serverAccessUser, requestToServer } from './lib/requests.js';
import { hide } from './hide.js';

const currentPathname = window.location.pathname

/////----------------------------logout----------------------------------

const modalBtnOut = document.getElementById('modal-btn-out');

modalBtnOut.addEventListener('click', async (event) => {
    event.preventDefault();
    const logout = await requestToServer('/api/post/logout', {})
    //console.log('logout:', logout)
    await aBuildModal(logOutForm)
    setTimeout(function(){       
        location=currentPathname;
        }, 1000);
})

/////////------------------------end logout------------------------------

const modalBtn = document.getElementById('modal-btn');

    modalBtn.addEventListener('click', async (event) => {
        await loginRegistrationHandler(event)
    })

async function loginRegistrationHandler(event){
    //event.preventDefault();
    await aBuildModal(loginForm)
    await formLoginValidator(); // надо пересмотреть валидатор

    const btnLogin = document.getElementById('login-btn');

    btnLogin.addEventListener('click', async (event ) => { 
        await loginHandler(event);
    });
    
////////////////Вызов формы регистрации:::::::::::::::::::::::
    const btnRegistration = document.getElementById('registration');
    btnRegistration.addEventListener('click', async (event) => {
        console.log('28 index callRegistrationFormHandler');
        await callRegistrationFormHandler(event)
        /// Определение кнопки для отправки данных регистрации:
        const sendRegistrationBtn = document.getElementById('send-registration');
        /////////////////////////////////////////////////////////////////////////
        /// Валидация
        //valdatorInputRegistration();

        /////////////////////////////////////////////////////////////////////////
        ///// Отправка данных формы регистрации:
        ///////////////////////////////////////////////////////////////////////////

        sendRegistrationBtn.addEventListener('click',  async (event) => {
            event.preventDefault();
            const yourName = document.getElementById('your-name');
            await sendRegistrationFormHandler(event)
            //sendRegistrationBtn.disabled = true; /// !!!!!!!!!!!
            console.log('44 index hello from hanler of sendRegistrationBtn');


            
            setTimeout(function(){       
                location=currentPathname;
                }, 1000);
        })
    });///


}


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////// Вынесенные обработчики
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

/// Обработчик для отображения формы регистрации:


////////////////////////////////////////////////////////////////
//               #                              #
// ЛОГИН HANDLER-|-------ЛОГИН HANDLER------ ---|---------ЛОГИН HANDLER--------
//               *                              *
// отправка данных формой login на СЕРВЕР:  (login/password)
// Ответ - respond

export async function loginHandler (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    //изменения 9.12.
    /*
    if(isValidLong(password, 7)){
        const data = { email, password };
        
        console.log(data);

        document.getElementById('email').value = ''
        document.getElementById('email').className = ''
        document.getElementById('password').value = ''
        document.getElementById('password').className = ''
        // Async request to server to save question
        const answerFromServer = await serverAccessUser('/api/post/login', data);
        ///////////////////////получил ответ с сервера
        const respond = await answerFromServer.json();
        console.log('respond from loginHandler:', respond)
        /////////////////////////////////////////////////////////////////////////
//!!!   

        
      
        // здесь от ответа с сервера надо создать функцию для дальнейших действий
        return respond
        //-----------------------------------------------------------------------

    }

   console.log('106 index email, password:', email, password )
   //const answerFromServer = await serverAccessUser('/api/post/login', { email, password })

   /*
   const answerFromServer = await fetch('api/post/login', {
    method: "POST", // или 'PUT'
        body: JSON.stringify({ email, password }), // данные могут быть 'строкой' или {объектом}!
        headers: {
            "Content-Type": "application/json",
        },
   })*/

   //const readyAnswerFromServer = await answerFromServer.json();
   const answerFromServer = await requestToServer('/api/post/login', { email, password })
   console.log('129 answerFromServer:', answerFromServer);  
   
   if(answerFromServer === 'wrong user data'){
        await aBuildModal(emailNotFoundForm)
        setTimeout(function(){
            location=currentPathname;
            }, 3000);
   }else{
        const nickname = answerFromServer.nickname;
        console.log('127 index nickname:', nickname)
        await aBuildModal(successLoginForm, nickname)
        setTimeout(function(){       
            location=currentPathname;
            }, 1000);

   }
}




///////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//          ^
//----------|---------------END LOGIN-------------------------------------------
/////////////////////////////////////

async function callRegistrationFormHandler (event) {
    event.preventDefault()
    await aBuildModal(registrationForm);
}




////////////////////////////////////////////////////////////////////////////////
///// Handler отправки формы регистрации
/////////////////////////////////////////////////////////////////////////////////
// Отправка данных формой регистрации: (your-name/email/password/check-password)
async function sendRegistrationFormHandler (event){
    event.preventDefault();
    const yourName = document.getElementById('your-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkPassword = document.getElementById('check-password').value;

    const data = { yourName, email, password, checkPassword };
    console.log(data);
    
    
    const answerFromServer = await requestToServer('/api/post/registration', data)

    console.log('169 index answerFromServer', answerFromServer)
    
    const errors = answerFromServer.error;

    
    
    if(errors){
        const keys = Object.keys(errors);
        const errorType = {
            uniqueEmail: 'такой email уже существует.',
            uniqueNickname: 'такой nickname уже существует.'
        }
        const errorMessage = errorType[keys[0]]
        console.log(errorMessage)
        await aBuildModal(errorRegistrationForm, '', errorMessage)
   }else {
      const user = answerFromServer.yourName;
      await aBuildModal(successRegistrationForm, user)
   }

    }


