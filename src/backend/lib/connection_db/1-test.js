const { Pool } = require('pg');
const { config } = require('../../../../config')

const pool = new Pool(config);

const fields = ['schemaname', 'tablename', 'tableowner'].join(',');
const sql = `SELECT ${fields} FROM pg_tables WHERE tableowner = $1`;

pool.query(sql, ['raftguide'], (err, res) => {
    if(err){
        throw err;
    }
    console.dir({ res });
    console.table(res.fields);
    console.table(res.rows);
    pool.end();
})
