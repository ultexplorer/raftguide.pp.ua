class Form {
    constructor(title, id, html, modalClass) {
        this.title = title;
        this.id = id;
        this.html = html;
        this.modalClass = modalClass;
    }
}

const loginForm = new Form(
    'Авторизация',
    'auth-form',
    `<form class="mui-form" id="auth-form">
                    
                    <div class="mui-textfield mui-textfield--float-label">
                         <input type="email" id="email" required >
                         <label for="email">Email</label>
                    </div>
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="password" id="password" required  minlength="7" maxlength="256">
                    <label for="password">Пароль</label>
                    </div>
                    <button 
                        id="login-btn"
                        type="button"
                        class="mui-btn mui-btn--raised mui-btn--primary"
           
                        >Войти</button>
                    <button 
                        id="registration"
                        type="button"
                        class="mui-btn mui-btn--raised mui-btn--primary float-right"
                        
                        >Регистрация</button>
                        
              </form>`,
    'modal'
)

const registrationForm = new Form('Регистрация',
    'reg-form',
    `<form class="mui-form" id="reg-form">
                    <div class="mui-textfield mui-textfield--float-label">
                         <input type="text" id="your-name" required >
                         <label for="your-name">Ваше имя</label>
                    </div>
                    <div class="mui-textfield mui-textfield--float-label">
                         <input type="email" id="email" required >
                         <label for="email">Email</label>
                    </div>
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="password" id="password" required >
                    <label for="password">Пароль</label>
                    </div>
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="password" id="check-password" required >
                    <label for="check-password">Пароль еще раз...</label>
                    </div>
                    <button 
                        id="send-registration"
                        type="submit"
                        class="mui-btn mui-btn--raised mui-btn--primary"
            
                        >Зарегестрироваться</button>
                        
              </form>`,
    'modalRegistration');

    const emailNotFoundForm = new Form(
        `<div class="loader"></div> Email не найден`,
        "form-no-email",
        `<div><div class="float-left"><h2>Зарегестрируйтесь!</h2></div>
        <div class="float-right">
        <form class="mui-form" id="reg-form">
        
        <button 
                        id="registration"
                        type="button"
                        class="mui-btn mui-btn--raised mui-btn--primary "
                        
                        >Регистрация</button>
                        
        </form>
        
        </div>   
        </div>
         
        `,
        'modal'
    )

   
    const successLoginForm = new Form(
        `<div class="loader"></div>Приветствую!`,
        "form-success-login",
        `<div id="form-success-login">
        <p>Вы зашли на сайт под именем </p>
        </div>`,
        'modal',
    )

    const successRegistrationForm = new Form(
        `<div class="loader"></div>Поздравляю!`,
        "form-success-login",
        `<div id="form-success-login">
        <p>Вы зарегестрировались на сайте под именем </p>
        </div>`,
        'modal',
    )

    const errorRegistrationForm = new Form(
        "Ошибка при регистрации:",
        "form-reg-error",
        ``,
        'modal'
    )

    const errorLoginFormWrongPassword = new Form(
        `<div class="loader"></div>Неверный пароль!`,
        "form-reg-error",
        ``,
        'modal'
    )

    const logOutForm = new Form(
        `<div class="loader"></div>Вы вышли из системы.`,
        "form-reg-error",
        ``,
        'modal'
    )


export { loginForm, registrationForm,  emailNotFoundForm, successLoginForm, errorRegistrationForm, 
    successRegistrationForm, errorLoginFormWrongPassword, logOutForm }