import { aBuildModal } from './lib/modal.js'
import {  loginForm, registrationForm,  emailNotFoundForm, successLoginForm, 
    errorRegistrationForm, successRegistrationForm, errorLoginFormWrongPassword,
logOutForm } from './lib/form.js';
import { formLoginValidator, valdatorInputRegistration } from './lib/validators.js';
import { requestToServer } from './lib/requests.js';


const currentPathname = window.location.pathname

/////----------------------------logout----------------------------------

const modalBtnOut = document.getElementById('modal-btn-out');

modalBtnOut.addEventListener('click', async (event) => {
    event.preventDefault();
    await requestToServer('/api/post/logout', {})    
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

    await aBuildModal(loginForm)
    await formLoginValidator(); 

    const btnLogin = document.getElementById('login-btn');

    btnLogin.addEventListener('click', async (event ) => {
        btnLogin.disabled = true;
        const answer = await loginHandler(event);
        
    });
    
    ///////////////////////////////////////////////////
    /*
    const btnRegistration = document.getElementById('registration');
    btnRegistration.addEventListener('click', async (event) => {
       
        await callRegistrationFormHandler(event)
      
        const sendRegistrationBtn = document.getElementById('send-registration');
        
        valdatorInputRegistration();

        sendRegistrationBtn.addEventListener('click',  async (event) => {
            event.preventDefault();
            //const yourName = document.getElementById('your-name');
            await sendRegistrationFormHandler(event)
            
            setTimeout(function(){       
                location=currentPathname;
                }, 1000);
        })
    }
    */
   ///////////////////////////////////////////////////////////////////////// 
   async function setBtnRegistration(){
    const btnRegistration = document.getElementById('registration');
    btnRegistration.addEventListener('click', async (event) => {
       
        await callRegistrationFormHandler(event)
      
        const sendRegistrationBtn = document.getElementById('send-registration');
        
        valdatorInputRegistration();

        sendRegistrationBtn.addEventListener('click',  async (event) => {
            event.preventDefault();
            //const yourName = document.getElementById('your-name');
            await sendRegistrationFormHandler(event)
            
            setTimeout(function(){       
                location=currentPathname;
                }, 1000);
        })
    })
   }
   //////////////////////////////////////////////////////////////////////////
   await setBtnRegistration();
   /////////////////////////////////////////////////////////////////////////
}

export async function loginHandler (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
   const answerFromServer = await requestToServer('/api/post/login', { email, password })

   if(answerFromServer === 'wrong user data'){
        await aBuildModal(emailNotFoundForm)
        const btnRegistration = document.getElementById('registration');
        btnRegistration.addEventListener('click', async function(event) {
            event.preventDefault()
            clearTimeout(timerBtnRegistration);
            await callRegistrationFormHandler(event);
            ///////////////////////////////////////////////////////////////////
                       
            /////////////////////////////////////////////////////////////////////
        })
        const timerBtnRegistration = setTimeout(() => {
            location=currentPathname;
        }, 3000)       
        
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
        setTimeout(function(){       
            location=currentPathname;
            }, 1000);
   }
}

async function callRegistrationFormHandler (event) {
    event.preventDefault()
    await aBuildModal(registrationForm);
}


async function sendRegistrationFormHandler (event){
    event.preventDefault();
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
      await aBuildModal(successRegistrationForm, user)
   }
}


