import { aBuildModal } from "./modal";
import {loginForm, registrationForm} from "./form";
import { isValidLong } from "./validators";
import { registrationNewUser } from "./requests";

// Вызов формы логин-регистрациии
export async function loginRegistrationHandler(event){
    event.preventDefault()
    await /*aAuthorizationHandler*/aBuildModal(loginForm.title, loginForm.html, loginForm.id, loginForm.modalClass)
    const btnLogin = document.getElementById('login-btn')
    const inputPassword = document.getElementById('password');
    inputPassword.addEventListener('input', () => {
        btnLogin.disabled = !isValidLong(inputPassword.value, 7)
    })
    btnLogin.addEventListener('click', async (event ) => {
        btnLogin.disabled = true;
        await loginHandler(event);
    });
    const btnRegistration = document.getElementById('registration')
    btnRegistration.addEventListener('click', async (event) => {
        callRegistrationFormHandler(event)
    })
}

// отправка данных формой login:  (login/password)
async function loginHandler (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(isValidLong(password, 7)){
        const data = { email, password };
        
        //console.log(data);
        document.getElementById('email').value = ''
        document.getElementById('email').className = ''
        document.getElementById('password').value = ''
        document.getElementById('password').className = ''
        // Async request to server to save question

    }
}

// Вызов формы регистрации
async function callRegistrationFormHandler (event) {
    event.preventDefault()
    await aBuildModal(registrationForm.title, registrationForm.html, registrationForm.id, registrationForm.modalClass);
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
        //sendRegistrationBtn.disabled = !isValidLong(inputYourName.value, 3)
        if(isValidLong(inputYourName.value, 3) && sw1 === true){
            buttonKey+=10;
            sw1 = false;
            console.log('buttonKey:', buttonKey)
        }
    })
    let sw2 = true;
    inputPassword.addEventListener('input', () => {
        //sendRegistrationBtn.disabled = !isValidLong(inputPassword.value, 7)
        if(isValidLong(inputPassword.value, 7) && sw2 === true){
            buttonKey+=10;
            sw2 = false;
            console.log('buttonKey:', buttonKey)
        }
    })
    inputCheckPassword.addEventListener('input', () => {
        let even = (document.getElementById('password').value === document.getElementById('check-password').value);
        if(buttonKey === 20 && even){
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
    registrationNewUser('/api/post/registration', data).then(data => data.json())
    .then(data => {
        const div = document.getElementById('test-data');
        const p = document.createElement('p');
        p.innerHTML = JSON.stringify(data)
        div.insertAdjacentElement('beforebegin', p)
    })

    //console.log(data)   

    document.getElementById('your-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('check-password').value = '';
}