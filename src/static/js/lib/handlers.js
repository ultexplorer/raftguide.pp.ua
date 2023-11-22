import { aBuildModal } from "./modal";
import {loginForm, registrationForm, emailNotRFoundForm, 
    successLoginForm, errorRegistrationForm, successRegistrationForm } from "./form";
import { isValidLong } from "./validators";
import { serverAccessUser } from "./requests";


// Вызов формы логин-регистрациии
export async function loginRegistrationHandler(event){
    event.preventDefault();

    await aBuildModal(loginForm)
    const btnLogin = document.getElementById('login-btn');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    ////////////////////////////////////////////////////////////
    
    ///////////////////////////////////////////////////////////////19
    btnLogin.disabled = true;
    let buttonKey = 0;
    let sw1 = true
    ///////////////////////////////////////////////////////////////19
    inputEmail.addEventListener('input', () => {
        if(isValidLong(inputEmail.value, 3) && sw1 === true){
            buttonKey+=1;
            sw1 = false;
            console.log('buttonKey:', buttonKey)
        }
    })
    let sw2 = true;
    inputPassword.addEventListener('input', () => {
        if(isValidLong(inputPassword.value, 7) && sw2 === true){
            buttonKey+=1;
            sw2 = false;
            console.log('buttonKey:', buttonKey)
            if(buttonKey === 2) btnLogin.disabled = false;
        }
    })
    //------------ЛОГИН LISTENER BTN--------------------------

    //---|----------|------------------|----------|--------|--
    btnLogin.addEventListener('click', async (event ) => {
        btnLogin.disabled = true;
        //console.log(inputEmail.value, inputPassword.value)
        const answer = await loginHandler(event);
        console.log(answer)
        console.log('answer:', answer)
        if(answer === 'not found'){
            await aBuildModal(emailNotRFoundForm)
            const btnRegistration = document.getElementById('registration')
            btnRegistration.addEventListener('click', async (event) => {
            await callRegistrationFormHandler(event);
          })
        }else{
            const user = answer.nickName;
            console.log('from btnLogin user:', user)
            await aBuildModal(successLoginForm, user)
        }
    });

    
////////////////////////////////////////////////////////////


    const btnRegistration = document.getElementById('registration')
    btnRegistration.addEventListener('click', async (event) => {
        await callRegistrationFormHandler(event)
    })
}


//               #                              #
// ЛОГИН HANDLER-|-------ЛОГИН HANDLER------ ---|---------ЛОГИН HANDLER--------
//               *                              *
// отправка данных формой login:  (login/password)
async function loginHandler (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
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
        // здесь от ответа с сервера надо создать функцию для дальнейших действий
        return respond
        //-----------------------------------------------------------------------

    }
}
//          ^
//----------|---------------END LOGIN-------------------------------------------

// Вызов формы регистрации
async function callRegistrationFormHandler (event) {
    event.preventDefault()
    await aBuildModal(registrationForm);

    const sendRegistrationBtn = document.getElementById('send-registration');
    sendRegistrationBtn.disabled = true;
    //Валидация
    const inputYourName = document.getElementById('your-name');
    const inputPassword = document.getElementById('password');
    const inputCheckPassword = document.getElementById('check-password');
    let buttonKey = 0;
    let sw1 = true
    sendRegistrationBtn.disabled = true;
    inputYourName.addEventListener('input', () => {
        
        if(isValidLong(inputYourName.value, 3) && sw1 === true){
            buttonKey+=1;
            sw1 = false;
            console.log('buttonKey:', buttonKey)
        }
    })
    let sw2 = true;
    inputPassword.addEventListener('input', () => {
        
        if(isValidLong(inputPassword.value, 7) && sw2 === true){
            buttonKey+=1;
            sw2 = false;
            console.log('buttonKey:', buttonKey)
        }
    })
    let sw3 = true;
    inputCheckPassword.addEventListener('input', () => {
        if(isValidLong(inputCheckPassword.value, 7) && sw3 === true){
            buttonKey+=1;
            sw3 = false;
            console.log('buttonKey:', buttonKey)
        }
    })
    inputCheckPassword.addEventListener('input', () => {
        let even = (document.getElementById('password').value === document.getElementById('check-password').value);
        if(buttonKey === 3 && even){
            sendRegistrationBtn.disabled = false;
        }
    })


    //////////////////////////////////////////////////////////////////////////////////////////////
    sendRegistrationBtn.addEventListener('click', async (event) => {
        const yourName = document.getElementById('your-name');
        //console.log(yourName)
        await sendRegistrationFormHandler(event)
        sendRegistrationBtn.disabled = true; /// !!!!!!!!!!!
    })
}

// Отправка данных формой регистрации: (your-name/email/password/check-password)
async function sendRegistrationFormHandler (event){
    event.preventDefault();
    const yourName = document.getElementById('your-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkPassword = document.getElementById('check-password').value;

    const data = { yourName, email, password, checkPassword };
    const answerFromServer = await serverAccessUser('/api/post/registration', data).then(data => data.json())
    
   console.log(answerFromServer)
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

