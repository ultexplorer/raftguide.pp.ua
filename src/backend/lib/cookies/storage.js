'use strict';
const { promisify } = require('../utils/promisify')
const fs = require('node:fs');
const path = require('node:path');
const v8 = require('node:v8');
const PATH = `${__dirname}/sessions`;

const safePath = fn => (token, ...args) => {
    if(typeof token !== 'string'){
        throw new Error('wrong token')
    }
    const fileName = path.join(PATH, token);
    if(!fileName.startsWith(PATH)){
        throw new Error('wrong token path')
    }
    return fn(fileName, ...args)
}

const readSession = safePath((filename) => promisify(fs.readFile)(filename, 'utf8'))
const writeSession = safePath(promisify(fs.writeFile))
const deleteSession = safePath(promisify(fs.unlink))

class Storage extends Map {
   async get(key){
       let session = super.get(key);
       if(session) return session;
       else{
           try{
               const data = await readSession(key);
               session = v8.deserialize(data);
               super.set(key, session);
               return session;
           }catch (err){
               console.log(`Ошибка в readSession(key) ${err.name}:${err.message} \n ${err.stack}`)
           }
       }
   };

   async save(key){
       const session = super.get(key);
       if(session){
           try{
               const data = v8.serialize(session);
               await writeSession(key, data);
           }catch(err){
               console.log(`Ошибка в writeSession(key) ${err.name}:${err.message} \n ${err.stack}`)
           }
       }
   }

   delete(key){
       deleteSession(key);
   }

}

module.exports = new Storage();
