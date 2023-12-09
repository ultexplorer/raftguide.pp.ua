const path = require('path');
const fs = require('fs');
const { ReplaceText } = require('./ReplaceText')
const templatesPath = path.join(process.cwd(),'./src/frontend/templates');
const { userExistCheck } = require('../connection_db/sqlquery')


async function serveUser(client){
    const { req, res } = client;
    //-------------------------------------------------------------
    const user = req.url.substring(7)
    console.log('user:', user)
    // написать функцию валидации на длину
    // обращение в базу данных
    const answerFromBase = await userExistCheck(user);
    console.log('answerFromBase:',answerFromBase)
    let streamPath = null;
    if(answerFromBase.length){
        const { id, nickname, email, role_id, role_name } = answerFromBase[0];
        const userNickname = new ReplaceText(nickname, /%nickname%/g);
        const userId = new ReplaceText(id, /%id%/g);
        const userEmail = new ReplaceText(email, /%email%/g);
        //const userRole = new ReplaceText(role_id, /%role_id%/g);
        const userRoleName = new ReplaceText(role_name, /%role_name%/g);
        streamPath = path.join(templatesPath, 'users-template.html');
        const userStream = fs.createReadStream(streamPath)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        return userStream.pipe(userNickname).pipe(userId).pipe(userRoleName).pipe(userEmail).pipe(res);
    }else{
        streamPath = path.join(templatesPath, 'users-404.html');
        const userStream404 = fs.createReadStream(streamPath)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        return userStream404.pipe(res);
    }
    //-------------------------------------------------------------

}

module.exports = { serveUser }