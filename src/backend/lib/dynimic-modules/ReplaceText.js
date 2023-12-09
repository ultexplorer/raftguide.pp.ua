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

//const xStream = new ReplaceText('x', /[a-z]|[A-Z]|[0-9]/g);
//const xS = new ReplaceText('привет', /hello/g)
//const xxS = new ReplaceText('мир', /world/g)

//process.stdin.pipe(xStream).pipe(process.stdout);
//process.stdin.pipe(xS).pipe(process.stdout);

//process.stdin.pipe(xS).pipe(xxS).pipe(process.stdout)

module.exports = { ReplaceText }

