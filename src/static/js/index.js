import '../styles/styles.css'
import { loginRegistrationHandler } from "./lib/handlers"


const form = document.getElementById('form');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');
const modalBtn = document.getElementById('modal-btn');

//submitBtn.addEventListener('click', loginRegistrationHandler)


(async ()=> {
    modalBtn.addEventListener('click', loginRegistrationHandler);
})()