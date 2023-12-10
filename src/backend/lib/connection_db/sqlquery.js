'use strict';
const { config } = require('../../../../config')
const { Pool } = require('pg');
const sha1 = require('js-sha1');

const pool = new Pool(config);


async function checkEmailForLogin(obj){
    const email = obj.email;
    const sql = `SELECT * FROM users WHERE email=$1`;
    const { rows } = await pool.query(sql, [email]);
    if(rows.length === 0){
        return 'not found';
    }else{
        const answer = await checkPassword(obj, rows);
        return answer;
    }
}

async function loginQuery(obj){
    const { email, password } = obj;
    const sql = `SELECT * FROM users WHERE email=$1`;
    const { rows } = await pool.query(sql, [email]);

    if(rows.length === 0){
        return 'not found';
    }else{        
        return rows;
    }
}



async function checkPassword(obj, rows){
    const password = obj.password;
    const passwordHashFromDb = rows[0].password;
    const passwordHash = sha1(password);
    if(passwordHash === passwordHashFromDb){
        const nickname = rows[0].nickname;
        const role_id = rows[0].role_id;
        return {  nickname, role_id };
    }else{
        return 'wrong password'
    }
}

async function registrationNewUser(obj){
    const nickName = obj.yourName;
    const email = obj.email;
    const passwordFromFront = obj.password;
    const checkPasswordFromFront = obj.checkPassword;
   
    const uniqueEmail = await checkUnique('users', 'email', email);
    const uniqueNickname = await checkUnique('users', 'nickname', nickName);
    const passwordLegth = (passwordFromFront.length >= 7);
    const even = (passwordFromFront === checkPasswordFromFront);
    const passwordHash = sha1(passwordFromFront);
    
    if(uniqueEmail){
        if(uniqueNickname){
            if(passwordLegth){
                if(even){
                    //Тут необходимо cделать запрос в базу для регистрации нового клиента
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

//////////////////////////////////////Функции для страниц users

async function userExistCheck(user){
    //const sql = `SELECT * FROM users WHERE nickname=$1;`
    const sql2 = `SELECT u.*, r.role_name FROM users u INNER JOIN roles r on u.role_id=r.id AND u.nickname=$1;`
    const { rows } = await pool.query(sql2,[user]);
    return rows;
}


module.exports = { checkEmailForLogin, registrationNewUser, userExistCheck, loginQuery }
