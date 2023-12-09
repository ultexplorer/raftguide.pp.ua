const Session  = require('../cookies/session')
const { post } = require('../httpMethods/post')
const { loginQuery, checkEmailForLogin, registrationNewUser} = require('../connection_db/sqlquery')

const routerPost = async (client) => {
      const { req, res } = client;
      const { url, method } = req;
      //////////////////////////////////////////////////////////////////////////////////
        if(url === '/api/post/registration'){
            const stringData = await post(req, res);

            const obj = JSON.parse(stringData);

            ///Вызываю функцию обращения к базе данных:
            //!!!
            //const respond = await registrationNewUser(obj);
            //console.log(respond)
            //res.end(JSON.stringify(respond))
            //!!!!!
            console.log('20 routerPost obj', obj)
            // Здесь надо сделать вопрос в базу 
            const respond = await registrationNewUser(obj);
            const error = Object.keys(respond).filter(item => item === 'error')
            console.log('24 routerPost error:', error)
            console.log('25 routerPost error[0]:', error[0])
            if(!error[0]){
              console.log('27 routerPost no error')
              const session = await Session.start(client, obj.yourName, role_id=2);
              client.sendCookie();
              res.end(JSON.stringify(respond));
            }
            
            else {
              console.log('32 routerPost ERROR')
              res.end(JSON.stringify(respond));
            }
        }
      //////////////////////////////////////////////////////////////////////////////////
      if(url === '/api/post/login'){
          const postReqFromLogin = await post(req, res)
          console.log('9 routerPost postReqFromLogin', postReqFromLogin);
          const obj = JSON.parse(postReqFromLogin);
          
          
          
          //-необходимо обратиться к базе данных и вытащить nickname
          const userData = await checkEmailForLogin(obj)
          console.log('17 routerPost:',userData)
          console.log('18 nickname:',userData.nickname)
          const nickname = userData.nickname;
          ///////////////////////////////////////////////
          if(userData === 'not found'){
            return res.end(JSON.stringify('wrong user data'))
          }else{
            const { nickname, role_id } = userData;
          
            const session = await Session.start(client, nickname, role_id);
            console.log('19 routerPost session:', session)
            client.sendCookie();
            //res.end(JSON.stringify({nickname}));
            res.end(JSON.stringify({ nickname, modalBtnStyle: 'shouldHide'}))
            return; 
          }
          
         
      }
      if(url === '/api/post/logout'){
          await Session.delete(client);
          console.log('14 routerPost Session.delete');
          client.sendCookie();
          res.end(JSON.stringify({answer:'14 routerPost Session.delete'}));
          return;
      }
}

module.exports = { routerPost };