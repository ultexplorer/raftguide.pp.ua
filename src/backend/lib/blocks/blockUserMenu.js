

async function blockUserMenu(client, idUserBtn){
   const block = `<br><a  href ="users/${client.session.nickname}">
   <button
              type="button"
              class="mui-btn mui-btn--raised mui-btn--primary"
              id="submitBtn"
      >Профиль</button>
   </a>`

    return block;
}


module.exports = { blockUserMenu }