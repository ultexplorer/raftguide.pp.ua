
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
    'modalRegistration')

export { loginForm, registrationForm }