const {prepareFile, MIME_TYPES} = require("../static-modules/static-functions");
const { ReplaceText } = require("../dynimic-modules/ReplaceText")
const { blockUserMenu } = require("../blocks/blockUserMenu")

const routerStatic = async (client) => {
    const { req, res } = client
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { 'Content-Type': mimeType });
    
    let divModalBtnStyle = `style="display: none"`;
    let divModalBtnOutStyle = `style="display: none"`;    
    let userMenu = ''
        if(client.session){
            divModalBtnStyle = `style="display: none"`;
            divModalBtnOutStyle = `style="display: block"`;
            userMenu = await blockUserMenu(client);
        }else{
            divModalBtnStyle = `style="display: block"`;
            divModalBtnOutStyle = `style="display: none"`;
            userMenu = ``
        }  
        const streamModalBtn = new ReplaceText(divModalBtnStyle, /%modalBtnDivDispley%/g);
        const streamModalBtnOut = new ReplaceText(divModalBtnOutStyle, /%modalBtnDivOutDispley%/g)
        const streamUserMenu = new ReplaceText(userMenu, /%userMenu%/g)



        file.stream.pipe(streamUserMenu).pipe(streamModalBtn).pipe(streamModalBtnOut).pipe(res);

}

module.exports = { routerStatic }