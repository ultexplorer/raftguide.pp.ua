const {routerStatic} = require("./routerStatic");
const {routerPost} = require("./routerPost");

const router = async (client) => {
    const { req, res } = client;
    const { url, method } = req;
    if(url === '/api/post/login' || url === '/api/post/logout' || url === '/api/post/registration'){
        await routerPost(client);
    }else{
        await routerStatic(client);
    }
}

module.exports = { router };