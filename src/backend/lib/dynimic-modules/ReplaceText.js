const { Transform } = require('stream')

class ReplaceText extends Transform {
    constructor(char, regEx) {
        super();
        this.replaceChar = char;
        this.regEx = regEx;
    }

    _transform(chunk, encoding, callback) {
        //super._transform(chunk, encoding, callback);
        const transformChunk = chunk.toString().replace(this.regEx, this.replaceChar);
        this.push(transformChunk);
        callback();
    }

    _flush(callback){
        this.push('')
        callback();
    }
}

module.exports = { ReplaceText }

