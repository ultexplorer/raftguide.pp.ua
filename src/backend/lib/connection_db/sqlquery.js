'use strict';
const { config } = require('../../../../config')
const { Pool } = require('pg');
const sha1 = require('js-sha1');

const pool = new Pool(config);

async function checkEmailForLogin(obj){
    const email = obj.email;
    const sql = `SELECT * FROM users WHERE email=$1`;
    const { rows } = await pool.query(sql, [email]);
    //pool.end();
    if(rows.length === 0){
        return 'not found';
    }else{
        const answer = await checkPassword(obj, rows);
        console.log(answer);
        console.log('rows:', rows)
        //return await checkPassword(obj, rows );
        return answer;
    }
}

async function checkPassword(obj, rows){
    const password = obj.password;
    const passwordHashFromDb = rows[0].password;
    const passwordHash = sha1(password);
    if(passwordHash === passwordHashFromDb){
        const nickName = rows[0].nickname;
        return { passwordHash, passwordHashFromDb, nickName };
    }else{
        return 'wrong password'
    }
}

async function registrationNewUser(obj){
    const nickName = obj.yourName;
    const email = obj.email;
    const passwordFromFront = obj.password;
    const checkPasswordFromFront = obj.checkPassword;
    //console.dir( { nickName, email, passwordFromFront } );
    const uniqueEmail = await checkUnique('users', 'email', email);
    const uniqueNickname = await checkUnique('users', 'nickname', nickName);
    const passwordLegth = (passwordFromFront.length >= 7);
    const even = (passwordFromFront === checkPasswordFromFront);
    const passwordHash = sha1(passwordFromFront);
    
    if(uniqueEmail){
        if(uniqueNickname){
            if(passwordLegth){
                if(even){
                    //Тут необходимо зделать запрос в базу для регистрации нового клиента
                    await insertUser(nickName, email, passwordHash)
                    return obj;
                }else{
                    return { error: { even }}
                }
            }else{
                return { error: {passwordLegth} }
            }
        }else{
            return { error: {uniqueNickname} }
        }
    }else{
        return { error: {uniqueEmail} }
    }    
}

async function checkUnique(table, col, value){
    const sql = `SELECT COUNT(*) FROM ${table} WHERE ${col}=$1`;
    const { rows } = await pool.query(sql, [value]);
    const count = +rows[0].count;   
    return !!!count;
}

async function insertUser(nickName, email, password, role_id = 2){
    const hashPassword = sha1(password);
    const sql = `INSERT INTO users("nickname", "email", "password", "role_id") VALUES ($1, $2, $3, $4);`;
    await pool.query(sql,[nickName, email, password, role_id])
    return 'ok'
}


module.exports = { checkEmailForLogin, registrationNewUser }

