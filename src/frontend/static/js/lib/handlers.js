

export async function loginTry(event ){
    const btnLogin = document.getElementById('login-btn');
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
}

/////////////////////////////////////

