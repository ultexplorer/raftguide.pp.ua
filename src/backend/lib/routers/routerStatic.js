const {prepareFile, MIME_TYPES} = require("../static-modules/static-functions");
const { ReplaceText } = require("../dynimic-modules/ReplaceText")

const routerStatic = async (client) => {
    const { req, res } = client
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { 'Content-Type': mimeType });
    //console.log('9 routerStatic client.session:',client.session)
    let divModalBtnStyle = `style="display: none"`;
    let divModalBtnOutStyle = `style="display: none"`;    
        console.log('11 routerStatcic client.session', client.session)
        if(client.session){
            divModalBtnStyle = `style="display: none"`;
            divModalBtnOutStyle = `style="display: block"`; 
        }else{
            divModalBtnStyle = `style="display: block"`;
            divModalBtnOutStyle = `style="display: none"`; 
        }  
        const streamModalBtn = new ReplaceText(divModalBtnStyle, /%modalBtnDivDispley%/g);
        const streamModalBtnOut = new ReplaceText(divModalBtnOutStyle, /%modalBtnDivOutDispley%/g)
        file.stream.pipe(streamModalBtn).pipe(streamModalBtnOut).pipe(res);
        
    
   
    console.log(`${req.method} ${req.url} ${statusCode}`);
}

module.exports = { routerStatic }