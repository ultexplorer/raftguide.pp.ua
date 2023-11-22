const { post, formStringToObject } = require('../httpMethods')

const Session = require("../cookies/session");
const {checkEmailForLogin, registrationNewUser} = require("../connection_db/sqlquery");



const routerPost = async (client) => {
    const { req, res } = client;
    const { url, method } = req;
    if(url === '/registration' && method === 'POST'){
        const string = await post(req, res);
        const o = await formStringToObject(string);
        const json = JSON.stringify(o);
        console.log('routerPost')
        Session.start(client);
        console.log(o)

        client.setCookie(o.username, o.userpassword)
        client.sendCookie();
        //res.writeHead(statusCode, obj)
        res.writeHead(client.objectHeaders.objectStatusCode, client.objectHeaders.obj);
        res.end('You have been registered!')
    }
    if(url === '/api/post/registration' && method === 'POST'){
        const stringData = await post(req, res);
        
        const obj = JSON.parse(stringData);

        ///Вызываю функцию обращения к базе данных:

        const respond = await registrationNewUser(obj);
        console.log(respond)
        res.end(JSON.stringify(respond))
    }
    if(url === '/api/post/login' && method === 'POST'){
        let stringData = await post(req, res);
        const obj = JSON.parse(stringData);

        ///Вызываю функцию обращения к базе данных:
       
        const respond = await checkEmailForLogin(obj)

        /// Возвращаю ответ на frontend

        res.end(JSON.stringify(respond))
    }
}

module.exports = routerPost