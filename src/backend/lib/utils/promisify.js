const fs = require('fs');
const path = require('path');
const PATH = path.resolve(__dirname, 'sessions')

const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
    args.push((err, data) => {
        if(err) reject(err)
        else resolve(data);
    })
    fn(...args)
})

module.exports = { promisify }