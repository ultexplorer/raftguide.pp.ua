'use strict';

const storage = require('./storage.js');

const TOKEN_LENGTH = 32;
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHA = ALPHA_UPPER + ALPHA_LOWER;
const DIGIT = '0123456789';
const ALPHA_DIGIT = ALPHA + DIGIT;

const generateToken = () => {
  const base = ALPHA_DIGIT.length;
  let key = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    const index = Math.floor(Math.random() * base);
    key += ALPHA_DIGIT[index];
  }
  return key;
};

class Session extends Map {
  constructor(token) {
    super();
    this.token = token;
    this.nickname = null;
    this.role_id = null;
  }

  static start(client, nickname, role_id) {
    if (client.session) return client.session;
    const token = generateToken();
    client.token = token;
    const session = new Session(token);
    session.nickname = nickname;
    session.role_id = role_id;
    client.session = session;
    client.setCookie('token', token);
    storage.set(token, session);
    return session;
  }

  static async restore(client) {
    const { cookie } = client;
    if (!cookie) return;
    const sessionToken = cookie.token;
    if (sessionToken) {
      const session = await storage.get(sessionToken);
      if(!session){
        client.deleteCookie(sessionToken)
        return;
      }else{
        Object.setPrototypeOf(session, Session.prototype);
        client.token = sessionToken;
        client.session = session;
        return session;
      }     
    }
  }

  static delete(client) {
    const { token } = client;
    if (token) {
      client.deleteCookie('token');
      client.token = undefined;
      client.session = null;
      storage.delete(token);
    }
  }

  save() {
    storage.save(this.token);
  }
}

module.exports = Session;
