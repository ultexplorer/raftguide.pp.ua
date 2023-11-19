'use strict';
const { Pool } = require('pg');
import { config } from "../../../../config";

const pool = new Pool(config);

(async () => {
    const fields = ['schemaname', 'tablename', 'tableowner'].join(', ');
    const sql = `SELECT ${fields} FROM pg_tables WHERE tableowner = $1`;
    const { rows } = await pool.query(sql, ['raftguide']);
    console.table(rows);
    pool.end();
  })();