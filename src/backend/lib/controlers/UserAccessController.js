const {post} = require("../httpMethods/post");
const {registrationNewUser, checkEmailForLogin} = require("../connection_db/sqlquery");
const Session = require("../cookies/session");

class UserAccessController {
    static async registration(client){
        const { req, res } = client;
        const stringData = await post(req, res);
        const obj = JSON.parse(stringData);
        const respond = await registrationNewUser(obj);
        const error = Object.keys(respond).filter(item => item === 'error');
        if(!error[0]){
            const session = await Session.start(client, obj.yourName /*, role_id=2*/);
            client.sendCookie();
        }
        return JSON.stringify(respond)
    }

    static async login(client){
        const {req, res } = client;
        const postReqFromLogin = await post(req, res)
        const obj = JSON.parse(postReqFromLogin);
        const userData = await checkEmailForLogin(obj)
        const nickname = userData.nickname;

        if(userData === 'not found'){
            //return res.end(JSON.stringify('wrong user data'))
            return 'wrong user data'
        }
        else if(userData === 'wrong password'){
            //res.end(JSON.stringify(userData));
            return JSON.stringify(userData)
        }
        else{
            const { nickname, role_id } = userData;
            const session = await Session.start(client, nickname, role_id);
            client.sendCookie();
            return JSON.stringify({ nickname, modalBtnStyle: 'shouldHide'})
        }
    }

    static async logout(client){
        await Session.delete(client);
        client.sendCookie();
        return JSON.stringify({answer:'14 routerPost Session.delete'});
    }
}

module.exports = { UserAccessController }