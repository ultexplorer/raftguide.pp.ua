import {requestToServer} from "./lib/requests.js";
import {aBuildModal} from "./lib/modal.js";
import {logOutForm} from "./lib/form.js";

const btnLogout = document.getElementById('logout');

    btnLogout.addEventListener('click', async () => {
        console.log('logout!')

        await requestToServer('/api/post/logout', {})
        await aBuildModal(logOutForm)
        setTimeout(function(){
            window.location.replace('/')
        }, 1000);
    })

