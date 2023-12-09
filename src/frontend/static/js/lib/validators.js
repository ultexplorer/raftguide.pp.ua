export function isValidLong(value, len){
    return value.length >= len
}

export async function formLoginValidator(){

    const btnLogin = document.getElementById('login-btn');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    ////////////////////////////////////////////////////////////////
    btnLogin.disabled = true;
    let buttonKey = 0;
    let sw1 = true
    /////////////////////////////////////////////////////////////////
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
}

export function valdatorInputRegistration(){

    const sendRegistrationBtn = document.getElementById('send-registration');

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
}


