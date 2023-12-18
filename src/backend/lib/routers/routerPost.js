const Session  = require('../cookies/session')
const { post } = require('../httpMethods/post')
const { checkEmailForLogin, registrationNewUser} = require('../connection_db/sqlquery')

const  { UserAccessController }  = require('../controlers/UserAccessController')
const routerPost = async (client) => {
      const { req, res } = client;
      const { url } = req;
        if(url === '/api/post/registration'){
            const respond = await UserAccessController.registration(client);
            res.end(respond);
        }
     
      if(url === '/api/post/login'){
           const respond = await UserAccessController.login(client);
          res.end(respond);
      }


      if(url === '/api/post/logout'){
          const respond = await UserAccessController.logout(client);
          return res.end(respond);
      }
}

module.exports = { routerPost };