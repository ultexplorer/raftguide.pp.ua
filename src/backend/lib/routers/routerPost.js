const Session  = require('../cookies/session')
const { post } = require('../httpMethods/post')
const { checkEmailForLogin, registrationNewUser} = require('../connection_db/sqlquery')

const routerPost = async (client) => {
      const { req, res } = client;
      const { url } = req;
     
        if(url === '/api/post/registration'){
            const stringData = await post(req, res);
            const obj = JSON.parse(stringData);
            const respond = await registrationNewUser(obj);
            const error = Object.keys(respond).filter(item => item === 'error')
            
            if(!error[0]){
              const session = await Session.start(client, obj.yourName, role_id=2);
              client.sendCookie();
              res.end(JSON.stringify(respond));
            }            
            else {
              res.end(JSON.stringify(respond));
            }
        }
     
      if(url === '/api/post/login'){

          const postReqFromLogin = await post(req, res)
          const obj = JSON.parse(postReqFromLogin);
          const userData = await checkEmailForLogin(obj)
          const nickname = userData.nickname;
          
          if(userData === 'not found'){
            return res.end(JSON.stringify('wrong user data'))
          }
          else if(userData === 'wrong password'){
              res.end(JSON.stringify(userData));
          }
          else{
            const { nickname, role_id } = userData;          
            const session = await Session.start(client, nickname, role_id);
            client.sendCookie();
            res.end(JSON.stringify({ nickname, modalBtnStyle: 'shouldHide'}))
            return; 
          }
          
         
      }
      if(url === '/api/post/logout'){
          await Session.delete(client);
          client.sendCookie();
          res.end(JSON.stringify({answer:'14 routerPost Session.delete'}));
          return;
      }
}

module.exports = { routerPost };